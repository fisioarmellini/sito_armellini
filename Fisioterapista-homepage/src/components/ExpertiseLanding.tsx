import doctorImage from "@/assets/dottoressa.avif";

const ExpertiseLanding = () => {
  return (
    <section className="bg-secondary py-8 md:py-12 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Image */}
          <div className="relative max-w-md mx-auto w-full">
            <img
              src={doctorImage}
              alt="Dott.ssa Armellini"
              className="w-full h-auto max-h-80 sm:max-h-96 rounded-2xl md:rounded-3xl shadow-2xl object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary/10 rounded-full">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span className="text-xs sm:text-sm font-medium text-foreground">PROFESSIONALITÀ</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
              Esperienza e Competenza
            </h1>

            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
              Esperienze maturate in centri ospedalieri e clinici di alto livello mi hanno 
              permesso di consolidare un expertise completo in patologie, terapie manuali 
              e gestione post-operatoria.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseLanding;
