import React from "react";
import { motion } from "framer-motion";
import OfferCard from "./OfferCard";

const SpecialOffers = () => {
  const specialOffers = [
    {
      id: 1,
      title: "Weekend Getaway",
      description:
        "Escape for the weekend with our special package including breakfast and dinner for two.",
      price: "Starting from 25,000 PKR",
      // icon: <Gift className="text-[#c4a053]" size={24} />,
      image:
        "https://images.unsplash.com/photo-1551918120-9739cb430c6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["2 nights stay", "Breakfast included", "Dinner for 2", "Late checkout"],
    },
    {
      id: 2,
      title: "Breakfast Package",
      description:
        "Start your day right with our breakfast package, including our signature morning buffet.",
      price: "Starting from 22,000 PKR",
      // icon: <CoffeeCup className="text-[#c4a053]" size={24} />,
      image:
        "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["Luxury accommodation", "Breakfast buffet", "Access to pool", "Free WiFi"],
    },
    {
      id: 3,
      title: "Dinner & Stay",
      description:
        "Enjoy a romantic evening with our dinner and stay package in our luxurious rooms.",
      price: "Starting from 27,000 PKR",
      // icon: <Drumstick className="text-[#c4a053]" size={24} />,
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["1 night stay", "3-course dinner", "Complimentary wine", "Breakfast included"],
    },
    {
      id: 4,
      title: "Spa & Relaxation",
      description:
        "Indulge in a rejuvenating spa experience with our exclusive relaxation package.",
      price: "Starting from 30,000 PKR",
      // icon: <Sparkles className="text-[#c4a053]" size={24} />,
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["Spa treatment", "Luxury suite", "Welcome drink", "Breakfast included"],
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-20"
    >
      <h2 className="text-3xl font-bold mb-2 text-black">Special Offers</h2>
      <div className="h-1 w-24 bg-[#c4a053] mb-10"></div>
      <p className="text-gray-700 mb-10 max-w-3xl">
        Take advantage of our exclusive special offers and enjoy the best of Lawrence View Hotel.
        Book directly with us for the best rates and special packages.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {specialOffers.map((offer) => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </div>
    </motion.section>
  );
};

export default SpecialOffers; 
