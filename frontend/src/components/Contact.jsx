import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Hotel, Bell, Star, MapPin } from "lucide-react";
import P2 from "../assets/p2.webp";
import shape from "../assets/shape.webp";
import logor from "../assets/logor.webp";

const rooms = [
  "Deluxe Double Room",
  "Superior Suite Room",
  "Executive Suite Room",
  "Studio Apartment",
  "Twin Sharing",
  "Quad Room",
];

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    room: rooms[0],
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (response) => {
          alert("Booking request sent successfully!");
          setFormData({ name: "", email: "", room: rooms[0], message: "" });
        },
        (error) => {
          alert("Failed to send booking request.");
        }
      );
  };

  return (
    <section className="bg-white py-10 px-6">
      <div className="max-w-3xl mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Book Your Stay</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-3 border rounded"
          />
          <select
            name="room"
            value={formData.room}
            onChange={handleChange}
            className="w-full p-3 border rounded"
          >
            {rooms.map((room, index) => (
              <option key={index} value={room}>
                {room}
              </option>
            ))}
          </select>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Additional Requests"
            className="w-full p-3 border rounded"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#c4a053] text-white py-3 rounded font-bold"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
