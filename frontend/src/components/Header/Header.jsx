import { useState, useEffect } from "react";
import { Facebook, Instagram, Mail, Phone, Music2, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";
import Sidebar from "./Sidebar";

export default function Header() {
  const [scroll, setScroll] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  let timeoutId = null; // Variable to store timeout ID

  const [languageMenu, setLanguageMenu] = useState(false);

  const languages = [
    { code: "en", name: "English" },
    // { code: "zh", name: "中文" },
    // { code: "fr", name: "Français" },
    // { code: "de", name: "Deutsch" },
    // { code: "ur", name: "اردو" },
  ];
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "Destinations",
      dropdown: [
        { name: "Lahore", path: "/destinations/lahore" },
        { name: "Malam Jabba", path: "/destinations/malam-jabba" },
      ],
    },
    { name: "About", path: "/about" },
    { name: "Loyalty", path: "/loyalty" },
    { name: "Offers", path: "/offers" },
    { name: "Blogs", path: "/Blog" },
    { name: "Rooms & Suites", path: "/rooms" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
    <div className="  flex  justify-between items-center  lg:hidden">
    <div className=" p-3 border-b">
        <Link to="/">
          <img src={logo} alt="Lawrence View Hotel Logo" width={200} height={300} className="lg:w-32 lg:h-32 w-24 h-24" />
        </Link>
        </div> 
      <Sidebar  />
    </div>
    <div className="fixed hidden lg:block top-0 w-full z-50 transition-all duration-300 ease-in-out bg-white text-black shadow-md">
      {/* Top Header */}
      <div className="flex justify-evenly items-center p-3 border-b">
        <Link to="/">
          <img src={logo} alt="Lawrence View Hotel Logo" width={200} height={300} className="w-32 h-32" />
        </Link>

        <div className="flex items-center space-x-1">
          <div className="flex-col space-y-2">
            <div className="flex space-x-2">
              <Phone size={18} />
              <span>Book Your Stay</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <a href="tel:+923206361916" className="text-sm text-gray-600">
                +92 (320) 6361-916
              </a>
              <a href="tel:+923206361916" className="text-sm text-gray-600">
                +92 (320) 6361-916
              </a>
            </div>
          </div>
        </div>

        <div className="flex space-x-3 text-gray-600">
          <span className="tracking-widest">Follow Us On |</span>
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
      <div className="relative">
          <button onClick={() => setLanguageMenu(!languageMenu)} className="p-2 border rounded hover:text-[#b89628]">
            <Globe size={20} />
          </button>
          {languageMenu && (
            <div className="absolute top-full left-0 bg-white border shadow-md w-32">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className="block p-2 w-full text-left hover:bg-[#b89628]"
                >
                  {lang.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Navigation Bar */}
      <nav className="flex justify-center space-x-6 text-sm py-3 bg-white shadow-md">
        {navLinks.map((link, index) => (
          link.dropdown ? (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => {
                clearTimeout(timeoutId);
                setDropdownVisible(true);
              }}
              onMouseLeave={() => {
                timeoutId = setTimeout(() => setDropdownVisible(false), 300); // 300ms delay before hiding
              }}
            >
              <span className="cursor-pointer hover:text-[#b89628]">{link.name}</span>
              {dropdownVisible && (
                <div
                  className="absolute left-0 bg-black text-white mt-2 py-2 w-40"
                  onMouseEnter={() => clearTimeout(timeoutId)} // Cancel timeout when hovering dropdown
                  onMouseLeave={() => {
                    timeoutId = setTimeout(() => setDropdownVisible(false), 300);
                  }}
                >
                  {link.dropdown.map((item, subIndex) => (
                    <Link key={subIndex} to={item.path} className="block px-4 py-2 hover:bg-[#b89628]">
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link key={index} to={link.path} className="hover:text-[#b89628]">
              {link.name}
            </Link>
          )
        ))}

        
      </nav>
    </div>
    </>
  );
}


       