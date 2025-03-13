import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import contactbanner from "../assets/MLJLVH.webp";
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Music2 } from "lucide-react";
import { toast } from "react-hot-toast"; 

function Contact() {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true); 

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully!"); 
          formRef.current.reset();
        },
        (error) => {
          toast.error("Failed to send message. Try again later.");
          console.error("EmailJS Error:", error);
        }
      )
      .finally(() => setIsSending(false)); 
  };

  return (
    <div className=" bg-white">
      {/* Hero Section */}
      <div className="    w-full">
      
        <div className=" bg-black lg:mt-24 -mt-1 p-12 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-light tracking-wide">
            Get in Touch
          </h1>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-3xl font-light text-gray-900">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-[#b89628] flex-shrink-0 transition-colors duration-300 hover:text-black" />
                <a href="https://maps.app.goo.gl/bSAT2zHBW9SRgaRr7" target="_blank" className="text-gray-600">
                  54-A Lawrence Road, opposite Jinnah Garden,
                  <br />
                  Jinnah Town, Lahore, 54000, Pakistan
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-[#b89628] flex-shrink-0 transition-colors duration-300 hover:text-black" />
                <a href="tel:+923206361916" target="_blank" className="text-gray-600">+92 320 6361916</a>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-[#b89628] flex-shrink-0 transition-colors duration-300 hover:text-black" />
                <a href="mailto:reservation@lawrenceviewhotel.com" target="_blank" className="text-gray-600">reservation@lawrenceviewhotel.com</a>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-[#b89628] flex-shrink-0 transition-colors duration-300 hover:text-black" />
                <div className="text-gray-600">
                  <p>Monday - Sunday</p>
                  <p>24 Hours</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-xl font-light text-gray-900 mb-4">
                Follow Us
              </h3>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="https://www.facebook.com/LawrenceViewHotelLahore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c4a053] transition-colors duration-300"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/lawrence.view.hotel.lahore?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c4a053] transition-colors duration-300"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.tiktok.com/@lawrencehotel?_t=ZS-8uNGNPDRuZL&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c4a053] transition-colors duration-300"
                >
                  <Music2 size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-light text-gray-900 mb-8">
              Send us a Message
            </h2>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#b89628] focus:ring focus:ring-[#b89628] focus:ring-opacity-50 transition-colors duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#b89628] focus:ring focus:ring-[#b89628] focus:ring-opacity-50 transition-colors duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#b89628] focus:ring focus:ring-[#b89628] focus:ring-opacity-50 transition-colors duration-300"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#b89628] text-white py-3 px-6 rounded-md hover:bg-[#96791f] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#b89628] focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSending} 
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
