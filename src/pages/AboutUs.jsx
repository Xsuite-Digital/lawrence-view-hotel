import React, { Suspense, lazy } from "react";
import { ArrowRight } from "lucide-react";
import { FacilitiesSection } from "../components/AboutComponent/FacilitiesSection";
import { StorySection } from "../components/AboutComponent/StorySection";
import { TestimonialsSection } from "../components/AboutComponent/TestimonialsSection";
import { Link } from "react-router-dom";
import Loader from "../Helpers/Loader";

const ValuesSection = lazy(() => 
  import("../components/AboutComponent/ValuesSection").then(module => ({
    default: module.ValuesSection
  }))
);

export default function AboutUs() {
  return (
    <div>
      <div className="min-h-screen bg-white">
        <div className="bg-black w-full h-44 flex justify-center items-center lg:mt-24 mt-0">
          <div>
            <h1 className="text-white text-5xl mb-4">About Us</h1>
            <span className="text-white flex justify-center items-center gap-2">
              <Link to="/" className="hover:no-underline hover:text-[#c4a053]">
                Home
              </Link>{" "}
              <ArrowRight /> About Us
            </span>
          </div>
        </div>

        <Suspense fallback={<Loader />}>
          <ValuesSection />
        </Suspense>

        <StorySection />
        <FacilitiesSection />
        <TestimonialsSection />
      </div>
    </div>
  );
}
