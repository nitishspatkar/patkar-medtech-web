import { AboutSection } from "@/components/AboutSection";
import { AIConsiderations } from "@/components/AIConsiderations";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { NavBar } from "@/components/NavBar";
import { OurApproach } from "@/components/OurApproach";
import { Solutions } from "@/components/Solutions";
import { WhyDigitalize } from "@/components/WhyDigitalize";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <WhyDigitalize />
        <OurApproach />
        <Solutions />
        <AIConsiderations />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
