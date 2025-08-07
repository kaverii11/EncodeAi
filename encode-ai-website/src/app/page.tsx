'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Brain, 
  Trophy, 
  Users, 
  Calendar, 
  Zap, 
  ChevronRight,
  Target,
  Lightbulb,
  Award
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const features = [
  {
    name: 'Competitive Programming',
    description: 'Master algorithms, data structures, and problem-solving through intensive training and competitions.',
    icon: Code2,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    name: 'AI & Machine Learning',
    description: 'Explore cutting-edge AI technologies, build ML models, and work on real-world AI projects.',
    icon: Brain,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    name: 'Hackathons',
    description: 'Participate in exciting hackathons, build innovative solutions, and compete for amazing prizes.',
    icon: Trophy,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
  },
  {
    name: 'Community',
    description: 'Join a passionate community of developers, learn together, and build lasting connections.',
    icon: Users,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
];

const stats = [
  { name: 'Active Members', value: '200+' },
  { name: 'Hackathons Organized', value: '15+' },
  { name: 'Workshop Sessions', value: '50+' },
  { name: 'Competition Wins', value: '25+' },
];

const upcomingEvents = [
  {
    title: 'Winter Hackathon 2024',
    date: 'March 15-17, 2024',
    type: 'Hackathon',
    description: '48-hour coding marathon with AI/ML focus',
  },
  {
    title: 'Competitive Programming Workshop',
    date: 'March 25, 2024',
    type: 'Workshop',
    description: 'Advanced algorithms and optimization techniques',
  },
  {
    title: 'Spring Recruitment Drive',
    date: 'April 1-15, 2024',
    type: 'Recruitment',
    description: 'Join our growing community of developers',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 to-accent-50 pt-16 pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              Welcome to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                Encode AI
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Your premier college club for competitive programming and AI/ML. Join us in pushing the boundaries of technology through hackathons, workshops, and competitions.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <Link
                href="/recruitment"
                className="rounded-md bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-all duration-200 flex items-center gap-2"
              >
                Join Our Club <Zap className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors flex items-center gap-1"
              >
                Learn more <ChevronRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary-300 to-accent-300 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">What We Offer</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to excel in tech
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From competitive programming to cutting-edge AI, we provide comprehensive learning experiences.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {features.map((feature) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex flex-col"
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${feature.bgColor}`}>
                      <feature.icon className={`h-6 w-6 ${feature.color}`} aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary-600 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Our Impact in Numbers
              </h2>
              <p className="mt-4 text-lg leading-8 text-primary-200">
                Building a strong community of tech enthusiasts and innovators.
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <motion.div
                  key={stat.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex flex-col bg-primary-700 p-8"
                >
                  <dt className="text-sm font-semibold leading-6 text-primary-200">{stat.name}</dt>
                  <dd className="order-first text-3xl font-bold tracking-tight text-white">{stat.value}</dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Upcoming Events
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Don't miss out on our exciting upcoming events and opportunities.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {upcomingEvents.map((event, index) => (
              <motion.article
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-start bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time className="text-gray-500">{event.date}</time>
                  <span className="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600">
                    {event.type}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-primary-600">
                    {event.title}
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {event.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Start Your Journey?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join Encode AI today and be part of an amazing community that's shaping the future of technology.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/recruitment"
                className="rounded-md bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-all duration-200 flex items-center gap-2"
              >
                Apply Now <Target className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
