import Image from "next/image";

// Array to store image data
const images = [
  { src: "/d1.webp", alt: "Image 1", span: "col-span-2" },
  { src: "/d2.webp", alt: "Image 2", span: "col-span-1" },
  { src: "/d3.webp", alt: "Image 3", span: "col-span-1" },
  { src: "/d4.webp", alt: "Image 4", span: "col-span-2" },
];

function Page() {
  return (
    <div>
      <div className="bg-black text-white">
        <div className="text-center p-4">
          <h1>Dining</h1>
          <span className="block">
            Explore our range of comfortable rooms, each thoughtfully designed
            for relaxation and convenience. From cozy single rooms to spacious
            suites, all accommodations feature modern amenities, plush bedding,
            and beautiful views. Select the perfect room to suit your style and
            budget, ensuring a memorable stay. Book now to enjoy luxury and
            comfort at exceptional rates.
          </span>
        </div>

        <div className="lg:p-10 p-4">
          <div className="grid grid-rows-1 gap-6">
            <div className="grid grid-cols-3 gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`${image.span} ${
                    index === 1 || index === 3 ? "sm:mt-6" : ""
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={index % 2 === 0 ? 600 : 400}
                    height={index % 2 === 0 ? 400 : 300} // Adjust height for a better mobile layout
                    className="w-full h-full lg:h-auto object-cover border-2 border-[#C4A053] rounded-xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
