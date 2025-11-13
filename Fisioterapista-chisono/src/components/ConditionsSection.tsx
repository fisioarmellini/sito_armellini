import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const ConditionsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const conditions = [
    {
      title: "Lombalgia e Sciatalgia",
      description: "Trattamento del dolore lombare e della sciatica con tecniche manuali e terapia del movimento.",
      type: "card",
    },
    {
      title: "Cervicalgia",
      description: "Approccio integrato per il dolore cervicale, includendo terapia manuale e esercizi specifici.",
      type: "card",
    },
    {
      title: "Tendinopatie",
      description: "Riabilitazione delle tendinopatie di spalla, gomito, polso, ginocchio e caviglia.",
      type: "card",
    },
    {
      title: "Disturbi Posturali",
      description: "Valutazione e correzione di squilibri posturali che causano dolore cronico.",
      type: "card",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % conditions.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + conditions.length) % conditions.length);
  };

  return (
    <section id="conditions" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <span className="w-2 h-2 bg-success-green rounded-full"></span>
              <span className="text-sm font-medium text-foreground">PATOLOGIE</span>
            </div>
            <h2 className="text-4xl font-heading font-bold text-foreground">
              Le patologie curate
            </h2>
          </div>

          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border-2 border-border hover:border-primary flex items-center justify-center transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border-2 border-border hover:border-primary flex items-center justify-center transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {conditions.map((condition, index) => (
              <div
                key={index}
                className="min-w-full px-4"
              >
                <div className="bg-card rounded-3xl p-8 shadow-lg max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {condition.title}
                  </h3>
                  <p className="text-foreground/70 text-lg">{condition.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {conditions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === index ? "bg-primary w-8" : "bg-border"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConditionsSection;
