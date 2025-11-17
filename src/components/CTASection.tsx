import { Button } from "@/components/ui/button";
import doctorCta from "@/assets/dottoressa.avif"; // L'immagine della dottoressa
import greenArcBackground from "@/assets/sfondoCTA.avif"; // L'immagine dell'arco che mi hai dato

const CTASection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Layout a 5 colonne per un controllo più preciso (2 per il testo, 3 per l'immagine) */}
        <div className="grid md:grid-cols-5 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Colonna Testo (occupa 2 parti) */}
          <div className="md:col-span-2">
            <div 
              className="inline-block bg-[hsl(150_30%_97%)] text-[hsl(150_25%_30%)] px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              • PRENOTA UN APPUNTAMENTO
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Prenota subito per il tuo benessere
            </h2>
            {/* Testo aggiornato come da screenshot */}
            <p className="text-base text-muted-foreground mb-8 leading-relaxed">
              Prenota ora la tua valutazione personalizzata: scegli giorno e ora direttamente da qui, ricevi conferma immediata e inizia il tuo percorso verso la risoluzione dei tuoi dolori.
            </p>
            {/* Pulsante aggiornato (forma e stile) */}
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-6 py-3 rounded-full"
            >
              Prenota ora!
            </Button>
          </div>

          {/* Colonna Immagine (occupa 3 parti) */}
          <div className="relative md:col-span-3 h-[500px] flex justify-center items-end">
            
            {/* Immagine dell'arco (posizionata dietro e più grande) */}
            <img
              src={greenArcBackground}
              alt="Sfondo decorativo"
              className="absolute w-[600px] h-[600px] object-cover rounded-full bottom-0"
              style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} // Centra l'arco
            />
            
            {/* Immagine della dottoressa (posizionata sopra l'arco) */}
            <img
              src={doctorCta}
              alt="Dott.ssa"
              className="relative z-10 w-full max-w-sm h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;