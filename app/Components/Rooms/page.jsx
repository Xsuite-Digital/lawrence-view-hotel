"use client";
import React, { useState } from "react";
import { RoomCards } from "../../Helpers/Data";
import Image from "next/image";

const Page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3; // Number of cards to display at a time

  const handleNext = () => {
    if (currentIndex < RoomCards.length - visibleCards) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div>
      <main className="bg-black p-2 py-16 ">
        <div className="flex flex-col items-center justify-center space-y-5 text-white text-3xl">
          <h1>Featured Rooms</h1>
          <span>Indulge in our finest luxuries with exclusive packages</span>
        </div>

        <section className="relative">
          <div className="flex items-center  justify-center mt-6">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="p-2   rounded-full "
            >
              <Image
                src="/Left-arrow.webp"
                alt="right-arrow"
                height={25}
                width={25}
                className=" h-auto w-full"
              />
            </button>

            <div className="grid grid-cols-3 gap-4 overflow-hidden w-full max-w-5xl">
              {RoomCards.slice(currentIndex, currentIndex + visibleCards).map(
                (card, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-lg  hover:border-[#c4a053] border-4  duration-300 ease-in-out  w-full max-w-xs rounded-xl font-[sans-serif] overflow-hidden flex flex-col  mx-auto mt-4"
                  >
                    <div className="">
                      <Image
                        height={270}
                        width={330}
                        src={card.Imgsrc}
                        alt={card.name}
                        className="h-full object-center rounded-t-lg"
                        quality={100}
                      />
                    </div>
                    <div className="flex-grow text-center px-4">
                      <h3 className="text-xl mt-1 font-bold">{card.name}</h3>
                      <p className="mt-3 text-xs text-black leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                    <div className="p-2 text-center">
                      <button
                        type="button"
                        className="px-4 py-2 text-white text-sm tracking-wider border-3  border-[#c4a053] outline-none bg-black rounded-xl"
                      >
                        {card.button}
                      </button>
                    </div>
                  </div>
                )
              )}
            </div>

            <button
              onClick={handleNext}
              disabled={currentIndex >= RoomCards.length - visibleCards}
              className="p-2 text-white  rounded-full "
            >
              <Image
                src="/right-arrow.webp"
                alt="right-arrow"
                height={25}
                width={25}
                className=" h-auto w-full"
              />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;
