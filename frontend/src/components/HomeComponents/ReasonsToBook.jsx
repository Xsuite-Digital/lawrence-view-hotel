import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { DollarSign, Clock, Shield } from 'lucide-react';

const features = [
  {
    icon: <DollarSign className="h-8 w-8" />, 
    title: 'Best Rates',
    description: 'We offer the best deals and the lowest rates.',
  },
  {
    icon: <Clock className="h-8 w-8" />, 
    title: 'Easy Booking',
    description: 'We make online booking simple and easy.',
  },
  {
    icon: <Shield className="h-8 w-8" />, 
    title: 'Safe & Secure',
    description: 'We ensure your personal information is kept safe and secure.',
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
              className="flex flex-col items-center text-center"
              variants={itemVariants}
            >
              <motion.div
                className="w-20 h-20 rounded-full bg-[#c4a053] text-white flex items-center justify-center mb-4"
                whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)" }}
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