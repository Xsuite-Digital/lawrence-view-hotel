import { Ruler, Users, Bath, Utensils, Bike, Info } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { rooms } from "../../Helpers/Data";

export default function CardSlider() {
  return (
    <div className="bg-gray-100 h-full py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Rooms</h2>
      <div className="grid lg:grid-cols-3 max-w-5xl w-full mx-auto grid-cols-1 gap-y-8">
        {rooms.slice(0, 3).map((room) => (
         <motion.div
         key={room.id}
         className="bg-white shadow-lg rounded-xl overflow-hidden w-full max-w-xs mx-auto flex flex-col h-full"
       >
         <img
           src={room.image}
           alt={room.title}
           className="w-full h-48 object-cover"
         />
         <div className="p-4 flex flex-col flex-grow">
           <h3 className="font-semibold text-lg">{room.title}</h3>
           <div className="flex items-center text-sm text-gray-600 mt-2">
             <Users size={16} className="mr-2" /> {room.guests}
             <Ruler size={16} className="ml-4 mr-2" /> {room.size}
           </div>
           <p className="text-gray-500 text-xs mt-2 flex-grow">
             {room.description}
           </p>
           <hr className="my-4 border-gray-200" />
           <div className="flex items-center justify-between text-gray-500 text-sm mt-auto">
             <div className="flex space-x-3">
               <Bath size={16} />
               <Utensils size={16} />
               <Bike size={16} />
             </div>
             <Link to={`/rooms/${room.id}`} >
               <button className="flex items-center cursor-pointer text-black">
                 Full Info <Info size={16} className="ml-1" />
               </button>
             </Link>
           </div>
         </div>
       </motion.div>
       
        ))}
      </div>
      <div className="text-center mt-8">
        <Link to="/rooms">
          <button className="bg-white bg-opacity-70 placeholder:  px-6 py-2 rounded-md hover transition">
            View All Rooms
          </button>
        </Link>
      </div>
    </div>
  );
}