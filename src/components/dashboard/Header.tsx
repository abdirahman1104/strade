'use client'

import { Bell, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';
import Image from 'next/image';

interface HeaderProps {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

export function Header({ user }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center px-6">
      <div className="flex-1">
        <input
          type="search"
          placeholder="Search..."
          className="w-96 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="text-gray-600">
          <Bell className="h-5 w-5" />
        </Button>
        
        <div className="flex items-center space-x-2">
          {user.image ? (
            <Image
              src={user.image}
              alt={user.name || 'User'}
              width={32}
              height={32}
              className="rounded-full"
            />
          ) : (
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-gray-600" />
            </div>
          )}
          <span className="font-medium">{user.name}</span>
        </div>

        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => signOut({ callbackUrl: '/' })}
          className="text-gray-600"
          title="Sign out"
        >
          <LogOut className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}
