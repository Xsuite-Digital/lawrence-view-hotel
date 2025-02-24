import { useState, useEffect } from "react";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/LVHLOGO.webp";
import Sidebar from "./Sidebar";

export default function Header() {
  const [scroll, setScroll] = useState(false);

  // Handle Scroll
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation Tabs
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Rooms", path: "/rooms" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scroll ? "bg-black shadow-lg text-white" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start py-2">
        {/* Mobile View: Logo + Sidebar */}
        <div className="flex justify-between items-center w-full px-4 py-3 md:hidden">
          {/* Mobile Logo */}
          <div>
            <img src={logo} width={80} height={80} alt="Lawrence View Hotel Logo" />
          </div>

          {/* Sidebar */}
          <div>
            <Sidebar />
          </div>
        </div>

        {/* Desktop View: Only Logo */}
        <div className="hidden md:flex w-auto items-center">
          <img src={logo} width={100} height={100} alt="Lawrence View Hotel Logo" />
        </div>

        {/* Right Section (Desktop View) */}
        <div className="hidden md:flex flex-col flex-grow justify-between md:h-[100px] w-full md:w-auto">
          <div
            className={`flex flex-wrap md:flex-nowrap items-center justify-center md:justify-end space-x-4 md:space-x-6 p-4 transition-all duration-300 ease-in-out ${
              scroll ? "text-white" : "text-black"
            }`}
          >
            <a href="tel:+923206361916" className="flex items-center space-x-1 hover:underline">
              <Phone size={18} />
              <span className="text-sm md:text-base">+92 (320) 6361-916</span>
            </a>
            <a href="mailto:lawrenceviewhotel@gmail.com" className="flex items-center space-x-1 hover:underline">
              <Mail size={18} />
              <span className="text-sm md:text-base">lawrenceviewhotel@gmail.com</span>
            </a>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/LawrenceViewHotelLahore" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/lawrence.view.hotel.lahore/" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/lawrence-view-hotel-lahore/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="flex justify-center md:justify-start p-4">
            <nav className="flex flex-wrap gap-4 md:gap-6 text-sm md:text-base">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className={`transition-colors duration-300 ${
                    scroll ? "text-white hover:text-gray-400" : "text-black hover:text-gray-700"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
