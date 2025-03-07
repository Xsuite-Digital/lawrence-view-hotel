import { Hotel, Bell, Star, MapPin } from "lucide-react"; // Lucide Icons
import P2 from "../assets/p2.webp";
import shape from "../assets/shape.webp";
import logor from "../assets/logor.webp";
import GetInTouch from "./HomeComponents/GetInTouch";
import { useState } from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Hotel,
    title: "Luxury Rooms",
    description:
      "Elegantly designed rooms with premium amenities to ensure a comfortable stay.",
  },
  {
    icon: Bell,
    title: "24/7 Concierge",
    description:
      "Our dedicated team is available around the clock to cater to your needs.",
  },
  {
    icon: Star,
    title: "Award-Winning Hospitality",
    description:
      "Recognized for excellence in service and luxury accommodation.",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description:
      "Located in the heart of the city with easy access to major attractions.",
  },
];

const FeatureCard = ({ Icon, title, description }) => (
  <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
    <Icon className="text-[#c4a053]" size={40} />
    <h3 className="text-lg font-semibold mt-4">{title}</h3>
    <p className="text-gray-600 text-center mt-2">{description}</p>
  </div>
);

const Contact = () => {
  return (
    <section className="relative w-full bg-white lg:mb-28 mb-0">
      <div className="w-full bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Lawrence View Hotel?
          </h2>
          <p className="text-gray-600 mt-4">
            Experience luxury, comfort, and excellence in the heart of the city.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map(({ icon: Icon, title, description }, index) => {
            const [isHovered, setIsHovered] = useState(false);

            return (
              <motion.div
                key={index}
                className="hover:shadow-[#c4a053] p-6 rounded-2xl shadow-lg transition-all cursor-pointer relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <motion.div
                  className="text-4xl text-gold-500 mb-4 flex justify-center"
                  animate={isHovered ? { rotate: [0, 360] } : { rotate: 0 }}
                  transition={
                    isHovered
                      ? { repeat: Infinity, duration: 1.5, ease: "linear" }
                      : {}
                  }
                >
                  <Icon />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 text-center">
                  {title}
                </h3>
                <p className="text-gray-600 text-center mt-2">{description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="relative w-full mb-4">
        <img
          src={P2}
          alt="Luxury Hotel Room"
          className="w-full h-auto md:w-[1000px] md:h-[500px]"
        />

        <div className="absolute lg:top-3/4 top-10 md:left-1/4 xl:left-[20rem] lg:ml-0 ml-5 md:transform md:-translate-x-1/2 md:-translate-y-1/2 bg-black bg-opacity-80 text-white p-3 w-[90%] max-w-sm md:max-w-md">
          <div className="border border-[#c4a053] p-6 border-opacity-70 text-center">
            <img
              src={logor}
              alt="LVH-logo"
              className="mx-auto w-16 h-16 md:w-24 md:h-24"
            />
            <p className="text-sm mt-2">Call us for any inquiry</p>
            <a
              href="tel:+92(42)36311574"
              className="text-xl md:text-2xl font-bold"
            >
              +92 (42) 36311574
            </a>
          </div>
        </div>

        <div className="absolute 2xl:top-[260px] top-[16rem]  lg:right-[23rem]  2xl:right-[58rem]">
          <GetInTouch />
        </div>

        {/* Decorative Shape */}
        <div className="lg:block absolute hidden right-0 top-1/2 2xl:top-1">
          <img
            src={shape}
            height={400}
            width={400}
            alt="shape-image"
            className="w-full h-full xl:h-[20rem] xl:w-[20rem] 2xl:h-[42rem] 2xl:w-[42rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
