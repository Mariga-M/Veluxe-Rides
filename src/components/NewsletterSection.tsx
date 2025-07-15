import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate subscription
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 dark:from-yellow-500/5 dark:to-yellow-600/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Stay Updated with Luxury
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Get exclusive access to new arrivals, special offers, and luxury automotive insights
          </p>

          {isSubscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 flex items-center justify-center"
            >
              <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
              <span className="text-green-700 dark:text-green-400 font-semibold">
                Thank you for subscribing! Check your email for confirmation.
              </span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:border-yellow-500 focus:outline-none transition-colors"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors flex items-center justify-center"
              >
                <Send className="w-4 h-4 mr-2" />
                Subscribe
              </motion.button>
            </form>
          )}

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            No spam, unsubscribe at any time. Your privacy is important to us.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;