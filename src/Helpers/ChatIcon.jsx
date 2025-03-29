import { useEffect, useState } from "react";
import Icon from "../assets/ChatIcon.webp";
import { useLocation } from "react-router-dom";
const ChatIcon = () => {
  const location = useLocation();
  const path = location.pathname;
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const togglevisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", togglevisibility);
    return () => window.removeEventListener("scroll", togglevisibility);
  }, []);
  return (
    <div
      className={`fixed bottom-24 right-4 z-50 transition-transform duration-500 ease-in-out ${
        visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      {visible && (
        <a
         href={ path === "/MLJ" ? "https://wa.me/+923306361916" :  "https://wa.me/+923206361916" } 

        
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Icon}
            alt="whatsappicon"
            height={100}
            width={100}
            className="z-50 h-16 w-16"
          />
        </a>
      )}
    </div>
  );
};

export default ChatIcon;
