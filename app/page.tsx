import { AboutSection } from "@/components/AboutSection";
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
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
