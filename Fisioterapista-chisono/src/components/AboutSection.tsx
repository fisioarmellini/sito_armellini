import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import treatmentSession from "@/assets/treatment-session.jpg";

const AboutSection = () => {
  const benefits = [
    "Trattamenti personalizzati su misura",
    "Tecniche moderne e certificate",
    "Risultati rapidi e duraturi"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="text-8xl font-heading font-bold text-success-green">24+</div>
              <h2 className="text-4xl font-heading font-bold text-foreground">
                Trattamenti certificati
              </h2>
            </div>
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => {
                const element = document.getElementById("cta");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Prenota ora!
            </Button>
          </div>

          <div className="relative">
            <img
              src={treatmentSession}
              alt="Sessione di trattamento"
              className="w-full h-auto rounded-3xl shadow-xl"
            />
            <div className="mt-8 space-y-6">
              <p className="text-foreground/80">
                Ogni trattamento è progettato per affrontare le tue esigenze specifiche, 
                utilizzando le tecniche più avanzate della fisioterapia moderna.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-success-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-success-green" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
