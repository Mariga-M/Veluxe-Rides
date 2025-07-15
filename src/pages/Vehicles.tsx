import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Grid, List } from 'lucide-react';
import { vehicles } from '../data/vehicles';
import VehicleCard from '../components/VehicleCard';

const Vehicles = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [viewMode, setViewMode] = useState<'sale' | 'rental'>('sale');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('all');
  const [yearRange, setYearRange] = useState('all');
  const [brandFilter, setBrandFilter] = useState('all');
  const [fuelFilter, setFuelFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [layoutMode, setLayoutMode] = useState<'grid' | 'list'>('grid');
  const [displayCount, setDisplayCount] = useState(6);

  const filteredVehicles = useMemo(() => {
    return vehicles.filter(vehicle => {
      // Category filter
      if (activeTab !== 'all' && vehicle.category !== activeTab) return false;
      
      // Search filter
      if (searchTerm && !vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase())) return false;
      
      // Price filter (simplified for demo)
      if (priceRange !== 'all') {
        const price = parseInt(vehicle.price.replace(/[^\d]/g, '')) / 1000000; // Convert to millions
        if (priceRange === 'under-25m' && price >= 25) return false;
        if (priceRange === '25m-35m' && (price < 25 || price >= 35)) return false;
        if (priceRange === '35m-50m' && (price < 35 || price >= 50)) return false;
        if (priceRange === '50m-70m' && (price < 50 || price >= 70)) return false;
        if (priceRange === 'over-70m' && price < 70) return false;
      }
      
      // Year filter
      if (yearRange !== 'all') {
        const year = parseInt(vehicle.year);
        if (yearRange === '2024' && year !== 2024) return false;
        if (yearRange === '2023' && year !== 2023) return false;
        if (yearRange === '2022' && year !== 2022) return false;
        if (yearRange === '2021' && year !== 2021) return false;
        if (yearRange === '2020' && year !== 2020) return false;
      }
      
      // Brand filter
      if (brandFilter !== 'all' && vehicle.brand !== brandFilter) return false;
      
      // Fuel filter
      if (fuelFilter !== 'all' && vehicle.fuel !== fuelFilter) return false;
      
      // Status filter
      if (statusFilter !== 'all' && vehicle.status !== statusFilter) return false;
      
      return true;
    });
  }, [activeTab, searchTerm, priceRange, yearRange, brandFilter, fuelFilter, statusFilter]);

  const displayedVehicles = filteredVehicles.slice(0, displayCount);
  const hasMoreVehicles = displayCount < filteredVehicles.length;

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + 6);
  };

  const categories = [
    { id: 'all', label: 'All Vehicles', count: vehicles.length },
    { id: 'supercar', label: 'Supercars', count: vehicles.filter(v => v.category === 'supercar').length },
    { id: 'luxury', label: 'Luxury', count: vehicles.filter(v => v.category === 'luxury').length },
    { id: 'sports', label: 'Sports', count: vehicles.filter(v => v.category === 'sports').length }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="text-yellow-500">Vehicle Collection</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore our extensive collection of luxury supercars and premium vehicles
          </p>
        </motion.div>

        {/* View Mode Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg p-1 flex border border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setViewMode('sale')}
              className={`px-6 py-3 rounded-md font-semibold transition-all ${
                viewMode === 'sale'
                  ? 'bg-yellow-500 text-black'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              For Sale
            </button>
            <button
              onClick={() => setViewMode('rental')}
              className={`px-6 py-3 rounded-md font-semibold transition-all ${
                viewMode === 'rental'
                  ? 'bg-yellow-500 text-black'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              For Rent
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </h3>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Search
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search vehicles..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Category
                </label>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveTab(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center justify-between ${
                        activeTab === category.id
                          ? 'bg-yellow-500 text-black'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <span className="capitalize">{category.label}</span>
                      <span className="text-sm">{category.count}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Price Range
                </label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  <option value="all">All Prices</option>
                  <option value="under-25m">Under KES 25M</option>
                  <option value="25m-35m">KES 25M - 35M</option>
                  <option value="35m-50m">KES 35M - 50M</option>
                  <option value="50m-70m">KES 50M - 70M</option>
                  <option value="over-70m">Over KES 70M</option>
                </select>
              </div>

              {/* Year */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Year
                </label>
                <select
                  value={yearRange}
                  onChange={(e) => setYearRange(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  <option value="all">All Years</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                </select>
              </div>

              {/* Brand Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Brand
                </label>
                <select
                  value={brandFilter}
                  onChange={(e) => setBrandFilter(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  <option value="all">All Brands</option>
                  <option value="Lamborghini">Lamborghini</option>
                  <option value="Ferrari">Ferrari</option>
                  <option value="McLaren">McLaren</option>
                  <option value="Rolls Royce">Rolls Royce</option>
                  <option value="Bentley">Bentley</option>
                  <option value="Porsche">Porsche</option>
                  <option value="Aston Martin">Aston Martin</option>
                  <option value="Maserati">Maserati</option>
                  <option value="BMW">BMW</option>
                  <option value="Mercedes-AMG">Mercedes-AMG</option>
                  <option value="Jaguar">Jaguar</option>
                  <option value="Lexus">Lexus</option>
                </select>
              </div>

              {/* Fuel Type Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Fuel Type
                </label>
                <select
                  value={fuelFilter}
                  onChange={(e) => setFuelFilter(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  <option value="all">All Fuel Types</option>
                  <option value="Petrol">Petrol</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Electric">Electric</option>
                </select>
              </div>

              {/* Status Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Availability
                </label>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  <option value="all">All Status</option>
                  <option value="available">Available</option>
                  <option value="sold">Sold</option>
                  <option value="rented">Currently Rented</option>
                </select>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => {
                  setActiveTab('all');
                  setSearchTerm('');
                  setPriceRange('all');
                  setYearRange('all');
                  setBrandFilter('all');
                  setFuelFilter('all');
                  setStatusFilter('all');
                }}
                className="w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          </motion.div>

          {/* Vehicles Grid */}
          <div className="lg:col-span-3">
            {/* Results Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-between mb-6"
            >
              <div className="text-gray-600 dark:text-gray-400">
                Showing {filteredVehicles.length} of {vehicles.length} vehicles
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setLayoutMode('grid')}
                  className={`p-2 rounded-lg ${
                    layoutMode === 'grid'
                      ? 'bg-yellow-500 text-black'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setLayoutMode('list')}
                  className={`p-2 rounded-lg ${
                    layoutMode === 'list'
                      ? 'bg-yellow-500 text-black'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Vehicles */}
            <AnimatePresence mode="wait">
              {filteredVehicles.length > 0 ? (
                <motion.div
                  key="vehicles-grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`grid gap-8 ${
                    layoutMode === 'grid'
                      ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
                      : 'grid-cols-1'
                  }`}
                >
                  {displayedVehicles.map((vehicle, index) => (
                    <VehicleCard
                      key={vehicle.id}
                      vehicle={vehicle}
                      viewMode={viewMode}
                      index={index}
                    />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="no-results"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-center py-16"
                >
                  <div className="text-gray-400 text-6xl mb-4">🚗</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    No vehicles found
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Try adjusting your filters to see more results
                  </p>
                  <button
                    onClick={() => {
                      setActiveTab('all');
                      setSearchTerm('');
                      setPriceRange('all');
                      setYearRange('all');
                    }}
                    className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
                  >
                    Clear Filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            
            {/* Load More Button */}
            {hasMoreVehicles && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-center mt-12"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLoadMore}
                  className="bg-transparent border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 hover:text-black transition-all duration-300"
                >
                  Load More Vehicles
                </motion.button>
              </motion.div>
            )}
          </div>
        </div>

        {/* Reset display count when filters change */}
        {React.useEffect(() => {
          setDisplayCount(6);
        }, [activeTab, searchTerm, priceRange, yearRange, brandFilter, fuelFilter, statusFilter])}
      </div>
    </div>
  );
};

export default Vehicles;