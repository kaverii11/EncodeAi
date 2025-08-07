'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Clock, 
  Users, 
  FileText,
  Send,
  Star,
  Award,
  Code2,
  Brain,
  Calendar,
  ArrowRight
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const recruitmentProcess = [
  {
    step: 1,
    title: 'Application Submission',
    description: 'Fill out our comprehensive application form with your details, experience, and interests.',
    duration: '15 minutes',
    icon: FileText,
  },
  {
    step: 2,
    title: 'Initial Screening',
    description: 'Our team reviews applications and shortlists candidates based on their potential and enthusiasm.',
    duration: '3-5 days',
    icon: Users,
  },
  {
    step: 3,
    title: 'Technical Assessment',
    description: 'Complete a coding challenge or AI/ML project to demonstrate your technical skills.',
    duration: '1 week',
    icon: Code2,
  },
  {
    step: 4,
    title: 'Interview Round',
    description: 'Have a friendly chat with our team about your interests, goals, and how you can contribute.',
    duration: '30 minutes',
    icon: Users,
  },
  {
    step: 5,
    title: 'Welcome to the Team!',
    description: 'Successful candidates are welcomed with orientation and integration into our community.',
    duration: 'Ongoing',
    icon: CheckCircle,
  },
];

const requirements = [
  {
    category: 'General',
    items: [
      'Currently enrolled as a student',
      'Passionate about technology and innovation',
      'Willingness to learn and collaborate',
      'Commitment to club activities and values',
    ],
  },
  {
    category: 'Competitive Programming Track',
    items: [
      'Basic knowledge of algorithms and data structures',
      'Proficiency in at least one programming language',
      'Problem-solving mindset',
      'Interest in competitive programming platforms',
    ],
  },
  {
    category: 'AI/ML Track',
    items: [
      'Understanding of machine learning concepts',
      'Experience with Python and ML libraries',
      'Interest in AI research and applications',
      'Portfolio of projects (preferred)',
    ],
  },
];

const positions = [
  {
    title: 'Core Member',
    description: 'Active participant in club activities, workshops, and competitions.',
    commitment: '5-8 hours/week',
    benefits: ['Access to exclusive workshops', 'Mentorship opportunities', 'Competition participation'],
  },
  {
    title: 'Technical Lead',
    description: 'Lead technical projects and mentor junior members.',
    commitment: '10-15 hours/week',
    benefits: ['Leadership experience', 'Project ownership', 'Industry connections'],
  },
  {
    title: 'Event Coordinator',
    description: 'Organize hackathons, workshops, and other club events.',
    commitment: '8-12 hours/week',
    benefits: ['Event management skills', 'Networking opportunities', 'Team leadership'],
  },
];

