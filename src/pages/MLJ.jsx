import React from 'react'
import MLJHero from '../components/MLJC/MLJHero'
import MLJL from '../components/MLJC/MLJL'
import CardSlider from '../components/HomeComponents/CardSlider'
import HotelFeature from "../components/HomeComponents/HotelFeature";
import Amenities from "../components/HomeComponents/Amenities";
import ReasonsToBook from "../components/HomeComponents/ReasonsToBook"
const MLJ = () => {
  return (
    <div>
      <MLJHero />
      <CardSlider />
      <ReasonsToBook />
      <Amenities />
      <HotelFeature />
          <MLJL />
    </div>
  )
}

export default MLJ
