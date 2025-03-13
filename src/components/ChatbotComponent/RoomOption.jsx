import { useState } from "react";
import { Check } from "lucide-react";
import D3 from "../../assets/D3.webp";
import R1 from "../../assets/R1.webp";
import ES from "../../assets/ES.webp";
import Studio from "../../assets/Studio.webp";
import T3 from "../../assets/T3.webp";
import SA1 from "../../assets/SA1.webp";

const roomCategories = [
  {
    id: "executive",
    name: "Executive Suite Room",
    image: ES,
    description: ["King", "Garden view", "City view", "Street view", "Bathroom with jacuzzi", "Park view"],
    price: "$120/night",
  },
  {
    id: "deluxe",
    name: "Deluxe Double Room",
    image: D3,
    description: [
      "Double Bed",
      "Seating area",
      "Remote control TV",
      "Bathroom with shower",
      "Wireless internet",
      "Fridge",
    ],
    price: "$250/night",
  },
  {
    id: "superior",
    name: "Superior Suite Room",
    image: R1,
    description: [
      "King",
      "Bathroom with shower",
      "Breakfast area",
      "Bathroom with shower",
      "Seating area",
      "Separate luggage store",
      "Cable TV",
    ],
    price: "$250/night",
  },
  {
    id: "apartment",
    name: "Studio Apartment",
    image:  Studio ,
    description: [
      "Queen Bed",
      "Bathroom with jacuzza",
      "Working room",
      "Kitchenette",
      "Breakfast area",
      "Equipped kitchen",
    ],
    price: "$250/night",
  },
  {
    id: "twin",
    name: "Twin Sharing",
    image: T3,
    description: [
      "King Bed",
      "Fully Equipped Kitchen",
      "Dishwasher",
      "Smart Home Controls",
      "Living Room",
      
    ],
    price: "$250/night",
  },
  {
    id: "quad Room",
    name: "Quad Room",
    image:  SA1,
    description: [
      "Double Bed",
      "Small Living Space",
      "Work Desk",
      "Kitchenette",
      "High-Speed WiFi",
      "Remote control TV",
    ],
    price: "$250/night",
  },

];

export default function RoomOption({ onBackToChat }) {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showBooking, setShowBooking] = useState(false); 

  const handleRoomSelect = (roomId) => {
    setSelectedRoom(roomId);
    setShowBooking(false);  
  };

  const handleBookNow = () => {
    setShowBooking(true); 
  };

  return (
    <div className="p-2">
      <h3 className="font-bold text-lg mb-3">Our Rooms</h3>

     
      {showBooking ? (
        <div>
          
          <button
            onClick={() => setShowBooking(false)}
            className="w-full mt-3 border border-gray-300 text-gray-600 py-2 rounded-lg font-medium"
          >
            Back to Room Options
          </button>
        </div>
      ) : (
        <>
          {!selectedRoom ? (
            <div className="space-y-3">
              {roomCategories.map((room) => (
                <button
                  key={room.id}
                  onClick={() => handleRoomSelect(room.id)}
                  className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="font-medium">{room.name}</div>
                  <div className="text-sm text-gray-600">{room.price}</div>
                </button>
              ))}
            </div>
          ) : (
            <div>
              {roomCategories
                .filter((room) => room.id === selectedRoom)
                .map((room) => (
                  <div key={room.id}>
                    <div className="relative w-full h-40 mb-3 rounded-lg overflow-hidden">
                      <img src={room.image || "/placeholder.svg"} alt={room.name} className="w-full h-full object-cover" />
                    </div>

                    <h4 className="font-bold text-lg">{room.name}</h4>
                    <p className="text-black font-medium mb-2">{room.price}</p>

                    <ul className="mb-4">
                      {room.description.map((item, index) => (
                        <li key={index} className="flex items-start mb-1">
                          <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
<a href="https://lawrence-view-hotel-apartments-lahore.hotelrunner.com/bv3/search?checkin_date=2025-03-10&checkout_date=2025-03-11&currency=PKR&guest_rooms%5B0%5D%5Badult_count%5D=2&guest_rooms%5B0%5D%5Bchild_count%5D=0&guest_rooms%5B0%5D%5Bguest_count%5D=2&locale=en-US&meta%5Brate_code%5D=HR:925797&meta%5Broom_code%5D=HR:925797&rooms%5Bcount%5D=1&search_made=true" target="_blank">

                    <button
                      onClick={handleBookNow}
                      className="w-full bg-black text-white py-2 rounded-lg font-medium mb-3"
                      >
                      Book Now
                    </button>
                      </a>

                    <button
                      onClick={() => setSelectedRoom(null)}
                      className="w-full border border-gray-300 text-gray-600 py-2 rounded-lg font-medium"
                    >
                      Back to Room Options
                    </button>
                  </div>
                ))}
            </div>
          )}

          <button onClick={onBackToChat} className="w-full border border-black text-black py-2 rounded-lg font-medium mt-4">
            Back to Conversation
          </button>
        </>
      )}
    </div>
  );
}
