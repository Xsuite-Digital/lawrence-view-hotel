import { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import p1 from "../../assets/1.webp";
import p2 from "../../assets/2.webp";
import p3 from "../../assets/3.webp";
import BookingEngine from "../BookingEngine/Bookingengine";

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
    <div className="relative ">
     <div 
  className="  bg-cover bg-center"
  style={{ backgroundImage: `url(${images[currentImageIndex]})`, width : 1900 , height: 600  }}
>

        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Booking Engine Section */}
      {/* <div className="absolute bottom-8 w-full flex justify-center px-4">
        <div className="bg-white/30 backdrop-blur-md p-6 rounded-lg w-full max-w-3xl">
          <BookingEngine />
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
