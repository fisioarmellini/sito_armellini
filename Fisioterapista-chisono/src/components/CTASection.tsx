import { Button } from "@/components/ui/button";
import doctorCta from "@/assets/doctor-cta.jpg";

const CTASection = () => {
  return (
    <section id="cta" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <span className="w-2 h-2 bg-success-green rounded-full"></span>
              <span className="text-sm font-medium text-foreground">PRENOTA UN APPUNTAMENTO</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Prenota subito per il tuo benessere
            </h2>

            <p className="text-lg text-foreground/80">
              Non aspettare che il dolore diventi cronico. Contattami oggi per una 
              valutazione personalizzata e inizia il tuo percorso verso il benessere.
            </p>

            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Prenota ora!
            </Button>
          </div>

          <div className="relative">
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent rounded-full"></div>
            <img
              src={doctorCta}
              alt="Dott.ssa Armellini"
              className="w-full h-auto rounded-3xl shadow-2xl relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
