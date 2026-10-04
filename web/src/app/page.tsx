import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PortfolioGallery from "@/components/PortfolioGallery";
import BentoGrid from "@/components/BentoGrid";
import CredibilityStrip from "@/components/CredibilityStrip";
import SpatialTreeProgram from "@/components/SpatialTreeProgram";
import PreFooterCTA from "@/components/PreFooterCTA";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PortfolioGallery />
      <BentoGrid />
      <CredibilityStrip />
      <SpatialTreeProgram />
      <PreFooterCTA />
      <Footer />
      <WhatsAppWidget />
    </main>
  );
}
