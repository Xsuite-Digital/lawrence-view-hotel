import { useEffect, useState } from "react";
import Icon from "../assets/ChatIcon.webp";
const ChatIcon = () => {
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
          href="https://wa.me/9232016361916"
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