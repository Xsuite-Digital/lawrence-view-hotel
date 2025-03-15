import { useState, useRef, useEffect } from "react";
import { ChevronLeft, Send, X , MapPin } from "lucide-react";
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
        
        } else if (userInput.includes("location")) {
          responseContent = (
              <>
                  <span>The hotel is located at 54-A Lawrence Road, opposite Jinnah Garden, Lahore, Pakistan.</span>
                  <br />
                  <br />
                  <span>Other locations:</span>
                  <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                      <li>  Close to Lahore Zoo</li>
                      <li>Close to Examination Hall BISE Lahore</li>
                      <li>Near Pearl Continental Hotel, Lahore</li>
                      <li>Near China Chowk, Lahore</li>
                      <div className="flex mt-4 items-start space-x-4 mb-4">
        <MapPin className="w-6 h-6 text-[#b89628] flex-shrink-0 hover:text-black" />
        <a href="https://maps.app.goo.gl/bSAT2zHBW9SRgaRr7" target="_blank" className="text-gray-600">
          54-A Lawrence Road, opposite Jinnah Garden, Lahore, Pakistan
        </a>
      </div>
                  </ul>
              </>
          );
      }
      else if (userInput.includes("contact")) {
        responseContent = 
          <div>
            
            <SupportOptions/>
          </div>
        
      
        } else if (userInput.includes("menu") || userInput.includes("dining")) {
          responseContent = "Our dining services include a variety of continental and traditional dishes available 24/7.";
        } else if (userInput.includes("couple") || userInput.includes("unmarried")) {
          responseContent = "As per our hotel policy, we accommodate only married couples. Guests are required to provide valid proof of marriage, such as a marriage certificate, along with their national ID cards at check-in. Unmarried couples are not allowed to stay.";
        } else if (userInput.includes("minibar") || userInput.includes("fridge")) {
          responseContent = 
            <div>
              <p>Minibar include:</p>
              
              <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                <li>Red Bull</li>
                <li>Coke / Sprite / Diet</li>
                <li>Rani Juice</li>
                <li>Chocolate</li>
                <li>Mineral Water (Small)</li>
                <li>Sting</li>
                <li>Cookies</li>
                <li>Chips</li>
                <li>Popcorn</li>
              </ul>
            </div>
          ;
        
        
        } else if (userInput.includes("parking") ) {
          responseContent = "Secure parking is available for all guests, ensuring safety and convenience throughout your stay";
        } else if (userInput.includes("reserve room") ||userInput.includes("book ")  ||userInput.includes("book a room") ||userInput.includes("reserved") ) {
          responseContent =  <div>
          <p>Step 1: Select the Room below</p>
          <p>Step 2: Click On Book Now</p>
         
          <RoomOption/>
        </div>;
        } else if (userInput.includes("bridal room") || userInput.includes("honeymoon")) {
          responseContent = "Our hotel offers a beautifully designed bridal room, perfect for newlyweds seeking luxury, comfort, and privacy. Elegantly decorated with premium amenities.Enjoy a serene atmosphere, personalized services, and a touch of elegance to make your special moments truly unforgettable.";
        } else if (userInput.includes("wifi") || userInput.includes("internet")) {
          responseContent = "WiFi and internet are available throughout our hotel for your convenience.";
        } else if (userInput.includes("car") || userInput.includes("rent a car")) {
          responseContent = "Our hotel offers a Rent-A-Car service on a daily and monthly basis, with cars available only with a driver.";
        } else if (userInput.includes("payment") || userInput.includes("advance")|| userInput.includes("cash")|| userInput.includes("pay")|| userInput.includes("debit card")|| userInput.includes("foreign currency")) {
          responseContent =<div> 
            <p>We Accept Foreign Currency and Debit & Credit Cards. We also accept advance payments for reservations.</p>
            <p>Meezan Bank - Shadman Branch</p>
            <ul >
            
            <li>Account Number:02090108828711</li>
            {/* <li className="pr-8">IBAN:PK12MEZN0002090108828711</li> */}
            </ul>
          </div> ; 
        } else if (userInput.includes("water") || userInput.includes("bottles")) {
          responseContent = "We provide two small water bottles for your convenience during your stay. ";
        } else if (userInput.includes("laundry") || userInput.includes("washing")) {
          responseContent = <div>
            <p>Our hotel offers convenient and professional laundry services to ensure you enjoy a fresh and comfortable stay.</p>
          <p>Laundry Services include:</p>
          
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li>Washing</li>
            <li>Pressing</li>
            <li>Dry Cleaing</li>
           
          </ul>
        </div>;
        } else if (userInput.includes("Triple ") || userInput.includes("sharing room")) {
          responseContent = "Our hotel offers spacious triple-sharing rooms, perfect for groups or families seeking comfort and convenience. Equipped with modern amenities, cozy bedding, and ample space, these rooms ensure a relaxing and enjoyable stay for all guests.";
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
      
      case "menu":
        return "Our dining services include a variety of continental and traditional dishes available .";
      case "support":
        return "For any inquiries or reservations, feel free to contact us at:📞 Landline: +92 (42) 36311574📱 Mobile: +92 (320)6361-916 Our team is available to assist you with your queries.";
      case "location":
        return "The hotel is located at 54-A Lawrence Road, opposite Jinnah Garden, Lahore, Pakistan \n\n" +
                            "Other locations:\n" +
                            "• Close to Lahore Zoo \n" +
                            "• Close to  Examination Hall Bise Lahore\n" +
                            "• Near Hayyat Luxury Hotel Apartments , Lahore\n" +
                            "• Near Pearl Continental Hotel, Lahore\n" +
                            "• Near China Chownk, Lahore\n";
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