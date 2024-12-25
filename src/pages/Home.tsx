import React from 'react';
import { ArrowRight, Calculator, PieChart, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

export default function Home() {
  const services = [
    {
      title: 'Tax Preparation',
      description: 'Expert tax preparation services for individuals and businesses.',
      Icon: Calculator,
    },
    {
      title: 'Bookkeeping',
      description: 'Comprehensive bookkeeping and accounting services.',
      Icon: PieChart,
    },
    {
      title: 'Financial Planning',
      description: 'Strategic financial planning for your future.',
      Icon: Users,
    },
    {
      title: 'IRS Representation',
      description: 'Professional representation in IRS matters.',
      Icon: Shield,
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Small Business Owner',
      content: 'The team at SD Tax Experts has been handling my business taxes for years. Their expertise and attention to detail are unmatched.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Freelance Consultant',
      content: 'They made tax season stress-free for me. Their knowledge of self-employed tax regulations saved me thousands.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Restaurant Owner',
      content: 'Outstanding service! They helped me navigate complex tax situations and provided valuable business advice.',
      rating: 5,
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[600px]"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Expert Tax Services in San Diego
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Professional tax and accounting services tailored to your needs. Serving San Diego for over 10 years.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Schedule Your Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive tax and accounting solutions for your needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Trusted by businesses and individuals across San Diego</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let us help you navigate your tax and accounting needs
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors duration-200"
          >
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}