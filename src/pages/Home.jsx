import Contact from "../components/Contact";
import CardSlider from "../components/HomeComponents/CardSlider";
import Hero from "../components/HomeComponents/Hero";
import HotelFeature from "../components/HomeComponents/HotelFeature";

const Home = () => {
  return (
    <div>
      <Hero />
      <CardSlider />
      <HotelFeature />
      <Contact />
    </div>
  );
};

export default Home;
