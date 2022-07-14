import { Navbar } from "~/components/navbar/navbar";
import { DownloadSection } from "~/components/sections/download/download";
import { FeaturesSection } from "~/components/sections/features/features";
import { HeroSection } from "~/components/sections/hero/hero";
import { FaqSection } from "~/components/sections/faq/faq";
import { CallToActionSection } from "~/components/sections/call-to-action/call-to-action";
import { Footer } from "~/components/sections/footer/footer";
import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => ({
  title: "Bookmark landing page",
  "og:site_name": "Bookmark landing page",
  "og:title": "Bookmark landing page",
  "og:description":
    "My solution to the challenge Bookmark landing page, by Frontend Mentor",
  "og:image": "https://bookmark-landing-page-bfo.pages.dev/assets/preview.jpg",
  "og:type": "website",
  "og:image:type": "image/jpeg",
  "og:url": "https://bookmark-landing-page-bfo.pages.dev/",
});

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
        <Footer />
      </main>
    </div>
  );
}
