// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Icon } from "@iconify/react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { addDays } from "date-fns";

// function Page() {
//   const today = new Date();
//   const tomorrow = addDays(today, 1);

//   const [isOpen, setIsOpen] = useState(false);
//   const [dateRangeOpen, setDateRangeOpen] = useState(false);
//   const [startDate, setStartDate] = useState(today);
//   const [endDate, setEndDate] = useState(tomorrow);
//   const [formattedDateRange, setFormattedDateRange] = useState(
//     `${today.toLocaleDateString("en-US", {
//       month: "long",
//       day: "numeric",
//       year: "numeric",
//     })} - ${tomorrow.toLocaleDateString("en-US", {
//       month: "long",
//       day: "numeric",
//       year: "numeric",
//     })}`
//   );
//   const [rooms, setRooms] = useState([{ id: 1, people: 2 }]);
//   const [roomPeopleDisplay, setRoomPeopleDisplay] = useState("1 Room 2 People");

//   const handleDateChange = (date, isStart) => {
//     if (isStart) {
//       setStartDate(date);
//       if (date > endDate) {
//         setEndDate(date); // Automatically adjust endDate if startDate is after current endDate
//       }
//     } else {
//       setEndDate(date);
//     }

//     const formattedStart = startDate.toLocaleDateString("en-US", {
//       month: "long",
//       day: "numeric",
//       year: "numeric",
//     });

//     const formattedEnd = date.toLocaleDateString("en-US", {
//       month: "long",
//       day: "numeric",
//       year: "numeric",
//     });

//     setFormattedDateRange(`${formattedStart} - ${formattedEnd}`);
//   };
//   const clearDates = () => {
//     setStartDate(today);
//     setEndDate(tomorrow);
//     setFormattedDateRange(
//       `${today.toLocaleDateString("en-US", {
//         month: "long",
//         day: "numeric",
//         year: "numeric",
//       })} - ${tomorrow.toLocaleDateString("en-US", {
//         month: "long",
//         day: "numeric",
//         year: "numeric",
//       })}`
//     );
//     setDateRangeOpen(false);
//   };
  

//   const openDateRange = () => {
//     setIsOpen(false); 
//     setDateRangeOpen(true); // Open date range picker
//   };

//   const openRoomSelector = () => {
//     setDateRangeOpen(false); // Close date range picker
//     setIsOpen(true); // Open room selector
//   };

//   const handlePeopleChange = (roomId, people) => {
//     setRooms((prevRooms) =>
//       prevRooms.map((room) =>
//         room.id === roomId ? { ...room, people: Number(people) } : room
//       )
//     );
//   };

//   const addRoom = () => {
//     setRooms([...rooms, { id: rooms.length + 1, people: 2 }]);
//   };

//   const removeRoom = (roomId) => {
//     setRooms((prevRooms) => {
//       const updatedRooms = prevRooms.filter((room) => room.id !== roomId);
//       if (updatedRooms.length === 0) {
//         setRoomPeopleDisplay("1 Room 2 People"); 
//       }
//       return updatedRooms;
//     });
//   };

//   const updateRoomPeopleDisplay = () => {
//     if (rooms.length === 0) {
//       setRoomPeopleDisplay("1 Room 2 People"); 
//       return;
//     }
//     const totalPeople = rooms.reduce((sum, room) => sum + room.people, 0);
//     setRoomPeopleDisplay(
//       `${rooms.length} Room${rooms.length > 1 ? "s" : ""} ${totalPeople} People`
//     );
//   };

//   return (
//     <div className="bg-[#2c2c2c]">
//       <div className="p-6 flex lg:flex-row flex-col  bg-opacity-55">
//         <div className="relative w-full max-w-lg mb-4">
//           <div
//             className="p-2 bg-gray-100 text-black border h-10 border-gray-300 transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-between"
//             onClick={openDateRange}
//           >
//             <span className="text-sm sm:text-base">{formattedDateRange || "Select date range"}</span>
//             {formattedDateRange && (
//   <Icon
//     icon="mdi:close-circle"
//     className="text-gray-500 cursor-pointer hover:text-red-500"
//     onClick={clearDates} 
//     title="Clear dates"
//   />
// )}

//           </div>

