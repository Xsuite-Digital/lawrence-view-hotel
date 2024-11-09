// import React from "react";
// import { motion } from "framer-motion";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { Icon } from "@iconify/react";

// const DateRangePicker = ({
//   startDate,
//   endDate,
//   onStartDateChange,
//   onEndDateChange,
//   formattedDateRange,
//   onOpen,
//   onClose,
//   isOpen,
//   clearDates,
//   today
// }) => (
//   <div className="relative w-full max-w-lg mb-4">
//     {/* Desktop Date Range Picker */}
//     <div className="hidden lg:block">
//       <div
//         className="p-2 bg-gray-100 text-black border h-10 border-gray-300 cursor-pointer flex items-center justify-between"
//         onClick={onOpen}
//       >
//         <span className="text-sm sm:text-base">
//           {formattedDateRange || "Select date range"}
//         </span>
//         {formattedDateRange && (
//           <Icon
//             icon="mdi:close-circle"
//             className="text-gray-500 cursor-pointer hover:text-red-500"
//             onClick={(e) => { e.stopPropagation(); clearDates(); }}
//             title="Clear dates"
//           />
//         )}
//       </div>

//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -10 }}
//           className="absolute z-20 w-full bg-white border border-gray-300 shadow-lg p-4"
//         >
//           <div className="flex justify-between items-center mb-2">
//             <div className="text-black text-xs">
//               {formattedDateRange ? `Your Selection: ${formattedDateRange}` : "Select date range"}
//             </div>
//             <button onClick={onClose} className="text-gray-600 py-1 px-2 rounded-md hover:text-red-500">
//               Close
//             </button>
//           </div>

//           <div className="flex flex-col sm:flex-row sm:space-x-4">
//             <DatePicker
//               selected={startDate}
//               onChange={onStartDateChange}
//               selectsStart
//               startDate={startDate}
//               endDate={endDate}
//               minDate={today}
//               inline
//               className="w-full sm:w-auto"
//             />
//             <DatePicker
//               selected={endDate}
//               onChange={onEndDateChange}
//               selectsEnd
//               startDate={startDate}
//               endDate={endDate}
//               minDate={startDate}
//               inline
//               className="w-full sm:w-auto"
//             />
//           </div>
//         </motion.div>
//       )}
//     </div>

//     {/* Mobile Date Picker (single calendar) */}
//     <div className="block lg:hidden">
//       <div
//         className="p-2 bg-gray-100 text-black border h-10 border-gray-300 cursor-pointer flex items-center justify-between"
//         onClick={onOpen}
//       >
//         <span className="text-sm sm:text-base">
//           {formattedDateRange || "Select date range"}
//         </span>
//         {formattedDateRange && (
//           <Icon
//             icon="mdi:close-circle"
//             className="text-gray-500 cursor-pointer hover:text-red-500"
//             onClick={(e) => { e.stopPropagation(); clearDates(); }}
//             title="Clear dates"
//           />
//         )}
//       </div>

//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -10 }}
//           className="absolute z-20 w-full bg-white border border-gray-300 shadow-lg p-4"
//         >
//           <div className="flex justify-between items-center mb-2">
//             <div className="text-black text-xs">
//               {formattedDateRange ? `Your Selection: ${formattedDateRange}` : "Select date range"}
//             </div>
//             <button onClick={onClose} className="text-gray-600 py-1 px-2 rounded-md hover:text-red-500">
//               Close
//             </button>
//           </div>

//           {/* Single Date Picker for mobile */}
//           <DatePicker
//   selected={startDate}  // Bind to startDate for the calendar
//   onChange={(date) => {
//     if (!startDate && !endDate) {
//       // If neither startDate nor endDate is selected, set both to the same date
//       onStartDateChange(date);
//       onEndDateChange(date);
//     } else if (!endDate) {
//       // If only the startDate is set, update the endDate
//       onEndDateChange(date);
//     }
//   }}
//   selectsRange
//   startDate={startDate}
//   endDate={endDate}
//   minDate={today}
//   inline
//   className="w-full sm:w-auto"
//   // This ensures that the start and end dates are shown on the input field.
//   placeholderText="Select a date range"
//   dateFormat="MM/dd/yyyy" // You can adjust the date format to your needs
//   isClearable
// />



//         </motion.div>
//       )}
//     </div>
//   </div>
// );

// export default DateRangePicker;




import React from "react";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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
  clearDates,
  today
}) => (
  <div className="relative w-full max-w-lg mb-4">
    <div
      className="p-2 bg-gray-100 text-black border h-10 border-gray-300 cursor-pointer flex items-center justify-between"
      onClick={onOpen}
    >
      <span className="text-sm sm:text-base">
        {formattedDateRange || "Select date range"}
      </span>
      {formattedDateRange && (
        <Icon
          icon="mdi:close-circle"
          className="text-gray-500 cursor-pointer hover:text-red-500"
          onClick={(e) => { e.stopPropagation(); clearDates(); }}
          title="Clear dates"
        />
      )}
    </div>

    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="absolute z-20 w-full bg-white border border-gray-300 shadow-lg p-4"
      >
        <div className="flex justify-between items-center mb-2">
          <div className="text-black text-xs">
            {formattedDateRange ? `Your Selection: ${formattedDateRange}` : "Select date range"}
          </div>
          <button onClick={onClose} className="text-gray-600 py-1 px-2 rounded-md hover:text-red-500">
            Close
          </button>
        </div>

        {/* Mobile-specific single DatePicker for selecting start and end dates */}
        <div className="block sm:hidden">
          <DatePicker
            selected={startDate}
            onChange={(date) => {
                console.log("Selected Date: ", date);  // Logs selected date
                if (!startDate) {
                  onStartDateChange(date);
                  onEndDateChange(date);
                } else if (!endDate) {
                  onEndDateChange(date);
                }
              }}
              
            selectsRange
            startDate={startDate}
            endDate={endDate}
            minDate={today}
            inline
            className="w-full sm:w-auto"
            placeholderText="Select a date range"
            dateFormat="MM/dd/yyyy"
            isClearable
          />
        </div>

        {/* Desktop view DatePicker - shows two separate DatePickers */}
        <div className="hidden sm:block">
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                onStartDateChange(date);
                if (date > endDate) {
                  onEndDateChange(date); // Adjust end date if start date is later
                }
              }}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              minDate={today}
              inline
              className="w-full sm:w-auto"
            />
            <DatePicker
              selected={endDate}
              onChange={onEndDateChange}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              inline
              className="w-full sm:w-auto"
            />
          </div>
        </div>
      </motion.div>
    )}
  </div>
);

export default DateRangePicker;
