import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Wifi,
  Car,
  Coffee,
  School as Pool,
  Space as Spa,
  Mountain,
  UtensilsCrossed,
  Dumbbell,
  Waves,
} from "lucide-react";
import LVHL from "../../assets/LVHL.webp";
import MLJLVH from "../../assets/MLJLVH.webp";

const mockData = [
  {
    id: 1,
    image: LVHL,
    title: "Luxury Resort",
    description: "Experience unparalleled luxury in our mountain retreat",
    amenities: [
      { name: "Free WiFi", icon: Wifi },
      { name: "Parking", icon: Car },
      { name: "Gourmet Breakfast", icon: Coffee },
      { name: "Infinity Pool", icon: Pool },
      { name: "Premium Spa", icon: Spa },
    ],
    alt: "Luxury Resort",
  },
  {
    id: 2,
    image: MLJLVH,
    title: "Beachfront Escape",
    description: "Your private paradise along pristine shores",
    amenities: [
      { name: "Ocean View", icon: Mountain },
      { name: "24/7 Dining", icon: UtensilsCrossed },
      { name: "Fitness Center", icon: Dumbbell },
      { name: "Beach Access", icon: Waves },
      { name: "Wellness Spa", icon: Spa },
    ],
    alt: "Beachfront Escape",
  },
];

const CardSlider = () => {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSlideChange = (direction) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setIndex((prevIndex) => {
      if (direction === "next") {
        return (prevIndex + 1) % mockData.length;
      }
      return (prevIndex - 1 + mockData.length) % mockData.length;
    });

    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div className="relative min-h-[600px] w-full max-w-7xl mx-auto p-12 mt-12">
      <div className="absolute inset-0 " />

      <button
        onClick={() => handleSlideChange("prev")}
        className="absolute left-4 secondary top-1/2 -translate-y-1/2 z-10 p-4  transition-all rounded-full  hover:scale-110 duration-300"
        disabled={isTransitioning}
      >
        <ChevronLeft className="text-gray-900 w-6 h-6" />
      </button>

      <div className="relative h-[600px] overflow-hidden rounded-xl ">
        <div
          className={`absolute w-full h-full transition-transform duration-500 ease-out ${
            isTransitioning ? "scale-105 blur-sm" : "scale-100"
          }`}
        >
          <img
            src={mockData[index].image}
            alt={mockData[index].alt}
            className="w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Content Container */}
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h2 className="lg:text-4xl text-2xl font-bold mb-3 text-white tracking-tight">
              {mockData[index].title}
            </h2>
            <p className="lg:text-xl xl:text-xl 2xl:text-xl text-sm text-gray-200 mb-6">
              {mockData[index].description}
            </p>

            <div className="grid lg:grid-cols-5 grid-cols-3 gap-6">
              {mockData[index].amenities.map((amenity, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                    <amenity.icon className="w-6 h-6" />
                  </div>
                  <span className="mt-2  text-xs opacity-90 group-hover:opacity-100">
                    {amenity.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => handleSlideChange("next")}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-4 secondary  transition-all rounded-full  hover:scale-110 duration-300"
        disabled={isTransitioning}
      >
        <ChevronRight className="text-gray-900 w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {mockData.map((_, i) => (
          <button
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === index ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
