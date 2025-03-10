import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Sun, Snowflake, ArrowRight, Star, Users, Coffee, Wifi } from 'lucide-react';

const promotions = [
  {
    id: 'holiday-special',
    title: 'Holiday Special',
    description: 'Celebrate the festive season with our exclusive holiday package including spa treatments and gourmet dining.',
    price: 599,
    duration: '3 nights',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1470',
    icon: Calendar,
    features: ['Luxury Suite', 'Spa Access', 'Gourmet Dining', 'Airport Transfer'],
    accent: 'from-[#c4a053] to-amber-600'
  },
  {
    id: 'winter-escape',
    title: 'Winter Escape',
    description: 'Cozy up this winter with our specially curated package featuring indoor activities and warming treats.',
    price: 499,
    duration: '2 nights',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=1470',
    icon: Snowflake,
    features: ['Fireplace Suite', 'Hot Chocolate Bar', 'Spa Treatment', 'Winter Activities'],
    accent: 'from-[#c4a053] to-amber-500'
  },
  {
    id: 'summer-delight',
    title: 'Summer Delight',
    description: 'Experience the perfect summer getaway with outdoor activities and refreshing amenities.',
    price: 699,
    duration: '4 nights',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1470',
    icon: Sun,
    features: ['Ocean View Suite', 'Pool Access', 'Beach Activities', 'Sunset Dinner'],
    accent: 'from-[#c4a053] to-amber-400'
  }
];

const PromotionCard = ({ promotion, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={promotion.image}
          alt={promotion.title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
        />
      </div>
      
      <div className="p-8">
        <div className="flex items-center gap-3 mb-4">
          <promotion.icon className="w-6 h-6 text-[#c4a053]" />
          <h3 className="text-2xl font-semibold">{promotion.title}</h3>
        </div>
        
        <p className="text-gray-600 mb-6">{promotion.description}</p>
        
        <div className="flex flex-col gap-4 mb-8">
          {promotion.features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 + 0.5 }}
              className="flex items-center gap-2"
            >
              <Star className="w-5 h-5 text-[#c4a053]" />
              <span className="text-gray-700">{feature}</span>
            </motion.div>
          ))}
        </div>
        
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm text-gray-500">Starting from</p>
            <p className="text-3xl font-bold text-[#c4a053]">${promotion.price}</p>
            <p className="text-sm text-gray-500">{promotion.duration}</p>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#c4a053] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#b38f42] transition-colors duration-300"
          >
            Book Now
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const Amenities = () => {
  const amenities = [
    { icon: Users, label: 'Family Friendly' },
    { icon: Coffee, label: 'Room Service' },
    { icon: Wifi, label: 'Free Wi-Fi' }
  ];

  return (
    <div className="flex justify-center gap-12 mt-16">
      {amenities.map((amenity, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 + 1 }}
          className="flex flex-col items-center gap-2"
        >
          <amenity.icon className="w-8 h-8 text-[#c4a053]" />
          <span className="text-gray-600">{amenity.label}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default function PromotionsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Seasonal Promotions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated seasonal packages designed for unforgettable stays
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promotions.map((promotion, index) => (
            <PromotionCard key={promotion.id} promotion={promotion} index={index} />
          ))}
        </div>

        <Amenities />
      </div>
    </div>
  );
}