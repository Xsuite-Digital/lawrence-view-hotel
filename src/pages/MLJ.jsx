import React, { Suspense } from 'react'
const MLJHero = React.lazy(()=>import('../components/MLJC/MLJHero')) 
const Bookingengine = React.lazy(()=> import('../components/BookingEngine/Bookingengine'));
import MLJL from '../components/MLJC/MLJL'
import CardSlider from '../components/HomeComponents/CardSlider'
import HotelFeature from "../components/HomeComponents/HotelFeature";
import Amenities from "../components/HomeComponents/Amenities";
import ReasonsToBook from "../components/HomeComponents/ReasonsToBook"
import Loader from '../Helpers/Loader';
const MLJ = () => {
  return (
    <div>
      <Suspense fallback={<Loader/>}>

      <MLJHero />
      <div className=" bg-black/50 border-t-4 border-b-4 border-[#c4a053]">
        <Bookingengine />
      </div>
      </Suspense>
      <CardSlider />
      <ReasonsToBook />
      <Amenities />
      <HotelFeature />
          <MLJL />
    </div>
  )
}

export default MLJ
