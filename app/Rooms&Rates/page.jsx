import React from "react";
import { RoomRates } from "../Helpers/Data";
import Image from "next/image";
import { Icon } from "@iconify/react";

const page = () => {
  return (
    <div className="bg-black text-white">
      <div className=" p-8 mt-32">
        <h1 className=" text-3xl font-semibold tracking-widest flex items-center justify-center ">
          Rooms & Rates
        </h1>
        <p className=" flex items-center justify-center text-center text-black text-sm">
          Explore our range of comfortable rooms, each thoughtfully designed for
          relaxation and convenience. From cozy single rooms to spacious suites,
          all accommodations feature modern amenities, plush bedding, and
          beautiful views. Select the perfect room to suit your style and
          budget, ensuring a memorable stay. Book now to enjoy luxury and
          comfort at exceptional rates.
        </p>
      </div>

      <div className=" grid *: grid-cols-1 lg:grid-cols-2 grid-rows-2">
        {RoomRates.map((room, index) => (
          <div key={index} className=" space-y-4 p-10">
            <div className="">
              <Image
                src={room.Imgsrc}
                alt={room.name}
                height={170}
                width={330}
                quality={100}
                className="h-96 w-full object-center    "
              />
            </div>

            <h3 className=" font-bold text-2xl">{room.name}</h3>
            <p className=" h-auto w-full text-xs">{room.description}</p>

            <div className="grid grid-cols-3 grid-rows-2 gap-10">
              {room.icons.map((iconSrc, i) => (
                <div key={i} className=" flex space-x-3 items-center">
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
            <div className=" space-x-2">
              <div className=" flex items-center w-56  relative group">
                <button className="reserve-button relative px-6 py-2 font-medium text-[#C4A053] rounded-md overflow-hidden">
                  Reserve Now
                </button>
                <span className="absolute inset-0 border border-[#C4A053]  rounded-md opacity-0 group-hover:opacity-100 group-hover:animate-borderRotate"></span>
                <Icon
                  icon="icon-park:arrow-right"
                  className="mt-1 text-[#C4A053] "
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
