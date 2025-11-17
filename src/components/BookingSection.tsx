const BookingSection = () => {
  return (
    <section id="booking" className="py-20 px-6 bg-background">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Prenota il tuo appuntamento online
        </h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-12">
          Scegli la data e l'orario che preferisci. La conferma è immediata.
        </p>

        <div className="max-w-4xl mx-auto bg-card border-2 border-border rounded-lg p-8 min-h-[600px] flex items-center justify-center">
          <div className="text-center">
            <p className="text-muted-foreground text-lg mb-4">
              Il calendario Setmore verrà integrato qui
            </p>
            <p className="text-sm text-muted-foreground">
              Sostituisci questo contenuto con il codice di integrazione Setmore
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
