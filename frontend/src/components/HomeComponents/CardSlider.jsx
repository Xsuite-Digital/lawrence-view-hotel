import { Users, Ruler, Utensils, Bike, Info } from "lucide-react";
import D1 from "../../assets/D1.webp";
import D2 from "../../assets/D2.webp";
import D3 from "../../assets/D3.webp";
import { Link } from "react-router-dom";

const rooms = [
  {
    title: "Deluxe Double Room",
    guests: 2,
    size: "26 m²",
    description:
      "A luxurious room with modern amenities and a comfortable ambiance, perfect for a relaxing stay.",
    image: { D1 },
  },
  {
    title: "Superior Suite Room",
    guests: 2,
    size: "26 m²",
    description:
      "Experience the comfort of deluxe living in a modern space with a private balcony and stunning views.",
    image: { D2 },
  },
  {
    title: "Executive Suite Room",
    guests: 2,
    size: "220 m²",
    description:
      "A perfect blend of luxury and elegance, featuring a hot tub and premium services for a sophisticated experience.",
    image: { D3 },
  },
];

const RoomCard = ({ room }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={room.image}
        alt={room.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{room.title}</h3>
        <div className="flex items-center text-gray-600 text-sm my-2 space-x-3">
          <span className="flex items-center">
            <Users className="mr-1 w-4 h-4" /> {room.guests} Guests
          </span>
          <span className="flex items-center">
            <Ruler className="mr-1 w-4 h-4" /> {room.size}
          </span>
        </div>
        <p className="text-gray-500 text-sm">{room.description}</p>
        <div className="flex justify-between items-center mt-4 text-gray-600 text-sm">
          <div className="flex space-x-3">
            <Utensils className="w-4 h-4" />
            <Bike className="w-4 h-4" />
          </div>
          <Link
            to="/rooms"
            className="text-blue-500 font-medium flex items-center"
          >
            Full Info <Info className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const CardSlider = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold text-center mb-12">Featured Rooms</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {rooms.map((room, index) => (
          <RoomCard key={index} room={room} />
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
