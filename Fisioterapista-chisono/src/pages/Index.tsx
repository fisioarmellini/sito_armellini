import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import ConditionsSection from "@/components/ConditionsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <HowItWorksSection />
        <TreatmentsSection />
        <ConditionsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
