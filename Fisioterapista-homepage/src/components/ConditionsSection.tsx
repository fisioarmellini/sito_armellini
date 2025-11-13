import physioImage from "@/assets/hero-treatment-1.jpg";
// Potresti aver bisogno di 3 immagini diverse
// import physioImage1 from "@/assets/image1.jpg";
// import physioImage2 from "@/assets/image2.jpg";
// import physioImage3 from "@/assets/image3.jpg";

const ConditionsSection = () => {
  return (
    <section id="conditions" className="w-full bg-background py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Intestazione della sezione (SENZA FRECCE) */}
        <div className="flex justify-between items-start mb-12">
          <div>
            {/* TAG CORRETTO: Colori HSL scritti direttamente 
              per forzare lo sfondo verde menta e il testo verde scuro.
            */}
            <div className="inline-block bg-[hsl(150_30%_97%)] text-[hsl(150_25%_30%)] px-4 py-2 rounded-full text-sm font-medium mb-4">
              • PATOLOGIE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Le patologie curate
            </h2>
          </div>
          {/* Blocco frecce rimosso */}
        </div>

        {/* Griglia a 3 colonne statica, layout corretto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Colonna 1 - Scheda Unica (con bordo) */}
          <div className="space-y-8 flex flex-col border border-border rounded-2xl p-6">
            <img 
              src={physioImage} // Sostituisci con image1
              alt="Paziente e fisioterapista" 
              className="rounded-2xl w-full object-cover" 
            />
            {/* Blocco testo 1 */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Mobilizzazione articolare precoce
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                La mobilizzazione articolare precoce è una tecnica di terapia manuale che prevede movimenti articolari delicati e graduali, mirati a recuperare rapidamente la funzionalità articolare persa o compromessa dopo interventi, traumi o infiammazioni acute.
              </p>
            </div>
          </div>

          {/* Colonna 2 - Scheda Unica (con bordo) */}
          <div className="space-y-8 flex flex-col border border-border rounded-2xl p-6">
            {/* Blocco testo 2 */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Ginnastica posturale personalizzata
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                La ginnastica posturale personalizzata è una metodica terapeutica che prevede esercizi specifici mirati alla correzione delle posture scorrette, migliorando l’equilibrio muscolare e articolare. Ogni programma è personalizzato secondo le esigenze individuali del paziente.
              </p>
            </div>
            <img 
              src={physioImage} // Sostituisci con image2
              alt="Paziente e fisioterapista" 
              className="rounded-2xl w-full object-cover" 
            />
          </div>

          {/* Colonna 3 - Scheda Unica (con bordo) */}
          <div className="space-y-8 flex flex-col border border-border rounded-2xl p-6">
            <img 
              src={physioImage} // Sostituisci con image3
              alt="Paziente e fisioterapista" 
              className="rounded-2xl w-full object-cover" 
            />
            {/* Blocco testo 3 */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Riabilitazione funzionale mirata
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                La riabilitazione funzionale mirato è un percorso terapeutico basato su esercizi specifici, personalizzati e progressivi. Combina tecniche manuali ed esercizio terapeutico per ripristinare il movimento naturale, la forza e la coordinazione del corpo, consentendo un recupero completo e duraturо.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConditionsSection;