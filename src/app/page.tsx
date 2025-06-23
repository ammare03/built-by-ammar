import FadeContent from "@/components/bits/FadeContent";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";

export default function Home() {
  return (
    <div>
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
      >
        <Header />
        <HeroSection />
      </FadeContent>
    </div>
  );
}
