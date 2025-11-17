import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageCircle, Calendar, ClipboardCheck, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Informati e contattaci",
    description: "Scopri i nostri trattamenti e prenota una chiamata conoscitiva gratuita per parlare delle tue esigenze.",
  },
  {
    icon: Calendar,
    title: "Prenota la tua valutazione",
    description: "Scegli giorno e ora che preferisci direttamente online. Riceverai conferma immediata del tuo appuntamento.",
  },
  {
    icon: ClipboardCheck,
    title: "Prima visita personalizzata",
    description: "Durante la prima sessione valuteremo insieme il tuo caso e creeremo un piano terapeutico su misura.",
  },
  {
    icon: HeartHandshake,
    title: "Inizia il tuo percorso",
    description: "Seguirai un percorso mirato e scientifico per risolvere i tuoi dolori e ritrovare il benessere.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-12 md:py-20 bg-mint-light">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column - Text Content */}
          <div className="md:sticky md:top-8">
            <div className="inline-block bg-[hsl(150_30%_97%)] text-[hsl(150_25%_30%)] px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 md:mb-6">
              • COME FUNZIONA
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight text-foreground">
              Il tuo percorso, passo dopo passo
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              Seguiamo un metodo chiaro e strutturato per garantirti un percorso terapeutico efficace e personalizzato. Dal primo contatto fino al raggiungimento dei tuoi obiettivi, sarai sempre supportato con professionalità e attenzione.
            </p>
            <Link to="/prenotazione#booking">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm sm:text-base px-6 py-3 rounded-full w-full sm:w-auto">
                Prenota ora!
              </Button>
            </Link>
          </div>

          {/* Right Column - Vertical Timeline */}
          <div className="relative mt-8 md:mt-0">
            {/* Vertical connecting line */}
            <div className="absolute left-5 sm:left-6 top-8 bottom-8 w-0.5 bg-border"></div>
            
            {/* Steps */}
            <div className="space-y-6 md:space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative flex gap-4 sm:gap-6">
                    {/* Icon Circle */}
                    <div className="relative z-10 flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background border-2 border-mint-accent flex items-center justify-center">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-mint-accent" />
                    </div>
                    
                    {/* Content */}
                    <div className="pt-1 flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;