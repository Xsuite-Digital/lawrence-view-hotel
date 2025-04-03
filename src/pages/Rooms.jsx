import { Ruler, Users, Bath, Info, Wifi, ParkingCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { rooms } from "../Helpers/Data";
import { useEffect, useState } from "react";

export default function Rooms() {
  const [activeLocation, setActiveLocation] = useState("lahore");

  const lahoreRooms = rooms.slice(0, 6);
  const mallamJabbahRooms = rooms.slice(6, 9);

  const [imageIndices, setImageIndices] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndices((prev) => {
        const newIndices = { ...prev };
        rooms.forEach((room) => {
          newIndices[room.id] = (prev[room.id] + 1) % room.images.length || 0;
        });
        return newIndices;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [rooms]);

  const nextSlide = (roomId, totalImages) => {
    setImageIndices((prev) => ({
      ...prev,
      [roomId]: (prev[roomId] + 1) % totalImages,
    }));
  };

  const prevSlide = (roomId, totalImages) => {
    setImageIndices((prev) => ({
      ...prev,
      [roomId]: (prev[roomId] - 1 + totalImages) % totalImages,
    }));
  };

  const renderRoomCards = (roomsList) => {
    return roomsList.map((room) => (
      <motion.div
        key={room.id}
        className="bg-white shadow-lg rounded-xl overflow-hidden w-full max-w-xs mx-auto flex flex-col h-full border-animated"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={room.images[imageIndices[room.id] || 0]}
            alt={room.title}
            className="w-full h-48 object-cover"
          />
          <button onClick={() => prevSlide(room.id, room.images.length)} className="absolute left-2 top-1/2 text-white bg-black p-2 rounded-full shadow-md">
            <ChevronLeft size={26} />
          </button>
          <button onClick={() => nextSlide(room.id, room.images.length)} className="absolute right-2 top-1/2 text-white bg-black p-2 rounded-full shadow-md">
            <ChevronRight size={26} />
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
    ));
  };

  return (
    <div className="bg-gray h-full">
      <h2 className="text-3xl font-bold lg:mt-24 -mt-12 p-12 text-white bg-black 2xl:mt-0 text-center mb-8">Rooms</h2>

      {/* Enhanced Location Selection */}
      <div className="max-w-5xl w-full mx-auto mb-12 px-4 flex justify-center">
        <div className="flex space-x-6 bg-white p-4 rounded-full shadow-lg">
          <motion.button
            className={`px-8 py-2 rounded-full font-semibold text-lg transition-all duration-300 border-2 border-transparent ${
              activeLocation === "lahore" 
                ? "bg-black text-white border-black scale-110" 
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            onClick={() => setActiveLocation("lahore")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Lahore
          </motion.button>
          <motion.button
            className={`px-8 py-2 rounded-full font-semibold text-lg transition-all duration-300 border-2 border-transparent ${
              activeLocation === "mallam" 
                ? "bg-black text-white border-black scale-110" 
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            onClick={() => setActiveLocation("mallam")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Mallam Jabbah
          </motion.button>
        </div>
      </div>

      {/* Location Display */}
      <div className="max-w-5xl w-full mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-center mb-6 pb-2 border-b-2 border-[#b89628]">
            {activeLocation === "lahore" ? "Lahore" : "Mallam Jabbah"} Rooms
          </h3>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-8 gap-x-4 px-4">
            {activeLocation === "lahore" ? renderRoomCards(lahoreRooms) : renderRoomCards(mallamJabbahRooms)}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
