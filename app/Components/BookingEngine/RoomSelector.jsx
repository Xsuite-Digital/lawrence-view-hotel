// RoomSelector.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

const RoomSelector = ({
  rooms,
  roomPeopleDisplay,
  isOpen,
  onAddRoom,
  onRemoveRoom,
  onPeopleChange,
  onToggleOpen,
  onUpdateRoomDisplay ,
  setIsOpen,
  onCloseRoomSelector
  
}) => 
    
    (
  <div className="relative w-full max-w-xl mb-4">
    <div
      className="p-2 bg-gray-100 text-black border h-10 border-gray-300 cursor-pointer flex items-center justify-between"
      onClick={onToggleOpen}
    >
      <span className="text-sm sm:text-base">{roomPeopleDisplay}</span>
      <span
        className={`ml-2 h-2 w-2 flex items-center justify-center ${isOpen ? "rotate-180" : "rotate-0"}`}
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
          {roomPeopleDisplay && `Your Selection: ${roomPeopleDisplay}`}
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
                onChange={(e) => onPeopleChange(room.id, e.target.value)}
                className="border border-gray-300 rounded-md p-1 w-16"
              >
                {[...Array(10).keys()].map((i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} {i + 1 === 1 ? "person" : "people"}
                  </option>
                ))}
              </select>
              <Icon
                icon="mdi:trash-can"
                className="ml-2 text-gray-500 cursor-pointer hover:text-red-500"
                onClick={() => {
                  onRemoveRoom(room.id);
                  onUpdateRoomDisplay();
                }}
                title="Remove room"
              />
            </motion.div>
          ))}
        </AnimatePresence>
        <div className="flex justify-between">
          <button onClick={onAddRoom} className="mt-2 bg-[#c4a053] text-black py-2 px-4 rounded-md hover:bg-opacity-90">
            Add Room
          </button>
          <button
  onClick={() => {
    onToggleOpen();          // Optional: this toggles open/close of the room selector
    onUpdateRoomDisplay();   // Updates the room display
    onCloseRoomSelector();   // Make sure this is called to close the RoomSelector
  }}
  className="mt-2 bg-[#c4a053] text-black py-2 px-4 rounded-md hover:bg-opacity-90"
>
  Done
</button>

        </div>
      </motion.div>
    )}
  </div>
);

export default RoomSelector;
