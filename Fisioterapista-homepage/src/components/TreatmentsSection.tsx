import { Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import anatomySpine from "@/assets/anatomy-spine.jpg";
import anatomyKnee from "@/assets/anatomy-knee.jpg";
import anatomyShoulder from "@/assets/anatomy-shoulder.jpg";

// Dati aggiornati ESATTAMENTE come da screenshot
const treatments = [
  {
    title: "Riabilitazione funzionale mirata",
    image: anatomyShoulder,
    benefits: [
      "Dolori muscolo-articolari cronici o ricorrenti",
      "Quando la funzione fisica del paziente risulta compromessa, ridotta o alterata, rendendo difficili movimenti quotidiani, attività sportive o lavorative.",
      "Recupero completo della funzione, autonomia nel movimento, ritorno rapido alla vita attiva e prevenzione di ricadute.",
    ],
    highlighted: false,
  },
  {
    title: "Ginnastica posturale personalizzata",
    image: anatomySpine,
    benefits: [
      "Squilibri posturali legati a stile di vita, lavoro o sport",
      "Quando il paziente presenta dolore persistente o limitazione funzionale dovuti a cattive posture, tensioni muscolari prolungate o problemi cronici della colonna vertebrale.",
      "Miglioramento duraturo della postura, eliminazione del dolore cronico, maggiore benessere generale e prevenzione delle recidive.",
    ],
    highlighted: false,
  },
  {
    title: "Mobilizzazione articolare precoce",
    image: anatomyKnee,
    benefits: [
      "Rigidità articolare post-intervento o post-trauma",
      "Quando si manifestano rigidità e dolori articolari importanti che limitano fortemente i movimenti del paziente.",
      "Recupero veloce della mobilità, riduzione immediata del dolore e miglioramento evidente della qualità di vita.",
    ],
    highlighted: false,
  },
];

const TreatmentsSection = () => {
  return (
    <section id="treatments" className="w-full bg-background py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-12">
          {/* Titolo e Sottotitolo */}
          <div className="mb-6 md:mb-0">
            <div className="inline-block bg-mint-light text-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
              • TRATTAMENTI
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              I miei trattamenti di successo
            </h2>
          </div>
          
          {/* Pulsante "Vedi tutti" */}
          <Link to="/trattamenti#treatments">
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-card hover:text-primary flex-shrink-0"
            >
              Vedi tutti i trattamenti
            </Button>
          </Link>
        </div>

        {/* Griglia Card Trattamenti */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 transition-all ${
                treatment.highlighted
                  ? "bg-card" // Sfondo verde chiaro per la card evidenziata
                  : "bg-background border border-border" // Sfondo bianco e bordo per le altre
              }`}
            >
              {/* Immagine Card */}
              <div className="rounded-2xl overflow-hidden mb-6">
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-48 object-cover" // Assicura che l'immagine copra lo spazio
                />
              </div>
              
              {/* Titolo Card */}
              <h3 className="text-2xl font-bold mb-6 text-foreground">{treatment.title}</h3>
              
              {/* Elenco Benefici */}
              <ul className="space-y-4 mb-8">
                {treatment.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground text-sm leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              {/* Link "Scopri di più" con icona */}
              <a href="#" className="text-primary font-medium hover:underline flex items-center gap-1.5">
                <span>Scopri di più</span>
                <Info className="w-4 h-4 text-muted-foreground" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;