//           {dateRangeOpen && (
//             <motion.div
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               className="absolute z-20 w-full bg-white border border-gray-300 shadow-lg transition-all duration-300 ease-in-out p-4"
//             >
//               <div className="flex justify-between items-center mb-2">
//                 <div className="text-black text-xs">
//                   {formattedDateRange ? `Your Selection: ${formattedDateRange}` : "Select date range"}
//                 </div>
//                 <button
//   onClick={() => setDateRangeOpen(false)}  // Just close the date range picker
//   className="text-gray-600 py-1 px-2 rounded-md hover:text-red-500 transition-colors"
// >
//   Close
// </button>

//               </div>

//               <div className="flex flex-col sm:flex-row sm:space-x-4">
//                 <DatePicker
//                   selected={startDate}
//                   onChange={(date) => handleDateChange(date, true)}
//                   selectsStart
//                   startDate={startDate}
//                   endDate={endDate}
//                   minDate={today} // Ensure the startDate cannot be in the past
//                   inline
//                   className="border-none bg-transparent w-full sm:w-auto"
//                 />
//                 <div className="border-l border-gray-300 sm:hidden" /> {/* Divider on desktop, hidden on mobile */}
//                 <DatePicker
//                   selected={endDate}
//                   onChange={(date) => handleDateChange(date, false)}
//                   selectsEnd
//                   startDate={startDate}
//                   endDate={endDate}
//                   minDate={startDate} // Ensure the endDate is after startDate
//                   inline
//                   className="border-none bg-transparent w-full sm:w-auto"
//                 />
//               </div>
//             </motion.div>
//           )}
//         </div>

//         {/* Dynamic Room Selector */}
//         <div className="relative w-full max-w-xl mb-4">
//           <div
//             className="p-2 bg-gray-100 text-black border h-10 border-gray-300 transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-between"
//             onClick={openRoomSelector}
//           >
//             <span className="text-sm sm:text-base">{roomPeopleDisplay}</span>
//             <span
//               className={`ml-2 h-2 w-2 flex items-center justify-center transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
//             >
//               ▼
//             </span>
//           </div>

//           {isOpen && (
//             <motion.div
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               className="absolute z-10 w-full bg-white border border-gray-300 shadow-lg p-4"
//             >
//               <div className="text-sm mb-2">
//                 {formattedDateRange && `Your Selection: ${roomPeopleDisplay}`}
//               </div>
//               <AnimatePresence>
//                 {rooms.map((room) => (
//                   <motion.div
//                     key={room.id}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -20 }}
//                     className="flex items-center mb-3"
//                   >
//                     <span className="mr-2">Room {room.id}:</span>
//                     <select
//                       value={room.people}
//                       onChange={(e) => handlePeopleChange(room.id, e.target.value)}
//                       className="border focus:outline-none border-gray-300 rounded-md p-1 w-16"
//                     >
//                       {[...Array(10).keys()].map((i) => (
//                         <option key={i + 1} value={i + 1}>
//                           {i + 1} {i + 1 === 1 ? "person" : "people"}
//                         </option>
//                       ))}
//                     </select>
//                     <Icon
//                       icon="mdi:trash-can"
//                       className="ml-2 text-gray-500 font-semibold h-5 w-5 cursor-pointer hover:text-red-500 transition-colors"
//                       onClick={() => {
//                         removeRoom(room.id);
//                         updateRoomPeopleDisplay(); // Update display after removing room
//                       }}
//                       title="Remove room"
//                     />
//                   </motion.div>
//                 ))}
//               </AnimatePresence>
//               <div className="flex justify-between">
//                 <button
//                   onClick={addRoom}
//                   className="mt-2 bg-[#c4a053] text-black py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors"
//                 >
//                   Add Room
//                 </button>
//                 <button
//                   onClick={() => {
//                     setIsOpen(false); 
//                     updateRoomPeopleDisplay(); 
//                   }}
//                   className="mt-2 bg-[#c4a053] text-black py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors"
//                 >
//                   Done
//                 </button>
//               </div>
//             </motion.div>
//           )}
//         </div>
//         <button className="h-10 max-w-44 w-full bg-[#c4a053] text-black hover:bg-opacity-90 transition-colors">
//           Book Now
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Page;





// Page.jsx
// Page.jsx
"use client";

import React, { useState } from "react";
import { addDays } from "date-fns";
import DateRangePicker from "./DateRangePicker";
import RoomSelector from "./RoomSelector";
import BookingButton from "./BookingButton";

function Page() {
  const today = new Date();
  const tomorrow = addDays(today, 1);

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
    if (isStart) {
      setStartDate(date);
      if (date > endDate) {
        setEndDate(date);
      }
    } else {
      setEndDate(date);
    }

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
  setRooms={setDateRangeOpen}
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
