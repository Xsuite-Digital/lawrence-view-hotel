import { Phone } from "lucide-react";
import { useState } from "react";

export default function SupportOptions({ onBackToChat }) {
  const [showCallOptions, setShowCallOptions] = useState(false);

  const handleToggleCallOptions = () => {
    setShowCallOptions(!showCallOptions);
  };

  const handleCallNumber = () => {
    window.location.href = "tel:+12345678900";
  };

  const handleCallLandline = () => {
    window.location.href = "tel:+1122334455"; // Replace with actual landline number
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/1234567890", "_blank");
  };

  return (
    <div className="p-2">
      <h3 className="font-bold text-lg mb-3">24/7 Support</h3>
      <p className="text-gray-600 mb-4">
        Our support team is available 24/7 to assist you with any questions or concerns.
      </p>

      <div className="space-y-3">
        <button
          onClick={handleToggleCallOptions}
          className="w-full bg-black text-white py-3 rounded-lg font-medium flex items-center justify-center"
        >
          <Phone className="mr-2" size={20} />
          Call Support
        </button>

        {/* Call Options */}
        {showCallOptions && (
          <div className="space-y-2 mt-2">
            <button
              onClick={handleCallNumber}
              className="w-full bg-white border-2 border-black text-black  hover:bg-black hover:text-white py-2 rounded-lg font-medium"
            >
              
              Call on Mobile
            </button>
            <button
              onClick={handleCallLandline}
              className="w-full bg-white border-2 border-black text-black  hover:bg-black hover:text-white py-2 rounded-lg font-medium"
            >
              Call on Landline
            </button>
          </div>
        )}

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="w-full bg-green-500 text-white py-3 rounded-lg font-medium flex items-center justify-center"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp Chat
        </button>
      </div>

      <div className="mt-4 p-3 bg-gray-100 rounded-lg">
        <p className="text-sm text-gray-600">
          <span className="font-medium">Support Hours:</span> 24 hours a day, 7 days a week
        </p>
        <p className="text-sm text-gray-600 mt-1">
          <span className="font-medium">Average Response Time:</span> Under 5 minutes
        </p>
      </div>

      {/* Back to Chat Button */}
      <button onClick={onBackToChat} className="w-full border border-black text-black py-2 rounded-lg font-medium mt-4">
        Back to Conversation
      </button>
    </div>
  );
}
