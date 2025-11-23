import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    // 1. Colore di sfondo FORZATO per essere identico allo screenshot
    <footer className="bg-[hsl(150_50%_98%)] py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Colonna 1: Logo e Testo */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              {/* 2. Logo (come da tua istruzione: src/public/logo_removed.png) */}
              <img 
                src="/logo_removed.png" 
                alt="Logo" 
                className="h-8 w-auto" 
              />
            </div>
            {/* 3. Testo aggiornato (preso dallo screenshot) */}
            <p className="text-muted-foreground mb-6 leading-relaxed">
              L'energia e la perseveranza conquistano tutte le cose.
            </p>
            {/* 4. Copyright RIMOSSO da qui */}
          </div>

          {/* Colonna 2: Info di Contatto */}
          <div>
            <h3 className="text-lg font-bold mb-6">Info di contatto</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5" />
                {/* 5. Email aggiornata */}
                <span>dottoressa.armellini@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5" />
                {/* 6. Telefono aggiornato */}
                <span>+39 379 100 9600</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                {/* 7. Indirizzo aggiornato */}
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Via+Giuseppe+Mercalli+11,+Roma+Parioli" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Via Giuseppe Mercalli 11, Roma Parioli
                </a>
              </li>
            </ul>
          </div>

          {/* Colonna 3: Social */}
          <div>
            <h3 className="text-lg font-bold mb-6">Seguimi:</h3>
            <div className="flex gap-4">
              {/* 8. Forma pulsanti (rounded-lg) e sfondo (bg-background) corretti */}
              <a
                href="#"
                className="w-12 h-12 bg-background rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-background rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-background rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-background rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* 9. Copyright (SPOSTATO QUI, fuori dalla griglia, come da screenshot) */}
        <div className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">NovaFlow © 2025</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;