import { MapPin, Landmark, Navigation, Compass } from "lucide-react";
import img from "../../assets/cityguide.jpg";
const CityGuideTour = () => {
  const animationCSS = `
  .image-wrapper {
    position: relative;
    display: inline-block;
    overflow: hidden;
  }
  
  .zoom-image {
    transition: transform 0.5s ease;
    display: block;
  }
  
  .image-wrapper:hover .zoom-image {
    transform: scale(1.1);
  }
  
  .border-line {
    position: absolute;
    background-color: #c4a053;
    opacity: 0;
    transition: all 0.3s ease;
  }
  
  .top-border {
    top: 0;
    left: 0;
    height: 6px;
    width: 0;
  }
  
  .right-border {
    top: 0;
    right: 0;
    height: 0;
    width: 6px;
    transition-delay: 0.3s;
  }
  
  .bottom-border {
    bottom: 0;
    right: 0;
    height: 6px;
    width: 0;
    transition-delay: 0.6s;
  }
  
  .left-border {
    bottom: 0;
    left: 0;
    height: 0;
    width: 6px;
    transition-delay: 0.9s;
  }
  
  .image-wrapper:hover .top-border {
    width: 100%;
    opacity: 1;
  }
  
  .image-wrapper:hover .right-border {
    height: 100%;
    opacity: 1;
  }
  
  .image-wrapper:hover .bottom-border {
    width: 100%;
    opacity: 1;
  }
  
  .image-wrapper:hover .left-border {
    height: 100%;
    opacity: 1;
  }
`;

  return (
    <section className="bg-white text-black py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center ">
        {/* Left Section with Image */}
        <style>{animationCSS}</style>
      
      <div className="">
        <div className="image-wrapper shadow-lg">
          <img
            src={img}
            alt="City Tour"
            width={1000}
            height={800}
            className="zoom-image rounded-xl shadow-lg"
          />
          
          {/* Border animation elements */}
          <div className="border-line top-border"></div>
          <div className="border-line right-border"></div>
          <div className="border-line bottom-border"></div>
          <div className="border-line left-border"></div>
        </div>
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
