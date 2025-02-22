import React, { useState } from "react";
import CustomCalendar from "./CustomCalendar";
import DoubleCalendar from "./DoubleCalendar";
import RoomSelector from "./RoomSelector";

const BookingEngine = () => {
  const [city, setCity] = useState("LAHORE");

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between  mx-auto p-4 bg-white shadow-lg rounded-lg gap-x-4">
      {/* City Selection */}
      <div className="flex flex-col">
        <label className="text-black font-medium">Select City:</label>
        <select
          className="w-48 p-2 border rounded-md focus:outline-none text-black"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          <option value="LAHORE">Lahore</option>
          <option value="ISLAMABAD">Islamabad</option>
          <option value="KARACHI">Karachi</option>
        </select>
      </div>

      {/* Room Selector */}
      <div className="flex flex-col">
        <label className="text-black font-medium">Select Room:</label>
        <RoomSelector />
      </div>

      {/* Calendar */}
      <div className="flex flex-col">
        <div className="hidden lg:block mt-5">
          <DoubleCalendar />
        </div>
        <div className="block lg:hidden ">
          <CustomCalendar />
        </div>
      </div>

      {/* Book Now Button */}
      <div className="flex mt-5">
        <button className="w-32 bg-[#c4a053] text-black p-3 rounded-md hover:bg-[#  ] transition duration-300">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BookingEngine;
