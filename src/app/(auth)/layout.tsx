'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white">
      <div className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <motion.div 
          className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-600/90" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Image
              src="/logo.svg"
              alt="Strade Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            Strade
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                "Strade has revolutionized how we connect with suppliers and manage our trade relationships. It's the future of B2B commerce."
              </p>
              <footer className="text-sm">Sofia Davis, CEO of TechTrade</footer>
            </blockquote>
          </div>
        </motion.div>
        <motion.div 
          className="lg:p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
