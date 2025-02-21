import logo from "../../assets/logo.webp";
import { Facebook, Linkedin, Mail, Phone, Instagram } from "lucide-react";

export default function Header() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
      {/* Logo Section */}
      <div className="w-auto flex items-center">
        <img
          src={logo}
          width={100}
          height={100}
          alt="Lawrence View Hotel Logo"
        />
      </div>

      {/* Right Section */}
      <div className="flex flex-col flex-grow justify-between md:h-[100px] w-full md:w-auto">
        {/* Contact & Socials */}
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-end space-x-4 md:space-x-6 text-black p-4">
          {/* Phone */}
          <a
            href="tel:+923206361916"
            className="flex items-center space-x-1 hover:underline text-black"
          >
            <Phone size={18} />
            <span className="text-sm md:text-base">+92 (320) 6361-916</span>
          </a>

          {/* Email */}
          <a
            href="mailto:lawrenceviewhotel@gmail.com"
            className="flex items-center space-x-1 hover:underline text-black"
          >
            <Mail size={18} />
            <span className="text-sm md:text-base">
              lawrenceviewhotel@gmail.com
            </span>
          </a>

          {/* Social Links */}
          <div className="flex space-x-3">
            <a
              href="https://www.facebook.com/LawrenceViewHotelLahore"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/lawrence.view.hotel.lahore/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/lawrence-view-hotel-lahore/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black"
            >
              <Linkedin size={20} />
            </a>
          </div>

          {/* Language Selector */}
          <div className="flex items-center">
            <span className="font-bold cursor-pointer text-sm md:text-base">
              English
            </span>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="flex justify-center md:justify-start p-4">
          <nav className="flex flex-wrap gap-4 md:gap-6 text-sm md:text-base">
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
        </div>
      </div>
    </div>
  );
}
