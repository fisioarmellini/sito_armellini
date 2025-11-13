import Header from "@/components/Header";
import BookingHeroSection from "@/components/BookingHeroSection";
import ContactCards from "@/components/ContactCards";
import ProcessSection from "@/components/ProcessSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

const Prenotazione = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <BookingHeroSection />
      <ContactCards />
      <ProcessSection />
      <BookingSection />
      <Footer />
    </div>
  );
};

export default Prenotazione;
