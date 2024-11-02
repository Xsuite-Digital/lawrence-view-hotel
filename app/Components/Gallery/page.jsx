"use client";
import React, { useState } from "react";
import { GalleryCard } from "../../Helpers/Data";
import Image from "next/image";

const Page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 4;

  const handleNext = () => {
    if (currentIndex < GalleryCard.length - visibleCards) {
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
      <main className="bg-black p-2">
        <div className="flex flex-col items-center justify-center space-y-3 text-white text-5xl pt-10">
          <h1>Gallery</h1>
        </div>

        <section className="relative">
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Previous Images"
              className={`h-auto p-2 ${
                currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              } transform scale-x-[-1]`}
            >
              <Image
                src="/arrow.webp"
                alt="Previous"
                width={40}
                height={40}
                priority
              />
            </button>

            <div className="grid grid-cols-4 gap-4 overflow-hidden w-full max-w-8xl">
              {GalleryCard.slice(currentIndex, currentIndex + visibleCards).map(
                (card, index) => (
                  <div
                    key={index}
                    className="bg-white relative group transform-gpu transition-transform duration-500 shadow-lg hover:border-[#c4a053] ease-in-out border w-full max-w-sm rounded-xl font-[sans-serif] overflow-hidden flex flex-col justify-between mx-auto mt-4"
                  >
                    <div className="relative">
                      <Image
                        height={288}
                        width={383}
                        src={card.Imgsrc}
                        alt={card.name}
                        className="h-auto transition-transform duration-500 ease-in-out transform group-hover:scale-110 object-center rounded-t-lg"
                        quality={100}
                      />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-t-lg"></div>
                    </div>
                  </div>
                )
              )}
            </div>

            <button
              onClick={handleNext}
              disabled={currentIndex >= GalleryCard.length - visibleCards}
              aria-label="Next Images"
              className={`h-auto p-2 ${
                currentIndex >= GalleryCard.length - visibleCards
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              <Image
                src="/arrow.webp"
                alt="Next"
                width={40}
                height={40}
                priority
              />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center text-white text-3xl pt-20">
            <h1>Best Hotels In Lahore</h1>
          </div>
          <div className="flex flex-col items-center justify-center text-white text-normal pt-10">
            <p className="w-[70vw] text-center">
              If you’re searching for the perfect hotel room near you in Lahore,
              Lawrence View Hotel is the perfect choice. Our hotel offers
              comfortable and affordable accommodations that are designed to
              meet the needs of every traveler. With a variety of room options,
              competitive rates, and a convenient location, Lawrence View Hotel
              is the perfect choice for your next trip to Lahore. Book your room
              today and experience the comfort and convenience of our hotel for
              yourself.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;
