import { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import p1 from "../../assets/MLJH.webp";
import p2 from "../../assets/MLJH2.webp";



const images = [p1, p2];

const MLJHero = () => {

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
      h-[80vh] md:h-screen"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero Text */}
      <div className="relative px-6 md:px-24  text-center md:text-left w-full flex flex-col items-center md:items-start justify-center">
        <h1 className="text-white text-3xl md:text-7xl font-bold">
        Lawrence View Hotel Malam Jabba!
        </h1>
        <p className="text-white text-base md:text-lg max-w-lg mt-4">
        Nestled amidst the breathtaking mountains of Malam Jabba, Lawrence View Hotel is your ultimate getaway for relaxation and adventure. Enjoy premium accommodations, thrilling outdoor activities, and mesmerizing views, all while being surrounded by nature’s beauty. Indulge in warm hospitality, luxury conveniences, and an unforgettable mountain retreat.

        </p>
      </div>
      
     
    </div>
  );
};

export default MLJHero;
