import ComingSoonSection from "@/components/ComingSoonSection";
import HeroSection from "@/components/HeroSection";
import FaqSection from "@/components/FaqSection";
import HeroSection from "@/components/HeroSection";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FaqSection />
      <ComingSoonSection />
    </main>
  );
}
