import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import anatomyBack from "@/assets/anatomy-back.jpg";
import anatomyKnee from "@/assets/anatomy-knee.jpg";
import anatomyShoulder from "@/assets/anatomy-shoulder.jpg";

const TreatmentsSection = () => {
  const treatments = [
    {
      image: anatomyBack,
      title: "Terapia Manuale Vertebrale",
      description: "Trattamenti specifici per problematiche della colonna vertebrale, cervicalgia, lombalgia e dorsalgia.",
    },
    {
      image: anatomyKnee,
      title: "Riabilitazione Articolare",
      description: "Recupero funzionale post-traumatico e post-operatorio per ginocchio, caviglia e anca.",
    },
    {
      image: anatomyShoulder,
      title: "Terapia della Spalla",
      description: "Trattamento di tendinopatie, capsulite adesiva e altre patologie della spalla.",
    },
  ];

  return (
    <section id="treatments" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <span className="w-2 h-2 bg-success-green rounded-full"></span>
              <span className="text-sm font-medium text-foreground">DI PIÙ SUI TRATTAMENTI</span>
            </div>
            <h2 className="text-4xl font-heading font-bold text-foreground">
              Trattamenti di successo
            </h2>
          </div>

          <Button 
            variant="outline" 
            className="hidden md:flex items-center gap-2 border-success-green text-success-green hover:bg-success-green/10"
          >
            Vedi tutti i trattamenti
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground">{treatment.title}</h3>
                <p className="text-foreground/70">{treatment.description}</p>
                <button className="text-success-green font-medium flex items-center gap-2 hover:gap-3 transition-all">
                  Scopri di più
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
