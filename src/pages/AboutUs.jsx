import { ArrowRight } from "lucide-react";
import { FacilitiesSection } from "../components/AboutComponent/FacilitiesSection";
import { StorySection } from "../components/AboutComponent/StorySection";
import { TeamSection } from "../components/AboutComponent/TeamSection";
import { TestimonialsSection } from "../components/AboutComponent/TestimonialsSection";
import { ValuesSection } from "../components/AboutComponent/ValuesSection";

export default function AboutUs() {
  return (
    <div>
      {" "}
      <div className="min-h-screen  bg-white mt-10">
        <div className="bg-black w-full h-44 flex justify-center items-center mt-24">
          <div className="">
            <h1 className="text-white text-5xl mb-4">About Us</h1>
            <span className="text-white flex justify-center items-center gap-2">
              Home <ArrowRight /> About Us
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
