import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

// Sample hotel content for dynamic data retrieval
const hotelData = {
  rooms: "Our hotel offers luxurious rooms with complimentary breakfast, Wi-Fi, and access to the swimming pool.",
  location: "The hotel is located at 123 Luxury Avenue, just 5 minutes away from the city center.",
  contact: "You can reach us at +1 (123) 456-7890 or email us at contact@lvh.com.",
  menu: "Our dining services include a variety of continental and traditional dishes available 24/7.",
  price: "Our dining services include a variety of continental and traditional dishes available 24/7.",
  couple: "Our dining services include a variety of continental and traditional dishes available 24/7.",
};

export async function POST(req) {
  const { messages } = await req.json();

  const userMessage = messages[messages.length - 1]?.content.toLowerCase();

  // Customized responses based on keywords
  let customResponse = "";
  if (userMessage.includes("room")) {
    customResponse = hotelData.rooms;
  } else if (userMessage.includes("location")) {
    customResponse = hotelData.location;
  } else if (userMessage.includes("contact")) {
    customResponse = hotelData.contact;
  } else if (userMessage.includes("menu") || userMessage.includes("dining")) {
    customResponse = hotelData.menu;
  } else {
    customResponse = "I'm here to help you with any questions about our hotel. Please let me know what you need!";
  }

  const systemPrompt = `
    You are a helpful hotel assistant for LVH Hotel & Resort.
    Be friendly, concise, and helpful.

    IMPORTANT: Always respond to every message from the user, including simple greetings like "hi", "hello", etc.

    ${customResponse}
  `;

  const result = streamText({
    model: openai("gpt-4o"),
    system: systemPrompt,
    messages,
  });

  return result.toDataStreamResponse();
}
