import { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import p1 from "../../assets/p1.webp";
import p2 from "../../assets/p2.webp";
import p3 from "../../assets/p3.webp";
import BookingEngine from "../BookingEngine/Bookingengine";
import before from "../../assets/before.webp";
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
      h-[80vh] md:h-screen"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero Text */}
      <div className="relative px-6 md:px-24  text-center md:text-left w-full flex flex-col items-center md:items-start justify-center">
        <h1 className="text-white text-3xl md:text-7xl font-bold">
          Lawrence View Hotel
        </h1>
        <p className="text-white text-base md:text-lg max-w-lg mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          delectus.
        </p>
      </div>
      <div className=" hidden lg:block absolute top-56 2xl:left-1/2 left-2/3 xl:left-[52rem] xl:top-20 bg-white  shadow-lg p-6 md:p-8 w-[90%] max-w-lg xl:max-w-md">
        <h2 className="text-lg md:text-xl flex items-center justify-center font-semibold text-black mb-4">
          <img
            src={before}
            alt="icon"
            height={25}
            width={25}
            className="lg:w-6  2xl:w-4 2xl:h-4 w-full h-auto lg:h-6 "
          />
          <span className="mx-2">Get in Touch</span>
          <img
            src={before}
            alt="icon"
            height={25}
            width={25}
            className="lg:w-6 lg:h-6 2xl:w-4 2xl:h-4 w-full h-auto "
          />
        </h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border p-2 rounded w-full"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border p-2 rounded w-full"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="date"
              placeholder="Check In"
              className="border p-2 rounded w-full"
            />
            <input
              type="date"
              placeholder="Check Out"
              className="border p-2 rounded w-full"
            />
          </div>
          <textarea
            placeholder="Write a Message"
            className="border p-2 rounded w-full mb-4"
          ></textarea>
          <button className="w-full bg-black text-white py-2 rounded hover:bg-[#c4a053] transition">
            CHECK AVAILABILITY
          </button>
        </form>
      </div>

      <div className=" absolute  lg:-bottom-0 -bottom-8   text-white  py-12 ">
        <BookingEngine />
      </div>
    </div>
  );
};

export default Hero;
