import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import success1 from "@/assets/success-1.jpg";
import success2 from "@/assets/success-2.jpg";
import success3 from "@/assets/success-3.jpg";

const successCases = [
  {
    image: success1,
    title: "Miglioramento della Mobilità",
    description: "Recupero completo dopo intervento alla spalla"
  },
  {
    image: success2,
    title: "Ritorno all'Attività Sportiva",
    description: "Atleta professionista tornata alle competizioni"
  },
  {
    image: success3,
    title: "Gestione del Dolore Cronico",
    description: "Eliminazione del dolore lombare persistente"
  }
];

const SuccessCarousel = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground text-center mb-12">
          I miei casi di successo più recenti
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {successCases.map((caseItem, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden rounded-2xl border-0 shadow-lg group">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={caseItem.image}
                      alt={caseItem.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex flex-col justify-end p-6">
                      <h3 className="text-white text-2xl font-heading font-bold mb-2">
                        {caseItem.title}
                      </h3>
                      <p className="text-white/90 text-sm">
                        {caseItem.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default SuccessCarousel;
