import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import Amenities from "../components/HomeComponents/Amenities";
import CardSlider from "../components/HomeComponents/CardSlider";
import Hero from "../components/HomeComponents/Hero";
import HotelFeature from "../components/HomeComponents/HotelFeature";
import CityGuide from "../components/HomeComponents/CityGuide";
import BookingForm from "../components/Contact";

const Home = () => {
  return (
    <div>
      <Hero />

      <div className="2xl:mt-0 mt-32">
        <CardSlider />
      </div>
      <Amenities />
      <HotelFeature />
      <CityGuide />
      <BookingForm  />
      <FAQ />
    </div>
  );
};

export default Home;
