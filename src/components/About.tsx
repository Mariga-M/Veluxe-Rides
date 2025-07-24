import React from 'react';
import { Award, Users, Globe, TrendingUp, CheckCircle } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, number: '7+', label: 'Years of Excellence' },
    { icon: Users, number: '1000+', label: 'Satisfied Clients' },
    { icon: Globe, number: '50+', label: 'Countries Served' },
    { icon: TrendingUp, number: '500+', label: 'Vehicles Sold' }
  ];

  const achievements = [
    'Authorized dealer for premium luxury brands',
    'Award-winning customer service team',
    'Comprehensive warranty and service packages',
    'International shipping and logistics',
    'Certified pre-owned vehicle program',
    '24/7 customer support and assistance'
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-yellow-400">Veluxe Rides</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Leading the luxury automotive industry with unparalleled service, 
            premium vehicles, and exceptional customer experiences since 2009.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Your Trusted Partner in Luxury Automotive Excellence
            </h3>
            
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              At Veluxe Rides, we've been setting the standard for luxury automotive sales and services 
              in Kenya. Our passion for exceptional vehicles and commitment to customer 
              satisfaction has made us the preferred choice for discerning clients worldwide.
            </p>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              From rare supercars to elegant luxury sedans, we curate an exclusive collection 
              of the world's finest automobiles. Our team of experts ensures every vehicle 
              meets our rigorous standards of quality, performance, and luxury.
            </p>

            {/* Achievements */}
            <div className="space-y-3 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{achievement}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => window.location.href = '/contact'}
              className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              Learn More About Us
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Luxury car showroom"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-black border border-gray-800 rounded-xl p-6 shadow-2xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-1">7+</div>
                <div className="text-sm text-gray-400">Years of Trust</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-yellow-400/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-2xl p-12 border border-yellow-400/20">
            <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              "To provide an unparalleled luxury automotive experience by offering the world's 
              finest vehicles, exceptional service, and building lasting relationships with our 
              clients based on trust, integrity, and excellence."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;