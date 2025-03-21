import { useState, useEffect } from "react";
import image1 from "../../assets/LVHH.webp";
import image2 from "../../assets/LVHL.webp";
import image3 from "../../assets/T2.webp";

const images = [image1, image2, image3];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="relative w-full h-screen  bg-black md:mt-18  text-white">
      {/* Image Slider */}
      <div className="absolute inset-0 z-0">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover opacity-80 transition-all duration-1000 ease-in-out"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Hero Content */}
      <div className="relative z-20 h-full flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center">
          {/* Heading */}
          {/* <h2 className="text-3xl md:text-5xl mt-12 text-white lg:text-5xl font-serif tracking-wide text-center">
            A New Vision Of Comfort
          </h2> */}
          {/* <div className="text-center text-xs text-gray-400 mb-4">
            Click to view our curated design styles and rooms
          </div> */}

          {/* Center Button */}
          {/* <button className="bg-[#b89628] text-white px-6 py-2 rounded-md mt-4">
            Explore More
          </button> */}
        </div>

        {/* Manual Controls */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-[#b89628]" : "bg-white"
              }`}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
}
