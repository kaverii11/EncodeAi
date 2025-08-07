'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Trophy, 
  Clock,
  ExternalLink,
  Star,
  Gift,
  Code2,
  Brain
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const upcomingHackathons = [
  {
    id: 1,
    title: 'Winter AI Hackathon 2024',
    subtitle: 'Build the Future with AI',
    date: 'March 15-17, 2024',
    location: 'University Campus & Virtual',
    duration: '48 hours',
    participants: '200+ expected',
    prizePool: '$10,000',
    theme: 'Healthcare & Sustainability',
    description: 'Join us for an exciting 48-hour journey where you\'ll build innovative AI solutions for real-world problems in healthcare and sustainability.',
    features: ['Mentorship from Industry Experts', 'Free Meals & Swag', 'Networking Opportunities', 'Workshops & Talks'],
    prizes: [
      { place: '1st Place', amount: '$5,000', description: 'Best Overall Solution' },
      { place: '2nd Place', amount: '$3,000', description: 'Runner-up' },
      { place: '3rd Place', amount: '$2,000', description: 'Third Place' },
    ],
    status: 'registration-open',
    registrationDeadline: 'March 10, 2024',
    image: '/api/placeholder/600/400',
  },
  {
    id: 2,
    title: 'Spring Code Challenge',
    subtitle: 'Competitive Programming Marathon',
    date: 'April 20-21, 2024',
    location: 'Computer Science Building',
    duration: '24 hours',
    participants: '150+ expected',
    prizePool: '$5,000',
    theme: 'Algorithms & Data Structures',
    description: 'Test your competitive programming skills in this intensive 24-hour challenge featuring algorithmic problems and optimization tasks.',
    features: ['Individual Competition', 'Live Leaderboard', 'Problem Solving Workshops', 'Career Fair'],
    prizes: [
      { place: '1st Place', amount: '$2,500', description: 'Top Performer' },
      { place: '2nd Place', amount: '$1,500', description: 'Second Place' },
      { place: '3rd Place', amount: '$1,000', description: 'Third Place' },
    ],
    status: 'coming-soon',
    registrationDeadline: 'April 15, 2024',
    image: '/api/placeholder/600/400',
  },
];

const pastHackathons = [
  {
    title: 'Fall Tech Fest 2023',
    date: 'November 2023',
    participants: 180,
    winner: 'Team ByteBuilders',
    project: 'Smart Campus Navigation System',
    image: '/api/placeholder/400/300',
  },
  {
    title: 'Summer AI Challenge 2023',
    date: 'August 2023',
    participants: 220,
    winner: 'Team Neural Nexus',
    project: 'AI-Powered Learning Assistant',
    image: '/api/placeholder/400/300',
  },
  {
    title: 'Spring Innovation Hack 2023',
    date: 'April 2023',
    participants: 160,
    winner: 'Team CodeCrafters',
    project: 'Sustainable Energy Optimizer',
    image: '/api/placeholder/400/300',
  },
];

const sponsors = [
  { name: 'Google', logo: '/api/placeholder/120/60' },
  { name: 'Microsoft', logo: '/api/placeholder/120/60' },
  { name: 'Amazon', logo: '/api/placeholder/120/60' },
  { name: 'Meta', logo: '/api/placeholder/120/60' },
];

export default function Hackathons() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 to-accent-50 pt-16 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                Hackathons
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Where innovation meets competition. Join our hackathons to build amazing solutions, learn new technologies, and compete for incredible prizes.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Upcoming Hackathons */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Upcoming Events
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Don't miss these exciting upcoming hackathons and competitions.
            </p>
          </div>

          <div className="space-y-16">
            {upcomingHackathons.map((hackathon, index) => (
              <motion.div
                key={hackathon.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl ring-1 ring-gray-200 overflow-hidden"
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-2 mb-4">
                      {hackathon.status === 'registration-open' && (
                        <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                          Registration Open
                        </span>
                      )}
                      {hackathon.status === 'coming-soon' && (
                        <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                          Coming Soon
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">
                      {hackathon.title}
                    </h3>
                    <p className="text-lg text-primary-600 font-medium mb-4">
                      {hackathon.subtitle}
                    </p>
                    <p className="text-gray-600 mb-6">
                      {hackathon.description}
                    </p>

                    {/* Event Details */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4 text-primary-500" />
                        {hackathon.date}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4 text-primary-500" />
                        {hackathon.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4 text-primary-500" />
                        {hackathon.duration}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="h-4 w-4 text-primary-500" />
                        {hackathon.participants}
                      </div>
                    </div>

                    {/* Prize Pool */}
                    <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-4 mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Trophy className="h-5 w-5 text-primary-600" />
                        <span className="font-semibold text-gray-900">Prize Pool: {hackathon.prizePool}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        {hackathon.prizes.map((prize) => (
                          <div key={prize.place} className="text-center">
                            <div className="font-medium text-gray-900">{prize.place}</div>
                            <div className="text-primary-600 font-semibold">{prize.amount}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {hackathon.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                            <Star className="h-4 w-4 text-yellow-500" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      {hackathon.status === 'registration-open' && (
                        <Link
                          href={`/hackathons/${hackathon.id}/register`}
                          className="inline-flex items-center gap-2 rounded-md bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 transition-colors"
                        >
                          Register Now <ExternalLink className="h-4 w-4" />
                        </Link>
                      )}
                      <Link
                        href={`/hackathons/${hackathon.id}`}
                        className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-colors"
                      >
                        Learn More
                      </Link>
                    </div>

                    {hackathon.registrationDeadline && (
                      <p className="mt-4 text-sm text-gray-500">
                        Registration deadline: {hackathon.registrationDeadline}
                      </p>
                    )}
                  </div>

                  {/* Image/Visual */}
                  <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-8 lg:p-12 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="mb-4">
                        {hackathon.theme.includes('AI') ? (
                          <Brain className="h-16 w-16 mx-auto mb-4" />
                        ) : (
                          <Code2 className="h-16 w-16 mx-auto mb-4" />
                        )}
                      </div>
                      <h4 className="text-2xl font-bold mb-2">Theme</h4>
                      <p className="text-xl">{hackathon.theme}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Hackathons */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Past Events
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Check out some of our successful past hackathons and their winning projects.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {pastHackathons.map((hackathon, index) => (
              <motion.div
                key={hackathon.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                  <Trophy className="h-16 w-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {hackathon.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <Calendar className="h-4 w-4" />
                    {hackathon.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <Users className="h-4 w-4" />
                    {hackathon.participants} participants
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-sm font-medium text-gray-900 mb-1">Winner:</p>
                    <p className="text-sm text-primary-600 font-medium">{hackathon.winner}</p>
                    <p className="text-sm text-gray-600">{hackathon.project}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Sponsors
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Thanks to our amazing sponsors who make these events possible.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            {sponsors.map((sponsor) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="h-12 w-24 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-600 font-medium text-sm">{sponsor.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}