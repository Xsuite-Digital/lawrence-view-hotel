import { useState, useEffect } from "react";
import image1 from "../../assets/LVHH.webp";
import image2 from "../../assets/LVHL.webp";
import image3 from "../../assets/T2.webp";
import { Link } from "react-router-dom";

const images = [image1, image2, image3];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="relative w-full h-screen  bg-black md:mt-18  text-white">
      <div className="absolute inset-0 z-0">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover opacity-80 transition-all duration-1000 ease-in-out"
        />
      </div>

      <div className="absolute inset-0 bg-black/40 z-10"></div>

      <div className="relative z-20 h-full flex flex-col">
        <div className="  flex flex-col absolute top-1/4 2xl:top-1/3 2xl:left-1/3 lg:left-1/3 left-3.5 ">
          <h2 className="text-3xl md:text-5xl mt-12 text-white lg:text-5xl font-serif tracking-wide text-center">
          Lawrence View Hotel

          </h2>
          
          {/* Center Button */}
          <Link to="/about">
          <button className="bg-[#b89628] text-white px-6 py-2 absolute left-1/4 2xl:left-1/3 lg:left-1/3 rounded-md mt-4">
            Explore More
          </button>
          </Link>
        </div>

        
      </div>
    </div>
  );
}
