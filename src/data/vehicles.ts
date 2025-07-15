export interface Vehicle {
  id: number;
  name: string;
  brand: string;
  model: string;
  price: string;
  dailyRental: string;
  image: string;
  images: string[];
  year: string;
  fuel: string;
  transmission: string;
  category: 'supercar' | 'luxury' | 'sports';
  status: 'available' | 'sold' | 'rented';
  mileage: string;
  engine: string;
  acceleration: string;
  topSpeed: string;
  description: string;
  features: string[];
}

export const vehicles: Vehicle[] = [
  {
    id: 1,
    name: 'Lamborghini Huracán',
    brand: 'Lamborghini',
    model: 'Huracán',
    price: 'KES 45,000,000',
    dailyRental: 'KES 125,000/day',
    image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
    ],
    year: '2024',
    fuel: 'Petrol',
    transmission: 'Automatic',
    category: 'supercar',
    status: 'available',
    mileage: '12 L/100km',
    engine: '5.2L V10',
    acceleration: '0-100 km/h in 3.2s',
    topSpeed: '325 km/h',
    description: 'The Lamborghini Huracán represents the perfect fusion of technology and design. With its naturally aspirated V10 engine and advanced aerodynamics, it delivers an unparalleled driving experience.',
    features: [
      'Carbon Fiber Interior',
      'Advanced Traction Control',
      'Premium Sound System',
      'Navigation System',
      'Parking Sensors',
      'Leather Seats'
    ]
  },
  {
    id: 2,
    name: 'Ferrari 488 GTB',
    brand: 'Ferrari',
    model: '488 GTB',
    price: 'KES 55,000,000',
    dailyRental: 'KES 150,000/day',
    image: 'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
    ],
    year: '2024',
    fuel: 'Petrol',
    transmission: 'Automatic',
    category: 'supercar',
    status: 'available',
    mileage: '11 L/100km',
    engine: '3.9L Twin-Turbo V8',
    acceleration: '0-100 km/h in 3.0s',
    topSpeed: '330 km/h',
    description: 'The Ferrari 488 GTB is a masterpiece of Italian engineering, combining breathtaking performance with elegant design. Its twin-turbocharged V8 engine delivers exceptional power and efficiency.',
    features: [
      'Carbon Fiber Body',
      'Advanced Aerodynamics',
      'Premium Interior',
      'Track Mode',
      'Launch Control',
      'Brembo Brakes'
    ]
  },
  {
    id: 3,
    name: 'McLaren 720S',
    brand: 'McLaren',
    model: '720S',
    price: 'KES 52,000,000',
    dailyRental: 'KES 140,000/day',
    image: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
    ],
    year: '2024',
    fuel: 'Petrol',
    transmission: 'Automatic',
    category: 'supercar',
    status: 'available',
    mileage: '10.5 L/100km',
    engine: '4.0L Twin-Turbo V8',
    acceleration: '0-100 km/h in 2.9s',
    topSpeed: '341 km/h',
    description: 'The McLaren 720S pushes the boundaries of what a supercar can be. With its lightweight carbon fiber construction and powerful twin-turbo V8, it offers track-level performance for the road.',
    features: [
      'Carbon Fiber Monocoque',
      'Adaptive Suspension',
      'Dihedral Doors',
      'Track Telemetry',
      'Premium Audio',
      'Climate Control'
    ]
  },
  {
    id: 4,
    name: 'Rolls Royce Phantom',
    brand: 'Rolls Royce',
    model: 'Phantom',
    price: 'KES 80,000,000',
    dailyRental: 'KES 100,000/day',
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
    ],
    year: '2024',
    fuel: 'Petrol',
    transmission: 'Automatic',
    category: 'luxury',
    status: 'available',
    mileage: '15 L/100km',
    engine: '6.75L Twin-Turbo V12',
    acceleration: '0-100 km/h in 5.3s',
    topSpeed: '250 km/h',
    description: 'The Rolls-Royce Phantom represents the pinnacle of luxury motoring. Handcrafted to perfection, it offers an unparalleled experience in comfort, refinement, and prestige.',
    features: [
      'Handcrafted Interior',
      'Starlight Headliner',
      'Whisper-Quiet Cabin',
      'Massage Seats',
      'Champagne Cooler',
      'Bespoke Options'
    ]
  },
  {
    id: 5,
    name: 'Bentley Continental GT',
    brand: 'Bentley',
    model: 'Continental GT',
    price: 'KES 36,000,000',
    dailyRental: 'KES 80,000/day',
    image: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
    ],
    year: '2024',
    fuel: 'Petrol',
    transmission: 'Automatic',
    category: 'luxury',
    status: 'sold',
    mileage: '13 L/100km',
    engine: '6.0L Twin-Turbo W12',
    acceleration: '0-100 km/h in 3.7s',
    topSpeed: '333 km/h',
    description: 'The Bentley Continental GT combines British luxury with exceptional performance. Its handcrafted interior and powerful W12 engine make it the perfect grand tourer.',
    features: [
      'Handcrafted Leather',
      'Rotating Display',
      'Diamond Quilting',
      'Naim Audio System',
      'All-Wheel Drive',
      'Adaptive Cruise Control'
    ]
  },
  {
    id: 6,
    name: 'Porsche 911 Turbo S',
    brand: 'Porsche',
    model: '911 Turbo S',
    price: 'KES 32,000,000',
    dailyRental: 'KES 90,000/day',
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
    ],
    year: '2024',
    fuel: 'Petrol',
    transmission: 'Automatic',
    category: 'sports',
    status: 'available',
    mileage: '9.5 L/100km',
    engine: '3.8L Twin-Turbo Flat-6',
    acceleration: '0-100 km/h in 2.7s',
    topSpeed: '330 km/h',
    description: 'The Porsche 911 Turbo S is the ultimate expression of the iconic 911. With its twin-turbocharged flat-six engine and advanced all-wheel drive, it delivers incredible performance.',
    features: [
      'Sport Chrono Package',
      'PASM Suspension',
      'Porsche Traction Management',
      'Sport Exhaust',
      'Premium Interior',
      'Infotainment System'
    ]
  },
  {
    id: 7,
    name: 'Aston Martin DB11',
    brand: 'Aston Martin',
    model: 'DB11',
    price: 'KES 42,000,000',
    dailyRental: 'KES 115,000/day',
    image: 'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
    ],
    year: '2023',
    fuel: 'Petrol',
    transmission: 'Automatic',
    category: 'luxury',
    status: 'available',
    mileage: '12.5 L/100km',
    engine: '5.2L Twin-Turbo V12',
    acceleration: '0-100 km/h in 3.9s',
    topSpeed: '322 km/h',
    description: 'The Aston Martin DB11 embodies British elegance and performance. Its twin-turbo V12 engine and stunning design make it a true grand tourer.',
    features: [
      'Handcrafted Interior',
      'Bang & Olufsen Audio',
      'Adaptive Dampers',
      'Carbon Fiber Trim',
      'Heated Seats',
      'Satellite Navigation'
    ]
  },
  {
    id: 8,
    name: 'Maserati MC20',
    brand: 'Maserati',
    model: 'MC20',
    price: 'KES 37,000,000',
    dailyRental: 'KES 105,000/day',
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
    ],
    year: '2023',
    fuel: 'Petrol',
    transmission: 'Automatic',
    category: 'supercar',
    status: 'available',
    mileage: '11.5 L/100km',
    engine: '3.0L Twin-Turbo V6',
    acceleration: '0-100 km/h in 2.9s',
    topSpeed: '325 km/h',
    description: 'The Maserati MC20 marks the return of Maserati to the supercar segment. With its innovative Nettuno engine and butterfly doors, it combines Italian passion with cutting-edge technology.',
    features: [
      'Butterfly Doors',
      'Carbon Fiber Body',
      'Nettuno Engine',
      'Track Mode',
      'Premium Alcantara',
      'Advanced Electronics'
    ]
  },
  {
    id: 9,
    name: 'BMW M8 Competition',
    brand: 'BMW',
    model: 'M8 Competition',
    price: 'KES 28,000,000',
    dailyRental: 'KES 75,000/day',
    image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
    ],
    year: '2022',
    fuel: 'Petrol',
    transmission: 'Automatic',
    category: 'sports',
    status: 'available',
    mileage: '11 L/100km',
    engine: '4.4L Twin-Turbo V8',
    acceleration: '0-100 km/h in 3.2s',
    topSpeed: '305 km/h',
    description: 'The BMW M8 Competition represents the pinnacle of BMW performance. With its powerful twin-turbo V8 and advanced M technology, it delivers exceptional driving dynamics.',
    features: [
      'M Competition Package',
      'Carbon Fiber Roof',
      'M Adaptive Suspension',
      'Harman Kardon Audio',
      'M Sport Seats',
      'Head-Up Display'
    ]
  },
  {
    id: 10,
    name: 'Mercedes-AMG GT 63 S',
    brand: 'Mercedes-AMG',
    model: 'GT 63 S',
    price: 'KES 35,000,000',
    dailyRental: 'KES 95,000/day',
    image: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
    ],
    year: '2022',
    fuel: 'Petrol',
    transmission: 'Automatic',
    category: 'sports',
    status: 'rented',
    mileage: '12 L/100km',
    engine: '4.0L Twin-Turbo V8',
    acceleration: '0-100 km/h in 3.2s',
    topSpeed: '315 km/h',
    description: 'The Mercedes-AMG GT 63 S combines luxury with track-ready performance. Its handcrafted AMG engine and sophisticated interior make it the perfect grand tourer.',
    features: [
      'AMG Performance Seats',
      'Burmester Audio',
      'AMG Ride Control',
      'Panoramic Roof',
      'AMG Track Pace',
      'Nappa Leather Interior'
    ]
  },
  {
    id: 11,
    name: 'Jaguar F-Type R',
    brand: 'Jaguar',
    model: 'F-Type R',
    price: 'KES 25,000,000',
    dailyRental: 'KES 70,000/day',
    image: 'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
    ],
    year: '2021',
    fuel: 'Petrol',
    transmission: 'Automatic',
    category: 'sports',
    status: 'available',
    mileage: '13 L/100km',
    engine: '5.0L Supercharged V8',
    acceleration: '0-100 km/h in 3.5s',
    topSpeed: '300 km/h',
    description: 'The Jaguar F-Type R is a pure sports car that embodies British performance heritage. Its supercharged V8 engine and distinctive design make it an icon of modern automotive excellence.',
    features: [
      'Supercharged V8 Engine',
      'Active Sports Exhaust',
      'Adaptive Dynamics',
      'Premium Meridian Audio',
      'Performance Seats',
      'Touch Pro Infotainment'
    ]
  },
  {
    id: 12,
    name: 'Lexus LC 500',
    brand: 'Lexus',
    model: 'LC 500',
    price: 'KES 22,000,000',
    dailyRental: 'KES 65,000/day',
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
    ],
    year: '2021',
    fuel: 'Petrol',
    transmission: 'Automatic',
    category: 'luxury',
    status: 'available',
    mileage: '14 L/100km',
    engine: '5.0L Naturally Aspirated V8',
    acceleration: '0-100 km/h in 4.4s',
    topSpeed: '270 km/h',
    description: 'The Lexus LC 500 represents Japanese luxury and craftsmanship at its finest. With its naturally aspirated V8 and stunning design, it offers a unique blend of performance and refinement.',
    features: [
      'Takumi Craftsmanship',
      'Mark Levinson Audio',
      'Adaptive Variable Suspension',
      'Alcantara Interior',
      'Head-Up Display',
      'Safety System+ 2.0'
    ]
  },
  {
    id: 7,
    name: 'Aston Martin DB11',
    brand: 'Aston Martin',
    model: 'DB11',
    price: 'KES 42,000,000',
    dailyRental: 'KES 115,000/day',
    image: 'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
    ],
    year: '2024',
    fuel: 'Petrol',
    transmission: 'Automatic',
    category: 'luxury',
    status: 'available',
    mileage: '12.5 L/100km',
    engine: '5.2L Twin-Turbo V12',
    acceleration: '0-100 km/h in 3.9s',
    topSpeed: '322 km/h',
    description: 'The Aston Martin DB11 embodies British elegance and performance. Its twin-turbo V12 engine and stunning design make it a true grand tourer.',
    features: [
      'Handcrafted Interior',
      'Bang & Olufsen Audio',
      'Adaptive Dampers',
      'Carbon Fiber Trim',
      'Heated Seats',
      'Satellite Navigation'
    ]
  },
  {
    id: 8,
    name: 'Maserati MC20',
    brand: 'Maserati',
    model: 'MC20',
    price: 'KES 37,000,000',
    dailyRental: 'KES 105,000/day',
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
    ],
    year: '2024',
    fuel: 'Petrol',
    transmission: 'Automatic',
    category: 'supercar',
    status: 'available',
    mileage: '11.5 L/100km',
    engine: '3.0L Twin-Turbo V6',
    acceleration: '0-100 km/h in 2.9s',
    topSpeed: '325 km/h',
    description: 'The Maserati MC20 marks the return of Maserati to the supercar segment. With its innovative Nettuno engine and butterfly doors, it combines Italian passion with cutting-edge technology.',
    features: [
      'Butterfly Doors',
      'Carbon Fiber Body',
      'Nettuno Engine',
      'Track Mode',
      'Premium Alcantara',
      'Advanced Electronics'
    ]
  },
  {
    id: 7,
    name: 'Aston Martin DB11',
    brand: 'Aston Martin',
    model: 'DB11',
    price: 'KES 42,000,000',
    dailyRental: 'KES 115,000/day',
    image: 'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
    ],
    year: '2024',
    fuel: 'Petrol',
    transmission: 'Automatic',
    category: 'luxury',
    status: 'available',
    mileage: '12.5 L/100km',
    engine: '5.2L Twin-Turbo V12',
    acceleration: '0-100 km/h in 3.9s',
    topSpeed: '322 km/h',
    description: 'The Aston Martin DB11 embodies British elegance and performance. Its twin-turbo V12 engine and stunning design make it a true grand tourer.',
    features: [
      'Handcrafted Interior',
      'Bang & Olufsen Audio',
      'Adaptive Dampers',
      'Carbon Fiber Trim',
      'Heated Seats',
      'Satellite Navigation'
    ]
  },
  {
    id: 8,
    name: 'Maserati MC20',
    brand: 'Maserati',
    model: 'MC20',
    price: 'KES 37,000,000',
    dailyRental: 'KES 105,000/day',
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
    ],
    year: '2024',
    fuel: 'Petrol',
    transmission: 'Automatic',
    category: 'supercar',
    status: 'available',
    mileage: '11.5 L/100km',
    engine: '3.0L Twin-Turbo V6',
    acceleration: '0-100 km/h in 2.9s',
    topSpeed: '325 km/h',
    description: 'The Maserati MC20 marks the return of Maserati to the supercar segment. With its innovative Nettuno engine and butterfly doors, it combines Italian passion with cutting-edge technology.',
    features: [
      'Butterfly Doors',
      'Carbon Fiber Body',
      'Nettuno Engine',
      'Track Mode',
      'Premium Alcantara',
      'Advanced Electronics'
    ]
  }
];