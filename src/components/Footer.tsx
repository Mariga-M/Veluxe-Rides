import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin, Send } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = React.useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail('');
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link to="/" className="flex items-center mb-6">
              <div className="text-2xl font-bold text-yellow-500">VELUXE</div>
              <div className="text-2xl font-light text-gray-900 dark:text-white ml-1">RIDES</div>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Your premier destination for luxury supercars and premium automotive services. 
              Experience excellence in every drive.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gray-200 dark:bg-gray-800 p-3 rounded-lg hover:bg-yellow-500 hover:text-black transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/vehicles', label: 'Our Vehicles' },
                { to: '/services', label: 'Services' },
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact' }
              ].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    to={link.to}
                    className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Luxury Car Sales',
                'Exotic Rentals',
                'Maintenance',
                'Insurance',
                'Trade-in',
                'Concierge'
              ].map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    to="/services"
                    className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 transition-colors"
                  >
                    {service}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-6">Contact Info</h3>
            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start space-x-3"
              >
                <Phone className="w-5 h-5 text-yellow-500 mt-1" />
                <div>
                  <p className="text-gray-600 dark:text-gray-400">+254 713380803</p>
                  <p className="text-gray-600 dark:text-gray-400">+254 700123456</p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start space-x-3"
              >
                <Mail className="w-5 h-5 text-yellow-500 mt-1" />
                <div>
                  <p className="text-gray-600 dark:text-gray-400">info@veluxerides.ke</p>
                  <p className="text-gray-600 dark:text-gray-400">sales@veluxerides.ke</p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start space-x-3"
              >
                <MapPin className="w-5 h-5 text-yellow-500 mt-1" />
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Kangaru Road</p>
                  <p className="text-gray-600 dark:text-gray-400">Nairobi, Kenya</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-8 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-2">Stay Updated</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Subscribe to get the latest luxury car news and exclusive offers.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex w-full md:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-l-lg px-4 py-3 text-gray-900 dark:text-white focus:border-yellow-500 focus:outline-none flex-1 md:w-64"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-yellow-500 text-black px-6 py-3 rounded-r-lg font-semibold hover:bg-yellow-400 transition-colors flex items-center"
              >
                <Send className="w-4 h-4 mr-2" />
                Subscribe
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-6 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between"
        >
          <div className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Veluxe Rides. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ y: -1 }}
                className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;