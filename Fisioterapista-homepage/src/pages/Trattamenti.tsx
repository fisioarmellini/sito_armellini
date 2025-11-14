import Header from "@/components/Header";
import ExpertiseLanding from "@/components/ExpertiseLanding";
import PatologieHeader from "@/components/PatologieHeader";
import ConditionsSection from "@/components/ConditionsSection";
import TrattamentiHeader from "@/components/TrattamentiHeader";
import TreatmentsGrid from "@/components/TreatmentsGrid";
import Footer from "@/components/Footer";
import HowItWorksSection from "@/components/HowItWorksSection";

const Trattamenti = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ExpertiseLanding />
      <PatologieHeader />
      <ConditionsSection />
      <TrattamentiHeader />
      <TreatmentsGrid />
      <HowItWorksSection />
      <Footer />
    </div>
  );
};

export default Trattamenti;
