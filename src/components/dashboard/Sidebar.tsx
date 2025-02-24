import Link from 'next/link';
import { Home, LineChart, Settings, Users, Wallet } from 'lucide-react';

export function Sidebar() {
  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/dashboard' },
    { icon: LineChart, label: 'Trading', href: '/dashboard/trading' },
    { icon: Wallet, label: 'Wallet', href: '/dashboard/wallet' },
    { icon: Users, label: 'Profile', href: '/dashboard/profile' },
    { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 p-4">
      <div className="mb-8">
        <Link href="/dashboard" className="flex items-center">
          <img src="/logo.svg" alt="Strade" className="h-8 w-8" />
          <span className="ml-2 text-xl font-bold">Strade</span>
        </Link>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
