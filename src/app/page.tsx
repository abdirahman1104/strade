import Link from 'next/link'
import { ArrowRight, Globe, ShieldCheck, TrendingUp, Users } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Strade
                </span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/categories" className="text-gray-600 hover:text-gray-900">Categories</Link>
              <Link href="/suppliers" className="text-gray-600 hover:text-gray-900">Suppliers</Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
              <Link
                href="/login"
                className="text-gray-600 hover:text-gray-900"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 text-white text-sm font-medium hover:from-blue-700 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 opacity-50" />
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
            <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
              The Future of{' '}
              <span className="relative whitespace-nowrap">
                <span className="relative bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Global Trade</span>
              </span>{' '}
              is Here
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
              Connect with verified suppliers from China, UAE, Turkey, and Kenya. Access quality products, 
              secure transactions, and grow your business globally.
            </p>
            <div className="mt-10 flex justify-center gap-x-6">
              <Link
                href="/register"
                className="group inline-flex items-center justify-center rounded-full py-3 px-6 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900"
              >
                Start Trading Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/suppliers"
                className="group inline-flex ring-1 ring-slate-200 items-center justify-center rounded-full py-3 px-6 text-sm font-semibold focus:outline-none bg-white text-slate-700 hover:bg-slate-50 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300"
              >
                Browse Suppliers
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="mt-6 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {[
                { stat: '2000+', label: 'Active Businesses' },
                { stat: '150+', label: 'Verified Suppliers' },
                { stat: '$5M+', label: 'Monthly Trade Volume' },
                { stat: '45+', label: 'Countries Reached' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col bg-white/60 backdrop-blur-sm p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-600">{item.label}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{item.stat}</dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="relative py-24 sm:py-32 lg:py-40 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why Choose Strade?
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                We're revolutionizing B2B trade by connecting businesses 
                with trusted international suppliers through our secure and efficient platform.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h3 className="flex-none text-sm font-semibold leading-6 text-blue-600">Trusted by companies worldwide</h3>
                <div className="h-px flex-auto bg-gray-100"></div>
              </div>
              <ul role="list" className="mt-8 grid grid-cols-2 gap-4 text-sm leading-6">
                {['24/7 Support', 'Secure Payments', 'Verified Suppliers', 'Global Reach'].map((item) => (
                  <li key={item} className="flex gap-x-3 text-gray-600">
                    <svg className="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
              {[
                {
                  icon: Globe,
                  title: 'Global Network',
                  description: 'Access suppliers from major manufacturing hubs worldwide'
                },
                {
                  icon: ShieldCheck,
                  title: 'Secure Trading',
                  description: 'Advanced security measures and buyer protection guarantees'
                },
                {
                  icon: Users,
                  title: 'Verified Partners',
                  description: 'All suppliers undergo strict verification process'
                },
                {
                  icon: TrendingUp,
                  title: 'Business Growth',
                  description: 'Tools and insights to scale your business globally'
                }
              ].map((feature) => (
                <div 
                  key={feature.title} 
                  className="relative rounded-2xl border border-gray-200 p-8 hover:border-blue-500 transition-colors duration-300 hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 bg-opacity-10">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="mt-4 font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Join thousands of businesses already trading on Strade. 
              Start connecting with verified suppliers today.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/register"
                className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get Started for Free
              </Link>
              <Link
                href="/contact"
                className="text-sm font-semibold leading-6 text-white"
              >
                Contact Sales <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
