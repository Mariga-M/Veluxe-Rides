import React from 'react';
import { motion } from 'framer-motion';
import { Car, Key, Shield, Wrench, CreditCard, Users, CheckCircle, ArrowRight } from 'lucide-react';
import ContactModal from '../components/ContactModal';
import ServiceDetailModal from '../components/ServiceDetailModal';

const Services = () => {
  const [contactModalOpen, setContactModalOpen] = React.useState(false);
  const [serviceModalOpen, setServiceModalOpen] = React.useState(false);
  const [selectedService, setSelectedService] = React.useState<any>(null);

  const services = [
    {
      icon: Car,
      title: 'Luxury Car Sales',
      description: 'Premium selection of new and pre-owned luxury vehicles from top brands worldwide.',
      features: ['Certified Pre-owned', 'Warranty Included', 'Trade-in Options', 'Financing Available'],
      image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      benefits: [
        'Access to exclusive luxury vehicle inventory',
        'Professional vehicle inspection and certification',
        'Competitive pricing and transparent transactions',
        'Comprehensive warranty coverage',
        'Trade-in evaluation and assistance'
      ],
      process: [
        'Initial consultation to understand your preferences',
        'Vehicle selection and detailed presentation',
        'Test drive arrangement and evaluation',
        'Financing and documentation assistance',
        'Vehicle delivery and after-sales support'
      ]
    },
    {
      icon: Key,
      title: 'Exotic Car Rentals',
      description: 'Experience the thrill of driving supercars with our flexible rental packages.',
      features: ['Daily/Weekly/Monthly', 'Delivery Service', 'Insurance Included', '24/7 Support'],
      image: 'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      benefits: [
        'Drive your dream car without the commitment',
        'Perfect for special occasions and events',
        'Flexible rental periods to suit your needs',
        'Full insurance coverage included',
        'Professional delivery and pickup service'
      ],
      process: [
        'Browse available vehicles and select your preferred car',
        'Choose rental period and additional services',
        'Complete booking with required documentation',
        'Vehicle delivery or pickup arrangement',
        'Enjoy your luxury driving experience'
      ]
    },
    {
      icon: Shield,
      title: 'Vehicle Protection',
      description: 'Comprehensive insurance and protection plans for your valuable investment.',
      features: ['Full Coverage', 'Gap Insurance', 'Extended Warranty', 'Roadside Assistance'],
      image: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      benefits: [
        'Comprehensive coverage for your luxury vehicle',
        'Protection against theft, damage, and accidents',
        'Gap insurance to cover loan balance',
        'Extended warranty for peace of mind',
        '24/7 roadside assistance nationwide'
      ],
      process: [
        'Assessment of your vehicle and coverage needs',
        'Customized insurance package recommendation',
        'Policy setup and documentation',
        'Ongoing support and claims assistance'
      ]
    },
    {
      icon: Wrench,
      title: 'Maintenance & Service',
      description: 'Expert maintenance and repair services by certified technicians.',
      features: ['Authorized Service', 'Genuine Parts', 'Regular Maintenance', 'Performance Tuning'],
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      benefits: [
        'Expert service by certified luxury car technicians',
        'Genuine OEM parts and accessories',
        'Regular maintenance to preserve vehicle value',
        'Performance tuning and optimization',
        'Comprehensive diagnostic services'
      ],
      process: [
        'Vehicle inspection and diagnostic assessment',
        'Service recommendation and cost estimate',
        'Professional maintenance and repair work',
        'Quality assurance and final inspection',
        'Service documentation and follow-up'
      ]
    },
    {
      icon: CreditCard,
      title: 'Financing Solutions',
      description: 'Flexible financing options tailored to your needs and budget.',
      features: ['Competitive Rates', 'Quick Approval', 'Flexible Terms', 'Lease Options'],
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      benefits: [
        'Competitive interest rates and flexible terms',
        'Quick approval process with minimal paperwork',
        'Multiple financing options to suit your budget',
        'Lease-to-own programs available',
        'Professional financial consultation'
      ],
      process: [
        'Financial consultation and needs assessment',
        'Application submission and documentation',
        'Credit evaluation and approval process',
        'Financing terms negotiation and agreement',
        'Vehicle delivery and payment setup'
      ]
    },
    {
      icon: Users,
      title: 'Concierge Service',
      description: 'Personalized service to help you find the perfect luxury vehicle.',
      features: ['Personal Consultant', 'Vehicle Sourcing', 'Test Drive Arrangement', 'Documentation'],
      image: 'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      benefits: [
        'Dedicated personal consultant for your needs',
        'Access to exclusive vehicle inventory',
        'Professional test drive arrangements',
        'Complete documentation assistance',
        'Personalized service throughout the process'
      ],
      process: [
        'Initial consultation to understand preferences',
        'Vehicle sourcing and selection presentation',
        'Test drive coordination and evaluation',
        'Documentation and paperwork assistance',
        'Ongoing support and relationship management'
      ]
    }
  ];

  const handleContact = () => {
    setContactModalOpen(true);
  };

  const handleLearnMore = (service: any) => {
    setSelectedService(service);
    setServiceModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="text-yellow-500">Premium</span> Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From sales to service, we provide comprehensive luxury automotive solutions 
            tailored to exceed your expectations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-yellow-500/50 transition-all duration-300 group shadow-lg hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-yellow-500/90 p-3 rounded-lg">
                      <IconComponent className="w-6 h-6 text-black" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-yellow-500 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.1) + (featureIndex * 0.05) }}
                        className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleLearnMore(service)}
                    className="w-full bg-transparent border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-3 rounded-lg font-semibold hover:border-yellow-500 hover:text-yellow-500 transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Service Process
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We follow a streamlined process to ensure you receive the best possible service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Initial discussion about your needs' },
              { step: '02', title: 'Assessment', description: 'Detailed evaluation and recommendations' },
              { step: '03', title: 'Service', description: 'Professional service delivery' },
              { step: '04', title: 'Follow-up', description: 'Ongoing support and maintenance' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-yellow-500 text-black w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 rounded-2xl p-12 border border-yellow-500/20">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
              Our team of experts is ready to create a personalized service package 
              that meets your specific luxury automotive needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setContactModalOpen(true)}
                className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors flex items-center justify-center"
              >
                <Users className="w-5 h-5 mr-2" />
                Contact Our Specialists
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modals */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        title="Contact Our Service Specialists"
        message="Ready to experience our premium services? Choose your preferred contact method."
      />

      <ServiceDetailModal
        isOpen={serviceModalOpen}
        onClose={() => setServiceModalOpen(false)}
        service={selectedService}
      />
    </div>
  );
};

export default Services;