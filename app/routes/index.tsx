import { Navbar } from "~/components/navbar/navbar";
import { FeaturesSection } from "~/components/sections/features/features";
import { HeroSection } from "~/components/sections/hero/hero";


export default function Index() {
  return (
    <div className="m-container">
      <Navbar />
      <HeroSection />
      <FeaturesSection/>
    </div>
  );
}
