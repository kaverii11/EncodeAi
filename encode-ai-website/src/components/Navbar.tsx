'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Code, Zap } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Hackathons', href: '/hackathons' },
  { name: 'Events', href: '/events' },
  { name: 'Recruitment', href: '/recruitment' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="glass sticky top-0 z-50 border-b border-primary-500/20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 gradient-bg rounded-xl shadow-glow group-hover:shadow-glow-lg transition-all duration-300 group-hover:scale-110">
              <Code className="h-6 w-6 text-white" />
              <div className="absolute inset-0 gradient-bg rounded-xl opacity-0 group-hover:opacity-100 animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black gradient-text">Encode AI</span>
              <span className="text-xs text-gray-400 font-medium">Code • Compete • Create</span>
            </div>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="glass-card -m-2.5 inline-flex items-center justify-center rounded-xl p-2.5 text-gray-300 hover:text-primary-500 hover:bg-primary-500/10 transition-all duration-300 hover:scale-110"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="nav-link text-sm font-semibold leading-6 px-3 py-2 rounded-lg hover:bg-primary-500/10"
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/recruitment"
            className="btn-primary inline-flex items-center gap-2 px-6 py-2 text-sm font-semibold shadow-glow hover:shadow-glow-lg group"
          >
            Join Us 
            <Zap className="h-4 w-4 group-hover:animate-pulse" />
          </Link>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto glass px-6 py-6 sm:max-w-sm border-l border-primary-500/20">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-3">
                <div className="flex items-center justify-center w-8 h-8 gradient-bg rounded-lg shadow-glow">
                  <Code className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold gradient-text">Encode AI</span>
              </Link>
              <button
                type="button"
                className="glass-card -m-2.5 rounded-xl p-2.5 text-gray-300 hover:text-primary-500 hover:bg-primary-500/10 transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-700/50">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="group -mx-3 block rounded-xl px-3 py-3 text-base font-semibold leading-7 text-gray-300 hover:text-white hover:bg-primary-500/10 transition-all duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="flex items-center justify-between">
                        {item.name}
                        <div className="w-0 group-hover:w-2 h-2 gradient-bg rounded-full transition-all duration-300"></div>
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="/recruitment"
                    className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold w-full justify-center shadow-glow"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Join Us <Zap className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}