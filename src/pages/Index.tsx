import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TruckSection from "@/components/TruckSection";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-hemut-darkblue text-white">
      <Navbar />
      <Hero />
      <TruckSection />
      <Features />
      <Benefits />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
