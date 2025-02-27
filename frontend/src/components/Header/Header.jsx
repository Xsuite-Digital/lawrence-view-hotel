import { useState, useEffect } from "react";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/lvh.jpg";
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
    { name: "About", path: "/about" },
    { name: "Rooms & Suites", path: "/rooms" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scroll ? "bg-black shadow-lg text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex justify-between items-center px-4 lg:px-8 py-3">
        <div className="flex items-center">
          <img src={logo} alt="Lawrence View Hotel Logo" className="lg:w-full w-32 h-16 lg:h-auto" />
        </div>

        <nav className="hidden lg:flex space-x-6 text-sm md:text-base">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`transition-colors duration-300 ${
                scroll ? "text-white hover:text-[#b89628]" : "text-black hover:text-[#b89628]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <a href="tel:+923206361916" className="flex items-center space-x-1 hover:underline hover:text-[#b89628]">
            <Phone size={18} />
            <span className="text-sm md:text-base">+92 (320) 6361-916</span>
          </a>
          <a href="mailto:lawrenceviewhotel@gmail.com" className="flex items-center space-x-1 hover:underline hover:text-[#b89628]">
            <Mail size={18} />
            <span className="text-sm md:text-base">lawrenceviewhotel@gmail.com</span>
          </a>
          <div className="flex space-x-3">
            <a href="https://www.facebook.com/LawrenceViewHotelLahore" target="_blank" rel="noopener noreferrer" className="hover:text-[#b89628]">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/lawrence.view.hotel.lahore/" target="_blank" rel="noopener noreferrer" className="hover:text-[#b89628]">
              <Instagram size={20} />
            </a>
            <a href="https://www.linkedin.com/in/lawrence-view-hotel-lahore/" target="_blank" rel="noopener noreferrer" className="hover:text-[#b89628]">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Sidebar for Mobile View */}
        <div className="lg:hidden">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
