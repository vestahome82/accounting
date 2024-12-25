import React from 'react';
import { Shield, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const values = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Trust & Integrity',
      description: 'We maintain the highest standards of professional integrity in all our client relationships.',
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: 'Expertise',
      description: 'Our team consists of certified professionals with years of experience in tax and accounting.',
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: 'Reliability',
      description: "We're committed to meeting deadlines and providing timely responses to all client needs.",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[400px]"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Us
            </h1>
            <p className="text-xl max-w-2xl">
              Serving San Diego for Over 10 Years with Expert Tax and Accounting Services
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Founded in 2013, San Diego Tax & Accounting Experts has grown to become one of the most trusted names in tax and accounting services in the San Diego area.
                </p>
                <p>
                  Our journey began with a simple mission: to provide personalized, professional tax and accounting services that help our clients achieve their financial goals.
                </p>
                <p>
                  Today, we serve hundreds of individuals and businesses across San Diego County, maintaining the same commitment to excellence and personal attention that has been our hallmark since day one.
                </p>
              </div>
            </div>
            <div className="relative h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Team meeting"
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide our work</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Work Together?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how we can help you achieve your financial goals
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors duration-200"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}