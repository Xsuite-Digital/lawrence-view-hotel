"use client";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Page = () => {
  const images = ["/slide2.webp", "/slide1.webp", "/slide3.webp"];
  
  const textData = [
    {
      heading: "LOREM 10",
      paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, vel. Reprehenderit quasi laborum atque architecto debitis accusamus accusantium praesentium neque quidem corporis! Recusandae, dolores! Ex.",
    },
    {
      heading: " Heading 2",
      paragraph: "Different paragraph content for slide 2, providing specific context for the second slide.",
    },
    {
      heading: " Heading 3",
      paragraph: "Unique content here for the third slide. Modify this as needed for each slide.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showButtons, setShowButtons] = useState(false);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : textData.length - 1);
  };

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % textData.length);
  };

  const handleMouseEnter = () => setShowButtons(true);
  const handleMouseLeave = () => setShowButtons(false);

  const getTextAlignment = () => {
    switch (currentIndex) {
      case 0:
        return "left-8 items-start ml-64";
      case 1:
        return "left-1/2 transform -translate-x-1/2 items-center";
      case 2:
        return "right-8 mr-32 items-end";
      default:
        return "left-1/2 transform -translate-x-1/2 items-center";
    }
  };

  return (
    <div
      className="relative w-full mt-36 max-w-full mx-auto overflow-hidden bg-black"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="flex transition-transform duration-700"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((src, index) => (
          <div className="min-w-full relative" key={index}>
            <Image
              src={src}
              alt={`Slider Image ${index + 1}`}
              className="w-full h-auto object-cover"
              width={1000}
              height={100}
            />
            
            {/* {index === currentIndex && (
  <AnimatePresence mode="wait">
    <motion.div
      key={currentIndex} 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
      className={`absolute top-1/4 border-2 border-[#c4a053] p-4 rounded-lg bg-black/50 backdrop-blur-sm items-center justify-center transform -translate-y-1/2 text-white flex flex-col ${getTextAlignment()}`}
    >
      <h2 className="text-3xl font-bold">{textData[index].heading}</h2>
      <p className="text-sm w-56 mt-2">{textData[index].paragraph}</p>
    </motion.div>
  </AnimatePresence>
)} */}
          </div>
        ))}
      </div>

      {showButtons && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-opacity-50 text-white px-4 py-2 text-2xl rounded-full transition-opacity duration-300"
            style={{ width: "50px", height: "50px" }}
          >
            &#10094;
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-opacity-50 text-white px-4 py-2 text-2xl rounded-full transition-opacity duration-300"
            style={{ width: "50px", height: "50px" }}
          >
            &#10095;
          </button>
        </>
      )}
    </div>
  );
};

export default Page;
