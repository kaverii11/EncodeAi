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
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="flex justify-center mb-8">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-primary-600 rounded-lg">
              <Code className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">Encode AI</span>
          </Link>
        </div>
        
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link
                href={item.href}
                className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>
        
        <div className="mt-10 border-t border-gray-700 pt-8">
          <p className="text-xs leading-5 text-gray-400 text-center">
            &copy; 2024 Encode AI Club. All rights reserved. Built with passion for competitive programming and AI/ML.
          </p>
        </div>
      </div>
    </footer>
  );
}