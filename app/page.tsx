import { AboutSection } from "@/components/AboutSection";
import { CaseStudies } from "@/components/CaseStudies";
import { ContactSection } from "@/components/ContactSection";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { NavBar } from "@/components/NavBar";
import { OurApproach } from "@/components/OurApproach";
import { WhyDigitalize } from "@/components/WhyDigitalize";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <WhyDigitalize />
        <OurApproach />
        <CaseStudies />
        <AboutSection />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
