import { FacilitiesSection } from "../components/AboutComponent/FacilitiesSection";
import { StorySection } from "../components/AboutComponent/StorySection";
import { TeamSection } from "../components/AboutComponent/TeamSection";
import { TestimonialsSection } from "../components/AboutComponent/TestimonialsSection";
import { ValuesSection } from "../components/AboutComponent/ValuesSection";

export default function AboutUs() {
  return <div>  <div className="min-h-screen bg-white">
  <StorySection />
  <ValuesSection />
  <TeamSection />
  <FacilitiesSection />
  <TestimonialsSection />
</div></div>;
}
