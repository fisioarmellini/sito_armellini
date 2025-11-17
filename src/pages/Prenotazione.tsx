import Header from "@/components/Header";
import BookingHeroSection from "@/components/BookingHeroSection";
import ContactCards from "@/components/ContactCards";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import HowItWorksSection from "@/components/HowItWorksSection";

const Prenotazione = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <BookingHeroSection />
      <ContactCards />
      <HowItWorksSection />
      <BookingSection />
      <Footer />
    </div>
  );
};

export default Prenotazione;
