import React from 'react';
import { motion } from 'framer-motion';
import O1 from "../../assets/O1.webp"
const OffersHero = () => {
  return (
    <div className="bg-black mt-24 p-8  overflow-hidden">
    
  
      <div className=" inset-0  bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
        <motion.h1 
          className="text-4xl text-white md:text-6xl font-bold mb-4 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Exclusive Offers
        </motion.h1>
        <motion.div 
          className="h-1 w-32 bg-[#b89628] mb-6"
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
       Book this hotel now to access exclusive rates and limited-time offers, ensuring every guest enjoys a personalized and unforgettable stay at Lawrence View Hotel. Don’t miss out on the ultimate hotel experience.

        </motion.p>
      </div>
    </div>
  );
};

export default OffersHero;