import {  Wifi, Camera, Bed, Shirt, Bath, Utensils, Car, Coffee } from "lucide-react";

const amenitiesData = [
  { icon: Car, title: "Pick-Up Service", desc: "Airport & city transfers available." },
  { icon: Shirt, title: "Clothing Cleaning Service", desc: "Laundry & dry cleaning at your service." },
  { icon: Wifi, title: "Free High-Speed WiFi", desc: "Stay connected anywhere in the hotel." },
  { icon: Coffee, title: "Morning Refreshment", desc: "Enjoy complimentary morning tea & coffee." },
  { icon: Camera, title: "Security Camera", desc: "24/7 surveillance for your safety." },
  { icon: Utensils, title: "Room Services", desc: "Order food & amenities anytime." },
];

const Amenities = () => {
  return (
    <section className="bg-white text-black py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h3 className="text-sm tracking-widest text-gray-500 uppercase">Elevate Your Stay</h3>
        <h2 className="lg:text-4xl text-xl font-semibold mt-2">Stay In Luxury  With Top-Rated Amenities</h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {amenitiesData.map(({ icon: Icon, title, desc }, index) => (
            <div key={index} className="flex items-center space-x-4">
              <Icon className="w-8 h-8 text-[#b89628]" />
              <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
