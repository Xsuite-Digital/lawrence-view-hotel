import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import logo from "../../assets/logo.webp";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start ">
      {/* Mobile View: Logo + Sidebar */}
      <div className="flex justify-between items-center w-full px-4 py-3 md:hidden">
        {/* Mobile Logo */}
        <div>
          <img
            src={logo}
            width={80}
            height={80}
            alt="Lawrence View Hotel Logo"
          />
        </div>

        {/* Sidebar */}
        <div>
          <Sidebar />
        </div>
      </div>

      {/* Desktop View: Only Logo */}
      <div className="hidden md:flex w-auto items-center">
        <img
          src={logo}
          width={100}
          height={100}
          alt="Lawrence View Hotel Logo"
        />
      </div>

      {/* Right Section (Desktop View) */}
      <div className="hidden md:flex flex-col flex-grow justify-between md:h-[100px] w-full md:w-auto">
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-end space-x-4 md:space-x-6 text-black p-4">
          <a
            href="tel:+923206361916"
            className="flex items-center space-x-1 hover:underline hover:text-[#b89628] text-black"
          >
            <Phone size={18} />
            <span className="text-sm md:text-base ">+92 (320) 6361-916</span>
          </a>
          <a
            href="mailto:lawrenceviewhotel@gmail.com"
            className="flex items-center space-x-1 hover:underline text-black hover:text-[#b89628]"
          >
            <Mail size={18} />
            <span className="text-sm md:text-base">
              lawrenceviewhotel@gmail.com
            </span>
          </a>
          <div className="flex space-x-3">
            <a
              href="https://www.facebook.com/LawrenceViewHotelLahore"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-[#b89628]"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/lawrence.view.hotel.lahore/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-[#b89628]"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/lawrence-view-hotel-lahore/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-[#b89628]"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="flex justify-center md:justify-start p-4">
          <nav className="flex flex-wrap gap-4 md:gap-6 text-sm md:text-base">
            <Link to="/" className="text-black hover:text-[#b89628]">
              Home
            </Link>
            <Link to="/about" className="text-black hover:text-[#b89628]">
              About
            </Link>
            <Link to="/rooms" className="text-black hover:text-[#b89628]">
              Rooms & Suites
            </Link>
            <Link to="/contact" className="text-black hover:text-[#b89628]">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
