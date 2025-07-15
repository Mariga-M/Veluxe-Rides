import React from 'react';
import { Car, Key, Shield, Wrench, CreditCard, Users } from 'lucide-react';

const services = [
  {
    icon: Car,
    title: 'Luxury Car Sales',
    description: 'Premium selection of new and pre-owned luxury vehicles from top brands worldwide.',
    features: ['Certified Pre-owned', 'Warranty Included', 'Trade-in Options', 'Financing Available']
  },
  {
    icon: Key,
    title: 'Exotic Car Rentals',
    description: 'Experience the thrill of driving supercars with our flexible rental packages.',
    features: ['Daily/Weekly/Monthly', 'Delivery Service', 'Insurance Included', '24/7 Support']
  },
  {
    icon: Shield,
    title: 'Vehicle Protection',
    description: 'Comprehensive insurance and protection plans for your valuable investment.',
    features: ['Full Coverage', 'Gap Insurance', 'Extended Warranty', 'Roadside Assistance']
  },
  {
    icon: Wrench,
    title: 'Maintenance & Service',
    description: 'Expert maintenance and repair services by certified technicians.',
    features: ['Authorized Service', 'Genuine Parts', 'Regular Maintenance', 'Performance Tuning']
  },
  {
    icon: CreditCard,
    title: 'Financing Solutions',
    description: 'Flexible financing options tailored to your needs and budget.',
    features: ['Competitive Rates', 'Quick Approval', 'Flexible Terms', 'Lease Options']
  },
  {
    icon: Users,
    title: 'Concierge Service',
    description: 'Personalized service to help you find the perfect luxury vehicle.',
    features: ['Personal Consultant', 'Vehicle Sourcing', 'Test Drive Arrangement', 'Documentation']
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-yellow-400">Premium</span> Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From sales to service, we provide comprehensive luxury automotive solutions 
            tailored to exceed your expectations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-yellow-400/50 transition-all duration-300 group hover:transform hover:scale-105"
              >
                {/* Icon */}
                <div className="bg-yellow-400/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-400/30 transition-colors">
                  <IconComponent className="w-8 h-8 text-yellow-400" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className="mt-6 w-full bg-transparent border border-gray-700 text-white py-3 rounded-lg font-semibold hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300">
                  Learn More
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-2xl p-8 border border-yellow-400/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Our team of experts is ready to create a personalized service package 
              that meets your specific luxury automotive needs.
            </p>
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
              Contact Our Specialists
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;