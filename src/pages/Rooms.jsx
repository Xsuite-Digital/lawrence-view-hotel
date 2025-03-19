import { Ruler, Users, Bath, Info, Wifi, ParkingCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { rooms } from "../Helpers/Data";
import { useEffect, useState } from "react";

export default function Rooms() {
  return (
    <div className="bg-gray py-12 mt-12">
      <h2 className="text-3xl font-bold lg:mt-24 -mt-12 p-12 text-white bg-black 2xl:mt-0 text-center mb-8">Rooms</h2>
      <div className="grid lg:grid-cols-3 max-w-5xl w-full mx-auto grid-cols-1 gap-y-8">
        {rooms.map((room) => {
          const [currentImageIndex, setCurrentImageIndex] = useState(0);
          const [isHovered, setIsHovered] = useState(false);

          useEffect(() => {
            let interval;
            if (isHovered) {
              interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % room.images.length);
              }, 3000);
            } else {
              setCurrentImageIndex(0);
            }
            return () => clearInterval(interval);
          }, [isHovered, room.images.length]);

          const nextSlide = () => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % room.images.length);
          };

          const prevSlide = () => {
            setCurrentImageIndex((prevIndex) => (prevIndex - 1 + room.images.length) % room.images.length);
          };

          return (
            <motion.div
              key={room.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden w-full max-w-xs mx-auto flex flex-col h-full border-animated"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={room.images[currentImageIndex]}
                  alt={room.title}
                  className="w-full h-48 object-cover"
                />
                <button onClick={prevSlide} className="absolute left-2 top-1/2  bg-white p-2 rounded-full shadow-md">
                  <ChevronLeft size={20} />
                </button>
                <button onClick={nextSlide} className="absolute right-2 top-1/2  bg-white p-2 rounded-full shadow-md">
                  <ChevronRight size={20} />
                </button>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg">{room.title}</h3>
                <div className="flex items-center text-sm text-gray-600 mt-2">
                  <Users size={16} className="mr-2" /> {room.guests}
                  <Ruler size={16} className="ml-4 mr-2" /> {room.size}
                </div>
                <p className="text-gray-500 text-xs mt-2 flex-grow">{room.description}</p>
                <hr className="my-4 border-gray-200" />
                <div className="flex items-center justify-between text-gray-500 text-sm mt-auto">
                  <div className="flex space-x-3">
                    <Bath size={16} className="hover:text-[#b89628] text-black duration-300 ease-in-out" />
                    <Wifi size={16} className="hover:text-[#b89628] text-black duration-300 ease-in-out" />
                    <ParkingCircle size={16} className="hover:text-[#b89628] text-black duration-300 ease-in-out" />
                  </div>
                  <Link to={`/rooms/${room.id}`}>
                    <motion.button 
                      className="flex items-center text-black hover:text-[#b89628]"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      More Details <Info size={16} className="ml-1" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}