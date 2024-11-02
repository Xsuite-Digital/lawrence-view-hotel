"use client"
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Page = () => {
  const services = [
    {
      title: "BIRTHDAY",
      price: "PKR 5,800",
      subTitle: "Memorable Celebrations",
      features: [
        "Free Decor",
        "2 Sounds",
        "2 Sparkling Candles",
        "2 Birthday Cars",
        "Birthday Sounds",
        "85 Balloons",
      ],
      imgsrc: "/cake.webp",
    },
    {
      title: "ANNIVERSARY",
      price: "PKR 5,800",
      subTitle: "Life's Sweetest Celebration",
      features: [
        "Free Decor",
        "2 pounds Cake",
        "2 Sparkling Candles",
        "2 Birthday Caps",
        "Birthday Sounds",
        "85 Balloons",
      ],
      imgsrc: "/Heart-balloon.webp",
    },
    {
      title: "LUNCH & HI-TEA",
      price: "PKR 1,550",
      subTitle: "Lunch and Hi-Tea Delights",
      features: [
        "Experience the Ultimate Dining Experience",
        "with a Perfect Fusion of Lunch and Hi-Tea,",
        "Delighting Your Taste.",
        "Immerse Yourself in an unforgettable",
        "Dining Experience at Lawrence View Hotel,",
        "with a Perfect Fusion of Lunch and Hi-tea.",
      ],
      imgsrc: "/Lunch.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-16">
      <h1 className="text-center mb-16">Services</h1>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative bg-transparent rounded-lg p-6 overflow-hidden"
              initial={{ opacity: 0, y: 20 }} // Initial state
              animate={{ opacity: 1, y: 0 }} // Animate to this state
              transition={{
                duration: 0.5,
                delay: index * 0.1, // Staggered entrance
              }}
              whileHover={{
                scale: 1.05, // Scale up on hover
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)", // Increase shadow
                transition: { duration: 0.3 },
              }}
            >
              {/* Image */}
              <motion.div
                className="bg-white relative flex items-center justify-center p-20 mb-4 cursor-pointer overflow-hidden rounded-lg"
                whileHover={{ scale: 1.1 }} // Image zoom on hover
              >
                <Image
                  height={100}
                  width={100}
                  src={service.imgsrc}
                  alt={service.title}
                  className="h-auto object-cover transition-transform duration-300"
                />
              </motion.div>

              {/* Content */}
              <div className="text-center">
                <motion.h3
                  className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-[#c4a053]"
                  whileHover={{ scale: 1.05 }} // Slight scale effect
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  className="text-2xl font-bold mb-4 transition-colors duration-300 group-hover:text-[#c4a053]"
                  whileHover={{ scale: 1.05 }} // Slight scale effect
                >
                  {service.price}
                </motion.p>
                <motion.h4
                  className="text-lg font-semibold mb-4 transition-colors duration-300 group-hover:text-[#c4a053]"
                  whileHover={{ scale: 1.05 }} // Slight scale effect
                >
                  {service.subTitle}
                </motion.h4>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <p key={idx} className="text-sm text-gray-300">
                      {feature}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
