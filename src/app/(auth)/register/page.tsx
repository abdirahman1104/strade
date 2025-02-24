'use client'

import Image from 'next/image'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'

export default function RegisterPage() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard'

  const handleGoogleSignIn = async () => {
    await signIn('google', { callbackUrl })
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
          Create your account
        </h1>
        <p className="text-sm text-gray-400">
          Join Strade and revolutionize your B2B trade
        </p>
      </motion.div>
      <motion.div 
        className="grid gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <button
          onClick={handleGoogleSignIn}
          className="relative flex items-center justify-center px-4 py-3 bg-white hover:bg-gray-50 text-black rounded-lg transition-colors group"
        >
          <Image
            src="/google.svg"
            alt="Google"
            width={20}
            height={20}
            className="absolute left-4"
          />
          <span>Sign up with Google</span>
          <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
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
          className="relative flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-colors group"
        >
          <Mail className="w-5 h-5 absolute left-4" />
          <span>Sign up with Email</span>
          <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </motion.div>

      <motion.p 
        className="px-8 text-center text-sm text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Already have an account?{" "}
        <Link
          href="/login"
          className="underline underline-offset-4 hover:text-white transition-colors"
        >
          Sign in
        </Link>
      </motion.p>
    </>
  )
}
