import ComingSoonSection from "@/components/ComingSoonSection";
import HeroSection from "@/components/HeroSection";
import FaqSection from "@/components/FaqSection";
import BodySection from "@/components/BodySection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BodySection/>
      <ComingSoonSection />
      <FaqSection />
    </main>
  );
}
