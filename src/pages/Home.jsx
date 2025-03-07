import Amenities from "../components/HomeComponents/Amenities";
import CardSlider from "../components/HomeComponents/CardSlider";
import Hero from "../components/HomeComponents/Hero";
import HotelFeature from "../components/HomeComponents/HotelFeature";
import CityGuide from "../components/HomeComponents/CityGuide";
import BookingForm from "../components/Contact";
import ReasonsToBook from "../components/HomeComponents/ReasonsToBook";
import Bookingengine from "../components/BookingEngine/Bookingengine";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className=" bg-black/50 border-t-4 border-b-4 border-[#c4a053]">
        <Bookingengine />
      </div>
      <div className="2xl:mt-0 mt-32">
        <CardSlider />
      </div>
      <ReasonsToBook />
      <Amenities />
      <HotelFeature />
      <CityGuide />
      <BookingForm />
    </div>
  );
};

export default Home;
