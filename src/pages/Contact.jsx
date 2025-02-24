import contactbanner from "../assets/contactbanner.webp";

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] w-full">
        <img
          src={contactbanner}
          alt="Lawrence View Hotel Lobby"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
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
                <p className="text-gray-600">
                  54-A Lawrence Road, opposite Jinnah Garden,
                  <br />
                  Jinnah Town, Lahore, 54000, Pakistan
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-[#b89628] flex-shrink-0 transition-colors duration-300 hover:text-black" />
                <p className="text-gray-600">+92 320 6361916</p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-[#b89628] flex-shrink-0 transition-colors duration-300 hover:text-black" />
                <p className="text-gray-600">lawrenceviewhotel@gmail.com</p>
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
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-[#b89628] hover:text-black transition-colors duration-300"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-[#b89628] hover:text-black transition-colors duration-300"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-[#b89628] hover:text-black transition-colors duration-300"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-light text-gray-900 mb-8">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#b89628] focus:ring focus:ring-[#b89628] focus:ring-opacity-50 transition-colors duration-300"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#b89628] focus:ring focus:ring-[#b89628] focus:ring-opacity-50 transition-colors duration-300"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#b89628] focus:ring focus:ring-[#b89628] focus:ring-opacity-50 transition-colors duration-300"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#b89628] text-white py-3 px-6 rounded-md hover:bg-[#96791f] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#b89628] focus:ring-opacity-50"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="h-[400px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.0952683863743!2d74.3261954740379!3d31.548999974200854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904ba19c196e3%3A0x54ae9e130d37d85a!2sLawrence%20View%20Hotel%2C%20Lahore!5e0!3m2!1sen!2s!4v1740387355646!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-loaded"
          title="Hotel Location"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
