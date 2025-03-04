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

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
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
          question: "What amenities does Lawrence View Hotel offer?",
          answer:
            "We offer luxurious rooms, complimentary breakfast, free Wi-Fi, airport transfers, a fitness center, and 24/7 room service to ensure a comfortable stay.",
        },
        {
          question: "What are the check-in and check-out times?",
          answer:
            "Check-in time is 2:00 PM, and check-out time is 12:00 PM. Early check-in and late check-out are subject to availability.",
        },
      ],
    },
  ];

  return (
    <footer className="bg-black text-white py-10 px-4 w-full">
      <div className="max-w-7xl mx-auto">
        <img src={LOGO} alt="lvh-logo" className="h-12 mx-auto mb-6" />
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
                openSection === index ? "max-h-96" : "max-h-0"
              }`}
            >
            <div
  className={`mt-4 ${
    section.title === "FAQs" ? "flex flex-col space-y-3" : "grid grid-cols-4 gap-4"
  }`}
>

                {section.content.map((item, idx) => (
                  <div key={idx} className="text-white flex">
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
                    ) : (
                      <div>
                        <p className="font-semibold text-[#c4a053]">{item.question}</p>
                        <p className="text-gray-400">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-start space-x-6 mt-6">
          <span className="font-extrabold">Follow Us</span>
          <a
            href="https://www.facebook.com"
            className="hover:text-[#c4a053]"
            target="_blank"
            rel="noreferrer"
          >
            <Facebook />
          </a>
          <a
            href="https://www.instagram.com"
            className="hover:text-[#c4a053]"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram />
          </a>
          <a
            href="https://www.tiktok.com"
            className="hover:text-[#c4a053]"
            target="_blank"
            rel="noreferrer"
          >
            <Music2 />
          </a>
          <a
            href="https://www.linkedin.com"
            className="hover:text-[#c4a053]"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
