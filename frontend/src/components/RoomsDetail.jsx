import { useState } from "react";
import { useParams } from "react-router-dom";
import { rooms } from "../Helpers/Data";
import BookingEngine from "./BookingEngine/Bookingengine";

export default function RoomsDetail() {
  const { id } = useParams();
  const room = rooms.find((r) => r.id === parseInt(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!room)
    return (
      <p className="text-center text-3xl font-semibold text-gray-700 mt-10">
        Room not found
      </p>
    );

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % room.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + room.images.length) % room.images.length
    );
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-6 lg:px-0 ">
      {/* Room Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Image Carousel */}
        <div className="relative w-full overflow-hidden ">
          <img
            src={room.images[currentImageIndex]}
            alt={room.title}
            className="w-full h-[500px] object-cover transition-transform duration-500 ease-in-out transform scale-100 hover:scale-105"
          />
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-3 rounded-full hover:bg-opacity-80 transition"
            onClick={prevImage}
          >
            ❮
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-3 rounded-full hover:bg-opacity-80 transition"
            onClick={nextImage}
          >
            ❯
          </button>
          <div className="flex gap-3 mt-5 justify-center bg-transparent">
            {room.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index}`}
                className={`w-20 h-20 object-cover   cursor-pointer  transition-transform hover:scale-110 ${
                  currentImageIndex === index ? "ring-4 ring-[#c4a053]" : ""
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Room Details */}
        <div>
          <h1 className="text-5xl font-bold text-gray-800">{room.title}</h1>
          <p className="text-gray-600 mt-2 text-lg">
            {room.guests} • {room.size}
          </p>
          <p className="text-3xl font-semibold text-[#c4a053] mt-4">
            {room.price}
          </p>

          {/* Room Overview */}
          <div className="mt-6">
            <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-[#c4a053] inline-block pb-2">
              Room Overview
            </h2>
            <p className="text-gray-700 mt-4 text-lg leading-relaxed">
              {room.description}
            </p>
          </div>

          {/* Amenities */}
          <div className="mt-6">
            <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-[#c4a053] inline-block pb-2">
              Amenities
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-4 text-gray-700 text-lg">
              {room.amenities.slice(0, 6).map((amenity, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-gray-100 p-2 rounded-lg "
                >
                  <p>{amenity}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Room Rules */}
          <div className="mt-6">
            <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-[#c4a053] inline-block pb-2">
              Room Rules
            </h2>
            <ul className="list-disc ml-6 text-gray-700 mt-4 text-lg">
              {room.roomRules.slice(0, 3).map((rule, index) => (
                <li key={index} className="mb-2">
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Centered Booking Engine */}
      <div className="mt-12 flex justify-center w-full">
        <BookingEngine />
      </div>
    </div>
  );
}
