import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import TreatmentsGrid from "@/components/TreatmentsGrid";
import SuccessCarousel from "@/components/SuccessCarousel";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Trattamenti = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroBanner />
      <TreatmentsGrid />
      <SuccessCarousel />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Trattamenti;
