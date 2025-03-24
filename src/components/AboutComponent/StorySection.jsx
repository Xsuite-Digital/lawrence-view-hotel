
import { motion } from "framer-motion";
import A1 from "../../assets/LVHH.webp";

export const StorySection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Story & Heritage
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative max-w-full"
          >
            {/* Outer Image Effect */}
            <div className="absolute top-4 left-4 right-4 bottom-4 border-4 border-white bg-white rounded-lg shadow-lg z-0"></div>

            {/* Foreground Image */}
            <img
              src={A1}
              alt="Lawrence View Hotel Vintage"
              className="relative rounded-lg shadow-xl lg:h-[30rem] h-auto w-full z-10"
            />

            {/* Golden Overlay Content */}
            <div className="absolute top-6 left-6 right-6 p-6 bg-black bg-opacity-85 rounded-md shadow-md text-white z-20">
              <h4 className="text-xl font-semibold mb-2 text-white">Lawrence View HOTEL</h4>
              <p className="text-sm leading-relaxed">
              Each corner of our hotel tells a story of elegance, tradition, and unwavering dedication to exceptional service.
              </p>
            </div>
          </motion.div>

         
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6 max-w-full"
          >

<h3 className="text-sm text-[#b89628] font-semibold">FROM $100.00 PER NIGHT</h3>
            <h3 className="text-2xl font-semibold text-gray-900">
              A Legacy of Luxury Since 1985
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Founded in 1985, Lawrence View Hotel has stood as a beacon of
              luxury and hospitality in the heart of the city. What began as a
              visionary project by the Lawrence family has evolved into one of
              the most prestigious hotels in the region.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our commitment to excellence and attention to detail has earned us
              numerous accolades and the trust of distinguished guests from
              around the world. Each corner of our hotel tells a story of
              elegance, tradition, and unwavering dedication to exceptional
              service.
            </p>
            <div className="text-gray-700">
              Recommended on: <span className="text-[#b89628]">Book_Holidays</span>, Lawrence View Hotel
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
