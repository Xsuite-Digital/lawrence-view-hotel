"use client";
import Image from "next/image";
import { useState } from "react";

const Page = () => {
  const images = ["/slide2.webp", "/slide1.webp", "/slide3.webp"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showButtons, setShowButtons] = useState(false);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
  };

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handleMouseEnter = () => setShowButtons(true);
  const handleMouseLeave = () => setShowButtons(false);

  return (
    <div
      className="relative w-full max-w-full mx-auto overflow-hidden bg-black"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="flex transition-transform duration-700"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((src, index) => (
          <div className="min-w-full relative" key={index}>
            <Image
              src={src}
              alt={`Slider Image ${index + 1}`}
              className="w-full  object-cover md:h-[70vh] h-[50vh]" // Adjust height for mobile and desktop
              width={1000}
              height={100}
            />
          </div>
        ))}
      </div>

      {showButtons && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-opacity-50 text-white px-4 py-2 text-2xl rounded-full transition-opacity duration-300"
            style={{ width: "50px", height: "50px" }}
          >
            &#10094;
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-opacity-50 text-white px-4 py-2 text-2xl rounded-full transition-opacity duration-300"
            style={{ width: "50px", height: "50px" }}
          >
            &#10095;
          </button>
        </>
      )}
    </div>
  );
};

export default Page;
