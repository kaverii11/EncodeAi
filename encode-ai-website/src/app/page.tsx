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
  Award,
  Sparkles,
  Rocket,
  Star
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const features = [
  {
    name: 'Competitive Programming',
    description: 'Master algorithms, data structures, and problem-solving through intensive training and competitions.',
    icon: Code2,
    gradient: 'from-blue-500 to-cyan-500',
    delay: 0,
  },
  {
    name: 'AI & Machine Learning',
    description: 'Explore cutting-edge AI technologies, build ML models, and work on real-world AI projects.',
    icon: Brain,
    gradient: 'from-purple-500 to-pink-500',
    delay: 0.1,
  },
  {
    name: 'Hackathons',
    description: 'Participate in exciting hackathons, build innovative solutions, and compete for amazing prizes.',
    icon: Trophy,
    gradient: 'from-yellow-500 to-orange-500',
    delay: 0.2,
  },
  {
    name: 'Community',
    description: 'Join a passionate community of developers, learn together, and build lasting connections.',
    icon: Users,
    gradient: 'from-green-500 to-emerald-500',
    delay: 0.3,
  },
];

const stats = [
  { name: 'Active Members', value: '200+', icon: Users },
  { name: 'Hackathons Organized', value: '15+', icon: Trophy },
  { name: 'Workshop Sessions', value: '50+', icon: Lightbulb },
  { name: 'Competition Wins', value: '25+', icon: Award },
];

const upcomingEvents = [
  {
    title: 'Winter Hackathon 2024',
    date: 'March 15-17, 2024',
    type: 'Hackathon',
    description: '48-hour coding marathon with AI/ML focus',
    gradient: 'from-primary-500 to-primary-600',
  },
  {
    title: 'Competitive Programming Workshop',
    date: 'March 25, 2024',
    type: 'Workshop',
    description: 'Advanced algorithms and optimization techniques',
    gradient: 'from-blue-500 to-purple-500',
  },
  {
    title: 'Spring Recruitment Drive',
    date: 'April 1-15, 2024',
    type: 'Recruitment',
    description: 'Join our growing community of developers',
    gradient: 'from-green-500 to-teal-500',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8">
                <Sparkles className="h-4 w-4 text-primary-500 animate-pulse" />
                <span className="text-sm font-medium text-gray-300">Welcome to the future of coding</span>
                <Sparkles className="h-4 w-4 text-primary-500 animate-pulse" />
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-title mb-8"
            >
              Welcome to{' '}
              <span className="relative inline-block">
                <span className="gradient-text">Encode AI</span>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: 1 }}
                  className="absolute bottom-0 left-0 h-1 gradient-bg rounded-full"
                />
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl leading-8 text-gray-300 mb-12 max-w-3xl mx-auto"
            >
              Your premier college club for competitive programming and AI/ML. Join us in pushing the boundaries of technology through hackathons, workshops, and competitions.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Link
                href="/recruitment"
                className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold shadow-glow hover:shadow-glow-lg group"
              >
                <Rocket className="h-5 w-5 group-hover:animate-bounce" />
                Join Our Club
                <Zap className="h-5 w-5 group-hover:animate-pulse" />
              </Link>
              <Link
                href="/about"
                className="btn-secondary inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold group"
              >
                Learn More
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 gradient-bg rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-40 right-10 w-32 h-32 gradient-bg rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float delay-200"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 gradient-bg rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-float delay-400"></div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="section-title"
            >
              What We Offer
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg leading-8 text-gray-400"
            >
              From competitive programming to cutting-edge AI, we provide comprehensive learning experiences.
            </motion.p>
          </div>
          
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2 mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: feature.delay }}
                viewport={{ once: true }}
                className="group card hover-lift"
              >
                <div className="flex items-start gap-4">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} shadow-glow group-hover:shadow-glow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                      {feature.name}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 via-primary-800/10 to-primary-900/20"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title">
                Our Impact in Numbers
              </h2>
              <p className="text-lg leading-8 text-gray-400">
                Building a strong community of tech enthusiasts and innovators.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group card text-center hover-lift"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 gradient-bg rounded-xl shadow-glow group-hover:shadow-glow-lg transition-all duration-300 group-hover:scale-110 mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-gray-400 group-hover:text-gray-300 transition-colors">
                    {stat.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="section-title">
              Upcoming Events
            </h2>
            <p className="text-lg leading-8 text-gray-400">
              Don't miss out on our exciting upcoming events and opportunities.
            </p>
          </motion.div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {upcomingEvents.map((event, index) => (
              <motion.article
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group card hover-lift"
              >
                <div className="flex items-center gap-x-4 text-xs mb-4">
                  <time className="text-gray-400">{event.date}</time>
                  <span className={`relative z-10 rounded-full bg-gradient-to-r ${event.gradient} px-3 py-1.5 font-medium text-white shadow-glow`}>
                    {event.type}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="text-xl font-bold leading-6 text-white group-hover:text-primary-400 transition-colors mb-3">
                    {event.title}
                  </h3>
                  <p className="text-sm leading-6 text-gray-400 group-hover:text-gray-300 transition-colors">
                    {event.description}
                  </p>
                </div>
                <div className="mt-6">
                  <Link 
                    href="/events" 
                    className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors font-medium text-sm group"
                  >
                    Learn More 
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-transparent to-primary-900/30"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="section-title">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg leading-8 text-gray-400 mb-10">
              Join Encode AI today and be part of an amazing community that's shaping the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/recruitment"
                className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold shadow-glow hover:shadow-glow-lg group"
              >
                <Target className="h-5 w-5 group-hover:animate-spin" />
                Apply Now
                <Star className="h-5 w-5 group-hover:animate-pulse" />
              </Link>
              <Link
                href="/contact"
                className="btn-secondary inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-20 left-20 w-40 h-40 gradient-bg rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 gradient-bg rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float delay-300"></div>
      </section>

      <Footer />
    </div>
  );
}
