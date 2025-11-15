import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import shoulderAnatomy from "@/assets/shoulder-anatomy.jpg";
import spineAnatomy from "@/assets/spine-anatomy.jpg";
import kneeAnatomy from "@/assets/knee-anatomy.jpg";
import manualTherapy from "@/assets/manual-therapy.jpg";
import rehabilitation from "@/assets/rehabilitation.jpg";
import sportsTherapy from "@/assets/sports-therapy.jpg";

const treatments = [
  {
    image: manualTherapy,
    title: "Terapia manuale ortopedica (OMT / COMT)",
    benefits: [
      "Beneficio: riduzione del dolore e rilascio dei tessuti",
      "Approccio: tecnica dedicata e personalizzata",
      "Esito: ripristino armonia e movimento"
    ]
  },
  {
    image: shoulderAnatomy,
    title: "Mobilizzazione articolare e vertebrale",
    benefits: [
      "Beneficio: riduzione del dolore e rilascio dei tessuti",
      "Approccio: tecnica dedicata e personalizzata",
      "Esito: ripristino armonia e movimento"
    ]
  },
  {
    image: spineAnatomy,
    title: "Tecniche HVLA (High Velocity Low Amplitude)",
    benefits: [
      "Beneficio: riduzione del dolore e rilascio dei tessuti",
      "Approccio: tecnica dedicata e personalizzata",
      "Esito: ripristino armonia e movimento"
    ]
  },
  {
    image: kneeAnatomy,
    title: "Manipolazione fasciale (metodo Stecco)",
    benefits: [
      "Beneficio: riduzione del dolore e rilascio dei tessuti",
      "Approccio: tecnica dedicata e personalizzata",
      "Esito: ripristino armonia e movimento"
    ]
  },
  {
    image: rehabilitation,
    title: "Massoterapia decontratturante e distensiva",
    benefits: [
      "Beneficio: riduzione del dolore e rilascio dei tessuti",
      "Approccio: tecnica dedicata e personalizzata",
      "Esito: ripristino armonia e movimento"
    ]
  },
  {
    image: sportsTherapy,
    title: "Massaggio sportivo",
    benefits: [
      "Beneficio: riduzione del dolore e rilascio dei tessuti",
      "Approccio: tecnica dedicata e personalizzata",
      "Esito: ripristino armonia e movimento"
    ]
  },
  {
    image: manualTherapy,
    title: "Esercizio terapeutico personalizzato",
    benefits: [
      "Beneficio: riduzione del dolore e rilascio dei tessuti",
      "Approccio: tecnica dedicata e personalizzata",
      "Esito: ripristino armonia e movimento"
    ]
  },
  {
    image: shoulderAnatomy,
    title: "Rieducazione posturale",
    benefits: [
      "Beneficio: riduzione del dolore e rilascio dei tessuti",
      "Approccio: tecnica dedicata e personalizzata",
      "Esito: ripristino armonia e movimento"
    ]
  },
  {
    image: spineAnatomy,
    title: "Rieducazione motoria e propriocettiva",
    benefits: [
      "Beneficio: riduzione del dolore e rilascio dei tessuti",
      "Approccio: tecnica dedicata e personalizzata",
      "Esito: ripristino armonia e movimento"
    ]
  },
  {
    image: kneeAnatomy,
    title: "Neurac Redcord",
    benefits: [
      "Beneficio: riduzione del dolore e rilascio dei tessuti",
      "Approccio: tecnica dedicata e personalizzata",
      "Esito: ripristino armonia e movimento"
    ]
  },
  {
    image: rehabilitation,
    title: "Rinforzo muscolare e stabilizzazione articolare",
    benefits: [
      "Beneficio: riduzione del dolore e rilascio dei tessuti",
      "Approccio: tecnica dedicata e personalizzata",
      "Esito: ripristino armonia e movimento"
    ]
  },
  {
    image: sportsTherapy,
    title: "Trattamenti dermatofunzionali pre e post operatori",
    benefits: [
      "Beneficio: riduzione del dolore e rilascio dei tessuti",
      "Approccio: tecnica dedicata e personalizzata",
      "Esito: ripristino armonia e movimento"
    ]
  },
  {
    image: manualTherapy,
    title: "Drenaggio linfatico e modellante (Metodo Renata França)",
    benefits: [
      "Beneficio: riduzione del dolore e rilascio dei tessuti",
      "Approccio: tecnica dedicata e personalizzata",
      "Esito: ripristino armonia e movimento"
    ]
  },
  {
    image: shoulderAnatomy,
    title: "Riduzione edemi e fibrosi post-chirurgica",
    benefits: [
      "Beneficio: riduzione del dolore e rilascio dei tessuti",
      "Approccio: tecnica dedicata e personalizzata",
      "Esito: ripristino armonia e movimento"
    ]
  },
  {
    image: spineAnatomy,
    title: "Trattamento cicatrici e aderenze",
    benefits: [
      "Beneficio: riduzione del dolore e rilascio dei tessuti",
      "Approccio: tecnica dedicata e personalizzata",
      "Esito: ripristino armonia e movimento"
    ]
  },
  {
    image: kneeAnatomy,
    title: "Tecarterapia",
    benefits: [
      "Beneficio: riduzione del dolore e rilascio dei tessuti",
      "Approccio: tecnica dedicata e personalizzata",
      "Esito: ripristino armonia e movimento"
    ]
  },
  {
    image: rehabilitation,
    title: "Ultrasuoni",
    benefits: [
      "Beneficio: riduzione del dolore e rilascio dei tessuti",
      "Approccio: tecnica dedicata e personalizzata",
      "Esito: ripristino armonia e movimento"
    ]
  },
  {
    image: sportsTherapy,
    title: "Elettroterapia antalgica",
    benefits: [
      "Beneficio: riduzione del dolore e rilascio dei tessuti",
      "Approccio: tecnica dedicata e personalizzata",
      "Esito: ripristino armonia e movimento"
    ]
  },
  {
    image: manualTherapy,
    title: "Laserterapia",
    benefits: [
      "Beneficio: riduzione del dolore e rilascio dei tessuti",
      "Approccio: tecnica dedicata e personalizzata",
      "Esito: ripristino armonia e movimento"
    ]
  },
  {
    image: shoulderAnatomy,
    title: "Kinesio taping / Taping elastico",
    benefits: [
      "Beneficio: riduzione del dolore e rilascio dei tessuti",
      "Approccio: tecnica dedicata e personalizzata",
      "Esito: ripristino armonia e movimento"
    ]
  },
  {
    image: spineAnatomy,
    title: "Neuromuscular reeducation",
    benefits: [
      "Beneficio: riduzione del dolore e rilascio dei tessuti",
      "Approccio: tecnica dedicata e personalizzata",
      "Esito: ripristino armonia e movimento"
    ]
  },
  {
    image: kneeAnatomy,
    title: "Riabilitazione post chirurgia ortopedica",
    benefits: [
      "Beneficio: riduzione del dolore e rilascio dei tessuti",
      "Approccio: tecnica dedicata e personalizzata",
      "Esito: ripristino armonia e movimento"
    ]
  },
  {
    image: rehabilitation,
    title: "Recupero funzionale dopo protesi, artroscopie e fratture",
    benefits: [
      "Beneficio: riduzione del dolore e rilascio dei tessuti",
      "Approccio: tecnica dedicata e personalizzata",
      "Esito: ripristino armonia e movimento"
    ]
  }
];

const TreatmentsGrid = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayedTreatments = isExpanded ? treatments : treatments.slice(0, 6);

  return (
    <section id="treatments" className="py-8 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedTreatments.map((treatment, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden rounded-2xl border-border">
              <CardHeader className="p-0">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                  {treatment.title}
                </h3>
                <ul className="space-y-3 mb-6">
                  {treatment.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button 
            size="lg" 
            className="rounded-full px-8"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Mostra meno" : "Vedi tutti i trattamenti"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsGrid;
