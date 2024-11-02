"use client";
import Image from "next/image";
import { useState } from "react";

const Page = () => {
  const images = ["/slide1.webp", "/slide2.webp", "/slide3.webp"]; // Array of images
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current image index
  const [showButtons, setShowButtons] = useState(false); // Track button visibility

  // Function to go directly to the first image
  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Function to go directly to the third image
  const goToNext = () => {
    if (currentIndex >= 2) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Handlers for mouse enter and leave
  const handleMouseEnter = () => {
    setShowButtons(true);
  };

  const handleMouseLeave = () => {
    setShowButtons(false);
  };

  return (
    <div
      className="relative w-full mt-36 max-w-full mx-auto 
       overflow-hidden bg-black"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image container for sliding effect */}
      <div
        className="flex transition-transform duration-700"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, // Slide effect
        }}
      >
        {images.map((src, index) => (
          <div className="min-w-full" key={index}>
            <Image
              src={src} // Show current image based on currentIndex
              alt={`Slider Image ${index + 1}`}
              className="w-full h-auto object-cover"
              width={1000}
              height={100}
            />
          </div>
        ))}
      </div>

      {/* Navigation buttons - visible only when showButtons is true */}
      {showButtons && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-opacity-50 text-white px-4 py-2 text-2xl rounded-full transition-opacity duration-300"
            style={{ width: "50px", height: "50px" }} // Set button width and height
          >
            &#10094;
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-opacity-50 text-white px-4 py-2 text-2xl rounded-full transition-opacity duration-300"
            style={{ width: "50px", height: "50px" }} // Set button width and height
          >
            &#10095;
          </button>
        </>
      )}
    </div>
  );
};

export default Page;
