import { useState, useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { ChevronLeft, Send, X } from "lucide-react";
import QuickActionButton from "./ActionButton";
import RoomOption from "./RoomOption";
import LocationInfo from "./LocationInfo";
import SupportOptions from "./SupportOption";
import MenuDisplay from "./MenuDisplay";
import logo from "../../assets/logo.webp";

export default function ChatbotInterface({ onClose }) {
  const [activeView, setActiveView] = useState(null);
  const messagesEndRef = useRef(null);
  
  // Custom hook to handle both the AI SDK chat and manual responses
  const useCustomChat = () => {
    const [customMessages, setCustomMessages] = useState([
      { id: "intro1", role: "assistant", content: "Got any questions? I'm happy to help." },
      { id: "intro2", role: "assistant", content: "What would you like to do?" }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);

    const handleCustomInputChange = (e) => {
      setInputValue(e.target.value);
    };

    const handleCustomSubmit = async (e) => {
      e.preventDefault();
      
      if (!inputValue.trim()) return;
      
      // Add user message
      const userMessage = { id: Date.now().toString(), role: "user", content: inputValue };
      setCustomMessages(prevMessages => [...prevMessages, userMessage]);
      setIsProcessing(true);
      
      try {
        // Check for hardcoded responses first
        const userInput = inputValue.toLowerCase();
        let responseContent = "";
        
        if (userInput === "hi" || userInput === "hello") {
          responseContent = "Hello! Welcome to Lawrence View Hotel. How can I assist you today?";
        } else if (userInput === "how are you") {
          responseContent = "I'm here to help you with any inquiries you have about the hotel.";
        } else if (userInput === "bye" || userInput === "goodbye") {
          responseContent = "Goodbye! Have a wonderful day.";
        } else if (userInput.includes("room")) {
          responseContent = "Our hotel offers luxurious rooms with complimentary breakfast, Wi-Fi, and access to the swimming pool.";
        } else if (userInput.includes("location")) {
          responseContent = "The hotel is located at 123 Luxury Avenue, just 5 minutes away from the city center.";
        } else if (userInput.includes("contact")) {
          responseContent = "You can reach us at +1 (123) 456-7890 or email us at contact@lvh.com.";
        } else if (userInput.includes("menu") || userInput.includes("dining")) {
          responseContent = "Our dining services include a variety of continental and traditional dishes available 24/7.";
        } else {
          // Default response for anything else
          responseContent = "Thank you for your message. I'm here to help you with any questions about our hotel.";
        }
        
        // Add assistant response
        setTimeout(() => {
          setCustomMessages(prevMessages => [
            ...prevMessages, 
            { id: (Date.now() + 1).toString(), role: "assistant", content: responseContent }
          ]);
          setIsProcessing(false);
        }, 500); // Small delay to make it feel more natural
      } catch (error) {
        console.error("Error processing message:", error);
        setCustomMessages(prevMessages => [
          ...prevMessages, 
          { id: (Date.now() + 1).toString(), role: "assistant", content: "Sorry, I'm having trouble responding right now." }
        ]);
        setIsProcessing(false);
      }
      
      setInputValue("");
    };

    return {
      messages: customMessages,
      input: inputValue,
      handleInputChange: handleCustomInputChange,
      handleSubmit: handleCustomSubmit,
      isLoading: isProcessing,
      setMessages: setCustomMessages
    };
  };
  
  // Use our custom chat hook instead of the AI SDK one
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useCustomChat();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, activeView]);

  const handleQuickAction = (action) => {
    setActiveView(action);
  };

  const resetView = () => {
    setActiveView(null);
  };

  const getQuickActionContent = (actionType) => {
    switch(actionType) {
      case "rooms":
        return "Our hotel offers luxurious rooms with complimentary breakfast, Wi-Fi, and access to the swimming pool.";
      case "menu":
        return "Our dining services include a variety of continental and traditional dishes available 24/7.";
      case "support":
        return "You can reach us at +1 (123) 456-7890 or email us at contact@lvh.com.";
      case "location":
        return "The hotel is located at 123 Luxury Avenue, just 5 minutes away from the city center.";
      default:
        return "I'm here to help you with any questions about our hotel. Please let me know what you need!";
    }
  };

  const renderActiveView = () => {
    switch (activeView) {
      case "location":
        return <LocationInfo onBackToChat={resetView} content={getQuickActionContent("location")} />;
      case "support":
        return <SupportOptions onBackToChat={resetView} content={getQuickActionContent("support")} />;
      case "rooms":
        return <RoomOption onBackToChat={resetView} content={getQuickActionContent("rooms")} />;
      case "menu":
        return <MenuDisplay onBackToChat={resetView} content={getQuickActionContent("menu")} />;
      default:
        return null;
    }
  };

  return (
    <div
      className="fixed z-[9999] bg-white rounded-lg shadow-xl flex flex-col overflow-hidden border border-gray-200 
        right-2 bottom-20 w-[350px] h-[500px] max-h-[80vh]
        md:right-6 md:bottom-24 md:w-[350px] md:h-[500px]
        sm:right-4 sm:left-auto sm:bottom-24 sm:w-[90vw] sm:max-w-[350px]"
      style={{ 
        position: 'fixed',
        zIndex: 9999,
        transform: 'translateY(0)',
      }}
    >
      <div className="bg-black text-white p-4 flex items-center justify-between">
        <div className="flex items-center">
          {activeView && (
            <button onClick={resetView} className="mr-2 text-white">
              <ChevronLeft size={20} />
            </button>
          )}
          <div className="w-8 h-8 rounded-full overflow-hidden mr-2 bg-white flex items-center justify-center">
            <img src={logo} alt="LVH Logo" width={35} height={35} className="object-cover" />
          </div>
          <span className="font-semibold">Lawrence View Hotel</span>
        </div>
        <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-700 transition-colors" aria-label="Close chat">
          <X size={20} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        {activeView ? (
          renderActiveView()
        ) : (
          <>
            <div className="flex flex-wrap gap-2 mb-4">
              <QuickActionButton onClick={() => handleQuickAction("rooms")}>Rooms & Rates</QuickActionButton>
              <QuickActionButton onClick={() => handleQuickAction("menu")}>Menu?</QuickActionButton>
              <QuickActionButton onClick={() => handleQuickAction("support")}>How to contact?</QuickActionButton>
              <QuickActionButton onClick={() => handleQuickAction("location")}>Location</QuickActionButton>
            </div>
            {messages.map((message, index) => (
              <div key={message.id || index} className={`mb-3 ${message.role === "user" ? "flex justify-end" : "flex justify-start"}`}>
                <div className={`p-3 rounded-lg ${message.role === "user" ? "bg-black text-white" : "bg-gray-200"} max-w-[80%]`}>
                  {message.content}
                </div>
              </div>

            ))}
            
            <div ref={messagesEndRef} />
            
          </>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-3 border-t border-black">
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
          <input 
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Write a message"
            className="flex-1 bg-transparent outline-none" 
          />
          <button 
            type="submit" 
            className="ml-2 text-black" 
            aria-label="Send message"
            disabled={isLoading || !input.trim()}
          >
            <Send size={20} />
          </button>
        </div>
      </form>
    </div>
  );
}