import { motion } from 'framer-motion';
import { Heart, Award, Users, Shield } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: "Genuine Care",
    description: "We put our heart into every interaction, ensuring each guest feels truly valued and cared for."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for perfection in every detail, maintaining the highest standards in hospitality."
  },
  {
    icon: Users,
    title: "Community",
    description: "We create meaningful connections with our guests and contribute positively to our community."
  },
  {
    icon: Shield,
    title: "Trust",
    description: "We build lasting relationships through transparency, reliability, and consistent service."
  }
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Mission & Values</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our mission is to create extraordinary experiences that delight our guests and set new standards in luxury hospitality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-amber-500 mb-4">
                <value.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};