import React, { useState, useEffect, Suspense, lazy } from "react";
import Loader from "../Helpers/Loader"; 
const Hero = React.lazy(()=>import("../components/HomeComponents/Hero")) ;
import Bookingengine from "../components/BookingEngine/Bookingengine";
import CardSlider from "../components/HomeComponents/CardSlider";
import HotelFeature from "../components/HomeComponents/HotelFeature";
import CityGuide from "../components/HomeComponents/CityGuide";
import BookingForm from "../components/Contact";

const ReasonsToBook = React.lazy(() => import("../components/HomeComponents/ReasonsToBook"));
const Amenities = React.lazy(() => import("../components/HomeComponents/Amenities"));

const Home = () => {
  

  return (
    <>
    
        <div>
        <Suspense fallback={<Loader />}>
          <Hero />
        </Suspense>
          <div className="bg-black/50 border-t-4 border-b-4 border-[#c4a053]">
            <Bookingengine />
          </div>
          <div className="2xl:mt-0 mt-32">
            <CardSlider />
          </div>

          <Suspense fallback={<Loader />}>
            <ReasonsToBook />
            <Amenities />
          </Suspense>

          <HotelFeature />
          <CityGuide />
          <BookingForm />
        </div>
      
    </>
  );
};

export default Home;
