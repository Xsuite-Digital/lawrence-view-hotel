"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
      className={`fixed bottom-10 right-4 z-50 transition-transform duration-500 ease-in-out ${
        visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      {visible && (
        <Link
          href="https://wa.me/03206361916"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/whatsappicon.png"
            alt="whatsappicon"
            height={100}
            width={100}
            className="z-50 h-24 w-24"
          />
        </Link>
      )}
    </div>
  );
};

export default ChatIcon;
