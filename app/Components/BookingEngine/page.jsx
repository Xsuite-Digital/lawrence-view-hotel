"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";

function Page() {
  const today = new Date();
  const tomorrow = addDays(today, 1);

  const [isOpen, setIsOpen] = useState(false);
  const [dateRangeOpen, setDateRangeOpen] = useState(false);
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(tomorrow);
  const [formattedDateRange, setFormattedDateRange] = useState(
    `${today.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })} - ${tomorrow.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })}`
  );
  const [rooms, setRooms] = useState([{ id: 1, people: 2 }]);
  const [roomPeopleDisplay, setRoomPeopleDisplay] = useState("1 Room 2 People");

  const handleDateChange = (date, isStart) => {
    if (isStart) {
      setStartDate(date);
    } else {
      setEndDate(date);
      const formattedStart = startDate.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
      const formattedEnd = date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
      setFormattedDateRange(`${formattedStart} - ${formattedEnd}`);
      setDateRangeOpen(false); // Close the calendar after selecting the end date
    }
  };

  const clearDates = () => {
    setStartDate(today);
    setEndDate(tomorrow);
    setFormattedDateRange(
      `${today.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })} - ${tomorrow.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })}`
    );
    setDateRangeOpen(false);
  };

  const openDateRange = () => {
    setIsOpen(false); // Close room selector when opening date range
    setDateRangeOpen(true);
  };

  const openRoomSelector = () => {
    setDateRangeOpen(false); // Close date range when opening room selector
    setIsOpen(true);
  };

  const handlePeopleChange = (roomId, people) => {
    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.id === roomId ? { ...room, people: Number(people) } : room
      )
    );
  };

  const addRoom = () => {
    setRooms([...rooms, { id: rooms.length + 1, people: 2 }]);
  };

  const removeRoom = (roomId) => {
    setRooms((prevRooms) => {
      const updatedRooms = prevRooms.filter((room) => room.id !== roomId);
      if (updatedRooms.length === 0) {
        setRoomPeopleDisplay("1 Room 2 People"); // Reset to default
      }
      return updatedRooms;
    });
  };

  const updateRoomPeopleDisplay = () => {
    if (rooms.length === 0) {
      setRoomPeopleDisplay("1 Room 2 People"); // Default display
      return;
    }
    const totalPeople = rooms.reduce((sum, room) => sum + room.people, 0);
    setRoomPeopleDisplay(
      `${rooms.length} Room${rooms.length > 1 ? "s" : ""} ${totalPeople} People`
    );
  };

  return (
    <div>
      <div className="p-6 flex justify-center bg-[#2c2c2c] bg-opacity-55">
        {/* Single Input Date Range Picker */}
        <div className="relative w-full max-w-lg mb-4">
          <div
            className="p-2 bg-gray-100 text-black border h-10 border-gray-300 transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-center"
            onClick={openDateRange}
          >
            <span>{formattedDateRange || "Select date range"}</span>
            {formattedDateRange && (
              <Icon
                icon="mdi:close-circle"
                className="text-gray-500 cursor-pointer hover:text-red-500"
                onClick={clearDates}
                title="Clear dates"
              />
            )}
          </div>

          {dateRangeOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute z-20 w-full bg-white border border-gray-300 shadow-lg transition-all duration-300 ease-in-out p-4"
            >
              <div className="flex justify-between items-center mb-2">
                <div className="text-black text-xs">
                  {formattedDateRange
                    ? `Your Selection: ${formattedDateRange}`
                    : "Select date range"}
                </div>

                <button
                  onClick={clearDates}
                  className="text-gray-600 py-1 px-2 rounded-md hover:text-red-500 transition-colors"
                >
                  Close
                </button>
              </div>
              <div className="flex">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => handleDateChange(date, true)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  inline
                  className="border-none bg-transparent" // Make background transparent
                />
                <div className="border-l border-gray-300" /> {/* Divider */}
                <DatePicker
                  selected={endDate}
                  onChange={(date) => handleDateChange(date, false)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  inline
                  className="border-none bg-transparent" // Make background transparent
                />
              </div>
            </motion.div>
          )}
        </div>

        {/* Dynamic Room Selector */}
        <div className="relative w-full max-w-sm">
          <div
            className="p-2 bg-gray-100 text-black border h-10 border-gray-300 transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-center"
            onClick={openRoomSelector}
          >
            {roomPeopleDisplay}
            <span
              className={`ml-2 h-2 w-2 flex items-center justify-center transition-transform ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              ▼
            </span>
          </div>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute z-10 w-full bg-white border border-gray-300 shadow-lg p-4"
            >
              <div className="text-sm mb-2">

             {formattedDateRange
                    && `Your Selection: ${roomPeopleDisplay}`}
                    </div>
              <AnimatePresence>
                {rooms.map((room) => (
                  <motion.div
                    key={room.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex items-center mb-3"
                  >
                    <span className="mr-2">Room {room.id}:</span>
                    <select
                      value={room.people}
                      onChange={(e) =>
                        handlePeopleChange(room.id, e.target.value)
                      }
                      className="border focus:outline-none border-gray-300 rounded-md p-1"
                    >
                      {[...Array(10).keys()].map((i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1} {i + 1 === 1 ? "person" : "people"}
                        </option>
                      ))}
                    </select>
                    <Icon
                      icon="mdi:trash-can"
                      className="ml-2 text-gray-500 font-semibold h-5 w-5 cursor-pointer hover:text-red-500 transition-colors"
                      onClick={() => {
                        removeRoom(room.id);
                        updateRoomPeopleDisplay(); // Update display after removing room
                      }}
                      title="Remove room"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
              <div className="flex justify-between">
                <button
                  onClick={addRoom}
                  className="mt-2 bg-[#c4a053] text-black py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Add Room
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false); // Close room selector after done
                    updateRoomPeopleDisplay(); // Update display after closing
                  }}
                  className="mt-2 bg-[#c4a053] text-black py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Done
                </button>
              </div>
            </motion.div>
          )}
        </div>
        <button className="px-8 h-10 w-full max-w-44 bg-[#c4a053] text-black hover:bg-opacity-90 transition-colors">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default Page;
