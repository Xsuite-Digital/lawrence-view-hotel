// Page.jsx
"use client";

import React, { useState } from "react";
import { addDays } from "date-fns";
import DateRangePicker from "./DateRangePicker";
import RoomSelector from "./RoomSelector";
import BookingButton from "./BookingButton";

function Page() {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const [dateRangeOpen, setDateRangeOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(tomorrow);
  const [formattedDateRange, setFormattedDateRange] = useState(
    `${today.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} - ${tomorrow.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`
  );
  const [rooms, setRooms] = useState([{ id: 1, people: 2 }]);
  const [roomPeopleDisplay, setRoomPeopleDisplay] = useState("1 Room 2 People");

  const handleDateChange = (date, isStart) => {
    if (date instanceof Date && !isNaN(date)) {  // Ensure date is a valid Date object
      if (isStart) {
        setStartDate(date);
        if (date > endDate) {
          setEndDate(date);
        }
      } else {
        setEndDate(date);
      }

      const formattedStart = startDate instanceof Date && !isNaN(startDate)
        ? startDate.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })
        : '';

      const formattedEnd = date instanceof Date && !isNaN(date)
        ? date.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })
        : '';

      setFormattedDateRange(`${formattedStart} - ${formattedEnd}`);
    } else {
      console.error("Invalid date object:", date);
    }
  };

  const clearDates = () => {
    setStartDate(today);
    setEndDate(tomorrow);
    setFormattedDateRange(
      `${today.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} - ${tomorrow.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`
    );
    setDateRangeOpen(false);
  };

  const addRoom = () => {
    setRooms([...rooms, { id: rooms.length + 1, people: 2 }]);
  };

  const removeRoom = (roomId) => {
    setRooms((prevRooms) => {
      const updatedRooms = prevRooms.filter((room) => room.id !== roomId);
      if (updatedRooms.length === 0) {
        setRoomPeopleDisplay("1 Room 2 People");
      }
      return updatedRooms;
    });
  };

  const handlePeopleChange = (roomId, people) => {
    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.id === roomId ? { ...room, people: Number(people) } : room
      )
    );
  };

  const updateRoomPeopleDisplay = () => {
    if (rooms.length === 0) {
      setRoomPeopleDisplay("1 Room 2 People");
      return;
    }
    const totalPeople = rooms.reduce((sum, room) => sum + room.people, 0);
    setRoomPeopleDisplay(
      `${rooms.length} Room${rooms.length > 1 ? "s" : ""} ${totalPeople} People`
    );
  };

  // Functions to handle opening each section and closing the other
  const handleOpenDateRange = () => {
    setDateRangeOpen(true);
    setIsOpen(false); // Close RoomSelector
  };

  const handleOpenRoomSelector = () => {
    setIsOpen(true);
    setDateRangeOpen(false); // Close DateRangePicker
  };

  return (
    <div className="bg-[#2c2c2c]">
      <div className="p-6 flex lg:flex-row flex-col bg-opacity-55">
        
        {/* DateRangePicker Component */}
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={(date) => handleDateChange(date, true)}
          onEndDateChange={(date) => handleDateChange(date, false)}
          formattedDateRange={formattedDateRange}
          onOpen={handleOpenDateRange}
          onClose={() => setDateRangeOpen(false)}
          isOpen={dateRangeOpen}
          clearDates={clearDates}
          today={today}
        />

        {/* RoomSelector Component */}
        <RoomSelector
          rooms={rooms}
          roomPeopleDisplay={roomPeopleDisplay}
          isOpen={isOpen}
          onAddRoom={addRoom}
          onRemoveRoom={removeRoom}
          onPeopleChange={handlePeopleChange}
          onToggleOpen={handleOpenRoomSelector}
          onUpdateRoomDisplay={updateRoomPeopleDisplay}
          setRooms={setRooms}
          setIsOpen={setIsOpen}
          onCloseRoomSelector={() => setIsOpen(false)}  // This closes the RoomSelector
        />

        {/* BookingButton Component */}
        <BookingButton />
      </div>
    </div>
  );
}

export default Page;
