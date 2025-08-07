'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock,
  ExternalLink,
  BookOpen,
  Code2,
  Brain,
  Trophy,
  Lightbulb,
  ArrowRight
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const upcomingEvents = [
  {
    id: 1,
    title: 'Advanced Algorithms Workshop',
    type: 'Workshop',
    date: 'March 20, 2024',
    time: '2:00 PM - 5:00 PM',
    location: 'CS Building, Room 201',
    capacity: '50 students',
    description: 'Deep dive into advanced algorithmic concepts including dynamic programming, graph algorithms, and optimization techniques.',
    instructor: 'Dr. Sarah Chen',
    prerequisites: 'Basic knowledge of data structures',
    registrationLink: '#',
    image: '/api/placeholder/400/250',
    tags: ['Algorithms', 'Competitive Programming'],
    icon: Code2,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Machine Learning Fundamentals',
    type: 'Workshop',
    date: 'March 25, 2024',
    time: '10:00 AM - 4:00 PM',
    location: 'AI Lab, Engineering Building',
    capacity: '30 students',
    description: 'Hands-on introduction to machine learning concepts, including supervised learning, model evaluation, and practical implementation.',
    instructor: 'Prof. Michael Rodriguez',
    prerequisites: 'Python programming experience',
    registrationLink: '#',
    image: '/api/placeholder/400/250',
    tags: ['Machine Learning', 'Python'],
    icon: Brain,
    color: 'purple',
  },
  {
    id: 3,
    title: 'Regional Programming Contest',
    type: 'Competition',
    date: 'April 5, 2024',
    time: '9:00 AM - 2:00 PM',
    location: 'Main Auditorium',
    capacity: '100 participants',
    description: 'Compete against teams from other universities in this prestigious regional programming contest. Cash prizes for top performers!',
    instructor: 'Contest Organizers',
    prerequisites: 'Team of 3 members required',
    registrationLink: '#',
    image: '/api/placeholder/400/250',
    tags: ['Competition', 'Team Event'],
    icon: Trophy,
    color: 'yellow',
  },
];

const pastEvents = [
  {
    title: 'Web Development Bootcamp',
    date: 'February 2024',
    type: 'Workshop',
    attendees: 85,
    rating: 4.8,
    description: 'Full-stack web development using React and Node.js',
    highlights: ['Built 3 projects', 'Industry mentors', 'Job placement support'],
  },
  {
    title: 'AI Ethics Symposium',
    date: 'January 2024',
    type: 'Symposium',
    attendees: 120,
    rating: 4.9,
    description: 'Discussion on ethical implications of AI in society',
    highlights: ['Industry experts', 'Panel discussions', 'Research presentations'],
  },
  {
    title: 'Data Science Workshop',
    date: 'December 2023',
    type: 'Workshop',
    attendees: 95,
    rating: 4.7,
    description: 'Practical data analysis using Python and pandas',
    highlights: ['Real datasets', 'Visualization techniques', 'Statistical analysis'],
  },
];

const eventTypes = [
  {
    name: 'Workshops',
    description: 'Hands-on learning sessions covering various technical topics',
    icon: BookOpen,
    color: 'bg-blue-100 text-blue-600',
    count: '15+ per semester',
  },
  {
    name: 'Competitions',
    description: 'Programming contests and challenges to test your skills',
    icon: Trophy,
    color: 'bg-yellow-100 text-yellow-600',
    count: '5+ major events',
  },
  {
    name: 'Tech Talks',
    description: 'Industry experts sharing insights and latest trends',
    icon: Lightbulb,
    color: 'bg-purple-100 text-purple-600',
    count: '10+ speakers',
  },
  {
    name: 'Study Groups',
    description: 'Collaborative learning sessions for exam preparation',
    icon: Users,
    color: 'bg-green-100 text-green-600',
    count: 'Weekly sessions',
  },
];

export default function Events() {
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
                Events
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Join our workshops, competitions, and tech talks to enhance your skills and connect with like-minded peers.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Types of Events
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We organize various types of events to cater to different interests and skill levels.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {eventTypes.map((eventType, index) => (
              <motion.div
                key={eventType.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`inline-flex h-16 w-16 items-center justify-center rounded-lg ${eventType.color} mb-4`}>
                  <eventType.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {eventType.name}
                </h3>
                <p className="text-gray-600 mb-2">
                  {eventType.description}
                </p>
                <p className="text-sm font-medium text-primary-600">
                  {eventType.count}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Upcoming Events
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Don't miss these exciting upcoming events. Register early to secure your spot!
            </p>
          </div>

          <div className="space-y-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                  {/* Event Visual */}
                  <div className={`bg-gradient-to-br from-${event.color}-500 to-${event.color}-600 p-8 flex items-center justify-center lg:col-span-1`}>
                    <div className="text-center text-white">
                      <event.icon className="h-16 w-16 mx-auto mb-4" />
                      <span className="inline-flex items-center rounded-full bg-white bg-opacity-20 px-3 py-1 text-sm font-medium text-white">
                        {event.type}
                      </span>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="p-8 lg:col-span-2">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {event.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {event.description}
                    </p>

                    {/* Event Info Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4 text-primary-500" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4 text-primary-500" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4 text-primary-500" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="h-4 w-4 text-primary-500" />
                        {event.capacity}
                      </div>
                    </div>

                    {/* Additional Info */}
                    <div className="border-t border-gray-200 pt-4 mb-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-gray-900">Instructor: </span>
                          <span className="text-gray-600">{event.instructor}</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Prerequisites: </span>
                          <span className="text-gray-600">{event.prerequisites}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <Link
                        href={event.registrationLink}
                        className="inline-flex items-center gap-2 rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 transition-colors"
                      >
                        Register Now <ExternalLink className="h-4 w-4" />
                      </Link>
                      <Link
                        href={`/events/${event.id}`}
                        className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-colors"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Past Events
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Take a look at some of our successful past events and their impact.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800">
                    {event.type}
                  </span>
                  <span className="text-sm text-gray-500">{event.date}</span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {event.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {event.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="h-4 w-4" />
                    {event.attendees} attendees
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(event.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-1">{event.rating}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Highlights:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {event.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <ArrowRight className="h-3 w-3 text-primary-500" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Don't Miss Out!
            </h2>
            <p className="mt-6 text-lg leading-8 text-primary-200">
              Stay updated with our latest events and be the first to register for exciting workshops and competitions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/recruitment"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary-600 shadow-sm hover:bg-gray-50 transition-colors"
              >
                Join Our Club
              </Link>
              <Link
                href="/contact"
                className="text-sm font-semibold leading-6 text-white hover:text-primary-200 transition-colors"
              >
                Contact Us <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}