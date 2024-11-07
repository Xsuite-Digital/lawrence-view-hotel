"use client"
import React, { useState } from "react";
import { RoomRates } from "../Helpers/Data";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion"; // Import Framer Motion

const Page = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === RoomRates.length - 1 ? 0 : prevSlide + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide === 0 ? RoomRates.length - 1 : prevSlide - 1)
    );
  };

  return (
    <div className="bg-black text-white">
      <div className="p-8">
        <h1 className="text-3xl font-semibold tracking-widest flex items-center justify-center">
          Rooms & Rates
        </h1>
        <p className="flex items-center justify-center text-center text-white text-sm">
          Explore our range of comfortable rooms, each thoughtfully designed
          for relaxation and convenience. From cozy single rooms to spacious
          suites, all accommodations feature modern amenities, plush bedding,
          and beautiful views. Select the perfect room to suit your style and
          budget, ensuring a memorable stay. Book now to enjoy luxury and
          comfort at exceptional rates.
        </p>
      </div>

      <div className="relative">
        {/* Carousel Wrapper */}
        <div className="overflow-hidden w-full">
          <motion.div
            className="flex transition-all duration-700 ease-in-out"
            initial={{ x: 0 }}
            animate={{ x: -currentSlide * 100 + "%" }} // Slide to the left based on current slide
          >
            {RoomRates.map((room, index) => (
              <div key={index} className="space-y-4 p-10 flex-shrink-0 w-full">
                <div className="">
                  <Image
                    src={room.Imgsrc}
                    alt={room.name}
                    height={170}
                    width={330}
                    quality={100}
                    className="lg:h-96 h-auto w-full object-center"
                  />
                </div>

                <h3 className="font-bold text-2xl">{room.name}</h3>
                <p className="h-auto w-full   text-center text-xs">{room.description}</p>

                <div className="grid lg:grid-cols-3 grid-cols-2 grid-rows-3 lg:grid-rows-2 gap-10">
                  {room.icons.map((iconSrc, i) => (
                    <div key={i} className="flex space-x-3 items-center">
                      <Image
                        height={20}
                        width={20}
                        key={i}
                        src={iconSrc.src}
                        alt="Room feature"
                        className="h-full w-auto"
                      />
                      <span>{iconSrc.name}</span>
                    </div>
                  ))}
                </div>
                <div className="space-x-2">
                  <div className="flex items-center w-56 relative group">
                    <button className="reserve-button relative px-6 py-2 font-medium text-[#C4A053] rounded-md overflow-hidden">
                      Reserve Now
                    </button>
                    <span className="absolute inset-0 border border-[#C4A053] rounded-md opacity-0 group-hover:opacity-100 group-hover:animate-borderRotate"></span>
                    <Icon
                      icon="icon-park:arrow-right"
                      className="mt-1 text-[#C4A053]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Carousel Controls */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4">
          {/* Previous Slide */}
          <button
            onClick={goToPrevSlide}
            className="bg-[#c4a053] text-white  h-8 w-8 flex items-center justify-center rounded-full"
          >
            <Icon icon="icon-park:arrow-left" width={24} height={24} />
          </button>

          {/* Next Slide */}
          <button
            onClick={goToNextSlide}
            className="bg-[#c4a053] text-white h-8 w-8 flex items-center justify-center rounded-full"
          >
            <Icon icon="icon-park:arrow-right" width={24} height={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
