

import { Download } from "lucide-react";
import Menu from "../../assets/Menu.pdf";

export default function MenuDisplay({ onBackToChat }) {
  const handleDownloadMenu = () => {
    const menuUrl = Menu;
    window.open(menuUrl, "_blank");
  };

  return (
    <div className="p-2">
      <h3 className="font-bold text-lg mb-3">Our Menu</h3>

      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <h4 className="font-medium text-center mb-2">Restaurant Hours</h4>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>Breakfast</div>
          <div>6:30 AM - 10:30 AM</div>
          <div>Lunch</div>
          <div>12:00 PM - 3:00 PM</div>
          <div>Dinner</div>
          <div>6:00 PM - 10:30 PM</div>
        </div>
      </div>

      <p className="text-gray-600 mb-4">
        Explore our exquisite menu featuring international cuisine prepared by our award-winning chefs.
      </p>

      <button
        onClick={handleDownloadMenu}
        className="w-full bg-black text-white py-3 rounded-lg font-medium flex items-center justify-center mb-4"
      >
        <Download className="mr-2" size={20} />
        Download Menu
      </button>

      <div className="mt-4 mb-4">
        <h4 className="font-medium mb-2">Menu Highlights</h4>
        <div className="space-y-2">
          <div className="p-2 border border-gray-200 rounded-lg">
            <div className="font-medium">Signature Dishes</div>
            <div className="text-sm text-gray-600">Chef's special creations</div>
          </div>
          <div className="p-2 border border-gray-200 rounded-lg">
            <div className="font-medium">Local Specialties</div>
            <div className="text-sm text-gray-600">Authentic local cuisine</div>
          </div>
          <div className="p-2 border border-gray-200 rounded-lg">
            <div className="font-medium">International Cuisine</div>
            <div className="text-sm text-gray-600">Flavors from around the world</div>
          </div>
        </div>
      </div>

      <button onClick={onBackToChat} className="w-full border border-black text-black py-2 rounded-lg font-medium">
        Back to Conversation
      </button>
    </div>
  );
}
