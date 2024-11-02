import Image from "next/image";

function page() {
  return (
    <div>
      <div className="bg-black text-white mt-32">
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
        <div className="p-10 ">
          <div className="grid grid-rows-2 space-y-8 gap-4">
            {/* First row */}
            <div className="grid grid-cols-3  gap-10">
              <div className="col-span-2 ">
                <Image
                  src="/d1.webp"
                  alt="Image 1"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover border-2 border-[#C4A053] rounded-xl"
                />
              </div>
              <div className="col-span-1">
                <Image
                  src="/d2.webp"
                  alt="Image 2"
                  width={300}
                  height={400}
                  className="w-full h-auto object-cover border-2 border-[#C4A053] rounded-xl"
                />
              </div>
            </div>

            {/* Second row */}
            <div className="grid grid-cols-3 gap-10">
              <div className="col-span-1">
                <Image
                  src="/d3.webp"
                  alt="Image 3"
                  width={300}
                  height={400}
                  className="w-full h-auto object-cover border-2 border-[#C4A053] rounded-xl"
                />
              </div>
              <div className="col-span-2">
                <Image
                  src="/d4.webp"
                  alt="Image 4"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover border-2 border-[#C4A053] rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
