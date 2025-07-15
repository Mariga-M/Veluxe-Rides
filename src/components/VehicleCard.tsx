import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Fuel, Settings, Eye, Phone, MessageCircle } from 'lucide-react';
import { Vehicle } from '../data/vehicles';

interface VehicleCardProps {
  vehicle: Vehicle;
  viewMode: 'sale' | 'rental';
  index?: number;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, viewMode, index = 0 }) => {
  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in the ${vehicle.name} (${viewMode === 'sale' ? 'Purchase' : 'Rental'})`;
    window.open(`https://wa.me/254713380803?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+254713380803', '_self');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-yellow-500/50 dark:hover:border-yellow-500/50 transition-all duration-300 group shadow-lg hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4">
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              vehicle.status === 'available'
                ? 'bg-green-500 text-white'
                : vehicle.status === 'sold'
                ? 'bg-red-500 text-white'
                : 'bg-yellow-500 text-black'
            }`}
          >
            {vehicle.status}
          </motion.span>
        </div>
        <div className="absolute top-4 left-4">
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
            className="px-3 py-1 rounded-full text-xs font-semibold bg-black/70 text-white capitalize"
          >
            {vehicle.category}
          </motion.span>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black/20 flex items-center justify-center"
        >
          <Link to={`/vehicle/${vehicle.id}`}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-yellow-500 text-black p-3 rounded-full shadow-lg"
            >
              <Eye className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-yellow-500 transition-colors"
        >
          {vehicle.name}
        </motion.h3>
        
        {/* Price */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-4"
        >
          <div className="text-2xl font-bold text-yellow-500">
            {viewMode === 'sale' ? vehicle.price : vehicle.dailyRental}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {viewMode === 'sale' ? 'Purchase Price' : 'Daily Rental'}
          </div>
        </motion.div>

        {/* Specs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-6"
        >
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
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-2"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleWhatsApp}
            className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCall}
            className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            <Phone className="w-4 h-4 mr-2" />
            Call
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default VehicleCard;