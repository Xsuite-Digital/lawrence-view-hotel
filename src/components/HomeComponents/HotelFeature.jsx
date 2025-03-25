// import { Lightbulb, Waves, CheckCircle, Table } from "lucide-react";
// import P1 from "../../assets/ABOUT1.webp";
// import P2 from "../../assets/ABOUT2.webp";
// import {Link} from 'react-router-dom';
// import {motion} from "framer-motion"
// const HotelFeature = () => {


  
//   return (
//     <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//       {/* Left Side Content */}
//       <div className="tracking-widest space-y-7 text-center lg:text-left">
//         <h3 className="text-lg flex flex-col font-semibold text-[#c4a053] uppercase">
//         Lawrence View Hotel
//         <span>

// Luxury Hotel | City Views | Exceptional Comfort
//         </span>

//         </h3>
//         <h2 className="lg:text-5xl text-xl font-semibold mt-2 text-gray-900">
//         Experience Comfort & Luxury at Lawrence View Hotel
//         </h2>
//         <p className="mt-4 text-gray-600 leading-relaxed">
//         Discover a world of luxury, comfort, and hospitality at Lawrence View Hotel. Whether you’re staying in the heart of Lahore or the breathtaking heights of Malam Jabba, every moment is designed for your relaxation and joy.

//         </p>

//         {/* Featured */}
//         <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 mt-6 items-center lg:items-start">
//           <div className="flex items-center gap-2">
//             <Lightbulb className="w-6 h-6 text-[#c4a053]" />
//             <span className="font-medium text-gray-900">Elegant Hotel Ambiance
//             </span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Table className="w-6 h-6 text-[#c4a053]" />
//             <span className="font-medium text-gray-900">Exquisite Dining Experience</span>
//           </div>
//         </div>

//         {/* Bullet Points */}
//         <ul className="mt-8 space-y-4 text-center lg:text-left">
//             <motion.div
//               className="space-y-2"
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: 0.2 }}
//               viewport={{ once: true }}
//             >
//               <li className="flex items-start gap-2 text-gray-700">
//                 <span className="text-[#c4a053] font-bold mt-1">•</span>
//                 <span>Seamless room booking for an unmatched stay.</span>
//               </li>
//               <li className="flex items-start gap-2 text-gray-700">
//                 <span className="text-[#c4a053] font-bold mt-1">•</span>
//                 <span>Enjoy breathtaking city views from your hotel room.</span>
//               </li>
//               <li className="flex items-start gap-2 text-gray-700">
//                 <span className="text-[#c4a053] font-bold mt-1">•</span>
//                 <span>Stay at the best hotel, where luxury meets comfort.</span>
//               </li>
//             </motion.div>

//             <motion.li
//               className="text-gray-700 italic border-l-2 border-[#c4a053] pl-4 mt-4"
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: 0.4 }}
//               viewport={{ once: true }}
//             >
//               Book your stay at Lawrence View Hotel, the best hotel in Lahore and hotel in Malam Jabba, where every stay
//               promises a luxurious retreat with the finest hospitality.
//             </motion.li>
//           </ul>
//         <div class="animated-button-container">
//   <a href="/about" class="animated-button">
//     <span>DISCOVER MORE</span>
//     <span class="border-top"></span>
//     <span class="border-right"></span>
//     <span class="border-bottom"></span>
//     <span class="border-left"></span>
//   </a>
// </div>

   
//       </div>

//    <div className="relative flex flex-col items-center lg:block">
//   <div className="border-t-8 w-72 h-64 border-l-8 border-[#c4a053] absolute bottom-0 left-2 hidden lg:block"></div>

//   <motion.div className="absolute left-64 -bottom-10 w-[400px] h-[300px] overflow-hidden hidden lg:block">
//     <motion.img
//       src={P1}
//       alt="Luxury Hotel Interior"
//       className="w-full h-full object-cover border-animated"
//       whileHover={{ scale: 1.2 }} // Zoom in image inside
//       transition={{ duration: 0.3 }}
//     />
//   </motion.div>

