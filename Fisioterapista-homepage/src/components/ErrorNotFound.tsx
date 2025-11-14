import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
// Import corretti: Lung e Ribbon non esistono in lucide-react
import { Plus, Stethoscope, HeartPulse } from "lucide-react"; 

const ErrorNotFound = () => {
  return (
    <main className="flex-grow flex items-center justify-center text-center py-32 px-6 relative overflow-hidden">
      
      {/* --- Elementi Decorativi (con icone valide) --- */}
      {/* Icona Croce */}
      <Plus 
        className="w-24 h-24 text-primary/10 absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2" 
        strokeWidth={1} 
      />
      {/* Icona Stetoscopio (sostituisce Polmoni) */}
      <Stethoscope 
        className="w-32 h-32 text-primary/10 absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2" 
        strokeWidth={1} 
      />
      {/* Icona Battito (sostituisce Nastro) */}
      <HeartPulse 
        className="w-28 h-28 text-primary/10 absolute bottom-1/4 left-1/3 transform -translate-x-1/2 translate-y-1/2" 
        strokeWidth={1} 
      />

      {/* --- Contenuto Principale --- */}
      <div className="relative z-10">
        <h1 className="text-8xl md:text-9xl font-bold text-primary mb-4">
          404
        </h1>
        <p className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
          Scusa, pagina non trovata!
        </p>
        <p className="text-lg text-muted-foreground mb-12">
          La pagina che stai cercando non esiste o è stata spostata.
        </p>
        
        {/* Pulsante (verde scuro, arrotondato) */}
        <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base">
          <Link to="/">
            Torna alla Home.
          </Link>
        </Button>
      </div>
    </main>
  );
};

export default ErrorNotFound;