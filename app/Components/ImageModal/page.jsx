

"use client";
import React, { useState } from "react";
import { GalleryCard } from "../../Helpers/Data"; // Make sure the path is correct
import Image from "next/image";
import { Icon } from "@iconify/react";

const ImageModal = ({ isOpen, onClose, initialIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const totalImages = GalleryCard.length;

  const handleNext = () => {
    if (currentIndex < totalImages - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 transition-opacity duration-300 ease-in-out">
      <div className="relative max-w-3xl w-full flex flex-col items-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl p-2 rounded-full transition-colors duration-300 z-50"
          aria-label="Close Modal"
        >
          <Icon icon="ic:twotone-close" className="text-white h-8 w-8" />
        </button>

        {/* Main Image Section with Navigation Arrows */}
        <div className="flex justify-center items-center z-40 mb-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label="Previous Image"
            className={`text-white ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            } flex items-center justify-center h-12 w-12`}
          >
            <Icon
              icon="tabler:arrow-left"
              className="text-[#c4a053] h-10 w-10"
            />
          </button>
          <Image
            src={GalleryCard[currentIndex].Imgsrc}
            alt={GalleryCard[currentIndex].name}
            width={800}
            height={600}
            className="rounded-lg object-cover transition-opacity duration-300 ease-in-out mx-4"
          />
          <button
            onClick={handleNext}
            disabled={currentIndex >= totalImages - 1}
            aria-label="Next Image"
            className={`text-white ${
              currentIndex >= totalImages - 1
                ? "opacity-50 cursor-not-allowed"
                : ""
            } flex items-center justify-center h-12 w-12`}
          >
            <Icon
              icon="tabler:arrow-right"
              className="text-[#c4a053] h-10 w-10"
            />
          </button>
        </div>

        {/* Thumbnail Section Below the Main Image */}
        <div className="flex justify-center space-x-2 mt-2">
          {GalleryCard.map((image, index) => (
            <div
              key={index}
              className={`cursor-pointer ${
                index === currentIndex ? "border-2 border-[#c4a053]" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <Image
                src={image.Imgsrc}
                alt={image.name}
                width={100} // Fixed width for thumbnails
                height={100} // Fixed height for thumbnails
                className="rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
