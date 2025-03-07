import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Snowflake, Sun  , Check} from 'lucide-react';

const SeasonalPromotions = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-20"
    >
      <h2 className="text-3xl font-bold mb-2 text-black">Seasonal Promotions</h2>
      <div className="h-1 w-24 bg-[#c4a053] mb-10"></div>
      
      <div className="bg-gray-50 rounded-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 lg:p-12">
            <div className="flex items-center mb-4">
              <Gift size={28} className="text-[#c4a053]" />
              <h3 className="text-2xl font-bold ml-3 text-black">Holiday Season Special</h3>
            </div>
            <p className="text-gray-700 mb-6">
              Celebrate the holiday season with us and enjoy special rates, festive decorations, 
              and seasonal treats. Book our Holiday Season package and receive complimentary 
              airport transfers and a special gift upon arrival.
            </p>
            
            <ul className="mb-8 space-y-3">
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <span className="bg-[#c4a053] text-white rounded-full p-1 mr-3 mt-1">
                  <Check size={12} />
                </span>
                <span className="text-gray-700">20% off on room rates</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="bg-[#c4a053] text-white rounded-full p-1 mr-3 mt-1">
                  <Check size={12} />
                </span>
                <span className="text-gray-700">Complimentary airport transfers</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <span className="bg-[#c4a053] text-white rounded-full p-1 mr-3 mt-1">
                  <Check size={12} />
                </span>
                <span className="text-gray-700">Festive welcome drink and treats</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <span className="bg-[#c4a053] text-white rounded-full p-1 mr-3 mt-1">
                  <Check size={12} />
                </span>
                <span className="text-gray-700">Special holiday dinner</span>
              </motion.li>
            </ul>
            
            <div className="flex items-center">
              <p className="text-2xl font-bold text-[#c4a053] mr-4">30,000 PKR</p>
              <p className="text-gray-500 line-through">38,000 PKR</p>
            </div>
            
            <motion.button 
              className="mt-6 bg-black text-white px-6 py-3 rounded-md hover:bg-[#c4a053] transition-colors duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Book This Offer
            </motion.button>
          </div>
          
          <div className="relative h-96 lg:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1576675466969-38eeae4b41f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Holiday Season Special" 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-black text-white py-2 px-4 rounded-lg font-medium">
              Limited Availability
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <motion.div 
          className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          whileHover={{ y: -5 }}
        >
          <div className="p-6">
            <div className="flex items-center mb-3">
              <Snowflake size={24} className="text-[#c4a053]" />
              <h3 className="text-xl font-bold ml-2 text-black">Winter Escape</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Escape the cold with our winter special package, including room upgrades and hot beverages.
            </p>
            <p className="text-[#c4a053] font-semibold">Starting from 20,000 PKR</p>
            <motion.button 
              className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-[#c4a053] transition-colors duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          whileHover={{ y: -5 }}
        >
          <div className="p-6">
            <div className="flex items-center mb-3">
              <Sun size={24} className="text-[#c4a053]" />
              <h3 className="text-xl font-bold ml-2 text-black">Summer Delight</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Beat the heat with our summer package, featuring poolside services and refreshing cocktails.
            </p>
            <p className="text-[#c4a053] font-semibold">Starting from 23,000 PKR</p>
            <motion.button 
              className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-[#c4a053] transition-colors duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SeasonalPromotions;

// Note: Import the Check component at the top