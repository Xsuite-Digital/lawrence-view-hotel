import { Ruler, Users, Bath, Utensils, Bike, Info, Wifi, ParkingCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { rooms } from "../../Helpers/Data";
import { useState, useEffect } from "react";

export default function CardSlider() {
  return (
    <div className="bg-gray-100 h-full py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Rooms</h2>
      <div className="grid lg:grid-cols-3 max-w-5xl w-full mx-auto grid-cols-1 gap-y-8">
        {rooms.slice(0, 3).map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
      <div className="text-center mt-8">
        <Link to="/rooms">
          <button className="bg-[#b89628] text-white  hover:scale-105 bg-opacity-70 px-6 py-2 rounded-md hover transition">
            View All Rooms
          </button>
        </Link>
      </div>
    </div>
  );
}

function RoomCard({ room }) {
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
      className="bg-white shadow-lg rounded-xl overflow-hidden w-full max-w-xs mx-auto flex flex-col h-full border-animated "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={room.images[currentImageIndex]}
          alt={room.title}
          className="w-full h-48 object-cover absolute"
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
            <Wifi size={16} className="hover:text-[#b89628] text-black duration-300 ease-in-out"/>
            <ParkingCircle size={16} className="hover:text-[#b89628] text-black duration-300 ease-in-out"/>
          </div>
          <Link to={`/rooms/${room.id}`}>
            <button className="flex items-center hover:text-[#b89628]  text-black">
              More Details <Info size={16} className="ml-1" />
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}