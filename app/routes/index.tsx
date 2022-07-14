import { Navbar } from "~/components/navbar/navbar";
import { DownloadSection } from "~/components/sections/download/download";
import { FeaturesSection } from "~/components/sections/features/features";
import { HeroSection } from "~/components/sections/hero/hero";
import { FaqSection } from "~/components/sections/faq/faq";
import { CallToActionSection } from "~/components/sections/call-to-action/call-to-action";

export default function Index() {
  return (
    <div className="m-container">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <DownloadSection />
        <FaqSection />
        <CallToActionSection />
      </main>
    </div>
  );
}
