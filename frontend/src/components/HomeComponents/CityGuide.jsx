import { MapPin, Landmark, Navigation, Compass } from "lucide-react";
import img from "../../assets/cityguide.jpg";
const CityGuideTour = () => {
  return (
    <section className="bg-white text-black py-8 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center ">
        {/* Left Section with Image */}
        <div className="">
          <img
            src={img}
            alt="City Tour"
            width={1000}
            height={800}
            className="rounded-xl  shadow-lg border border-[#c4a053]"
          />
        </div>
        {/* Left Section with Text */}
        <div className="text-left">
          <h2 className="text-4xl font-bold text-[#c4a053]">
            Discover & Explore
          </h2>
          <p className="text-lg text-gray-700 mt-4">
            Unveil the beauty of the city with exclusive attractions, historic
            landmarks, and immersive tours that make your stay unforgettable.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <MapPin size={30} className="text-[#c4a053]" />
              <p className="text-black font-semibold">Top Attractions</p>
            </div>
            <div className="flex items-center gap-3">
              <Landmark size={30} className="text-[#c4a053]" />
              <p className="text-black font-semibold">Historic Landmarks</p>
            </div>
            <div className="flex items-center gap-3">
              <Navigation size={30} className="text-[#c4a053]" />
              <p className="text-black font-semibold">Guided Tours</p>
            </div>
            <div className="flex items-center gap-3">
              <Compass size={30} className="text-[#c4a053]" />
              <p className="text-black font-semibold">Hidden Gems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityGuideTour;
