const BookingSection = () => {
  return (
    <section id="booking" className="py-12 md:py-20 px-4 sm:px-6 bg-background">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6 px-2">
          Prenota il tuo appuntamento online
        </h2>
        <p className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto mb-8 md:mb-12 px-2">
          Scegli la data e l'orario che preferisci. La conferma è immediata.
        </p>

        <div className="max-w-4xl mx-auto bg-card border-2 border-border rounded-lg overflow-hidden">
          {/* Replace YOUR_SETMORE_ID with your actual Setmore booking page ID */}
          <iframe 
            src="https://booking.setmore.com/scheduleappointment/YOUR_SETMORE_ID" 
            width="100%" 
            height="800px" 
            frameBorder="0"
            className="w-full min-h-[500px] sm:min-h-[600px] md:min-h-[800px]"
            title="Prenota Appuntamento"
          />
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
