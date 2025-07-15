import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, MessageCircle, Calendar, Fuel, Settings, Gauge, Zap, Clock, CheckCircle } from 'lucide-react';
import { vehicles } from '../data/vehicles';
import SimilarVehicles from '../components/SimilarVehicles';

const VehicleDetail = () => {
  const { id } = useParams();
  const vehicle = vehicles.find(v => v.id === parseInt(id || '0'));
  const [selectedImage, setSelectedImage] = useState(0);
  const [viewMode, setViewMode] = useState<'sale' | 'rental'>('sale');

  if (!vehicle) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Vehicle Not Found</h1>
          <Link to="/vehicles" className="text-yellow-500 hover:underline">
            Back to Vehicles
          </Link>
        </div>
      </div>
    );
  }

  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in the ${vehicle.name} (${viewMode === 'sale' ? 'Purchase' : 'Rental'})`;
    window.open(`https://wa.me/254713380803?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+254713380803', '_self');
  };

  const specs = [
    { icon: Calendar, label: 'Year', value: vehicle.year },
    { icon: Fuel, label: 'Fuel Type', value: vehicle.fuel },
    { icon: Settings, label: 'Transmission', value: vehicle.transmission },
    { icon: Gauge, label: 'Mileage', value: vehicle.mileage },
    { icon: Zap, label: 'Engine', value: vehicle.engine },
    { icon: Clock, label: '0-100 km/h', value: vehicle.acceleration }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/vehicles"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-yellow-500 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Vehicles
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <motion.img
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                src={vehicle.images[selectedImage]}
                alt={vehicle.name}
                className="w-full h-96 object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  vehicle.status === 'available'
                    ? 'bg-green-500 text-white'
                    : vehicle.status === 'sold'
                    ? 'bg-red-500 text-white'
                    : 'bg-yellow-500 text-black'
                }`}>
                  {vehicle.status}
                </span>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-3 gap-4">
              {vehicle.images.map((image, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedImage(index)}
                  className={`relative rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? 'border-yellow-500'
                      : 'border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${vehicle.name} ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Header */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {vehicle.name}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                {vehicle.brand} {vehicle.model}
              </p>
            </div>

            {/* View Mode Toggle */}
            <div className="flex justify-start">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-1 flex border border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setViewMode('sale')}
                  className={`px-4 py-2 rounded-md font-semibold transition-all ${
                    viewMode === 'sale'
                      ? 'bg-yellow-500 text-black'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  Purchase
                </button>
                <button
                  onClick={() => setViewMode('rental')}
                  className={`px-4 py-2 rounded-md font-semibold transition-all ${
                    viewMode === 'rental'
                      ? 'bg-yellow-500 text-black'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  Rental
                </button>
              </div>
            </div>

            {/* Price */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-yellow-500 mb-2">
                {viewMode === 'sale' ? vehicle.price : vehicle.dailyRental}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {viewMode === 'sale' ? 'Purchase Price' : 'Daily Rental Rate'}
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Specifications
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {specs.map((spec, index) => {
                  const IconComponent = spec.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="bg-yellow-500/20 p-2 rounded-lg">
                        <IconComponent className="w-4 h-4 text-yellow-500" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {spec.label}
                        </div>
                        <div className="font-semibold text-gray-900 dark:text-white">
                          {spec.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Features */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Features
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {vehicle.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsApp}
                className="bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCall}
                className="bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            About This Vehicle
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
            {vehicle.description}
          </p>
        </motion.div>

        {/* Similar Vehicles */}
        <SimilarVehicles currentVehicle={vehicle} />
      </div>
    </div>
  );
};

export default VehicleDetail;