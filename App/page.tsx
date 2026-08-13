import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import Standards from "@/components/Standards";
import TrainingPrograms from "@/components/TrainingPrograms";
import Methodology from "@/components/Methodology";
import Metrics from "@/components/Metrics";
import Industries from "@/components/Industries";
import WhyUs from "@/components/WhyUs";
import TechnologyStack from "@/components/TechnologyStack";
import CTA from "@/components/CTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustSection />
      <Gallery />
      <Services />
      <Standards />
      <TrainingPrograms />
      <Methodology />
      <Metrics />
      <Industries />
      <WhyUs />
      <TechnologyStack />
      <CTA />
      <ContactSection />
      <Footer />
    </main>
  );
}
