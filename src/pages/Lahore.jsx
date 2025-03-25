import React, { Suspense, useEffect } from 'react'
const LahoreHero = React.lazy(()=>import('../components/LC/LahoreHero')) 
const Bookingengine = React.lazy(()=> import('../components/BookingEngine/Bookingengine'));
import CardSlider from '../components/HomeComponents/CardSlider'
import LL from '../components/LC/LL'
import HotelFeature from "../components/HomeComponents/HotelFeature";
import Amenities from "../components/HomeComponents/Amenities";
import ReasonsToBook from "../components/HomeComponents/ReasonsToBook"
import Loader from '../Helpers/Loader';
const Lahore = () => {
  
  return (
    <div>
      <Suspense fallback={<Loader/>}>

      <LahoreHero />
      <div className=" bg-black/50 border-t-4 border-b-4 border-[#b89628]">
        <Bookingengine />
      </div>
      </Suspense>
              <CardSlider />
              <ReasonsToBook />
      <Amenities />
      <HotelFeature />
              <LL />
      
    </div>
  )
}

export default Lahore
