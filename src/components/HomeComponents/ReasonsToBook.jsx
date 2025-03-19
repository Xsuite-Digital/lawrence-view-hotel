import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { DollarSign, Clock, Shield } from 'lucide-react';

const features = [
  {
    icon: <DollarSign className="h-8 w-8" />, 
    title: 'Best Hotel Prices:',
    description: 'Enjoy exclusive offers and the lowest rates when you book directly from Lawrence View Hotel Lahore.',
  },
  {
    icon: <Clock className="h-8 w-8" />, 
    title: 'Easy & Instant room Booking:',
    description: 'Reserve your luxury hotel room in just a few clicks with instant confirmation and zero hidden charges.',
  },
  {
    icon: <Shield className="h-8 w-8" />, 
    title: 'Safe & Secure Reservations:',
    description: 'Your personal information and payment details are fully protected with advanced security measures.',
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

const ReasonsToBook = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-medium text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          REASONS TO BOOK ONLINE
        </motion.h2>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-20 h-20 rounded-full bg-[#c4a053] text-white flex items-center justify-center mb-4"
                whileHover={{ scale: 1.1 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ReasonsToBook;
