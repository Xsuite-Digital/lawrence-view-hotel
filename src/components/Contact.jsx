import { Hotel, Bell, Star, MapPin, Phone, Mail, Clock } from "lucide-react"; // Lucide Icons
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import P2 from "../assets/F1.webp";
import GetInTouch from "./HomeComponents/GetInTouch";

const features = [
  {
    icon: Hotel,
    title: "Luxury Rooms",
    description:
      "Elegantly designed rooms with premium amenities to ensure a comfortable stay.",
  },
  {
    icon: Bell,
    title: "24/7 Concierge",
    description:
      "Our dedicated team is available around the clock to cater to your needs.",
  },
  {
    icon: Star,
    title: "Award-Winning Hospitality",
    description:
      "Recognized for excellence in service and luxury accommodation.",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description:
      "Located in the heart of the city with easy access to major attractions.",
  },
];

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    info: "+92 (42) 36311574",
    action: "tel:+92(42)36311574",
  },
  {
    icon: Mail,
    title: "Email Us",
    info: "info@lawrenceviewhotel.com",
    action: "mailto:info@lawrenceviewhotel.com",
  },
  {
    icon: Clock,
    title: "Reception Hours",
    info: "24/7 - Always Available",
    action: "",
  },
];

const Contact = () => {
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Elegant curved separator */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gray-100">
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path 
            d="M0,60 C360,0 720,80 1440,20 L1440,60 L0,60 Z" 
            fill="white" 
          />
        </svg>
      </div>

      {/* Why Choose Us Section with Parallax Effect */}
      <motion.div 
        className="w-full bg-gray-100 pt-20 pb-32 px-6 relative"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Why Choose <span className="text-[#b89628]">Lawrence View</span> Hotel?
            </h2>
            <div className="flex justify-center mt-4">
              <div className="w-20 h-1 bg-[#b89628]"></div>
            </div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Experience luxury, comfort, and excellence in the heart of the city. Our dedication to impeccable service ensures your stay is nothing short of extraordinary.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg transition-all cursor-pointer relative overflow-hidden group border border-transparent hover:border-[#c4a053]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(196, 160, 83, 0.2), 0 10px 10px -5px rgba(196, 160, 83, 0.1)"
              }}
            >
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-[#b89628] opacity-10 rounded-full group-hover:opacity-20 transition-opacity"></div>
              <div className="text-4xl text-[#b89628] mb-5 flex justify-center">
                <Icon size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center">
                {title}
              </h3>
              <p className="text-gray-600 text-center mt-3">{description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact Section with Staggered Animation */}
      <div className="relative py-16 md:py-24 px-6 mt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 border-8 border-[#b89628] opacity-20"></div>
            <img
              src={P2}
              alt="Luxury Hotel Room"
              className="w-full h-auto rounded-2xl shadow-xl object-cover max-h-[600px] z-10 relative"
            />
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Get in <span className="text-[#b89628]">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-[#b89628] mb-8"></div>
            
            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, title, info, action }, index) => (
                <motion.a
                  key={index}
                  href={action}
                  className={`flex items-center p-4 border border-gray-200 rounded-lg hover:border-[#b89628] transition-all ${!action && 'pointer-events-none'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#b89628] bg-opacity-10 flex items-center justify-center mr-4">
                    <Icon className="text-[#b89628]" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{title}</p>
                    <p className="font-medium text-gray-800">{info}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="mt-10">
              <motion.div
                className="rounded-xl overflow-hidden shadow-lg border-4 border-[#b89628] border-opacity-30"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.0952674463774!2d74.3287704!3d31.549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904ba19c196e3%3A0x54ae9e130d37d85a!2sLawrence%20View%20Hotel%2C%20Lahore!5e0!3m2!1sen!2s!4v1742554039704!5m2!1sen!2s"
                  className="w-full h-[250px]"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="bg-gray-100 py-16 px-6 relative">
      
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Send Us a <span className="text-[#b89628]">Message</span>
            </h2>
            <div className="flex justify-center mt-4">
              <div className="w-20 h-1 bg-[#b89628]"></div>
            </div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We'd love to hear from you. Fill out the form below and our team will get back to you shortly.
            </p>
          </motion.div>
          
          <GetInTouch />
        </div>
      </div>
    </section>
  );
};

export default Contact;