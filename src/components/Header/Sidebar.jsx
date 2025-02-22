import { useState } from "react";
import {
  X,
  Menu,
  Facebook,
  Linkedin,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Icon */}
      <button
        className="md:hidden text-black p-2"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={28} />
      </button>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-black"
          onClick={() => setIsOpen(false)}
        >
          <X size={28} />
        </button>

        {/* Sidebar Content */}
        <div className="p-6 mt-10">
          {/* Contact Info */}
          <div className="mb-6">
            <a
              href="tel:+923206361916"
              className="flex items-center space-x-2 text-black mb-3"
            >
              <Phone size={20} />
              <span>+92 (320) 6361-916</span>
            </a>
            <a
              href="mailto:lawrenceviewhotel@gmail.com"
              className="flex items-center space-x-2 text-sm text-black"
            >
              <Mail size={20} />
              <span>lawrenceviewhotel@gmail.com</span>
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-4">
            <a href="/" className="text-black hover:text-gray-700">
              Home
            </a>
            <a href="/rooms" className="text-black hover:text-gray-700">
              Rooms
            </a>
            <a href="/about" className="text-black hover:text-gray-700">
              About
            </a>
            <a href="/contact" className="text-black hover:text-gray-700">
              Contact
            </a>
          </nav>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            <a
              href="https://www.facebook.com/LawrenceViewHotelLahore"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={24} className="text-black" />
            </a>
            <a
              href="https://www.instagram.com/lawrence.view.hotel.lahore/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={24} className="text-black" />
            </a>
            <a
              href="https://www.linkedin.com/in/lawrence-view-hotel-lahore/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} className="text-black" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
