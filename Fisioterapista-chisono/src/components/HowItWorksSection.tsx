import { Button } from "@/components/ui/button";
import { ClipboardList, Stethoscope, Activity, CheckCircle } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: ClipboardList,
      title: "Valutazione Iniziale",
      description: "Anamnesi completa e valutazione funzionale per comprendere le tue esigenze specifiche.",
    },
    {
      icon: Stethoscope,
      title: "Piano Personalizzato",
      description: "Creazione di un programma terapeutico su misura basato sulla tua condizione.",
    },
    {
      icon: Activity,
      title: "Trattamento Attivo",
      description: "Sedute di fisioterapia mirata con tecniche moderne e certificate.",
    },
    {
      icon: CheckCircle,
      title: "Monitoraggio Risultati",
      description: "Valutazione continua dei progressi e adeguamento del piano se necessario.",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
                Professionalità che si prende cura di te
              </h2>
              <p className="text-foreground/80">
                Un approccio olistico e personalizzato per garantire il tuo benessere 
                a lungo termine attraverso la fisioterapia moderna.
              </p>
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <span className="w-2 h-2 bg-success-green rounded-full"></span>
                <span className="text-sm font-medium text-foreground">COME FUNZIONA</span>
              </div>

              <h3 className="text-3xl font-heading font-bold text-foreground">
                Il tuo percorso, passo dopo passo
              </h3>

              <p className="text-foreground/80">
                Dalla prima visita al raggiungimento dei tuoi obiettivi, ti accompagno 
                in ogni fase del processo di guarigione e recupero.
              </p>
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

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h4 className="text-xl font-bold text-foreground mb-2">{step.title}</h4>
                  <p className="text-foreground/70">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
