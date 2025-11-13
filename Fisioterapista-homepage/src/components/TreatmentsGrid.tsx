import TreatmentCard from "./TreatmentCard";
import { Button } from "@/components/ui/button";
import shoulderAnatomy from "@/assets/shoulder-anatomy.jpg";
import spineAnatomy from "@/assets/spine-anatomy.jpg";
import kneeAnatomy from "@/assets/knee-anatomy.jpg";
import manualTherapy from "@/assets/manual-therapy.jpg";
import rehabilitation from "@/assets/rehabilitation.jpg";
import sportsTherapy from "@/assets/sports-therapy.jpg";

const treatments = [
  {
    image: shoulderAnatomy,
    title: "Riabilitazione Spalla",
    benefits: [
      "Riduzione del dolore articolare",
      "Miglioramento della mobilità",
      "Recupero post-operatorio",
      "Prevenzione delle recidive"
    ]
  },
  {
    image: spineAnatomy,
    title: "Terapia della Schiena",
    benefits: [
      "Alleviamento del mal di schiena",
      "Correzione della postura",
      "Rafforzamento muscolare",
      "Tecniche manuali avanzate"
    ]
  },
  {
    image: kneeAnatomy,
    title: "Riabilitazione Ginocchio",
    benefits: [
      "Recupero da lesioni legamentose",
      "Trattamento dell'artrosi",
      "Miglioramento della stabilità",
      "Programmi personalizzati"
    ]
  },
  {
    image: manualTherapy,
    title: "Terapia Manuale",
    benefits: [
      "Tecniche osteopatiche",
      "Mobilizzazione articolare",
      "Trattamento dei tessuti molli",
      "Approccio olistico"
    ]
  },
  {
    image: rehabilitation,
    title: "Riabilitazione Funzionale",
    benefits: [
      "Esercizi terapeutici mirati",
      "Recupero della forza",
      "Programmi progressivi",
      "Monitoraggio continuo"
    ]
  },
  {
    image: sportsTherapy,
    title: "Fisioterapia Sportiva",
    benefits: [
      "Prevenzione infortuni",
      "Recupero atletico rapido",
      "Ottimizzazione performance",
      "Supporto per atleti professionisti"
    ]
  }
];

const TreatmentsGrid = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {treatments.map((treatment, index) => (
            <TreatmentCard key={index} {...treatment} />
          ))}
        </div>
        <div className="flex justify-center">
          <Button size="lg" className="rounded-full px-8 font-semibold">
            Vedi tutti i trattamenti
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsGrid;
