import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Gift, CreditCard, Sparkles, ArrowRight, ChevronDown, Check, Clock, MapPin, Mail } from 'lucide-react';
import { faqs, loyaltyTiers } from '../components/LoyaltyComponents/LoyaltyData';
import Tabs from '../components/LoyaltyComponents/Tabs';
import { Link } from 'react-router-dom';

const Loyalty = () => {
  const [activeTab, setActiveTab] = useState('benefits');
  const [expandedFaq, setExpandedFaq] = useState(null);
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemAnimation  = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };
  
 
  
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero Section */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative h-96 mt-12 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Lawrence View Rewards
          </motion.h1>
          <motion.p 
            className="text-xl text-white mb-8 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Join our exclusive loyalty program and enjoy premium benefits, exclusive offers, and unforgettable experiences.
          </motion.p>
          <Link to='/contact' >
          <motion.button 
            className="bg-[#c4a053] hover:bg-[#c4a053] text-white font-bold py-3 px-8 rounded-full transition duration-300 flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            >
            Join Now <ArrowRight className="ml-2 h-5 w-5" />
          </motion.button>
            </Link>
        </div>
      </motion.div>
      
      {/* Main Content Section */}
      <div className="container mx-auto py-16 px-4">
        {/* Quick Stats */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          <motion.div variants={itemAnimation} className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-[#c4a053] p-4 rounded-full inline-flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">10,000+</h3>
            <p className="text-gray-600">Loyal Members</p>
          </motion.div>
          
          <motion.div variants={itemAnimation} className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-[#c4a053] p-4 rounded-full inline-flex items-center justify-center mb-4">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">3 Tiers</h3>
            <p className="text-gray-600">Of Exclusive Benefits</p>
          </motion.div>
          
          <motion.div variants={itemAnimation} className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-[#c4a053] p-4 rounded-full inline-flex items-center justify-center mb-4">
              <Gift className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">£50,000+</h3>
            <p className="text-gray-600">In Rewards Given</p>
          </motion.div>
          
          <motion.div variants={itemAnimation} className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-[#c4a053] p-4 rounded-full inline-flex items-center justify-center mb-4">
              <CreditCard className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">10 Points</h3>
            <p className="text-gray-600">Per £1 Spent</p>
          </motion.div>
        </motion.div>
        
       
        <Tabs expandedFaq={expandedFaq} setExpandedFaq={setExpandedFaq}  itemAnimation={itemAnimation} toggleFaq={toggleFaq} staggerContainer={staggerContainer} activeTab={activeTab } setActiveTab={setActiveTab} />
        
        <motion.div 
          className="bg-gradient-to-r from-[#c4a053] to-[#c4a053] rounded-xl p-8 text-white text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute transform -rotate-12 -left-10 -top-10 w-40 h-40 rounded-lg bg-white"></div>
            <div className="absolute transform rotate-12 -right-10 -bottom-10 w-40 h-40 rounded-lg bg-white"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Earning Rewards?</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">Join Lawrence View Rewards today and start earning points with your very next stay. It takes less than a minute to sign up.</p>
           <Link to='/contact'>
            <motion.button 
              className="bg-white text-[#c4a053] hover:bg-gray-100 font-bold py-3 px-8 rounded-full inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              >
              Join Now <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
              </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Footer */}
    
    </div>
  );
};

export default Loyalty;