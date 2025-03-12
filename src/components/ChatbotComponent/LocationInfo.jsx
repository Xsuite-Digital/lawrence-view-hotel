import { MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import img from "../../assets/Map.webp";

export default function LocationInfo({ onBackToChat }) {
  const [showPhoneInput, setShowPhoneInput] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/1234567890", "_blank");
  };

  const handleSendLocationClick = () => {
    setShowPhoneInput(true);
  };

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSendLocation = () => {
    if (!phoneNumber.trim()) {
      setMessage("Please enter a phone number");
      return;
    }

    setIsSubmitting(true);
    let formattedNumber = phoneNumber.replace(/\s+/g, "");
    if (!formattedNumber.startsWith("+")) {
      formattedNumber = "+" + formattedNumber;
    }

    const locationText = "Hotel Location: 54-A Lawrence Road, opposite Jinnah Garden, Jinnah Town, Lahore, 54000, Pakistan";
    const mapLink = "https://maps.app.goo.gl/bSAT2zHBW9SRgaRr7";
    const whatsappLink = `https://wa.me/${formattedNumber}?text=${encodeURIComponent(locationText + "\n\n" + mapLink)}`;

    window.open(whatsappLink, "_blank");
    setIsSubmitting(false);
    setShowPhoneInput(false);
    setPhoneNumber("");
    setMessage("Location sent successfully!");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="p-2">
      <h3 className="font-bold text-lg mb-3">Our Location</h3>
      <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
        <img src={img} alt="Hotel Location Map" className="w-full h-full object-cover" />
      </div>
      <div className="flex items-start space-x-4 mb-4">
        <MapPin className="w-6 h-6 text-[#b89628] flex-shrink-0 hover:text-black" />
        <a href="https://maps.app.goo.gl/bSAT2zHBW9SRgaRr7" target="_blank" className="text-gray-600">
          54-A Lawrence Road, opposite Jinnah Garden, Lahore, Pakistan
        </a>
      </div>
      <div className="flex items-center space-x-4 mb-4">
        <Phone className="w-6 h-6 text-[#b89628] flex-shrink-0 hover:text-black" />
        <a href="tel:+923206361916" className="text-gray-600">+92 320 6361916</a>
      </div>
      {message && (
        <div className={`p-2 mb-3 rounded text-center ${message.includes("successfully") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
          {message}
        </div>
      )}
      {showPhoneInput ? (
        <div className="mb-3">
          <div className="flex mb-2">
            <input
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneChange}
              placeholder="Enter WhatsApp number"
              className="flex-1 border rounded-l-lg px-3 py-2 focus:ring-[#b89628]"
            />
            <button
              onClick={handleSendLocation}
              disabled={isSubmitting}
              className="bg-[#b89628] text-white px-4 rounded-r-lg"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </div>
          <p className="text-xs text-gray-500">Include country code (e.g., +92XXXXXXXXXX)</p>
        </div>
      ) : (
        <button
          onClick={handleSendLocationClick}
          className="w-full bg-[#b89628] text-white py-2 rounded-lg mb-3 flex items-center justify-center"
        >
          <Send className="w-4 h-4 mr-2" /> Send Location to My WhatsApp
        </button>
      )}
      <button
        onClick={handleWhatsAppClick}
        className="w-full bg-green-500 text-white py-2 rounded-lg mb-3 flex items-center justify-center"
      >
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
        </svg>
        Chat on WhatsApp
      </button>
      <button onClick={onBackToChat} className="w-full border border-black text-black py-2 rounded-lg">
        Back to Conversation
      </button>
    </div>
  );
}
