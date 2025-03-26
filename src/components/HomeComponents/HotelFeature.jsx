

import React, { useEffect } from "react";
import { Lightbulb, Utensils, Map, Star, ChevronRight } from "lucide-react";
import P1 from "../../assets/ABOUT1.webp";
import P2 from "../../assets/QUAD.webp";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HotelFeature = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: i * 0.15,
        ease: [0.215, 0.61, 0.355, 1]
      },
    }),
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section ref={ref} className="relative py-20 overflow-hidden bg-white">
      {/* Background Accent */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#c4a053]/5"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#c4a053]/5"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Floating Gold Accents */}
        <motion.div 
          className="absolute top-20 right-10 w-20 h-1 bg-[#c4a053]"
          initial={{ opacity: 0, x: 100 }}
          animate={controls}
          custom={0}
          variants={fadeInUp}
        ></motion.div>
        <motion.div 
          className="absolute bottom-20 left-10 w-20 h-1 bg-[#c4a053]"
          initial={{ opacity: 0, x: -100 }}
          animate={controls}
          custom={0}
          variants={fadeInUp}
        ></motion.div>
        
        {/* Title Container */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          custom={1}
          variants={fadeInUp}
        >
          <span className="text-[#c4a053] uppercase tracking-widest font-medium">
            Lawrence View Hotel
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold mt-3 tracking-tight text-gray-900">
            Where <span className="text-[#c4a053]">Luxury</span> Meets Comfort
          </h2>
          <div className="w-24 h-1 bg-[#c4a053] mx-auto mt-6"></div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side - Gallery */}
          <motion.div 
            className="lg:col-span-7 relative h-[500px] md:h-[600px]"
            initial="hidden"
            animate={controls}
            variants={staggerContainer}
          >
            {/* Main Image */}
            <motion.div 
              className="absolute z-10 w-[75%] h-[65%] top-0 left-0 overflow-hidden rounded-lg shadow-2xl"
              variants={fadeInUp}
              custom={2}
            >
              <div className="p-1 bg-white">
                <img
                  src={P1}
                  alt="Luxury Hotel Interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-[#c4a053] text-white p-3 text-sm font-medium">
                <div className="flex items-center justify-between">
                  <span>Luxury Interiors</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={14} fill="white" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Secondary Image */}
            <motion.div 
              className="absolute z-20 w-[60%] h-[55%] bottom-0 right-0 overflow-hidden rounded-lg shadow-2xl"
              variants={fadeInUp}
              custom={3}
            >
              <div className="p-1 bg-white">
                <img
                  src={P2}
                  alt="Hotel Exterior"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-[#c4a053] text-white p-3 text-sm font-medium">
                <div className="flex items-center justify-between">
                  <span>Breathtaking Views</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={14} fill="white" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div 
              className="absolute z-0 w-[50%] h-[50%] top-[15%] left-[15%] border-2 border-[#c4a053] rounded-lg"
              variants={fadeInUp}
              custom={4}
            ></motion.div>
            <motion.div 
              className="absolute z-0 w-[50%] h-[50%] bottom-[15%] right-[15%] border-2 border-[#c4a053] rounded-lg"
              variants={fadeInUp}
              custom={4}
            ></motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div 
            className="lg:col-span-5 space-y-8"
            initial="hidden"
            animate={controls}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} custom={5}>
              <p className="text-lg text-gray-700 leading-relaxed">
                Discover a world of luxury, comfort, and hospitality at Lawrence View Hotel. 
                Whether you're staying in the heart of Lahore or the breathtaking heights of 
                Malam Jabba, every moment is designed for your relaxation and joy.
              </p>
            </motion.div>

            {/* Feature Cards */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={fadeInUp}
              custom={6}
            >
              {[
                {
                  icon: <Lightbulb className="w-8 h-8 text-[#c4a053]" />,
                  title: "Elegant Ambiance",
                  desc: "Immerse yourself in our carefully curated atmosphere"
                },
                {
                  icon: <Utensils className="w-8 h-8 text-[#c4a053]" />,
                  title: "Fine Dining",
                  desc: "Exquisite culinary experiences await your palate"
                },
                {
                  icon: <Map className="w-8 h-8 text-[#c4a053]" />,
                  title: "Prime Locations",
                  desc: "Perfectly situated in Lahore and Malam Jabba"
                },
                {
                  icon: <Star className="w-8 h-8 text-[#c4a053]" />,
                  title: "5-Star Service",
                  desc: "Attentive staff dedicated to your comfort"
                }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="p-4 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white group"
                >
                  <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </motion.div>

            {/* Quote */}
            <motion.div 
              className="border-l-4 border-[#c4a053] pl-4 py-2 bg-[#c4a053]/5 rounded-r-lg"
              variants={fadeInUp}
              custom={7}
            >
              <p className="text-gray-700 italic">
                "Book your stay at Lawrence View Hotel, where every stay
                promises a luxurious retreat with the finest hospitality."
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="mt-8"
              variants={fadeInUp}
              custom={8}
            >
              <Link 
                to="/about" 
                className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium bg-[#c4a053] text-white rounded-md shadow-md"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                <span className="relative flex items-center gap-2">
                  DISCOVER MORE 
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HotelFeature;