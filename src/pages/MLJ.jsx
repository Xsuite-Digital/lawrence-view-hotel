import React from 'react'
import MLJHero from '../components/MLJC/MLJHero'
import MLJL from '../components/MLJC/MLJL'
import CardSlider from '../components/HomeComponents/CardSlider'
import HotelFeature from "../components/HomeComponents/HotelFeature";
import Amenities from "../components/HomeComponents/Amenities";
import ReasonsToBook from "../components/HomeComponents/ReasonsToBook"
import Bookingengine from '../components/BookingEngine/Bookingengine';
const MLJ = () => {
  return (
    <div>
      <MLJHero />
      <div className=" bg-black/50 border-t-4 border-b-4 border-[#c4a053]">
        <Bookingengine />
      </div>
      <CardSlider />
      <ReasonsToBook />
      <Amenities />
      <HotelFeature />
          <MLJL />
    </div>
  )
}

export default MLJ
