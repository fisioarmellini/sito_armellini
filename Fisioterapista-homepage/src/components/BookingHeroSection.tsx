const BookingHeroSection = () => {
  return (
    <section className="bg-accent py-20 px-6 relative overflow-hidden">
      {/* Decorative graphics */}
      <div className="absolute top-10 right-20 opacity-20">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path
            d="M30 10C30 10 20 20 20 30C20 40 30 50 30 50C30 50 40 40 40 30C40 20 30 10 30 10Z"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary"
          />
          <circle cx="30" cy="30" r="5" fill="currentColor" className="text-primary" />
        </svg>
      </div>

      <div className="absolute bottom-10 left-20 opacity-20">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          <path
            d="M25 5 L45 25 L25 45 L5 25 Z"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary"
          />
        </svg>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
          Prenota subito
        </h1>
        <p className="text-lg text-foreground max-w-2xl mx-auto">
          La seduta fisioterapica è un momento dedicato al tuo benessere. 
          Prenota ora il tuo appuntamento e inizia il percorso verso una vita senza dolore.
        </p>
      </div>
    </section>
  );
};

export default BookingHeroSection;
