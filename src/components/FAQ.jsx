import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "What are the check-in and check-out timings?",
      answer:
        "Check-in time is from 2:00 PM onwards, and check-out time is by 12:00 PM. Early check-in and late check-out are subject to availability and may incur additional charges.",
    },
    {
      question: "Do you offer airport pickup and drop-off services?",
      answer:
        "Yes, we provide airport pickup and drop-off services upon request. Please contact our front desk or mention it while booking to arrange transportation.",
    },
    {
      question: "Is breakfast included in the room booking?",
      answer:
        "Yes, we offer complimentary breakfast for all guests staying at the hotel. You can enjoy a variety of delicious options at our in-house restaurant every morning.",
    },
    {
      question: "Do you have free Wi-Fi available?",
      answer:
        "Yes, we offer high-speed Wi-Fi access throughout the hotel, including rooms, lobby, and dining areas, free of charge for all our guests.",
    },
    {
      question: "Can unmarried couples book a room at the hotel?",
      answer:
        " No, we do not allow room bookings for unmarried couples as per our hotel policy.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Our cancellation policy varies depending on the room type and booking package. Please check the terms while booking or contact our support team for details.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="  text-white">
      {/* <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-center">
          Frequently Asked
          <span className="text-[#c4a053] ml-2">Questions</span>
        </h2>
      </div> */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            className="accordion rounded-lg shadow-md border border-gray-300"
            key={index}
          >
            <button
              type="button"
              className="toggle-button w-full text-sm sm:text-base outline-none text-left font-semibold py-4 px-3 sm:py-6 sm:px-4 flex items-center text-white rounded-t-lg hover:text-[#c4a053] transition-all duration-300"
              onClick={() => toggleAccordion(index)}
              aria-expanded={openIndex === index}
            >
              <span className="mr-4">{faq.question}</span>
              {openIndex === index ? (
                <Minus className="w-5 h-5 ml-auto shrink-0 text-[#b89628] transition-all duration-300" />
              ) : (
                <Plus className="w-5 h-5 ml-auto shrink-0 text-[#b89628] transition-all duration-300" />
              )}
            </button>
            <div
              className={`content transition-all duration-500 ease-in-out ${
                openIndex === index
                  ? "max-h-[1000px] pb-4 sm:pb-6 overflow-visible"
                  : "max-h-0 invisible overflow-hidden"
              }`}
            >
              <p className="text-xs sm:text-sm text-white px-4 sm:px-6 pb-4 sm:pb-6">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
