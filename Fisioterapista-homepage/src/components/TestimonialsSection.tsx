import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react"; // 1. Import useEffect

const testimonials = [
  {
    name: "Maria Rossi",
    text: "La Dott.ssa Armellini è stata fondamentale per il mio recupero. Professionalità, competenza e un'attenzione umana che fa la differenza. Dopo mesi di dolore alla schiena, finalmente ho ritrovato il benessere.",
    rating: 5,
    //image: "//esempio.png", //se voglio l'immagine inserisco questo per ogni recensione 
  },
  {
    name: "Giovanni Bianchi",
    text: "Esperienza eccellente. Trattamenti mirati ed efficaci che mi hanno permesso di tornare a praticare sport. Consiglio vivamente la Dott.ssa Armellini a chiunque cerchi un professionista serio e preparato.",
    rating: 5,
  },
  {
    name: "Laura Verdi",
    text: "Un'approccio olistico che considera la persona nella sua interezza. La Dott.ssa Armellini non si limita a trattare il sintomo, ma cerca di comprendere le cause profonde del problema. Sono molto soddisfatta.",
    rating: 5,
  },
  {
    name: "Maria Rossi", 
    text: "La Dott.ssa Armellini è stata fondamentale per il mio recupero. Professionalità, competenza e un'attenzione umana che fa la differenza. Dopo mesi di dolore alla schiena, finalmente ho ritrovato il benessere.",
    rating: 5,
  },
  {
    name: "Giovanni Bianchi",
    text: "Esperienza eccellente. Trattamenti mirati ed efficaci che mi hanno permesso di tornare a praticare sport. Consiglio vivamente la Dott.ssa Armellini a chiunque cerchi un professionista serio e preparato.",
    rating: 5,
  },
  {
    name: "Laura Verdi",
    text: "Un'approccio olistico che considera la persona nella sua interezza. La Dott.ssa Armellini non si limita a trattare il sintomo, ma cerca di comprendere le cause profonde del problema. Sono molto soddisfatta.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  //scroll automatico
  useEffect(() => {
    
    const intervalId = setInterval(() => {
      next();
    }, 2000); 

    
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[currentIndex];


  const visibleCount = 3;
  
  const maxStartIndex = Math.max(0, testimonials.length - visibleCount);
  
  const tempStartIndex = Math.max(0, currentIndex - 1);
  
  const startIndex = Math.min(tempStartIndex, maxStartIndex);

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 md:mb-12 gap-4">
          <div>
            <div className="inline-block bg-mint-light text-foreground px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-3 md:mb-4">
              • TESTIMONIAL
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Riscontri dei miei pazienti</h2>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full h-10 w-10 sm:h-12 sm:w-12"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full h-10 w-10 sm:h-12 sm:w-12"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-mint-light rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 mb-6 md:mb-8">
            <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed">"{current.text}"</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 md:gap-6">
            {testimonials.slice(startIndex, startIndex + visibleCount).map((testimonial, i) => {
              const originalIndex = startIndex + i;
              return (
                <button
                  key={originalIndex}
                  onClick={() => setCurrentIndex(originalIndex)}
                  className={`p-4 sm:p-6 rounded-xl md:rounded-2xl transition-all w-full sm:w-auto ${
                    originalIndex === currentIndex 
                      ? "bg-mint-light border-2 border-primary"
                      : "bg-background border-2 border-border hover:bg-mint-light"
                  }`}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-sm sm:text-base">{testimonial.name}</div>
                      <div className="flex gap-1 mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;