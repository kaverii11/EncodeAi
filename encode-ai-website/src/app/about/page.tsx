'use client';

import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Code2,
  Brain,
  Trophy,
  Lightbulb
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const values = [
  {
    name: 'Excellence',
    description: 'We strive for excellence in everything we do, from coding competitions to AI research.',
    icon: Award,
  },
  {
    name: 'Innovation',
    description: 'We embrace cutting-edge technologies and encourage creative problem-solving approaches.',
    icon: Lightbulb,
  },
  {
    name: 'Collaboration',
    description: 'We believe in the power of teamwork and knowledge sharing within our community.',
    icon: Users,
  },
  {
    name: 'Growth',
    description: 'We are committed to continuous learning and helping each member reach their potential.',
    icon: Trophy,
  },
];

const team = [
  {
    name: 'Alex Chen',
    role: 'President',
    bio: 'Computer Science senior with a passion for competitive programming and machine learning. Led the team to victory in 3 national hackathons.',
    image: '/api/placeholder/150/150',
    skills: ['Competitive Programming', 'Machine Learning', 'Leadership'],
  },
  {
    name: 'Sarah Johnson',
    role: 'Vice President',
    bio: 'AI/ML enthusiast and research assistant. Specializes in deep learning and has published 2 research papers.',
    image: '/api/placeholder/150/150',
    skills: ['Deep Learning', 'Research', 'Python'],
  },
  {
    name: 'Michael Rodriguez',
    role: 'Technical Lead',
    bio: 'Full-stack developer and hackathon mentor. Passionate about teaching and building scalable applications.',
    image: '/api/placeholder/150/150',
    skills: ['Full-Stack Development', 'Mentoring', 'System Design'],
  },
  {
    name: 'Emily Wang',
    role: 'Events Coordinator',
    bio: 'Event management specialist who has organized 15+ successful hackathons and workshops for the club.',
    image: '/api/placeholder/150/150',
    skills: ['Event Management', 'Community Building', 'Project Management'],
  },
];

const achievements = [
  {
    year: '2024',
    title: 'National AI Challenge Winners',
    description: 'Our team won first place in the National AI Challenge with an innovative healthcare solution.',
  },
  {
    year: '2023',
    title: 'Best College Club Award',
    description: 'Recognized as the best technical club in our university for outstanding contributions.',
  },
  {
    year: '2023',
    title: 'Google Code-in Mentors',
    description: 'Selected as official mentors for Google Code-in, guiding students worldwide.',
  },
  {
    year: '2022',
    title: 'Club Foundation',
    description: 'Encode AI was founded with a mission to democratize AI education and competitive programming.',
  },
];

export default function About() {
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
              About{' '}
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
              Empowering the next generation of technologists through competitive programming, AI/ML, and community building.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                  <Target className="h-6 w-6 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg leading-8 text-gray-600">
                To create an inclusive environment where students can explore the fascinating world of competitive programming and artificial intelligence. We aim to bridge the gap between theoretical knowledge and practical application through hands-on projects, competitions, and collaborative learning.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-100">
                  <Eye className="h-6 w-6 text-accent-600" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg leading-8 text-gray-600">
                To be the leading college club that produces world-class programmers and AI researchers who will shape the future of technology. We envision a community where innovation thrives, knowledge is shared freely, and every member grows to their fullest potential.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              The principles that guide everything we do at Encode AI.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {values.map((value, index) => (
                <motion.div
                  key={value.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col"
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100">
                      <value.icon className="h-6 w-6 text-primary-600" aria-hidden="true" />
                    </div>
                    {value.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{value.description}</p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              The passionate individuals leading Encode AI to new heights.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-start bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary-600 font-medium">{member.role}</p>
                  </div>
                </div>
                <p className="text-sm leading-6 text-gray-600 mb-4">
                  {member.bio}
                </p>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Journey
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Key milestones in our growth and achievements.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl">
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex gap-x-4"
                >
                  <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary-600 ring-1 ring-primary-600" />
                  </div>
                  <div className="flex-auto">
                    <div className="flex items-center gap-x-2">
                      <span className="text-sm font-medium text-primary-600">{achievement.year}</span>
                    </div>
                    <h3 className="mt-1 text-lg font-semibold leading-6 text-gray-900">
                      {achievement.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {achievement.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}