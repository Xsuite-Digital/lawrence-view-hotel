import React, { useEffect } from 'react'
import LahoreHero from '../components/LC/LahoreHero'
import CardSlider from '../components/HomeComponents/CardSlider'
import LL from '../components/LC/LL'
import HotelFeature from "../components/HomeComponents/HotelFeature";
import Amenities from "../components/HomeComponents/Amenities";
import ReasonsToBook from "../components/HomeComponents/ReasonsToBook"
import Bookingengine from '../components/BookingEngine/Bookingengine';
const Lahore = () => {
  
  return (
    <div>
      <LahoreHero />
      <div className=" bg-black/50 border-t-4 border-b-4 border-[#c4a053]">
        <Bookingengine />
      </div>
              <CardSlider />
              <ReasonsToBook />
      <Amenities />
      <HotelFeature />
              <LL />
      
    </div>
  )
}

export default Lahore
