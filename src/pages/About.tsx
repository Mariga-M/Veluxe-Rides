import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, TrendingUp, CheckCircle, Star, Shield, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, number: '7+', label: 'Years of Excellence' },
    { icon: Users, number: '1000+', label: 'Satisfied Clients' },
    { icon: Globe, number: '50+', label: 'Countries Served' },
    { icon: TrendingUp, number: '100+', label: 'Vehicles Sold' }
  ];

  const achievements = [
    'Authorized dealer for premium luxury brands',
    'Award-winning customer service team',
    'Comprehensive warranty and service packages',
    'International shipping and logistics',
    'Certified pre-owned vehicle program',
    '24/7 customer support and assistance'
  ];

  const values = [
    {
      icon: Star,
      title: 'Excellence',
      description: 'We strive for perfection in every aspect of our service, from vehicle selection to customer care.'
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Building lasting relationships through transparency, honesty, and reliable service.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our love for luxury automobiles drives us to deliver exceptional experiences.'
    }
  ];

  const team = [
    {
      name: 'Ahmed Al-Rashid',
      position: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Visionary leader with 20+ years in luxury automotive industry'
    },
    {
      name: 'Sarah Johnson',
      position: 'Sales Director',
      image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Expert in luxury vehicle sales and customer relations'
    },
    {
      name: 'Marco Rossi',
      position: 'Service Manager',
      image: 'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Certified technician specializing in exotic car maintenance'
    }
  ];

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
            About <span className="text-yellow-500">Veluxe Rides</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Leading the luxury automotive industry with unparalleled service, 
            premium vehicles, and exceptional customer experiences since 2009.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Your Trusted Partner in Luxury Automotive Excellence
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
              At Veluxe Rides, we've been setting the standard for luxury automotive sales and services 
              in the Kenya. Our passion for exceptional vehicles and commitment to customer 
              satisfaction has made us the preferred choice for discerning clients worldwide.
            </p>

            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
              From rare supercars to elegant luxury sedans, we curate an exclusive collection 
              of the world's finest automobiles. Our team of experts ensures every vehicle 
              meets our rigorous standards of quality, performance, and luxury.
            </p>

            {/* Achievements */}
            <div className="space-y-3 mb-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center"
                >
                  <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/contact'}
              className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Luxury car showroom"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-8 -left-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-2xl"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-500 mb-1">7+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years of Trust</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-yellow-500" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 text-center hover:border-yellow-500/50 transition-all duration-300"
                >
                  <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The passionate professionals behind Veluxe Rides
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-yellow-500/50 transition-all duration-300"
              >
                <div className="h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <Users className="w-16 h-16 text-gray-400" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-yellow-500 font-semibold mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 rounded-2xl p-12 border border-yellow-500/20">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              "To provide an unparalleled luxury automotive experience by offering the world's 
              finest vehicles, exceptional service, and building lasting relationships with our 
              clients based on trust, integrity, and excellence."
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;