import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <HeroSection />
      <Projects/>
      <AboutSection />
    </main>
    
  );
}
