import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import InterestsSection from "@/components/InterestsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Footer />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <InterestsSection />

    </main>
    
  );
}
