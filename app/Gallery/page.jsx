"use client";

import { GalleryPage } from "../Helpers/Data";
import Image from "next/image";
import { useEffect, useState } from "react";

const Page = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div>
      <main className="bg-black p-2 min-h-screen mt-32">
        <div className="flex flex-col items-center justify-center space-y-3 text-white text-5xl pt-10">
          <h1>Gallery</h1>
        </div>

        <section className="relative">
          <div className="flex items-center justify-between mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-hidden w-full max-w-8xl p-8">
              {GalleryPage.map((card, index) => (
                <div
                  key={index}
                  className={`bg-white shadow-lg border w-full max-w-sm rounded-xl font-[sans-serif] overflow-hidden flex flex-col justify-between mx-auto mt-4 relative
                    ${
                      isLoaded
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }
                    transition-all duration-500 ease-out delay-[${
                      index * 100
                    }ms]
                    `}
                  style={{ perspective: "1000px" }}
                >
                  <div className="relative overflow-hidden rounded-t-lg group transform-gpu transition-transform duration-500">
                    {/* Image with zoom-in and fade effect */}
                    <Image
                      height={288}
                      width={383}
                      src={card.Imgsrc}
                      alt={card.name}
                      className="h-auto object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110 group-hover:opacity-90"
                      quality={100}
                    />
                    {/* Animated Border */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#c4a053] transition-all duration-300 ease-in-out"></div>
                    {/* Text Overlay with Slide-up and Fade-in Effect */}
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                      <p className="text-white text-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                        {card.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;
