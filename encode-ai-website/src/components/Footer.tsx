import Link from 'next/link';
import { Github, Linkedin, Mail, Instagram, Code } from 'lucide-react';

const navigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Hackathons', href: '/hackathons' },
    { name: 'Events', href: '/events' },
    { name: 'Recruitment', href: '/recruitment' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    {
      name: 'GitHub',
      href: '#',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: Linkedin,
    },
    {
      name: 'Instagram',
      href: '#',
      icon: Instagram,
    },
    {
      name: 'Email',
      href: 'mailto:contact@encodeai.club',
      icon: Mail,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-primary-500/20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-800/50 to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
      
      <div className="relative mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="flex justify-center mb-12">
          <Link href="/" className="group flex items-center space-x-3">
            <div className="relative flex items-center justify-center w-12 h-12 gradient-bg rounded-xl shadow-glow group-hover:shadow-glow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
              <Code className="h-7 w-7 text-white" />
              <div className="absolute inset-0 gradient-bg rounded-xl opacity-0 group-hover:opacity-100 animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-black gradient-text">Encode AI</span>
              <span className="text-sm text-gray-400 font-medium">Code • Compete • Create</span>
            </div>
          </Link>
        </div>
        
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link
                href={item.href}
                className="nav-link text-sm leading-6 text-gray-400 hover:text-primary-500 px-3 py-2 rounded-lg hover:bg-primary-500/10"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        
        <div className="mt-12 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group glass-card p-3 rounded-xl text-gray-400 hover:text-primary-500 hover:bg-primary-500/10 transition-all duration-300 hover:scale-110 hover:shadow-glow"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6 group-hover:animate-pulse" aria-hidden="true" />
            </Link>
          ))}
        </div>
        
        <div className="mt-12 border-t border-gray-700/50 pt-8">
          <div className="text-center space-y-4">
            <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 gradient-bg rounded-full animate-pulse"></div>
                Building the future of tech
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 gradient-bg rounded-full animate-pulse delay-200"></div>
                Empowering student developers
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 gradient-bg rounded-full animate-pulse delay-400"></div>
                Innovation through collaboration
              </span>
            </div>
            <p className="text-xs leading-5 text-gray-500">
              &copy; 2024 Encode AI Club. All rights reserved. Built with passion for competitive programming and AI/ML.
            </p>
            <div className="flex justify-center items-center space-x-4 text-xs text-gray-600">
              <span>Made with</span>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span>by the Encode AI team</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 gradient-bg rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 gradient-bg rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float delay-300"></div>
      </div>
    </footer>
  );
}