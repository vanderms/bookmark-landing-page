import { Navbar } from "~/components/navbar/navbar";
import { HeroSection } from "~/components/sections/hero";


export default function Index() {
  return (
    <div className="m-container">
      <Navbar />
      <HeroSection/>
    </div>
  );
}
