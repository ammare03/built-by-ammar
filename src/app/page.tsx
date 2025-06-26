import FadeContent from "@/components/bits/FadeContent";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { EducationSection } from "@/sections/Education";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

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
        <ProjectsSection />
        <TapeSection />
        <EducationSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </FadeContent>
    </div>
  );
}
