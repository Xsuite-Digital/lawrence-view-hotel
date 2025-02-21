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
      className="relative w-full h-screen bg-cover bg-center transition-all duration-1000 flex items-center justify-center"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      {/* Booking Engine */}
      <div
        className={`fixed  left-1/2 transform -translate-x-1/2 z-50 transition-all  
        ${
          isScrolled
            ? "w-[80vw] bg-white  py-2 top-24 duration-300 ease-in-out "
            : "w-auto top-36 bg-transparent"
        }`}
      >
        <BookingEngine />
      </div>

      {/* Hero Text */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start px-10 md:px-24 text-center md:text-left w-full">
        <h1 className="text-white text-3xl md:text-5xl font-bold">
          Lawrence View Hotel
        </h1>
        <p className="text-white text-base md:text-lg max-w-lg mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          delectus.
        </p>
        <button className="mt-6 px-6 py-3 text-white bg-secondary-color font-semibold text-lg rounded-lg hover:bg-opacity-80 transition-all">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
