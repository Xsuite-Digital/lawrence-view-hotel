import { Lightbulb, Waves, CheckCircle, Table } from "lucide-react";
import P1 from "../../assets/ABOUT1.webp";
import P2 from "../../assets/ABOUT2.webp";
import {Link} from 'react-router-dom';
import {motion} from "framer-motion"
const HotelFeature = () => {


  
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Side Content */}
      <div className="tracking-widest space-y-7 text-center lg:text-left">
        <h3 className="text-lg flex flex-col font-semibold text-[#c4a053] uppercase">
        Lawrence View Hotel
        <span>

Luxury Hotel | City Views | Exceptional Comfort
        </span>

        </h3>
        <h2 className="lg:text-5xl text-xl font-semibold mt-2 text-gray-900">
        Experience Comfort & Luxury at Lawrence View Hotel
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
        Discover a world of luxury, comfort, and hospitality at Lawrence View Hotel. Whether you’re staying in the heart of Lahore or the breathtaking heights of Malam Jabba, every moment is designed for your relaxation and joy.

        </p>

        {/* Featured */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 mt-6 items-center lg:items-start">
          <div className="flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-[#c4a053]" />
            <span className="font-medium text-gray-900">Elegant Hotel Ambiance
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Table className="w-6 h-6 text-[#c4a053]" />
            <span className="font-medium text-gray-900">Exquisite Dining Experience</span>
          </div>
        </div>

        {/* Bullet Points */}
        <ul className="mt-6 space-y-2 text-center lg:text-left">
          <li className="flex flex-col justify-center lg:justify-start gap-2 text-gray-700">
            
            <li>Seamless room booking for an unmatched stay.
            </li>
            <li>Enjoy breathtaking city views from your hotel room.
            </li>
            <li>Stay at the best hotel, where luxury meets comfort.
            </li>

          </li>
          <li className="flex items-center justify-center lg:justify-start gap-2 text-gray-700">
          
            Book your stay at Lawrence View Hotel, the best hotel in Lahore and hotel in Malam Jabba, where every stay promises a luxurious retreat with the finest hospitality.


          </li>
         
        </ul>
        <div class="animated-button-container">
  <a href="/about" class="animated-button">
    <span>DISCOVER MORE</span>
    <span class="border-top"></span>
    <span class="border-right"></span>
    <span class="border-bottom"></span>
    <span class="border-left"></span>
  </a>
</div>

   
      </div>

   <div className="relative flex flex-col items-center lg:block">
  <div className="border-t-8 w-72 h-64 border-l-8 border-[#c4a053] absolute bottom-0 left-2 hidden lg:block"></div>

  <motion.div className="absolute left-64 -bottom-10 w-[400px] h-[300px] overflow-hidden hidden lg:block">
    <motion.img
      src={P1}
      alt="Luxury Hotel Interior"
      className="w-full h-full object-cover border-animated"
      whileHover={{ scale: 1.2 }} // Zoom in image inside
      transition={{ duration: 0.3 }}
    />
  </motion.div>

  <motion.div
    className="absolute -top-28 left-2 object-cover overflow-hidden hidden lg:block"
    whileHover={{ filter: "brightness(1.1)" }}
    transition={{ duration: 0.3 }}
  >
    <motion.img
      src={P2}
      alt="Luxury Hotel Interior"
      className="w-[400px] h-[300px] object-cover border-animated"
      whileHover={{ scale: 1.2 }} // Zoom in image inside
      transition={{ duration: 0.3 }}
    />
  </motion.div>

  <div className="border-b-8 w-96 h-64 border-r-8 border-[#c4a053] absolute -top-[67.8px] -z-10 -right-16 hidden lg:block"></div>

  {/* Mobile View Images with Hover Effect */}
  <div className="flex flex-col items-center gap-6 lg:hidden">
    <motion.img
      src={P2}
      alt="Hotel Hallway"
      className="w-[100%] h-auto object-cover rounded-lg shadow-lg border-animated"
      whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
      transition={{ duration: 0.3 }}
    />
    <motion.img
      src={P1}
      alt="Luxury Hotel Interior"
      className="w-[100%] h-auto object-cover rounded-lg shadow-lg border-animated"
      whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
      transition={{ duration: 0.3 }}
    />
  </div>
</div>

    </section>
  );
};

export default HotelFeature;