export default function Recruitment() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    university: '',
    year: '',
    major: '',
    track: '',
    position: '',
    experience: '',
    projects: '',
    motivation: '',
    availability: '',
    portfolio: '',
    github: '',
    linkedin: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitted(true);
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center"
          >
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Application Submitted!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for your interest in joining Encode AI. We'll review your application and get back to you within 3-5 business days.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  fullName: '', email: '', phone: '', university: '', year: '', major: '',
                  track: '', position: '', experience: '', projects: '', motivation: '',
                  availability: '', portfolio: '', github: '', linkedin: '',
                });
              }}
              className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Submit Another Application
            </button>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

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
              Join{' '}
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
              Ready to take your programming and AI skills to the next level? Join our community of passionate innovators and builders.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 flex items-center justify-center gap-2 text-sm text-primary-600"
            >
              <Calendar className="h-4 w-4" />
              <span>Spring 2024 Recruitment: Applications Open Until March 31st</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Available Positions */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Available Positions
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Find the perfect role that matches your interests and commitment level.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {positions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {position.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {position.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-primary-600 font-medium mb-4">
                  <Clock className="h-4 w-4" />
                  {position.commitment}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Benefits:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {position.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Star className="h-3 w-3 text-yellow-500" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What We're Looking For
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Requirements and qualifications for different tracks and positions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {requirements.map((req, index) => (
              <motion.div
                key={req.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {req.category}
                </h3>
                <ul className="space-y-3">
                  {req.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Recruitment Process
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A transparent and fair process designed to find the best fit for both you and our club.
            </p>
          </div>

          <div className="space-y-8">
            {recruitmentProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex gap-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 flex-shrink-0">
                  <step.icon className="h-6 w-6 text-primary-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Step {step.step}: {step.title}
                    </h3>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
                {index < recruitmentProcess.length - 1 && (
                  <div className="absolute left-6 top-12 w-px h-8 bg-gray-200" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Apply Now
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Ready to join? Fill out the application form below and take the first step towards joining our community.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl ring-1 ring-gray-200 p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="university" className="block text-sm font-medium text-gray-700 mb-1">
                      University/College *
                    </label>
                    <input
                      type="text"
                      id="university"
                      name="university"
                      required
                      value={formData.university}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                      Year of Study *
                    </label>
                    <select
                      id="year"
                      name="year"
                      required
                      value={formData.year}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary-500 focus:ring-primary-500"
                    >
                      <option value="">Select year</option>
                      <option value="1st">1st Year</option>
                      <option value="2nd">2nd Year</option>
                      <option value="3rd">3rd Year</option>
                      <option value="4th">4th Year</option>
                      <option value="graduate">Graduate</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="major" className="block text-sm font-medium text-gray-700 mb-1">
                      Major/Field of Study *
                    </label>
                    <input
                      type="text"
                      id="major"
                      name="major"
                      required
                      value={formData.major}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                </div>
              </div>

              {/* Club Preferences */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Club Preferences</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="track" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Track *
                    </label>
                    <select
                      id="track"
                      name="track"
                      required
                      value={formData.track}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary-500 focus:ring-primary-500"
                    >
                      <option value="">Select track</option>
                      <option value="competitive-programming">Competitive Programming</option>
                      <option value="ai-ml">AI/ML</option>
                      <option value="both">Both</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                      Position of Interest *
                    </label>
                    <select
                      id="position"
                      name="position"
                      required
                      value={formData.position}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary-500 focus:ring-primary-500"
                    >
                      <option value="">Select position</option>
                      <option value="core-member">Core Member</option>
                      <option value="technical-lead">Technical Lead</option>
                      <option value="event-coordinator">Event Coordinator</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Experience & Portfolio */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Experience & Portfolio</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                      Programming Experience *
                    </label>
                    <textarea
                      id="experience"
                      name="experience"
                      required
                      rows={3}
                      value={formData.experience}
                      onChange={handleInputChange}
                      placeholder="Tell us about your programming background, languages you know, and any relevant coursework..."
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="projects" className="block text-sm font-medium text-gray-700 mb-1">
                      Notable Projects
                    </label>
                    <textarea
                      id="projects"
                      name="projects"
                      rows={3}
                      value={formData.projects}
                      onChange={handleInputChange}
                      placeholder="Describe any projects you've worked on, hackathons you've participated in, or competitions you've entered..."
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div>
                      <label htmlFor="github" className="block text-sm font-medium text-gray-700 mb-1">
                        GitHub Profile
                      </label>
                      <input
                        type="url"
                        id="github"
                        name="github"
                        value={formData.github}
                        onChange={handleInputChange}
                        placeholder="https://github.com/username"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary-500 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">
                        LinkedIn Profile
                      </label>
                      <input
                        type="url"
                        id="linkedin"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleInputChange}
                        placeholder="https://linkedin.com/in/username"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary-500 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-1">
                        Portfolio Website
                      </label>
                      <input
                        type="url"
                        id="portfolio"
                        name="portfolio"
                        value={formData.portfolio}
                        onChange={handleInputChange}
                        placeholder="https://yourportfolio.com"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary-500 focus:ring-primary-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Motivation & Availability */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Motivation & Availability</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-1">
                      Why do you want to join Encode AI? *
                    </label>
                    <textarea
                      id="motivation"
                      name="motivation"
                      required
                      rows={4}
                      value={formData.motivation}
                      onChange={handleInputChange}
                      placeholder="Tell us what motivates you to join our club and what you hope to achieve..."
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">
                      Time Commitment & Availability *
                    </label>
                    <textarea
                      id="availability"
                      name="availability"
                      required
                      rows={2}
                      value={formData.availability}
                      onChange={handleInputChange}
                      placeholder="How many hours per week can you dedicate to club activities? Any scheduling constraints?"
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}