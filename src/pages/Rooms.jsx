import { Ruler, Users, Bath, Utensils, Bike, Info, Wifi, ParkingCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { rooms } from "../Helpers/Data";
import { useEffect, useState } from "react";

export default function Rooms() {
  return (
    <div className="bg-gray-100 py-12">
      <h2 className="text-3xl font-bold mt-4 2xl:mt-0 text-center mb-8">Rooms</h2>
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

          return (
            <motion.div
              key={room.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden w-full max-w-xs mx-auto"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src={room.images[currentImageIndex]}
                alt={room.title}
                className="w-full h-48 object-cover transition-opacity duration-500"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{room.title}</h3>
                <div className="flex items-center text-sm text-gray-600 mt-2">
                  <Users size={16} className="mr-2" /> {room.guests}
                  <Ruler size={16} className="ml-4 mr-2" /> {room.size}
                </div>
                <p className="text-gray-500 text-xs mt-2">{room.description}</p>
                <hr className="my-4 border-gray-200" />
                <div className="flex items-center justify-between text-gray-500 text-sm">
                  <div className="flex space-x-3">
                    <Bath size={16} />
                    <Wifi size={16} />
                    <ParkingCircle   size={16} />
                  </div>
                  <Link to={`/rooms/${room.id}`}>
                    <button className="flex items-center text-black">
                      More Details <Info size={16} className="ml-1" />
                    </button>
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
