import { useState } from "react";
import CustomCalendar from "./CustomCalendar";
import DoubleCalendar from "./DoubleCalendar";
import RoomSelector from "./RoomSelector";

const BookingEngine = () => {
  const [city, setCity] = useState("");

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mx-auto    2xl:max-w-6xl xl:max-w-5xl lg:max-w-4xl  bg-black bg-opacity-20 w-full py-4 px-4 border-2 border-[#c4a053]   ">
      {/* Select City*/}
      <div className="flex  flex-col">
       
        <select
          className="w-48 p-2 border  focus:outline-none text-black"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          <option value="" disabled>Select City</option>
          <option value="LAHORE">Lahore</option>
          <option value="ISLAMABAD">Islamabad</option>
          <option value="KARACHI">Karachi</option>
        </select>
      </div>

      {/* Room Selector */}
      <div className="flex flex-col  p-2">
        
        <RoomSelector />
      </div>

      {/* Calendar */}
      <div >
        <div className="hidden lg:block ">
          <DoubleCalendar />
        </div>
        <div className="block lg:hidden ">
          <CustomCalendar />
        </div>
      </div>

      {/* Book Now Button */}
      <div className="flex ">
        <button className="w-32 bg-[#c4a053] text-black py-2 px-4  transition duration-300">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BookingEngine;
