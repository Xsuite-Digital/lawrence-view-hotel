
import { useState } from "react";
import logo from "../../assets/logo.webp";

export default function ChatbotButton({ isOpen, onClick }) {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {showPopup && (
        <div className="relative bg-white shadow-lg rounded-2xl p-3 flex items-center border border-gray-300">
         
          <img src={logo} alt="Logo" className="h-8 mr-2 rounded-full" />

          
          <p className="text-black text-sm mt-4">We're Online! How may I help you today?</p>

         
          <button
            onClick={() => setShowPopup(false)}
            className="absolute -top-2 -right-2 bg-gray-200 text-gray-600 rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-gray-300"
          >
            ✕
          </button>
        </div>
      )}

      {/* Chatbot Button */}
      <button
        onClick={onClick}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-black text-white shadow-lg hover:bg-gray-800 transition-all"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
