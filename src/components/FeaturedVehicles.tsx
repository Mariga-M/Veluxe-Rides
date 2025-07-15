import React, { useState } from 'react';
import { ArrowRight, Calendar, Fuel, Settings, Eye } from 'lucide-react';

const vehicles = [
  {
    id: 1,
    name: 'Lamborghini Huracán',
    price: 'AED 1,200,000',
    dailyRental: 'AED 3,500/day',
    image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    year: '2024',
    fuel: 'Petrol',
    transmission: 'Automatic',
    category: 'supercar',
    status: 'available'
  },
  {
    id: 2,
    name: 'Ferrari 488 GTB',
    price: 'AED 1,450,000',
    dailyRental: 'AED 4,200/day',
    image: 'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    year: '2024',
    fuel: 'Petrol',
    transmission: 'Automatic',
    category: 'supercar',
    status: 'available'
  },
  {
    id: 3,
    name: 'McLaren 720S',
    price: 'AED 1,350,000',
    dailyRental: 'AED 3,800/day',
    image: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    year: '2024',
    fuel: 'Petrol',
    transmission: 'Automatic',
    category: 'supercar',
    status: 'available'
  },
  {
    id: 4,
    name: 'Rolls Royce Phantom',
    price: 'AED 2,100,000',
    dailyRental: 'AED 2,800/day',
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    year: '2024',
    fuel: 'Petrol',
    transmission: 'Automatic',
    category: 'luxury',
    status: 'available'
  },
  {
    id: 5,
    name: 'Bentley Continental GT',
    price: 'AED 950,000',
    dailyRental: 'AED 2,200/day',
    image: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    year: '2024',
    fuel: 'Petrol',
    transmission: 'Automatic',
    category: 'luxury',
    status: 'sold'
  },
  {
    id: 6,
    name: 'Porsche 911 Turbo S',
    price: 'AED 850,000',
    dailyRental: 'AED 2,500/day',
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    year: '2024',
    fuel: 'Petrol',
    transmission: 'Automatic',
    category: 'sports',
    status: 'available'
  }
];

const FeaturedVehicles = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [viewMode, setViewMode] = useState('sale');

  const filteredVehicles = vehicles.filter(vehicle => {
    if (activeTab === 'all') return true;
    return vehicle.category === activeTab;
  });

  return (
    <section id="vehicles" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-yellow-400">Premium</span> Collection
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover our exclusive selection of luxury supercars and premium vehicles, 
            available for both purchase and rental.
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-black rounded-lg p-1 flex">
            <button
              onClick={() => setViewMode('sale')}
              className={`px-6 py-3 rounded-md font-semibold transition-all ${
                viewMode === 'sale'
                  ? 'bg-yellow-400 text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              For Sale
            </button>
            <button
              onClick={() => setViewMode('rental')}
              className={`px-6 py-3 rounded-md font-semibold transition-all ${
                viewMode === 'rental'
                  ? 'bg-yellow-400 text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              For Rent
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'supercar', 'luxury', 'sports'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-3 rounded-lg font-semibold capitalize transition-all ${
                activeTab === category
                  ? 'bg-yellow-400 text-black'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              {category === 'all' ? 'All Vehicles' : category}
            </button>
          ))}
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-black rounded-xl overflow-hidden border border-gray-800 hover:border-yellow-400/50 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    vehicle.status === 'available'
                      ? 'bg-green-500 text-white'
                      : 'bg-red-500 text-white'
                  }`}>
                    {vehicle.status}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <button className="bg-yellow-400 text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{vehicle.name}</h3>
                
                {/* Price */}
                <div className="mb-4">
                  <div className="text-2xl font-bold text-yellow-400">
                    {viewMode === 'sale' ? vehicle.price : vehicle.dailyRental}
                  </div>
                  <div className="text-sm text-gray-400">
                    {viewMode === 'sale' ? 'Purchase Price' : 'Daily Rental'}
                  </div>
                </div>

                {/* Specs */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{vehicle.year}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Fuel className="w-4 h-4" />
                    <span>{vehicle.fuel}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Settings className="w-4 h-4" />
                    <span>{vehicle.transmission}</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                    {viewMode === 'sale' ? 'Buy Now' : 'Rent Now'}
                  </button>
                  <button className="px-4 py-3 border border-gray-600 text-white rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300 flex items-center mx-auto">
            View All Vehicles
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles;