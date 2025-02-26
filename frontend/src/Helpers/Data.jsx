import P2 from "../assets/P2.webp";
import P1 from "../assets/P1.webp";
import R1 from "../assets/R1.webp";
import ES from "../assets/ES.webp";
import Deluxe from "../assets/Deluxe.webp";
import Studio from "../assets/Studio.webp";

export const rooms = [
  {
    image:Deluxe,
    id: 1,
    title: "Deluxe Double Room",
    guests: "2 Guests",
    size: "15 sqft",
    description:
      "A luxurious room with modern amenities and a comfortable ambiance, perfect for a relaxing stay.",
    price: "$240 per night",
    amenities: [
      "Double Bed",
      "Bathroom with shower",
      "Seating area",
      "Wireless internet",
      "Remote control TV",
      "Fridge",
      "Minibar",
      "Fan",
      "Individually controlled air conditioning",
      "Full-length mirror",
      "Desk",
      "Desk lamp",
      "Free local calls",
      "Newspaper",
      "Hairdryer",
      "Room safe",
      "Private bathroom",
      "Operator 24 hours",
      "Free toiletries",
      "Flat Screen TV",
    ],
    roomRules: [
      "Check-in: 3:00 PM - 8:00 PM",
      "Check-out: 12:00 PM",
      "No smoking inside the room",
      "Pets are not allowed",
      "Valid ID required at check-in",
    ],
    images: [P1, P2, P2, P2],
  },
  {
    image:R1,

    id: 2,
    title: "Superior Suite Room",
    guests: "3 Guests",
    size: "20 sqft",
    description:
      "Experience the comfort of deluxe living in a modern space with a private balcony and stunning views.",
    price: "$320 per night",
    amenities: [
      "Double Bed",
      "Private Balcony",
      "Bathroom with shower",
      "Free Breakfast",
      "24/7 Room Service",
      "Flat Screen TV",
      "Coffee Maker",
      "Smart Lighting",
      "Wireless internet",
      "Remote control TV",
      "Fridge",
      "Minibar",
      "Fan",
      "Individually controlled air conditioning",
      "Full-length mirror",
      "Desk",
      "Desk lamp",
      "Free local calls",
      "Newspaper",
      "Hairdryer",
      "Room safe",
      "Private bathroom",
      "Operator 24 hours",
      "Free toiletries",
    ],
    roomRules: [
      "Check-in: 2:00 PM - 10:00 PM",
      "Check-out: 11:00 AM",
      "Smoking allowed on balcony only",
      "No parties or events",
      "Pets allowed on request",
    ],
    images: [P2, P2, P2, P2],
  },
  {
    image:ES,

    id: 3,
    title: "Executive Suite Room",
    guests: "2 Guests",
    size: "18 sqft",
    description:
      "A perfect blend of luxury and elegance, featuring a hot tub and premium services for a sophisticated experience.",
    price: "$280 per night",
    amenities: [
      "Double Bed",
      "Complimentary Drinks",
      "Hot Tub",
      "Gym Access",
      "Laundry Service",
      "Smart TV",
      "Work Desk",
      "Soundproof Windows",
      "Wireless internet",
      "Remote control TV",
      "Fridge",
      "Minibar",
      "Fan",
      "Individually controlled air conditioning",
      "Full-length mirror",
      "Desk lamp",
      "Free local calls",
      "Newspaper",
      "Hairdryer",
      "Room safe",
      "Private bathroom",
      "Operator 24 hours",
      "Free toiletries",
    ],
    roomRules: [
      "Check-in: 4:00 PM - 9:00 PM",
      "Check-out: 11:30 AM",
      "Quiet hours from 10:00 PM to 7:00 AM",
      "No visitors allowed after 9:00 PM",
      "Pets not allowed",
    ],
    images: [P2, P2, P2, P2],
  },
  {
    image:Studio,

    id: 4,
    title: "Studio Apartment",
    guests: "2 Guests",
    size: "25 sqft",
    description:
      "A compact and stylish apartment with all essential facilities, ideal for long-term stays.",
    price: "$200 per night",
    amenities: [
      "Queen Bed",
      "Kitchenette",
      "Dining Table",
      "Microwave",
      "Washing Machine",
      "High-Speed WiFi",
      "Smart TV",
      "Remote control TV",
      "Fridge",
      "Minibar",
      "Fan",
      "Individually controlled air conditioning",
      "Full-length mirror",
      "Desk",
      "Desk lamp",
      "Hairdryer",
      "Room safe",
      "Private bathroom",
      "Operator 24 hours",
      "Free toiletries",
    ],
    roomRules: [
      "Check-in: 3:00 PM - 9:00 PM",
      "Check-out: 12:00 PM",
      "No smoking inside the apartment",
      "Pets allowed on request",
      "No parties allowed",
    ],
    images: [P2, P2, P2, P2],
  },
  {
    image:R1,

    id: 5,
    title: "Mashhood Apartment",
    guests: "4 Guests",
    size: "30 sqft",
    description:
      "Spacious apartment with elegant interiors, ideal for families or group travelers.",
    price: "$350 per night",
    amenities: [
      "King Bed",
      "Living Room",
      "Fully Equipped Kitchen",
      "Dishwasher",
      "Washing Machine",
      "Smart Home Controls",
      "High-Speed WiFi",
      "Remote control TV",
      "Fridge",
      "Minibar",
      "Fan",
      "Individually controlled air conditioning",
      "Full-length mirror",
      "Desk",
      "Desk lamp",
      "Hairdryer",
      "Room safe",
      "Private bathroom",
      "Operator 24 hours",
      "Free toiletries",
    ],
    roomRules: [
      "Check-in: 2:00 PM - 10:00 PM",
      "Check-out: 11:30 AM",
      "No loud music after 9:00 PM",
      "Pets allowed",
      "Smoking allowed on balcony",
    ],
    images: [P2, P2, P2, P2],
  },
  {
    image:R1,

    id: 6,
    title: "Anas Apartment",
    guests: "3 Guests",
    size: "22 sqft",
    description:
      "A cozy and well-furnished apartment with modern decor and essential amenities.",
    price: "$280 per night",
    amenities: [
      "Double Bed",
      "Small Living Space",
      "Kitchenette",
      "Work Desk",
      "High-Speed WiFi",
      "Remote control TV",
      "Fridge",
      "Minibar",
      "Fan",
      "Individually controlled air conditioning",
      "Full-length mirror",
      "Desk lamp",
      "Hairdryer",
      "Room safe",
      "Private bathroom",
      "Operator 24 hours",
      "Free toiletries",
    ],
    roomRules: [
      "Check-in: 3:00 PM - 8:00 PM",
      "Check-out: 12:00 PM",
      "No smoking inside",
      "Pets not allowed",
      "Quiet hours from 10:00 PM to 7:00 AM",
    ],
    images: [P2, P2, P2, P2],
  },
];
