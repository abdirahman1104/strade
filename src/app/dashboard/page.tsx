'use client'

import { useSession, signOut } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Bell, Settings, LogOut } from 'lucide-react'
import { Card } from '@/components/ui/card';

export default function DashboardPage() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    )
  }

  if (!session) {
    redirect('/login')
  }

  const handleSignOut = async () => {
    await signOut({ 
      callbackUrl: '/login',
      redirect: true
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/50 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            {session.user?.image && (
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src={session.user.image}
                  alt={session.user.name || 'User'}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <h2 className="text-sm font-medium">{session.user?.name}</h2>
              <p className="text-xs text-gray-400">{session.user?.email}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full p-2 hover:bg-gray-800"
            >
              <Bell className="h-5 w-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full p-2 hover:bg-gray-800"
            >
              <Settings className="h-5 w-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSignOut}
              className="flex items-center space-x-2 rounded-full px-4 py-2 hover:bg-gray-800"
            >
              <LogOut className="h-5 w-5" />
              <span className="text-sm">Sign out</span>
            </motion.button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Welcome Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="col-span-full rounded-lg border border-gray-800 bg-black/50 p-6 backdrop-blur-sm"
          >
            <h1 className="text-2xl font-semibold">
              Welcome back, {session.user?.name?.split(' ')[0]}!
            </h1>
            <p className="mt-2 text-gray-400">
              Your dashboard is ready. Start managing your account and exploring our features.
            </p>
          </motion.div>

          {/* Stats Cards */}
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-lg border border-gray-800 bg-black/50 p-6 backdrop-blur-sm"
            >
              <h3 className="text-lg font-medium">Card {i}</h3>
              <p className="mt-2 text-gray-400">Sample statistics and information will go here.</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}
