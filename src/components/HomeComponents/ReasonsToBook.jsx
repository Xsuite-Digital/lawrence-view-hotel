
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { DollarSign, Clock, Shield } from 'lucide-react';
import image from '../../assets/Dining.webp';
import lvh2 from '../../assets/lh.png'; 
import DT from '../../assets/DT.webp'; 
import { useLocation } from 'react-router-dom';

const ReasonsToBook = () => {
  const location = useLocation()
  const path = location.pathname
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: 'Best Hotel Prices:',
      description: 'Book direct & save with Lawrence View Hotel Lahore!',
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Easy & Instant room Booking:',
      description: 'Book luxury rooms in clicks! Instant confirmation, zero hidden fees.',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Safe & Secure Reservations:',
      description: 'Your info & payments are fully secured.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row">
          
          {/* Left Side - Image with Framed Design */}
          <div className="relative w-full md:w-1/2 h-96 md:h-auto">
            {/* Top Frame Bar */}
            <div className="absolute top-0 left-16 right-0 h-16 bg-black bg-opacity-95 z-10"></div>

            {/* Left Text Bar */}
            <div className="absolute left-0 top-0 bottom-0 bg-black bg-opacity-95 text-white w-16 flex items-center justify-center z-10">
  <div className="transform -rotate-90 whitespace-nowrap text-[#b89628] font-serif tracking-[0.5em] text-lg font-semibold">
    OUR SPECIALIZATION
  </div>
</div>

            {/* Bottom Frame Bar with Logo */}
            <div className="absolute bottom-0 right-0 h-20 w-40 z-10 flex items-center justify-end p-2">
  <img src={lvh2} alt="Logo" className="h-full w-full object-contain" />
</div>

            {/* Image Container */}
            <div className="ml-16 h-full bg-gray-200 relative overflow-hidden">
            <div
  className="absolute inset-0 bg-cover bg-center bg-black bg-opacity-50"
  style={{ 
    backgroundImage: 
      path === "/" || path === "/Lahore" 
      ? `url(${image})` 
      : path === "/MLJ" 
      ? `url(${DT})` 
      : "none" 
  }}
></div>

            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2 pt-8 md:pt-0 md:pl-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Book Your Stay with Confidence
              </h2>
              <p className="text-gray-600 mb-8">
              At Lawrence View Hotel Lahore, we prioritize your peace of mind. We offer competitive pricing with no hidden fees, instant confirmation for a hassle-free booking experience, and advanced security measures to protect your personal and payment information. Book now and enjoy a worry-free stay with us!
              </p>

              {/* Cards Section */}
              <motion.div
                ref={ref}
                className="grid grid-cols-1 md:grid-cols-3 gap-2"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md cursor-pointer"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-16 h-16 rounded-full bg-black text-[#b89628] flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.1 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReasonsToBook;
