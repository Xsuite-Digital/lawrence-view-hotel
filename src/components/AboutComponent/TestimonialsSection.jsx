import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Maura",
    title: "A safe bet in Lahore",
    rating: 5,
    text: "My third stay here and the standards remain high. Great staff who helped me get a package to Skardu( thanks Hasnain!). Excellent food and standards."
  },
  {
    name: "Hladisch",
    title: "Great, clean and comfortable",
    rating: 5,
    text: "It’s a good location, very clean and comfortable, the staff is nice and polite. All around one of the nicer hotels I’ve stayed in while traveling Pakistan.Don’t really have anything to complain about. I would recommend it to everyone🙌👍"
  },
  {
    name: "Maris",
    title: "Good home in Lahore",
    rating: 5,
    text: "Breakfast was ok. With vegetarian/vegan options. Staff is good."
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
         <h1 className='text-black font-semibold mb-2 text-xl'>{testimonials[currentIndex].title}</h1>
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