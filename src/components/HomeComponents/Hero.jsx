import { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import m1 from "../../assets/M1.webp";
import m2 from "../../assets/M2.webp";
import m3 from "../../assets/M3.webp";
import p1 from "../../assets/1.webp";
import p2 from "../../assets/2.webp";
import p3 from "../../assets/3.webp";

const mobileImages = [m1, m2, m3];
const laptopImages = [p1, p2, p3];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024); // Default check

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const images = isMobile ? mobileImages : laptopImages;

  return (
    <div className="relative w-full 2xl:mt-24 mt-0 xl:mt-24 lg:mt-48">
      <div className="relative w-full h-auto">
        <img
          src={images[currentImageIndex]}
          alt="Hero Slide"
          className="h-full w-full object-contain transition-opacity duration-1000 ease-in-out"
        />
      </div>
    </div>
  );
};

export default Hero;
