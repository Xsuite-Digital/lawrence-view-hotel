import LandingPage from "./Components/LandingPage/page";
import Rooms from "./Components/Rooms/page";
import Gallery from "./Components/Gallery/page";
import Service from "./Components/Service/page";
import BookingEngine from "./Components/BookingEngine/page";
import ChatIcon from "./ChatIcon/page";
import Map from "./Components/Map/page";

export default function Home() {
  return (
    <div>
      <div>
        <LandingPage />
      </div>
      <div className="py-4 bg-black">
        <BookingEngine />
      </div>

      <div className="">
        <Rooms />
      </div>
      <Gallery />
      <Service />
      <Map />
      <ChatIcon />
    </div>
  );
}
