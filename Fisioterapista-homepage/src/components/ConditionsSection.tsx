import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import physioImage from "@/assets/hero-treatment-1.jpg";
import physioImage2 from "@/assets/hero-treatment-2.jpg";
import shoulderAnatomy from "@/assets/shoulder-anatomy.jpg";
import spineAnatomy from "@/assets/spine-anatomy.jpg";
import kneeAnatomy from "@/assets/knee-anatomy.jpg";

const conditions = [
  {
    id: 1,
    image: physioImage,
    title: "Mobilizzazione articolare precoce",
    description: "La mobilizzazione articolare precoce è una tecnica di terapia manuale che prevede movimenti articolari delicati e graduali, mirati a recuperare rapidamente la funzionalità articolare persa o compromessa dopo interventi, traumi o infiammazioni acute.",
    imagePosition: "top"
  },
  {
    id: 2,
    image: physioImage2,
    title: "Ginnastica posturale personalizzata",
    description: "La ginnastica posturale personalizzata è una metodica terapeutica che prevede esercizi specifici mirati alla correzione delle posture scorrette, migliorando l'equilibrio muscolare e articolare. Ogni programma è personalizzato secondo le esigenze individuali del paziente.",
    imagePosition: "bottom"
  },
  {
    id: 3,
    image: shoulderAnatomy,
    title: "Riabilitazione funzionale mirata",
    description: "La riabilitazione funzionale mirato è un percorso terapeutico basato su esercizi specifici, personalizzati e progressivi. Combina tecniche manuali ed esercizio terapeutico per ripristinare il movimento naturale, la forza e la coordinazione del corpo.",
    imagePosition: "top"
  },
  {
    id: 4,
    image: spineAnatomy,
    title: "Terapia manuale osteopatica",
    description: "Tecniche manuali avanzate per il trattamento di disfunzioni muscolo-scheletriche, migliorando la mobilità articolare e riducendo il dolore attraverso manipolazioni precise e sicure.",
    imagePosition: "bottom"
  },
  {
    id: 5,
    image: kneeAnatomy,
    title: "Recupero post-operatorio",
    description: "Programmi specifici di riabilitazione post-chirurgica per accelerare il recupero, ridurre il dolore e ripristinare la piena funzionalità dopo interventi ortopedici.",
    imagePosition: "top"
  },
   {
    id: 6,
    image: spineAnatomy,
    title: "Terapia clavicola rotta",
    description: "Tecniche manuali avanzate per il trattamento di disfunzioni muscolo-scheletriche, migliorando la mobilità articolare e riducendo il dolore attraverso manipolazioni precise e sicure.",
    imagePosition: "bottom"
  },
];

const ConditionsSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const ConditionCard = ({ condition }: { condition: typeof conditions[0] }) => (
    <div className={`space-y-8 flex flex-col border border-border rounded-2xl p-6 h-full ${
      condition.imagePosition === "bottom" ? "flex-col-reverse" : ""
    }`}>
      <img 
        src={condition.image}
        alt={condition.title}
        className="rounded-2xl w-full h-48 object-cover" 
      />
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-foreground">
          {condition.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {condition.description}
        </p>
      </div>
    </div>
  );

  return (
    <section id="conditions" className="w-full bg-background py-8 px-6">
      <div className="max-w-7xl mx-auto">
        {!isExpanded ? (
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {conditions.slice(0, 3).map((condition) => (
                <CarouselItem key={condition.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <ConditionCard condition={condition} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {conditions.map((condition) => (
              <ConditionCard key={condition.id} condition={condition} />
            ))}
          </div>
        )}
        
        <div className="flex justify-center mt-12">
          <Button 
            size="lg" 
            className="rounded-full px-8"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Mostra meno" : "Vedi tutte le patologie"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConditionsSection;
