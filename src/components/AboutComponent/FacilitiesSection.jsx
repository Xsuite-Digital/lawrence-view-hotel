import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import A1 from '../../assets/ABOUT2.webp';
import D1 from '../../assets/Dining.webp';
const facilities = [
  {
    title: "Luxury Suites",
    image: A1,
    description: "Experience ultimate comfort in our meticulously designed suites."
  },
  {
    title: "Fine Dining",
    image: D1,
    description: "Savor exquisite cuisine at our award-winning restaurants."
  },

];

const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "18+", label: "Luxury Rooms" },
  { value: 1, label: "Restaurant" },
  { value: "50+", label: "Happy Guests Daily" }
];

export const FacilitiesSection = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }
    }));
  }, [controls]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Facilities & Amenities</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              custom={index}
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                className="text-4xl font-bold text-amber-500 mb-2"
              >
                {stat.value}
              </motion.div>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity group-hover:bg-opacity-50">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">{facility.title}</h3>
                  <p className="text-white text-opacity-90">{facility.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};