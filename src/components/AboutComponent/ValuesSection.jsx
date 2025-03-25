import { motion } from "framer-motion";
import { Heart, Award, Users, Shield } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Unparalleled Hospitality:",
    description:
      "We ensure every guest enjoys premium service, personalized care, and a warm, welcoming atmosphere.",
  },
  {
    icon: Award,
    title: "Luxury & Elegance:",
    description:
      "Our stylish accommodations and modern amenities create a sophisticated retreat for all travelers.",
  },
  {
    icon: Users,
    title: "Community Connection:",
    description:
      "We embrace local culture, enrich guest experiences, and build meaningful connections with our surroundings.",
  },
  {
    icon: Shield,
    title: "Trust & Commitment:",
    description:
      "With transparency and security, we guarantee a seamless stay where your comfort, privacy, and satisfaction come first.",
  },
];

export const ValuesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Mission & Values
          </h2>
          <div className="w-20 h-1 bg-[#b89628] mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
          At Lawrence View Hotel, we are dedicated to providing exceptional hospitality, seamless comfort, and a memorable experience for every guest.

          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:shadow-[#c4a053]"
            >
              <div className="text-[#b89628] mb-4">
                <value.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
