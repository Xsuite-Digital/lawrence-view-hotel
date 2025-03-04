

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import before from "../../assets/before.webp";

export default function GetInTouch() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "your_service_id", // Replace with your EmailJS Service ID
        "your_template_id", // Replace with your EmailJS Template ID
        form.current,
        "your_public_key" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setMessage("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setMessage("Failed to send message. Please try again.");
          console.error(error);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <div className="hidden lg:block bg-white py-6 px-4 rounded-md">
        <h2 className="text-lg md:text-xl flex items-center justify-center font-semibold text-black mb-4">
          <img
            src={before}
            alt="icon"
            height={25}
            width={25}
            className="lg:w-6 2xl:w-4 2xl:h-4 w-full h-auto lg:h-6"
          />
          <span className="mx-2">Get in Touch</span>
          <img
            src={before}
            alt="icon"
            height={25}
            width={25}
            className="lg:w-6 lg:h-6 2xl:w-4 2xl:h-4 w-full h-auto"
          />
        </h2>

        <form ref={form} onSubmit={sendEmail}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="border p-2 rounded w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="border p-2 rounded w-full"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="date"
              name="check_in"
              className="border p-2 rounded w-full"
              required
            />
            <input
              type="date"
              name="check_out"
              className="border p-2 rounded w-full"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Write a Message"
            className="border p-2 rounded w-full mb-4"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-[#c4a053] transition"
            disabled={loading}
          >
            {loading ? "Sending..." : "CHECK AVAILABILITY"}
          </button>

          {message && (
            <p className="mt-2 text-center text-sm text-green-600">{message}</p>
          )}
        </form>
      </div>
    </div>
  );
}
