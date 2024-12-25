import React from 'react';
import { Calculator, PieChart, Shield, Users, FileText, Building, Briefcase, Phone } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: 'Personal Tax Preparation',
      description: 'Expert preparation of individual tax returns with maximum deductions and credits.',
      Icon: Calculator,
    },
    {
      title: 'Business Tax Services',
      description: 'Comprehensive tax services for businesses of all sizes, including corporations and LLCs.',
      Icon: Building,
    },
    {
      title: 'Bookkeeping',
      description: 'Accurate and timely bookkeeping services to keep your finances organized.',
      Icon: PieChart,
    },
    {
      title: 'Financial Planning',
      description: 'Strategic financial planning to help you achieve your long-term goals.',
      Icon: Users,
    },
    {
      title: 'IRS Representation',
      description: 'Professional representation in IRS audits and tax disputes.',
      Icon: Shield,
    },
    {
      title: 'Tax Planning',
      description: 'Strategic tax planning to minimize your tax liability.',
      Icon: FileText,
    },
    {
      title: 'Business Consulting',
      description: 'Expert advice on business structure, growth strategies, and financial decisions.',
      Icon: Briefcase,
    },
    {
      title: 'Advisory Services',
      description: 'Ongoing financial advisory services for individuals and businesses.',
      Icon: Phone,
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Comprehensive tax and accounting solutions tailored to your unique needs
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Schedule your free consultation today and let us help you achieve your financial goals
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}