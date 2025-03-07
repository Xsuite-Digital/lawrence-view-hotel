import { ArrowRight } from "lucide-react";
import { FacilitiesSection } from "../components/AboutComponent/FacilitiesSection";
import { StorySection } from "../components/AboutComponent/StorySection";
import { TeamSection } from "../components/AboutComponent/TeamSection";
import { TestimonialsSection } from "../components/AboutComponent/TestimonialsSection";
import { ValuesSection } from "../components/AboutComponent/ValuesSection";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div>
      {" "}
      <div className="min-h-screen  bg-white">
        <div className="bg-black w-full h-44 flex justify-center items-center mt-24">
          <div className="">
            <h1 className="text-white text-5xl mb-4">About Us</h1>
            <span className="text-white flex justify-center items-center gap-2">
              <Link to="/" className="hover:no-underline hover:text-[#c4a053]">
                Home
              </Link>{" "}
              <ArrowRight /> About Us
            </span>
          </div>
        </div>
        <StorySection />
        <ValuesSection />
        <TeamSection />
        <FacilitiesSection />
        <TestimonialsSection />
      </div>
    </div>
  );
}
