// DateRangePicker.jsx
import React, { useState } from "react";
import CustomCalendar from "./CustomCalendar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, addDays } from "date-fns";
import { Icon } from "@iconify/react";

const DateRangePicker = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  formattedDateRange,
  onOpen,
  onClose,
  isOpen,
  today
}) => {
  const [internalStartDate, setInternalStartDate] = useState(startDate || today);
  const [internalEndDate, setInternalEndDate] = useState(endDate || addDays(today, 1));

  const handleDateChange = (start, end) => {
    setInternalStartDate(start);
    setInternalEndDate(end || start);
    onStartDateChange(start);
    onEndDateChange(end || start);
  };
  const handleClearDates = () => {
    setInternalStartDate(today);
    setInternalEndDate(addDays(today, 1));
    onStartDateChange(today);
    onEndDateChange(addDays(today, 1));
  };
  

  return (
    <div className="relative w-full max-w-lg mb-4">
      <div
        className="p-2 bg-gray-100 text-black border h-10 border-gray-300 cursor-pointer flex items-center justify-between"
        onClick={onOpen}
      >
        <span className="text-sm sm:text-base">
          {formattedDateRange || `${format(internalStartDate, "MMM dd, yyyy")} - ${format(internalEndDate, "MMM dd, yyyy")}`}
        </span>
      </div>

      {isOpen && (
        <div className="absolute z-20 w-full bg-white border border-gray-300 shadow-lg p-4">
          <div className="flex justify-between">
            <div className="flex items-center">
              <button onClick={onClose} className="text-gray-600 py-1 px-2 rounded-md hover:text-red-500">
                Close
              </button>
            </div>
            <button onClick={handleClearDates} className="text-gray-600 hover:text-red-500">
              <Icon icon="mdi:close-circle" className="text-xl" />
            </button>
          </div>

          {/* Mobile-specific single calendar for date range selection */}
          <div className="block sm:hidden">
            <CustomCalendar
              startDate={internalStartDate}
              endDate={internalEndDate}
              onDateChange={handleDateChange}
              minDate={today}
            />
          </div>

          {/* Desktop view DatePicker - shows two separate DatePickers */}
          <div className="hidden sm:block">
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <DatePicker
                selected={internalStartDate}
                onChange={(date) => {
                  setInternalStartDate(date);
                  onStartDateChange(date);
                  if (date > internalEndDate) {
                    setInternalEndDate(date);
                    onEndDateChange(date);
                  }
                }}
                selectsStart
                startDate={internalStartDate}
                endDate={internalEndDate}
                minDate={today}
                inline
                className="w-full sm:w-auto"
              />
              <DatePicker
                selected={internalEndDate}
                onChange={(date) => {
                  setInternalEndDate(date);
                  onEndDateChange(date);
                }}
                selectsEnd
                startDate={internalStartDate}
                endDate={internalEndDate}
                minDate={internalStartDate}
                inline
                className="w-full sm:w-auto"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;
