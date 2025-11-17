import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      title: "Primo contatto",
      description: "Prenota il tuo appuntamento online o per telefono",
    },
    {
      title: "Valutazione iniziale",
      description: "Il fisioterapista valuterà la tua condizione e le tue esigenze",
    },
    {
      title: "Piano di trattamento",
      description: "Creiamo insieme un percorso personalizzato per il tuo recupero",
    },
    {
      title: "Follow-up",
      description: "Monitoriamo i tuoi progressi e adattiamo il trattamento",
    },
  ];

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 bg-accent">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 sm:px-4 py-2 rounded-full mb-4 md:mb-6">
              <span className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-xs sm:text-sm font-medium">COME FUNZIONA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Il tuo percorso, passo dopo passo
            </h2>
            <p className="text-foreground mb-6 md:mb-8 text-base sm:text-lg">
              Un approccio strutturato e personalizzato per garantire i migliori risultati 
              nel minor tempo possibile.
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
              Prenota ora!
            </Button>
          </div>

          <div className="space-y-6 md:space-y-8 mt-8 md:mt-0">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-background rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-12 sm:h-16 bg-background/30 mx-auto mt-2" />
                  )}
                </div>
                <div className="pt-2 flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-foreground/80">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
