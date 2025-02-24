import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { supabaseAdmin } from './supabase-admin'

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
      authorization: {
        params: {
          prompt: "select_account", // Force account selection
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 24 hours
  },
  callbacks: {
    async signIn({ user, account }) {
      try {
        if (!user?.email) return false

        // Check if user exists using admin client
        const { data: existingUser, error: fetchError } = await supabaseAdmin
          .from('users')
          .select('id')
          .eq('email', user.email)
          .single()

        if (fetchError && fetchError.code !== 'PGRST116') {
          console.error('Error fetching user:', fetchError)
          return false
        }

        if (!existingUser) {
          // Create new user using admin client
          const { data: newUser, error: createError } = await supabaseAdmin
            .from('users')
            .insert({
              email: user.email,
              name: user.name || '',
              image: user.image || '',
              provider: 'google',
              provider_id: account?.providerAccountId,
            })
            .select('id')
            .single()

          if (createError) {
            console.error('Failed to create user:', createError)
            return false
          }

          return !!newUser
        }

        return true
      } catch (error) {
        console.error('SignIn error:', error)
        return false
      }
    },
    async jwt({ token, account, profile }) {
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub ?? ''
      }
      return session
    },
  },
  pages: {
    signIn: '/login',
    error: '/login',
    signOut: '/login',
  },
  events: {
    async signOut({ session, token }) {
      // Clear any additional session data if needed
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
}
