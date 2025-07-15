import React from 'react';
import { motion } from 'framer-motion';
import { vehicles, Vehicle } from '../data/vehicles';
import VehicleCard from './VehicleCard';

interface SimilarVehiclesProps {
  currentVehicle: Vehicle;
}

const SimilarVehicles: React.FC<SimilarVehiclesProps> = ({ currentVehicle }) => {
  const similarVehicles = vehicles
    .filter(vehicle => 
      vehicle.id !== currentVehicle.id && 
      vehicle.category === currentVehicle.category
    )
    .slice(0, 3);

  if (similarVehicles.length === 0) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="mt-16"
    >
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
        Similar Vehicles
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {similarVehicles.map((vehicle, index) => (
          <VehicleCard
            key={vehicle.id}
            vehicle={vehicle}
            viewMode="sale"
            index={index}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default SimilarVehicles;