import P2 from "../assets/P2.webp";
import P1 from "../assets/P1.webp";
import R1 from "../assets/R1.webp";
import ES from "../assets/ES.webp";
import D1 from "../assets/D1.webp";
import D2 from "../assets/D2.webp";
import D3 from "../assets/D3.webp";
import D4 from "../assets/D4.webp";
import S1 from "../assets/S1.webp";
import S2 from "../assets/S2.webp";
import S3 from "../assets/S3.webp";
import SA1 from "../assets/SA1.webp";
import SA2 from "../assets/SA2.webp";
import SA3 from "../assets/SA3.webp";
import E1 from "../assets/E1.webp";
import E2 from "../assets/E2.webp";
import E3 from "../assets/E3.webp";
import T1 from "../assets/TWIN.webp";
import T2 from "../assets/T2.webp";
import T3 from "../assets/T3.webp";
import Q1 from "../assets/QUAD.webp";
import Deluxe from "../assets/Deluxe.webp";
import Studio from "../assets/Studio.webp";

export const rooms = [
  {
    image:Deluxe,
    id: 1,
    title: "Deluxe Double Room",
    guests: "2 Guests",
    size: "26  ㎡",
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
      "Check-in time: After 12:00 on the day of arrival.",
      "Check-out time: 12:00 upon day of departure.",
      "Pets: No pets allowed",
    
    ],
    images: [D3, D2, D1, D4],  
  },
  {
    image:R1,

    id: 2,
    title: "Superior Suite Room",
    guests: "2 Guests",
    size: "26  ㎡",
    description:
      "Experience the comfort of deluxe living in a modern space with a private balcony and stunning views.",
    price: "$320 per night",
    amenities: [
      "King",
      "Separate luggage store",
      "Bathroom with shower",
      " Breakfast area",
      "Seating area",
      "Cable TV",
      "Beside Telephone",
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
      "Microwave oven (Paid)",
      "Iron for pants (Paid)",
      "Coffee machine (Paid)",
      "Room safe",
      "Private bathroom",
      "Operator 24 hours",
      "Free toiletries",
    ],
    roomRules: [
      "Check-in time: After 12:00 on the day of arrival.",
      "Check-out time: 12:00 upon day of departure.",
      "Pets: No pets allowed",
    
    ],
    images: [R1, S1, S2, S3],
  },
  {
    image:ES,

    id: 3,
    title: "Executive Suite Room",
    guests: "2 Guests",
    size: "220 ㎡",
    description:
      "A perfect blend of luxury and elegance, featuring a hot tub and premium services for a sophisticated experience.",
    price: "$280 per night",
    amenities: [
      "King",
      "Garden view",
      "City view",
      "Park view",
      "Street view",
      "Bathroom with jacuzzi",
      "Bathroom with shower",
      "Bathroom with window",
      "Breakfast area",
      "Desktop telephone",
      "Fan",
      "Microwave oven",
      "Fan",
      "Tea-maker",
      "Plan of emergency exits",
      "Individually controlled ventilation (Paid)",
      "Free local calls",
      "Full-length mirror",
      "Hairdryer",
      "Room safe",
      "Private bathroom",
      "Operator 24 hours",
      "Kettle",
    ],
    roomRules: [
      "Check-in time: After 12:00 on the day of arrival.",
      "Check-out time: 12:00 upon day of departure.",
      "Pets: No pets allowed",
    
    ],
    images: [ES, E1, E2, E3],
  },
  {
    image:Studio,

    id: 4,
    title: "Studio Apartment",
    guests: "4 Guests",
    size: "28 ㎡",
    description:
      "A compact and stylish apartment with all essential facilities, ideal for long-term stays.",
    price: "$200 per night",
    amenities: [
      "Queen Bed",
      "Kitchenette",
      "Bathroom with jacuzzi",
      "Breakfast area",
      "Working room",
      "Equipped kitchen",
      "DSL broadband internet",
      "Remote control TV",
      "Satellite TV",
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
      "Check-in time: After 12:00 on the day of arrival.",
      "Check-out time: 12:00 upon day of departure.",
      "Pets: No pets allowed",
    
    ],
    images: [Studio, SA1, SA2, SA3],
  },
  {
    image:T1,

    id: 5,
    title: "Twin Sharing",
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
    images: [T1 , T2 , T3],
  },
  {
    image:Q1,

    id: 6,
    title: "Quad Room",
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
    images: [Q1],
  },
];
