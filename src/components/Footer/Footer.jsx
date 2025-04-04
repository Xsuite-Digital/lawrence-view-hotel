import { useState } from "react";
import {
  Facebook,
  Instagram,
  MapPin,
  Mail,
  Phone,
  ChevronDown,
  Music2,
  Linkedin,
} from "lucide-react";
import LOGO from "../../assets/logo.webp";
import TRIPLOGO from "../../assets/trp1.webp"; // Import the TripAdvisor logo

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);
  const [openFollowUs, setOpenFollowUs] = useState(false); // State for mobile Follow Us tab

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const toggleFollowUs = () => {
    setOpenFollowUs(!openFollowUs); // Toggle the "Follow Us" section
  };

  const sections = [
    {
      title: "Quick Links",
      content: [
        { name: "Rooms & Suites", link: "/rooms" },
        { name: "Contact", link: "/contact" },
        { name: "About", link: "/about" },
      ],
    },
    {
      title: "Contact Us",
      content: [
        {
          icon: <MapPin className="h-5 w-5 text-[#c4a053]" />,
          text: "54-A Lawrence Road, Lahore",
          link: "https://maps.app.goo.gl/bSAT2zHBW9SRgaRr7",
        },
        {
          icon: <Phone className="h-5 w-5 text-[#c4a053]" />,
          text: "03206361916",
          link: "tel:+923206361916",
        },
        {
          icon: <Mail className="h-5 w-5 text-[#c4a053]" />,
          text: "reservation@lawrenceviewhotel.com",
          link: "mailto:reservation@lawrenceviewhotel.com",
        },
      ],
    },
    {
      title: "FAQs",
      content: [
        {
          question: "What are the check-in and check-out timings?",
          answer:
            "Check-in time is from 2:00 PM onwards, and check-out time is by 12:00 PM. Early check-in and late check-out are subject to availability and may incur additional charges.",
        },
        {
          question: "Do you offer airport pickup and drop-off services?",
          answer:
            "Yes, we provide airport pickup and drop-off services upon request. Please contact our front desk or mention it while booking to arrange transportation.",
        },
        {
          question: "Is breakfast included in the room booking?",
          answer:
            "Yes, we offer complimentary breakfast for all guests staying at the hotel. You can enjoy a variety of delicious options at our in-house restaurant every morning.",
        },
        {
          question: "Do you have free Wi-Fi available?",
          answer:
            "Yes, we offer high-speed Wi-Fi access throughout the hotel, including rooms, lobby, and dining areas, free of charge for all our guests.",
        },
        {
          question: "Can unmarried couples book a room at the hotel?",
          answer:
            "No, we do not allow room bookings for unmarried couples as per our hotel policy.",
        },
        {
          question: "What is your cancellation policy?",
          answer:
            "Our cancellation policy varies depending on the room type and booking package. Please check the terms while booking or contact our support team for details.",
        },
      ],
    },
    {
      title: "Policies",
      content: [
        { name: "Privacy Policy", link: "/privacy-policy" },
        { name: "Terms & Conditions", link: "/terms-conditions" },
      ],
    },
  ];

  return (
    <footer className="bg-black text-white py-10 px-4 w-full">
      <div className="max-w-7xl mx-auto">
        <img
          src={LOGO}
          alt="lvh-logo"
          className="h-24 lg:h-32 lg:w-32 w-24 mx-auto mb-6"
        />

        {sections.map((section, index) => (
          <div key={index} className="border-b border-gray-700 py-4">
            <button
              className="w-full flex justify-between items-center text-lg font-semibold"
              onClick={() => toggleSection(index)}
            >
              {section.title}
              <ChevronDown
                className={`h-5 w-5 transition-transform ${
                  openSection === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                openSection === index ? "h-full" : "max-h-0"
              }`}
            >
              <div className="mt-4 flex  flex-col space-y-3">
                {section.content.map((item, idx) => (
                  <div key={idx} className="text-white flex ">
                    {item.icon && <span className="mr-2">{item.icon}</span>}
                    {item.link ? (
                      <a
                        href={item.link}
                        className="hover:text-[#c4a053] transition"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.name || item.text}
                      </a>
                    ) : item.question ? (
                      <div>
                        <p className="font-semibold lg:text-md text-sm">
                          {item.question}
                        </p>
                        <p className="text-gray-400 lg:text-md text-sm">
                          {item.answer}
                        </p>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Follow Us Section - Mobile View Toggle */}
        <div className="lg:flex  justify-between items-center mt-6 flex-wrap">
          <div className="lg:flex hidden space-x-6">
            <span className="font-extrabold">Follow Us</span>
            <a
              href="https://www.facebook.com/LawrenceViewHotelLahore"
              className="hover:text-[#c4a053]"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook />
            </a>
            <a
              href="https://www.instagram.com/lawrence.view.hotel.lahore/"
              className="hover:text-[#c4a053]"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </a>
            <a
              href="https://www.tiktok.com/@lawrencehotel?_t=ZS-8uNGNPDRuZL&_r=1"
              className="hover:text-[#c4a053]"
              target="_blank"
              rel="noreferrer"
            >
              <Music2 />
            </a>
            <a
              href="https://www.linkedin.com/in/lawrence-view-hotel-lahore/"
              className="hover:text-[#c4a053]"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />
            </a>
            <div className=" container  -mt-3 w-12">
              <a
                href="https://www.tripadvisor.com/Hotel_Review-g295413-d7596482-Reviews-Lawrence_View_Hotel_Hotel_Lahore-Lahore_Punjab_Province.html"
                className="hover:text-[#c4a053]"
                target="_blank"
                rel="noreferrer"
              >
                <img src={TRIPLOGO} alt="TripAdvisor" />
              </a>
            </div>
          </div>

          {/* Toggle Follow Us on Mobile */}
          <div className="lg:hidden mt-4">
            <button
              onClick={toggleFollowUs}
              className="w-full flex justify-between items-center text-lg font-semibold"
            >
              Follow Us
              <ChevronDown
                className={`h-5 w-5 transition-transform ${
                  openFollowUs ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                openFollowUs ? "h-full" : "max-h-0"
              }`}
            >
              <div className="mt-4 flex space-x-6">
                <a
                  href="https://www.facebook.com/LawrenceViewHotelLahore"
                  className="hover:text-[#c4a053]"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Facebook />
                </a>
                <a
                  href="https://www.instagram.com/lawrence.view.hotel.lahore/"
                  className="hover:text-[#c4a053]"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram />
                </a>
                <a
                  href="https://www.tiktok.com/@lawrencehotel?_t=ZS-8uNGNPDRuZL&_r=1"
                  className="hover:text-[#c4a053]"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Music2 />
                </a>
                <a
                  href="https://www.linkedin.com/in/lawrence-view-hotel-lahore/"
                  className="hover:text-[#c4a053]"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin />
                </a>
                
                  <a
                    href="https://www.tripadvisor.com/Hotel_Review-g295413-d7596482-Reviews-Lawrence_View_Hotel_Hotel_Lahore-Lahore_Punjab_Province.html"
                    className="hover:text-[#c4a053]"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={TRIPLOGO} className="h-8 w-8 " alt="TripAdvisor" />
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
