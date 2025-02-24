'use client'

import Image from 'next/image'
import Link from 'next/link'
import { signIn, signOut } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { Suspense } from 'react'

function LoginContent() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard'
  const error = searchParams.get('error')

  const handleGoogleSignIn = async () => {
    await signIn('google', { 
      callbackUrl,
      prompt: 'select_account'
    })
  }

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' })
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col space-y-2 text-center"
      >
        <h1 className="text-2xl font-semibold tracking-tight">
          Welcome back
        </h1>
        <p className="text-sm text-gray-400">
          Sign in to your account to continue
        </p>
        {error && (
          <p className="text-sm text-red-500">
            {error === 'AccessDenied' ? 'Access denied. Please try again.' : 'An error occurred.'}
          </p>
        )}
      </motion.div>
      <motion.div 
        className="grid gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <button
          onClick={handleGoogleSignIn}
          className="relative flex h-11 items-center justify-center px-4 py-2 bg-white hover:bg-gray-50 text-black rounded-lg transition-colors group"
        >
          <div className="absolute left-4 flex h-5 w-5 items-center justify-center">
            <Image
              src="/google.svg"
              alt="Google"
              width={18}
              height={18}
              className="rounded-sm"
            />
          </div>
          <span className="text-sm font-medium">Continue with Google</span>
          <ArrowRight className="absolute right-4 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-700" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-gradient-to-br from-gray-900 via-gray-950 to-black px-2 text-gray-400">
              Or continue with
            </span>
          </div>
        </div>

        <button
          onClick={() => signIn('email', { callbackUrl })}
          className="relative flex h-11 items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-colors group"
        >
          <Mail className="absolute left-4 h-5 w-5" />
          <span className="text-sm font-medium">Sign in with Email</span>
          <ArrowRight className="absolute right-4 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
        <button
          onClick={handleSignOut}
          className="relative flex h-11 items-center justify-center px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors group"
        >
          <span className="text-sm font-medium">Sign out</span>
        </button>
      </motion.div>

      <motion.p 
        className="px-8 text-center text-sm text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="underline underline-offset-4 hover:text-white transition-colors"
        >
          Sign up
        </Link>
      </motion.p>
    </>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginContent />
    </Suspense>
  )
}
