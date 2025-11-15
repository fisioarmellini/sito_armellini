import MarqueeBar from "@/components/MarqueeBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import ConditionsSectionHome from "@/components/ConditionsSectionHome";
import TestimonialsSection from "@/components/TestimonialsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import LatestNewsFeed from "@/components/LatestNewsFeed";
import Footer from "@/components/Footer";
import SuccessCarousel from "@/components/SuccessCarousel";

<link rel="icon" type="image/png" href="public/logo.avif" />


const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      <AboutSection />
      <SuccessCarousel />
      <TreatmentsSection />
      <ConditionsSectionHome />
      <TestimonialsSection />
      <HowItWorksSection />
      <LatestNewsFeed />
      
      <MarqueeBar />
      <Footer />
    </div>
  );
};

export default Index;
