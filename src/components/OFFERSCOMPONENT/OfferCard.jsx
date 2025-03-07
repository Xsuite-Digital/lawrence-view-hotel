import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const OfferCard = ({ offer }) => {
  return (
    <motion.div 
      className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={offer.image} 
          alt={offer.title} 
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-[#c4a053] text-white py-1 px-3 rounded-full text-sm font-medium">
          Limited Time
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-3">
          {/* {offer.icon} */}
          <h3 className="text-xl font-bold ml-2 text-black">{offer.title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{offer.description}</p>
        <p className="text-[#c4a053] font-semibold mb-4">{offer.price}</p>
        
        <div className="mb-6">
          {offer.features.map((feature, index) => (
            <div key={index} className="flex items-center mb-2">
              <Check size={16} className="text-[#c4a053] mr-2" />
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
        
        <motion.button 
          className="w-full bg-black text-white py-3 rounded-md hover:bg-[#c4a053] transition-colors duration-300"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Book Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default OfferCard;