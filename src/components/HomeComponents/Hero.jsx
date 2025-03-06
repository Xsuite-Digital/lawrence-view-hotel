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
    <div className="relative 2xl:mt-24 mt-0 xl:mt-24 lg:mt-48 ">
      <div
        className=" h-[600px] w-[1900px] xl:w-[1345px] 2xl:w-[1900px] 2xl:h-[600px] xl:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
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
