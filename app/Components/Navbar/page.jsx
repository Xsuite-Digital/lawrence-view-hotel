"use client";
import React from "react";
import { navdData } from "../../Helpers/Data";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const Page = () => {
  return (
    <div className="fixed top-2 left-0 right-0 z-20  ">
      <nav className=" bg-[#000000] px-16 py-4  mt-6 flex items-center justify-between">
        <div className="">
          <Image src="/LVH-logo.webp" alt="lvh pic" height={100} width={100} />
        </div>
        <ul className='flex justify-between items-center relative'>
  {navdData.map((item, index) => (
    <li key={index} className='relative text-white mx-4 group'>
      <Link href={item.href} className="relative z-10 hover:text-[#c4a053]">
        {item.name}
      </Link>
      <div className='underline'></div>
    </li>
  ))}
</ul>


        <div>
          <Link href="/Contact">
            <motion.button
              className="bg-[#c4a053]  px-4 py-1 rounded-xl"
              whileHover={{ scale: 1.1 }} // Scale and rotate on hover
              whileTap={{ scale: 0.95 }} // Slightly shrink on tap
            >
              Book Now
            </motion.button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Page;
