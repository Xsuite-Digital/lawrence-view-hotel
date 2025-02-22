import React from "react";
import P2 from "../assets/p2.webp";
import before from "../assets/before.webp";
import shape from "../assets/shape.webp";
import logor from "../assets/logor.webp";
const Contact = () => {
    const stats = [
        { value: "20", label: "Projects" },
        { value: "10", label: "People" },
        { value: "40", label: "Years" },
        { value: "30", label: "Award Winner" },
      ];
      
    return (
    <section className="relative w-full bg-white">
      {/* Stats Section */}
      <div className="w-full bg-white py-8 flex flex-col lg:flex-row justify-center gap-16">
  {stats.map((stat, index) => (
    <div key={index} className="relative flex flex-col lg:flex-row items-center gap-4 lg:gap-12">
      <p className="text-8xl opacity-30 font-semibold text-[#c4a053] pr-0 lg:pr-6">
        {stat.value}
      </p>

      {/* Border - Vertical for Desktop, Horizontal for Mobile */}
      {index !== stats.length && (
        <div className="w-20 h-[2px] lg:h-20 lg:w-[2px] bg-[#c4a053] mt-4 lg:mt-0"></div>
      )}

      <p className="text-gray-500 font-semibold text-center lg:absolute lg:top-12">
        {stat.label}
      </p>
    </div>
  ))}
</div>


      
      {/* Contact Section */}
      <div className="relative w-full">
  {/* Background Image */}
  <img
    src={P2}
    alt="Luxury Hotel Room"
    height={400}
    width={600}
    className="w-full h-auto md:w-[1000px] md:h-[500px]"
  />

  {/* Inquiry Box */}
  <div className="absolute lg:top-3/4 top-[15rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 text-white p-3 w-[90%] max-w-sm md:max-w-md md:left-[31rem]">
    <div className="border border-[#c4a053] p-6 border-opacity-70 text-center">
      <img src={logor} alt="LVH-logo" className="mx-auto w-16 h-16 md:w-24 md:h-24" />
      <p className="text-sm mt-2">Call us for any inquiry</p>
      <p className="text-xl md:text-2xl font-bold">(801) 500 50 088</p>
    </div>
  </div>

  {/* Contact Form */}
  <div className="absolute lg:top-[85%] top-[35rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg p-6 md:p-8 w-[90%] max-w-lg">
    <h2 className="text-lg md:text-xl flex items-center justify-center font-semibold text-black mb-4">
      <img src={before} alt="icon" className="w-6 h-6" />
      <span className="mx-2">Get in Touch</span>
      <img src={before} alt="icon" className="w-6 h-6" />
    </h2>
    <form>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input type="text" placeholder="Your Name" className="border p-2 rounded w-full" />
        <input type="email" placeholder="Email Address" className="border p-2 rounded w-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input type="date" placeholder="Check In" className="border p-2 rounded w-full" />
        <input type="date" placeholder="Check Out" className="border p-2 rounded w-full" />
      </div>
      <textarea placeholder="Write a Message" className="border p-2 rounded w-full mb-4"></textarea>
      <button className="w-full bg-black text-white py-2 rounded hover:bg-[#c4a053] transition">
        CHECK AVAILABILITY
      </button>
    </form>
  </div>

  {/* Decorative Shape Image */}
  <div className="lg:absolute hidden right-0 -bottom-12 md:-bottom-24 w-32 h-32 md:w-96 md:h-96">
    <img src={shape} height={400} width={400} alt="shape-image" className="w-full h-full" />
  </div>
</div>

    </section>
  );
};

export default Contact;
