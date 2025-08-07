'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  Users,
  Calendar,
  ExternalLink
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const contactInfo = [
  {
    name: 'Email',
    value: 'contact@encodeai.club',
    href: 'mailto:contact@encodeai.club',
    icon: Mail,
    description: 'Send us an email anytime',
  },
  {
    name: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
    icon: Phone,
    description: 'Call us during office hours',
  },
  {
    name: 'Location',
    value: 'Computer Science Building, Room 301',
    href: '#',
    icon: MapPin,
    description: 'Visit our club room',
  },
  {
    name: 'Office Hours',
    value: 'Mon-Fri: 2:00 PM - 6:00 PM',
    href: '#',
    icon: Clock,
    description: 'When our team is available',
  },
];

const teamContacts = [
  {
    name: 'Alex Chen',
    role: 'President',
    email: 'president@encodeai.club',
    phone: '+1 (555) 123-4568',
    responsibilities: ['General inquiries', 'Partnership opportunities', 'Strategic planning'],
  },
  {
    name: 'Sarah Johnson',
    role: 'Vice President',
    email: 'vp@encodeai.club',
    phone: '+1 (555) 123-4569',
    responsibilities: ['Academic programs', 'Workshop coordination', 'Member relations'],
  },
  {
    name: 'Michael Rodriguez',
    role: 'Technical Lead',
    email: 'tech@encodeai.club',
    phone: '+1 (555) 123-4570',
    responsibilities: ['Technical projects', 'Competition training', 'Mentorship programs'],
  },
  {
    name: 'Emily Wang',
    role: 'Events Coordinator',
    email: 'events@encodeai.club',
    phone: '+1 (555) 123-4571',
    responsibilities: ['Event planning', 'Hackathon organization', 'Venue coordination'],
  },
];

const faqs = [
  {
    question: 'How can I join Encode AI?',
    answer: 'You can apply through our recruitment page. We have recruitment drives twice a year - in Fall and Spring semesters.',
  },
  {
    question: 'Do I need prior programming experience?',
    answer: 'While some programming knowledge is helpful, we welcome students of all skill levels. We provide training and mentorship for beginners.',
  },
  {
    question: 'What are the membership fees?',
    answer: 'Encode AI membership is completely free! We believe in making technology education accessible to everyone.',
  },
  {
    question: 'Can I attend events without being a member?',
    answer: 'Many of our events are open to all students. However, some workshops and competitions may be exclusive to members.',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general',
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
            <Mail className="h-16 w-16 text-primary-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for reaching out to us. We'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', subject: '', message: '', type: 'general' });
              }}
              className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Send Another Message
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                Contact Us
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Have questions about joining Encode AI? Want to collaborate or sponsor our events? We'd love to hear from you!
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Multiple ways to reach us. Choose what works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-primary-100 mb-4">
                  <info.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {info.name}
                </h3>
                <p className="text-gray-600 mb-2">
                  {info.description}
                </p>
                {info.href.startsWith('#') ? (
                  <p className="text-primary-600 font-medium">
                    {info.value}
                  </p>
                ) : (
                  <a
                    href={info.href}
                    className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
                  >
                    {info.value}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Team */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                Send us a Message
              </h2>
              <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
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
                  </div>

                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                      Inquiry Type *
                    </label>
                    <select
                      id="type"
                      name="type"
                      required
                      value={formData.type}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary-500 focus:ring-primary-500"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="membership">Membership Question</option>
                      <option value="events">Event Information</option>
                      <option value="partnership">Partnership/Sponsorship</option>
                      <option value="technical">Technical Support</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your inquiry..."
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Team Contacts */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                Direct Team Contacts
              </h2>
              <div className="space-y-6">
                {teamContacts.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {member.name}
                        </h3>
                        <p className="text-sm text-primary-600 font-medium">{member.role}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail className="h-4 w-4" />
                        <a href={`mailto:${member.email}`} className="hover:text-primary-600 transition-colors">
                          {member.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone className="h-4 w-4" />
                        <a href={`tel:${member.phone}`} className="hover:text-primary-600 transition-colors">
                          {member.phone}
                        </a>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Responsibilities:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {member.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Quick answers to common questions about Encode AI.
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Still have questions? Don't hesitate to reach out!
            </p>
            <a
              href="mailto:contact@encodeai.club"
              className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors"
            >
              Send us an email <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}