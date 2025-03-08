import React from 'react';
import { motion } from 'framer-motion';
import O1 from "../../assets/O1.webp"
const OffersHero = () => {
  return (
    <div className="relative h-96 overflow-hidden">
    <img 
      src={O1} 
      alt="Lawrence View Hotel Offers" 
      className="w-full h-full object-cover"
    />
  
      <div className="absolute inset-0 mt-12 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
        <motion.h1 
          className="text-4xl text-white md:text-6xl font-bold mb-4 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Exclusive Offers
        </motion.h1>
        <motion.div 
          className="h-1 w-32 bg-[#c4a053] mb-6"
          initial={{ width: 0 }}
          animate={{ width: "8rem" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <motion.p 
          className="text-xl max-w-2xl text-center px-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Discover our carefully curated special packages and promotions designed to make your stay at Lawrence View Hotel truly memorable.
        </motion.p>
      </div>
    </div>
  );
};

export default OffersHero;