import { Star } from "lucide-react";
import doctorHero from "@/assets/doctor-portrait.jpg";
import testimonialPatient from "@/assets/profile-simone.jpg";

const HeroSection = () => {
  return (
    <section className="bg-secondary py-20 pt-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <span className="w-2 h-2 bg-success-green rounded-full"></span>
              <span className="text-sm font-medium text-foreground">MI PRESENTO</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-heading font-bold text-foreground leading-tight">
              Dott.ssa Armellini
            </h1>

            <p className="text-lg text-foreground/80 max-w-lg">
              Un approccio fisioterapico moderno e personalizzato per il tuo benessere. 
              Professionista certificata con oltre 9 anni di esperienza nel trattamento 
              di patologie muscolo-scheletriche.
            </p>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src={doctorHero}
                alt="Dott.ssa Armellini"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>

            {/* Floating testimonial card */}
            <div className="absolute -bottom-8 -left-8 bg-card rounded-2xl shadow-xl p-6 max-w-xs z-20 hidden md:block">
              <div className="flex items-start gap-4">
                <img
                  src={testimonialPatient}
                  alt="Andrea Spagnolli"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="text-sm text-foreground/80 mb-2">
                    "Professionalità e competenza eccezionali. Risultati visibili già dalle prime sedute."
                  </p>
                  <p className="text-sm font-semibold text-foreground">Andrea Spagnolli</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-success-green text-success-green" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating update card */}
            <div className="absolute -top-8 -right-8 bg-card rounded-2xl shadow-xl p-6 max-w-xs z-20 hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-success-green/10 rounded-full flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      fill="currentColor"
                      className="text-success-green"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">In Continuo</p>
                  <p className="text-sm font-semibold text-foreground">aggiornamento</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
