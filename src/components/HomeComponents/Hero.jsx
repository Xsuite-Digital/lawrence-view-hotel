import { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import p1 from "../../assets/1.webp";
import p2 from "../../assets/2.webp";
import p3 from "../../assets/3.webp";

const images = [p1, p2, p3];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full 2xl:mt-24 mt-0 xl:mt-24 lg:mt-48">
      {/* Image Container */}
      <div className="relative w-full h-auto">
        {/* Fading Image Transition */}
        <img
          src={images[currentImageIndex]}
          alt="Hero Slide"
          className="h-full w-full object-contain transition-opacity duration-1000 ease-in-out"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
    </div>
  );
};

export default Hero;    