//   <motion.div
//     className="absolute -top-28 left-2 object-cover overflow-hidden hidden lg:block"
//     whileHover={{ filter: "brightness(1.1)" }}
//     transition={{ duration: 0.3 }}
//   >
//     <motion.img
//       src={P2}
//       alt="Luxury Hotel Interior"
//       className="w-[400px] h-[300px] object-cover border-animated"
//       whileHover={{ scale: 1.2 }} // Zoom in image inside
//       transition={{ duration: 0.3 }}
//     />
//   </motion.div>

//   <div className="border-b-8 w-96 h-64 border-r-8 border-[#c4a053] absolute -top-[67.8px] -z-10 -right-16 hidden lg:block"></div>

//   {/* Mobile View Images with Hover Effect */}
//   <div className="flex flex-col items-center gap-6 lg:hidden">
//     <motion.img
//       src={P2}
//       alt="Hotel Hallway"
//       className="w-[100%] h-auto object-cover rounded-lg shadow-lg border-animated"
//       whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
//       transition={{ duration: 0.3 }}
//     />
//     <motion.img
//       src={P1}
//       alt="Luxury Hotel Interior"
//       className="w-[100%] h-auto object-cover rounded-lg shadow-lg border-animated"
//       whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
//       transition={{ duration: 0.3 }}
//     />
//   </div>
// </div>

//     </section>
//   );
// };

// export default HotelFeature;




import React, { useEffect } from "react";
import { Lightbulb, Utensils, Map, Star, ChevronRight } from "lucide-react";
import P1 from "../../assets/ABOUT1.webp";
import P2 from "../../assets/ABOUT2.webp";
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
          className="absolute top-20 right-10 w-20 h-1 bg-[#b89628]"
          initial={{ opacity: 0, x: 100 }}
          animate={controls}
          custom={0}
          variants={fadeInUp}
        ></motion.div>
        <motion.div 
          className="absolute bottom-20 left-10 w-20 h-1 bg-[#b89628]"
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
          <span className="text-[#b89628] uppercase tracking-widest font-medium">
            Lawrence View Hotel
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold mt-3 tracking-tight text-gray-900">
            Where <span className="text-[#b89628]">Luxury</span> Meets Comfort
          </h2>
          <div className="w-24 h-1 bg-[#b89628] mx-auto mt-6"></div>
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
              <div className="absolute bottom-0 left-0 right-0 bg-[#b89628] text-white p-3 text-sm font-medium">
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
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-[#b89628] text-white p-3 text-sm font-medium">
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
              className="absolute z-0 w-[50%] h-[50%] top-[15%] left-[15%] border-2 border-[#b89628] rounded-lg"
              variants={fadeInUp}
              custom={4}
            ></motion.div>
            <motion.div 
              className="absolute z-0 w-[50%] h-[50%] bottom-[15%] right-[15%] border-2 border-[#b89628] rounded-lg"
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
                  icon: <Lightbulb className="w-8 h-8 text-[#b89628]" />,
                  title: "Elegant Ambiance",
                  desc: "Immerse yourself in our carefully curated atmosphere"
                },
                {
                  icon: <Utensils className="w-8 h-8 text-[#b89628]" />,
                  title: "Fine Dining",
                  desc: "Exquisite culinary experiences await your palate"
                },
                {
                  icon: <Map className="w-8 h-8 text-[#b89628]" />,
                  title: "Prime Locations",
                  desc: "Perfectly situated in Lahore and Malam Jabba"
                },
                {
                  icon: <Star className="w-8 h-8 text-[#b89628]" />,
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
              className="border-l-4 border-[#b89628] pl-4 py-2 bg-[#b89628]/5 rounded-r-lg"
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
                className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium bg-[#b89628] text-white rounded-md shadow-md"
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