import { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import p1 from "../../assets/p1.webp";
import p2 from "../../assets/p2.webp";
import p3 from "../../assets/p3.webp";
import BookingEngine from "../BookingEngine/Bookingengine";

const images = [p1, p2, p3];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full bg-cover bg-center transition-all duration-1000 flex flex-col items-center justify-center
      h-[80vh] md:h-screen" // Adjust height: 80vh for mobile, full-screen for desktop
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero Text */}
      <div className="relative px-6 md:px-24 text-center md:text-left w-full flex flex-col items-center md:items-start justify-center">
        <h1 className="text-white text-3xl md:text-5xl font-bold">
          Lawrence View Hotel
        </h1>
        <p className="text-white text-base md:text-lg max-w-lg mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          delectus.
        </p>
        <button className="mt-6 border border-[#b89628] hover:border-none hover:bg-[#b89628] bg-transparent duration-300 ease-in-out px-6 py-3 text-white font-semibold text-lg rounded-lg hover:bg-opacity-80 transition-all">
          Book Now
        </button>
      </div>

      
    </div>
  );
};

export default Hero;
