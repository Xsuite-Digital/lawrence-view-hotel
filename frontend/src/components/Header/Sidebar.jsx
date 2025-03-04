import { useEffect, useState } from "react";
import { X, Menu, Facebook, Linkedin, Instagram, Mail, Phone, Music2 } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
     const [scroll, setScroll] = useState(false);
    
      // Handle Scroll
      useEffect(() => {
        const handleScroll = () => {
          setScroll(window.scrollY > 50);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    
  return (
    <>
     
      <button className={`md:hidden p-2 ${scroll ? "text-white" : "text-black "} duration-300 ease-in-out`} onClick={() => setIsOpen(true)}>
        <Menu size={28} />
      </button>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)}></div>
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-xl z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        {/* Close Button */}
        <button className="absolute top-4 right-4 text-black" onClick={() => setIsOpen(false)}>
          <X size={28} />
        </button>

        {/* Sidebar Content */}
        <div className="p-6 mt-10">
          {/* Navigation Links */}
          <nav className="flex flex-col space-y-6 text-lg font-semibold">
            <a href="/" className="text-black hover:text-gray-700">
              Home
            </a>
            <a href="/about" className="text-black hover:text-gray-700">
              About Us
            </a>
            <a href="/rooms" className="text-black hover:text-gray-700">
              Our Rooms
            </a>
            <a href="/contact" className="text-black hover:text-gray-700">
              Contact Us
            </a>
          </nav>

          {/* Contact Info */}
          <div className="mt-8 border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <a href="tel:+923206361916" className="flex items-center space-x-2 text-black mb-3">
              <Phone size={20} />
              <span>+92 (320) 6361-916</span>
            </a>
            <a href="mailto:lawrenceviewhotel@gmail.com" className="flex items-center space-x-2 text-black">
              <Mail size={20} />
              <span>lawrenceviewhotel@gmail.com</span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
          <a href="https://www.facebook.com/LawrenceViewHotelLahore" target="_blank" rel="noopener noreferrer" className="hover:text-[#b89628]">
            <Facebook size={20} />
          </a>
          <a href="https://www.instagram.com/lawrence.view.hotel.lahore/" target="_blank" rel="noopener noreferrer" className="hover:text-[#b89628]">
            <Instagram size={20} />
          </a>
          <a href="https://www.tiktok.com/@lawrencehotel?_t=ZS-8uNGNPDRuZL&_r=1" className="hover:text-[#b89628]">
            <Music2 size={20} />
          </a>
          </div>
        </div>
      </div>
    </>
  );
}  