import React, { useEffect } from 'react'
import LahoreHero from '../components/LC/LahoreHero'
import CardSlider from '../components/HomeComponents/CardSlider'
import LL from '../components/LC/LL'
import HotelFeature from "../components/HomeComponents/HotelFeature";
import Amenities from "../components/HomeComponents/Amenities";
import ReasonsToBook from "../components/HomeComponents/ReasonsToBook"
const Lahore = () => {
  
  return (
    <div>
      <LahoreHero />
              <CardSlider />
              <ReasonsToBook />
      <Amenities />
      <HotelFeature />
              <LL />
      
    </div>
  )
}

export default Lahore
