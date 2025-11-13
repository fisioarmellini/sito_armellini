import MarqueeBar from "@/components/MarqueeBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import ConditionsSection from "@/components/ConditionsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import Footer from "@/components/Footer";

<link rel="icon" type="image/png" href="public/logo.avif" />


const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      <AboutSection />
      <TreatmentsSection />
      <ConditionsSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <MarqueeBar />
      <Footer />
    </div>
  );
};

export default Index;
