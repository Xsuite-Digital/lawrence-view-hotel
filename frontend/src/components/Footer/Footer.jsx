import { useState } from "react";
import {
  Send,
  Facebook,
  Instagram,
  MapPin,
  Mail,
  Phone,
  SquarePlay,
  Music,
  Music2,
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className=" p-8 border-b border-gray-300">
          <div className="flex flex-col items-center space-y-6">
            <h4 className="text-3xl font-extrabold text-white">
              Stay Updated!
            </h4>
            <p className="text-white max-w-md">
              Subscribe to our newsletter and never miss out on our latest
              updates and offers.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex w-full max-w-lg bg-white rounded-full shadow-lg overflow-hidden"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white text-gray-800 placeholder-gray-500 py-3 px-6 focus:outline-none focus:ring-2 focus:[#c4a053]"
                required
              />
              <button
                type="submit"
                className="bg-[#c4a053] hover:bg-[#c4a053] text-white px-6 py-3 flex items-center justify-center transition duration-300"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Golden Sands Resort
            </h3>
            <p className="text-sm max-w-xs text-white">
              Indulge in luxury at Golden Sands Resort, where every moment is
              crafted for your ultimate relaxation and pleasure.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#"
                className="text-white hover:text-[#c4a053] transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#c4a053] transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#c4a053] transition-colors duration-300"
              >
                
              <Music2 size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-4">
              {[
                "Rooms & Suites",
                "Dining Experience",
                "Spa & Wellness",
                "Events & Weddings",
                "Special Offers",
                "Gallery",
              ].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-white hover:text-[#c4a053] hover:underline decoration-[#c4a053] underline-offset-4 transition-all duration-300"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="flex-shrink-0 h-6 w-6 text-[#c4a053]" />
                <p className="text-white">
                  1234 Golden Beach Road, Sunset Bay, SB 56789
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="flex-shrink-0 h-6 w-6 text-[#c4a053]" />
                <p className="text-white">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="flex-shrink-0 h-6 w-6 text-[#c4a053]" />
                <p className="text-white">info@goldensands.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
