import { Lightbulb, Waves, CheckCircle } from "lucide-react";
import P1 from "../../assets/P1.webp";
import P2 from "../../assets/P2.webp";

const HotelFeature = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Side Content */}
      <div className="tracking-widest space-y-7 text-center lg:text-left">
        <h3 className="text-lg font-semibold text-[#c4a053] uppercase">
          Lawrence View Hotel
        </h3>
        <h2 className="lg:text-5xl text-xl font-semibold mt-2 text-gray-900">
          We Provide Outdoor Activities To All Visitors
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          San Francisco has hills with views, the coast, excellent food & has
          been voted the happiest, healthiest, and fittest city in the States
          many times.
        </p>

        {/* Featured */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 mt-6 items-center lg:items-start">
          <div className="flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-[#c4a053]" />
            <span className="font-medium text-gray-900">The Best Lighting</span>
          </div>
          <div className="flex items-center gap-2">
            <Waves className="w-6 h-6 text-[#c4a053]" />
            <span className="font-medium text-gray-900">The Best Swimming</span>
          </div>
        </div>

        {/* Bullet Points */}
        <ul className="mt-6 space-y-2 text-center lg:text-left">
          <li className="flex items-center justify-center lg:justify-start gap-2 text-gray-700">
            <CheckCircle className="text-[#c4a053] w-5 h-5" />
            It is a long fact that a reader will be distracted by readable
            content.
          </li>
          <li className="flex items-center justify-center lg:justify-start gap-2 text-gray-700">
            <CheckCircle className="text-[#c4a053] w-5 h-5" />
            Lorem Ipsum is simply dummy text of the printing and industry.
          </li>
          <li className="flex items-center justify-center lg:justify-start gap-2 text-gray-700">
            <CheckCircle className="text-[#c4a053] w-5 h-5" />
            There are many variations of Lorem Ipsum majority.
          </li>
        </ul>

        <button className="mt-6 bg-[#c4a053] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#b2954b] transition-all">
          DISCOVER MORE
        </button>
      </div>

      {/* Right Side Images */}
      <div className="relative flex flex-col items-center lg:block">
        <div className="border-t-8 w-56 h-64 border-l-8 border-[#c4a053] absolute bottom-0 left-8 hidden lg:block"></div>

        <div className="absolute left-64 -bottom-10 object-cover overflow-hidden hidden lg:block">
          <img
            src={P1}
            alt="Luxury Hotel Interior"
            className="w-[400px] h-[300px] object-cover"
          />
        </div>

        <div className="absolute -top-28 left-8 object-cover overflow-hidden hidden lg:block">
          <img
            src={P2}
            alt="Hotel Hallway"
            className="w-[400px] h-[300px] object-cover"
          />
        </div>

        <div className="border-b-8 w-64 h-64 border-r-8 border-[#c4a053] absolute -top-[67.8px] -z-10 right-0 hidden lg:block"></div>

        {/* Mobile Images */}
        <div className="flex flex-col items-center gap-6 lg:hidden">
          <img
            src={P2}
            alt="Hotel Hallway"
            className="w-[90%] h-auto object-cover rounded-lg shadow-lg"
          />
          <img
            src={P1}
            alt="Luxury Hotel Interior"
            className="w-[90%] h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HotelFeature;
