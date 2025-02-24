import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Michael Thompson",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200",
    rating: 5,
    text: "An exceptional experience from start to finish. The attention to detail and personalized service exceeded all expectations."
  },
  {
    name: "Sophie Chen",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200",
    rating: 5,
    text: "The epitome of luxury hospitality. Every moment of our stay was absolutely perfect."
  },
  {
    name: "David Martinez",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200",
    rating: 5,
    text: "A truly remarkable hotel that combines classic elegance with modern luxury. Will definitely return!"
  }
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Guest Testimonials</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
            />
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="text-amber-500 fill-current" size={20} />
              ))}
            </div>
            <p className="text-xl text-gray-600 italic mb-6">
              "{testimonials[currentIndex].text}"
            </p>
            <h3 className="text-lg font-semibold text-gray-900">
              {testimonials[currentIndex].name}
            </h3>
          </motion.div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-amber-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};