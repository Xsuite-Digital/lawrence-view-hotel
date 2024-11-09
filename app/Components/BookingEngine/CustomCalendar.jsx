// CustomCalendar.jsx
import React, { useState } from "react";
import { format, addDays } from "date-fns";
import { Icon } from "@iconify/react";

const CustomCalendar = ({ startDate, endDate, onDateChange, minDate, clearDates }) => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  const [range, setRange] = useState({
    start: startDate || today,
    end: endDate || addDays(today, 1),
  });

  const handleDateClick = (date) => {
    if (!range.start || (range.start && range.end)) {
      // Start new range selection
      setRange({ start: date, end: null });
      onDateChange(date, null);
    } else {
      // Set end date
      const newEndDate = date > range.start ? date : range.start;
      const newStartDate = date > range.start ? range.start : date;
      setRange({ start: newStartDate, end: newEndDate });
      onDateChange(newStartDate, newEndDate);
    }
  };

  const renderCalendarDays = () => {
    const days = [];
    const startOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    const endOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);

    for (let i = 1; i <= endOfMonth.getDate(); i++) {
      const currentDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i);
      const isDisabled = minDate && currentDay < minDate;
      const isSelected = currentDay >= range.start && currentDay <= range.end;

      days.push(
        <button
          key={i}
          disabled={isDisabled}
          onClick={() => handleDateClick(currentDay)}
          className={`p-2 rounded ${isSelected ? "bg-[#c4a053] text-white" : "text-black"} ${
            isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          {i}
        </button>
      );
    }
    return days;
  };

  return (
    <div className="flex flex-col items-center bg-white p-4 shadow-lg rounded-lg relative">
      <div className="flex justify-between items-center w-full mb-2">
        <button onClick={() => setSelectedDate(new Date(selectedDate.setMonth(selectedDate.getMonth() - 1)))}>
          Prev
        </button>
        <span>{format(selectedDate, "MMMM yyyy")}</span>
        <button onClick={() => setSelectedDate(new Date(selectedDate.setMonth(selectedDate.getMonth() + 1)))}>
          Next
        </button>
      </div>

      {/* Clear Dates Icon */}
   

      <div className="grid grid-cols-7 gap-2 mt-4">
        {/* Days of the week headers */}
        {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
          <div key={day} className="text-center font-semibold text-xs text-gray-600">
            {day}
          </div>
        ))}
        {/* Calendar days */}
        {renderCalendarDays()}
      </div>

      {/* Selected Date Range Display */}
      <div className="mt-4 text-center text-sm">
        <p>
          {range.start ? format(range.start, "dd-MM-yyyy") : "Start Date"} -{" "}
          {range.end ? format(range.end, "dd-MM-yyyy") : "End Date"}
        </p>
      </div>
    </div>
  );
};

export default CustomCalendar;
