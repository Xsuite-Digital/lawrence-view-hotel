import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Video, Award } from 'lucide-react';

const CorporatePackages = () => {
  const packages = [
    {
      id: 1,
      title: "Conference Package",
      description: "Full-day conference package with state-of-the-art facilities and catering options.",
      icon: <Users className="text-[#b89628]" size={24} />,
      features: [
        "Meeting room setup for up to 50 people",
        "Projector and sound system",
        "Coffee breaks and lunch buffet",
        "Stationery and bottled water"
      ],
      price: "45,000 PKR per day"
    },
    {
      id: 2,
      title: "Business Stay",
      description: "Special rates for corporate travelers with business amenities.",
      icon: <Briefcase className="text-[#b89628]" size={24} />,
      features: [
        "Deluxe room accommodations",
        "Breakfast included",
        "Access to business center",
        "Complimentary pressing of one suit"
      ],
      price: "22,000 PKR per night"
    },
    {
      id: 3,
      title: "Virtual Meeting Setup",
      description: "Professional setup for virtual meetings and webinars.",
      icon: <Video className="text-[#b89628]" size={24} />,
      features: [
        "High-speed internet connection",
        "Technical support staff",
        "Professional backdrop",
        "Refreshments during the session"
      ],
      price: "30,000 PKR per session"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-20"
    >
      <div className="flex items-center mb-2">
        <h2 className="text-3xl font-bold text-black">Corporate Packages</h2>
        <Award className="ml-3 text-[#b89628]" size={28} />
      </div>
      <div className="h-1 w-24 bg-[#b89628]] mb-10"></div>
      
      <div className="bg-gray-50 p-8 rounded-xl mb-10">
        <h3 className="text-2xl font-bold mb-4 text-black">Why Choose Us for Your Business Needs?</h3>
        <p className="text-gray-700 mb-6">
          At Lawrence View Hotel, we understand the importance of professional environments for business success. 
          Our dedicated team ensures your corporate events and business stays are seamless and productive.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div 
            className="bg-white p-5 rounded-lg shadow-md"
            whileHover={{ y: -5 }}
          >
            <h4 className="font-bold mb-2 text-black">Prime Location</h4>
            <p className="text-gray-600 text-sm">Centrally located with easy access to business districts</p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-5 rounded-lg shadow-md"
            whileHover={{ y: -5 }}
          >
            <h4 className="font-bold mb-2 text-black">Modern Facilities</h4>
            <p className="text-gray-600 text-sm">State-of-the-art technology and meeting spaces</p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-5 rounded-lg shadow-md"
            whileHover={{ y: -5 }}
          >
            <h4 className="font-bold mb-2 text-black">Dedicated Support</h4>
            <p className="text-gray-600 text-sm">Professional staff to assist with all your business needs</p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-5 rounded-lg shadow-md"
            whileHover={{ y: -5 }}
          >
            <h4 className="font-bold mb-2 text-black">Flexible Options</h4>
            <p className="text-gray-600 text-sm">Customizable packages to suit your specific requirements</p>
          </motion.div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map(pkg => (
          <motion.div 
            key={pkg.id}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                {pkg.icon}
                <h3 className="text-xl font-bold ml-2 text-black">{pkg.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{pkg.description}</p>
              
              <ul className="mb-6 space-y-2">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#b89628] mr-2">•</span>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-4 border-t border-gray-200">
                <p className="text-[#c4a053] font-semibold mb-4">{pkg.price}</p>
                <motion.button 
                  className="w-full bg-black text-white py-2 rounded-md hover:bg-[#b89628] transition-colors duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Enquire Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default CorporatePackages;