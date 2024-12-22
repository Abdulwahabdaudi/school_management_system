"use client";

import React, { useState } from 'react';
import { GraduationCap, BookOpen, Users, Calendar, Bell, BarChart, Settings, Shield, Mail, ChevronRight, Menu, X } from 'lucide-react';
///import { Alert, AlertDescription } from "@/components/ui/alert";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');

  const features = [
    {
      icon: <GraduationCap className="w-12 h-12 mb-4 text-blue-600" />,
      title: "Student Management",
      description: "Complete student lifecycle management including admissions, attendance tracking, and performance analytics."
    },
    {
      icon: <BookOpen className="w-12 h-12 mb-4 text-blue-600" />,
      title: "Course Administration",
      description: "Comprehensive course management with curriculum planning, assignment tracking, and resource allocation."
    },
    {
      icon: <Users className="w-12 h-12 mb-4 text-blue-600" />,
      title: "Staff Portal",
      description: "Unified platform for teachers and staff to manage classes, grades, and communication with students."
    },
    {
      icon: <Calendar className="w-12 h-12 mb-4 text-blue-600" />,
      title: "Schedule Planning",
      description: "Smart timetable management with conflict detection and automated scheduling capabilities."
    },
    {
      icon: <Bell className="w-12 h-12 mb-4 text-blue-600" />,
      title: "Notifications",
      description: "Real-time alerts for assignments, events, and important announcements for all users."
    },
    {
      icon: <BarChart className="w-12 h-12 mb-4 text-blue-600" />,
      title: "Analytics Dashboard",
      description: "Comprehensive analytics and reporting tools for monitoring institutional performance."
    }
  ];

  const benefits = [
    {
      title: "For Administrators",
      items: ["Centralized management", "Performance tracking", "Resource optimization"]
    },
    {
      title: "For Teachers",
      items: ["Easy attendance tracking", "Grade management", "Parent communication"]
    },
    {
      title: "For Students",
      items: ["Access to materials", "Progress tracking", "Assignment submissions"]
    },
    {
      title: "For Parents",
      items: ["Real-time updates", "Direct communication", "Performance monitoring"]
    }
  ];

  const handleSubscribe = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle subscription logic here
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      Header
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">SESIS</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
              <a href="#benefits" className="text-gray-600 hover:text-blue-600">Benefits</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Early Access
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-blue-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
                <a href="#benefits" className="text-gray-600 hover:text-blue-600">Benefits</a>
                <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Request Demo
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <main>
        <div className="relative bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Transform Your School Management</span>
                <span className="block text-blue-600">With SESIS(School Management System)</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                A comprehensive solution for educational institutions to manage students, staff, courses, and resources efficiently.
                Built with modern technology for the future of education.
              </p>
              <div className="mt-8 flex justify-center space-x-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium">
                Coming Soon
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-md hover:bg-blue-50 transition-colors font-medium">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="bg-blue-600">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 text-center">
              <div className="p-4">
                <div className="text-4xl font-bold text-white">1000+</div>
                <div className="text-blue-100">Schools</div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold text-white">50K+</div>
                <div className="text-blue-100">Students</div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold text-white">5K+</div>
                <div className="text-blue-100">Teachers</div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold text-white">98%</div>
                <div className="text-blue-100">Satisfaction</div>
              </div>
            </div>
          </div>
        </div> */}


        <div className="bg-blue-600">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            {/* <div className="grid grid-cols-2 gap-4 md:grid-cols-4 text-center">
              <div className="p-4">
                <div className="text-4xl font-bold text-white">1000+</div>
                <div className="text-blue-100">Schools</div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold text-white">50K+</div>
                <div className="text-blue-100">Students</div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold text-white">5K+</div>
                <div className="text-blue-100">Teachers</div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold text-white">98%</div>
                <div className="text-blue-100">Satisfaction</div>
              </div>
            </div> */}
            <div className='text-white text-center font-bold text-3xl' >WELCOME</div>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Powerful Features</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div id="benefits" className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Benefits for Everyone</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">{benefit.title}</h3>
                  <ul className="space-y-2">
                    {benefit.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <ChevronRight className="h-4 w-4 text-blue-600 mr-2" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Enterprise-Grade Security</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Shield className="h-6 w-6 text-blue-600 mr-2 " />
                    <span className='text-gray-500'>End-to-end encryption for all data</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-6 w-6 text-blue-600 mr-2 " />
                    <span className='text-gray-500'>Regular security audits and updates</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-6 w-6 text-blue-600 mr-2 " />
                    <span className='text-gray-500'>Compliant with educational data protection standards</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                {/* <Alert className="bg-blue-50 border-blue-200">
                  <AlertDescription className="text-blue-800">
                    Your data security is our top priority. We employ industry-leading security measures to protect your institution's information.
                  </AlertDescription>
                </Alert> */}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div id="contact" className="bg-blue-600 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest updates and features.
              </p>
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto md:flex gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-blue-600 px-6 py-2 rounded-md hover:bg-blue-50 transition-colors font-medium mt-4 md:mt-0"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Development Status */}
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                Development Status
              </h2>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex items-center">
                  <Settings className="h-6 w-6 text-blue-600 mr-2" />
                  <span className='text-gray-700'>Active Development</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-6 w-6 text-blue-600 mr-2" />
                  <span className='text-gray-700'>Launch: Q1 2025</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-600 mr-2" />
                  <span className='text-gray-700'>Early Access Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <GraduationCap className="h-8 w-8 text-blue-500" />
                <span className="ml-2 text-xl font-bold text-white">SESIS</span>
              </div>
              <p className="mt-4 text-gray-400">
                Transforming education management for the digital age.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Features</li>
                <li>Pricing</li>
                <li>Security</li>
                <li>Roadmap</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Documentation</li>
                <li>Tutorials</li>
                <li>FAQs</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Facebook</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">
                © {new Date().getFullYear()} SESIS. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <span className="text-gray-400">Privacy Policy</span>
                <span className="text-gray-400">Terms of Service</span>
                <span className="text-gray-400">Cookie Policy</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Fixed Contact Button */}
      <button className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50">
        <Mail className="h-6 w-6" />
      </button>
    </div>
  );
};

export default LandingPage;