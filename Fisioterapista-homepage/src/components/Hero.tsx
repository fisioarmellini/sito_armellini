import heroImage from "@/assets/hero_image.png";
import { Instagram, Phone } from "lucide-react";

// Modificato per includere link cliccabili
const MarqueeBar = () => {
  const content = [
    { 
      icon: Instagram, 
      text: "Instagram: dottoressa.armellini",
      href: "https://www.instagram.com/dottoressa.armellini",
      target: "_blank"
    },
    { 
      icon: Phone, 
      text: "Contattami: +39 379 100 9600",
      href: "tel:+393791009600",
      target: "_self"
    },
  ];

  return (
    <div className="bg-primary text-primary-foreground overflow-hidden py-4 md:py-6">
      <div className="animate-marquee whitespace-nowrap flex gap-8 md:gap-12">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-12 md:gap-20 items-center">
            {content.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.target}
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs sm:text-sm font-medium transition-opacity hover:opacity-80"
              >
                <item.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                <span className="hidden sm:inline">{item.text}</span>
                <span className="sm:hidden">{item.text.split(':')[0]}</span>
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden min-h-screen md:min-h-0 flex flex-col md:block pb-16 md:pb-0">
      <div className="container mx-auto px-4 sm:px-6 text-center flex-1 flex flex-col justify-center md:block">
        <div className="mb-6 md:mb-12 pt-6 md:pt-10">
          <div className="inline-block bg-mint-light text-foreground px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 md:mb-6">
            Un approccio fisioterapico mirato, umano e scientifico.
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 px-2">
            Dott.ssa Francesca Armellini
          </h1>
        </div>

        {/* Decorative elements - hidden on mobile */}
        <div className="hidden md:block absolute top-20 left-10 w-20 h-20 border-4 border-mint-accent rounded-full opacity-50" />
        <div className="hidden md:block absolute bottom-20 right-10 w-16 h-16">
          <svg viewBox="0 0 100 100" className="text-mint-accent opacity-50">
            <path
              d="M 10 50 Q 30 30 50 50 T 90 50"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
          </svg>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center px-2 flex-1 md:flex-initial">
          <img
            src={heroImage}
            alt="Studio fisioterapico - Dott.ssa Francesca Armellini"
            className="w-full max-w-6xl rounded-2xl md:rounded-3xl object-cover h-[50vh] md:h-auto"
          />
        </div>
      </div>

      {/* MarqueeBar attached to bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <MarqueeBar />
      </div>
    </section>
  );
};

export default Hero;