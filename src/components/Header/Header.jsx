import { useState, useEffect } from "react";
import { Facebook, Instagram, Phone, Music2, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";
import Sidebar from "./Sidebar";

export default function Header() {
  const [scroll, setScroll] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  let timeoutId = null;

  const [languageMenu, setLanguageMenu] = useState(false);

  const languages = [{ code: "en", name: "English" }];
  
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
        { name: "Lawrence View Hotel Lahore", path: "/Lahore" },
        { name: "Lawrence View Hotel Malam Jabba", path: "/MLJ" },
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
      {/* Mobile Header */}
      <div className="flex justify-between  bg-black text-white items-center lg:hidden">
        <div>
          <Link to="/">
            <img
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              src={logo}
              alt="Lawrence View Hotel Logo"
              width={200}
              height={300}
              className="lg:w-32 lg:h-32 w-24 h-24"
            />
          </Link>
        </div>
        <Sidebar />
      </div>

      {/* Desktop Header */}
      <div className="fixed hidden lg:block top-0 w-full z-50 transition-all duration-300 ease-in-out bg-black text-white">
        
        {/* Top Header */}
        <div className="flex justify-evenly z-50 items-center">
          <Link to="/">
            <img
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              src={logo}
              alt="Lawrence View Hotel Logo"
              width={200}
              height={300}
              className="w-32 h-32"
            />
          </Link>

          <div className="relative bg-black border-l-2 border-[#b89628] pl-4 py-2">
    <div className="flex items-center space-x-2 mb-1">
      <Phone size={18} className="text-[#b89628]" />
      <span className="font-semibold tracking-wide">BOOK YOUR STAY</span>
    </div>
    <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-3">
      <a 
        href="tel:+923206361916" 
        className="text-sm text-gray-300 hover:text-[#b89628] transition-colors flex items-center"
      >
        <span className="w-2 h-2 bg-[#b89628] rounded-full mr-2 inline-block"></span>
        +92 (320) 6361-916
      </a>
      <a 
        href="tel:+924236311574" 
        className="text-sm text-gray-300 hover:text-[#b89628] transition-colors flex items-center"
      >
        <span className="w-2 h-2 bg-[#b89628] rounded-full mr-2 inline-block"></span>
        +92 (42) 36311574
      </a>
    </div>
    </div>

          <div className="flex space-x-3 text-gray-300">
            <span className="tracking-widest">Follow Us On |</span>
            <a
              href="https://www.facebook.com/LawrenceViewHotelLahore"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#b89628]"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/lawrence.view.hotel.lahore/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#b89628]"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.tiktok.com/@lawrencehotel?_t=ZS-8uNGNPDRuZL&_r=1"
              className="hover:text-[#b89628]"
            >
              <Music2 size={20} />
            </a>
          </div>

          <div className="relative">
            <button
              onClick={() => setLanguageMenu(!languageMenu)}
              className="p-2 border rounded hover:text-[#b89628]"
            >
              <Globe size={20} />
            </button>

            {languageMenu && (
              <div className="absolute top-full left-0 bg-white border shadow-md w-32">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguageMenu(false)}
                    className="block p-2 w-full text-left text-black hover:bg-[#b89628]"
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="flex justify-center space-x-6 text-sm py-3 bg-black text-white shadow-md font-bold">
          {navLinks.map((link, index) =>
            link.dropdown ? (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => {
                  clearTimeout(timeoutId);
                  setDropdownVisible(true);
                }}
                onMouseLeave={() => {
                  timeoutId = setTimeout(() => setDropdownVisible(false), 300);
                }}
              >
                <span
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="cursor-pointer text-white hover:text-[#b89628] focus:text-white"
                >
                  {link.name}
                </span>

                {dropdownVisible && (
                  <div
                    className="absolute left-0 bg-black text-white mt-2 py-2 w-72"
                    onMouseEnter={() => clearTimeout(timeoutId)}
                    onMouseLeave={() => {
                      timeoutId = setTimeout(() => {
                        setDropdownVisible(false);
                      }, 300);
                    }}
                  >
                    {link.dropdown.map((item, subIndex) => (
                      <Link
                        key={subIndex}
                        to={item.path}
                        className="block px-4 py-2 text-white hover:bg-[#b89628] hover:text-white"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={index}
                to={link.path}
                className="text-white hover:text-[#b89628] focus:text-white"
              >
                {link.name}
              </Link>
            )
          )}
          <a
            href="https://lawrence-view-hotel-apartments-lahore.hotelrunner.com/bv3/search?checkin_date=2025-03-10&checkout_date=2025-03-11"
            className="px-4 bg-[#b89628] text-white hover:scale-105 transition-all py-1 transform translate-x-48"
          >
            Book Now!
          </a>
        </nav>
      </div>
    </>
  );
}
