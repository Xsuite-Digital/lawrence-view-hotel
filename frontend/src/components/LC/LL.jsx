import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Facebook, Linkedin, MapPin } from 'lucide-react';

function LL() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/lawrence.view.hotel.lahore/', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/LawrenceViewHotelLahore', label: 'Facebook' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/lawrence-view-hotel-lahore/', label: 'LinkedIn' }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Map Section */}
          <motion.div
            className="w-full h-[400px] rounded-lg overflow-hidden shadow-xl"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
       
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.095101821967!2d74.32619547623646!3d31.549004545725605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904ba19c196e3%3A0x54ae9e130d37d85a!2sLawrence%20View%20Hotel%2C%20Lahore!5e0!3m2!1sen!2s!4v1741170324483!5m2!1sen!2s" width="100%"
              height="100%"
              className=' lg:h-full lg:w-full w-80 h-96'
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"></iframe>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white/5 lg:p-8 p-0 rounded-lg backdrop-blur-sm">
              <h2 className="lg:text-2xl text-xl font-semibold mb-6 text-[#c4a053]">Get in Touch</h2>
              
              <motion.div 
                className="space-y-6"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-[#c4a053] p-3 rounded-full">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a href="mailto:reservation@lawrenceviewhotel.com" className="hover:text-[#c4a053] text-sm transition-colors">
                      reservation@lawrenceviewhotel.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-[#c4a053] p-3 rounded-full">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <a href="tel:+92(042)36311574" className="hover:text-[#c4a053] transition-colors">
                      +92 (042) 36311574
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-[#c4a053] p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Address</p>
                    <p className="hover:text-[#c4a053] transition-colors">
                      54-A lawrence view hotel China Chowk , Lahore
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Social Media Links */}
            <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-6 text-[#c4a053]">Connect With Us</h2>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                  target='_blank'
                    key={social.label}
                    href={social.href}
                    className="bg-white/10 p-4 rounded-full hover:bg-[#c4a053] transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default LL;