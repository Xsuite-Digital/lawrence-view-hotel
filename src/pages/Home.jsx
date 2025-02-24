import BookingEngine from "../components/BookingEngine/Bookingengine"
import Contact from "../components/Contact"
import FAQ from "../components/FAQ"
import Amenities from "../components/HomeComponents/Amenities"
import CardSlider from "../components/HomeComponents/CardSlider"
import Hero from "../components/HomeComponents/Hero"
import HotelFeature from "../components/HomeComponents/HotelFeature"

const Home = () => {
  return (
    <div>
    <Hero /> 
    <CardSlider />
    <Amenities /> 
  <HotelFeature />
  <Contact />
  <FAQ />
    </div>
  )
}

export default Home
