import { useParams } from "react-router-dom";
import { rooms } from "../Helpers/Data";

export default function RoomsDetail() {
  const { id } = useParams();
  const room = rooms.find((r) => r.id === parseInt(id));

  if (!room) return <p className="text-center text-2xl mt-10">Room not found</p>;

  return (
    <div className="max-w-5xl mx-auto py-12">
      <h1 className="text-3xl font-bold text-center">{room.title}</h1>
      
      {/* Room Image */}
      <img src={room.image} alt={room.title} className="w-full h-64 object-cover mt-4 rounded-lg" />

      {/* Room Details */}
      <div className="mt-6 text-gray-700">
        <p className="text-lg">{room.description}</p>
        <p className="text-xl font-semibold mt-4">Price: {room.price}</p>
      </div>

      {/* Amenities Section */}
      <h3 className="text-2xl font-bold mt-6">Amenities</h3>
      <ul className="list-disc ml-6 text-gray-600">
        {room.amenities.map((amenity, index) => (
          <li key={index}>{amenity}</li>
        ))}
      </ul>
    </div>
  );
}
