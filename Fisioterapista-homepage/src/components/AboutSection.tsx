import doctorPortrait from "@/assets/doctor_image.jpeg";
import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section id="about" className="py-12 md:py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          <div className="relative order-2 md:order-1">
            <div className="rounded-2xl md:rounded-3xl overflow-hidden">
              <img
                src={doctorPortrait}
                alt="Dott.ssa Francesca Armellini"
                className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover"
              />
            </div>
            <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 bg-background p-4 sm:p-6 rounded-xl md:rounded-2xl shadow-lg">
              <div className="flex items-center gap-2 sm:gap-3">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
                <div>
                  <div className="text-2xl sm:text-3xl font-bold">24+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Trattamenti certificati</div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="inline-block bg-mint-accent text-foreground px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 md:mb-6">
              • CHI SONO
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Mi Presento</h2>
            <p className="text-base sm:text-lg mb-3 md:mb-4 text-muted-foreground leading-relaxed">
              Sono la Dott.ssa Francesca Armellini, fisioterapista specializzata con oltre 10 anni
              di esperienza nel trattamento di patologie muscolo-scheletriche. La mia missione è
              offrire cure personalizzate che uniscono competenza scientifica ed empatia umana.
            </p>
            <p className="text-base sm:text-lg mb-3 md:mb-4 text-muted-foreground leading-relaxed">
              Mi dedico costantemente all'aggiornamento professionale per garantire ai miei pazienti
              le tecniche più innovative ed efficaci. Ogni trattamento è studiato su misura per le
              esigenze specifiche della persona.
            </p>
            <p className="text-base sm:text-lg mb-6 md:mb-8 text-muted-foreground leading-relaxed">
              Credo fermamente in un approccio olistico che considera non solo il sintomo, ma la
              persona nella sua interezza, accompagnandola verso il recupero completo e duraturo.
            </p>
            <Link to="/chi-sono">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
                Scopri di più
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
