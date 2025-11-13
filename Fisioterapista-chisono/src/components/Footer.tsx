import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-secondary py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo and mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2C10 2 8 4 8 7C8 10 10 12 10 12C10 12 12 10 12 7C12 4 10 2 10 2Z"
                    fill="white"
                  />
                  <path
                    d="M10 12C10 12 8 14 8 17C8 18 9 20 10 20C11 20 12 18 12 17C12 14 10 12 10 12Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <p className="text-foreground/70 max-w-xs">
              Professionalità e competenza al servizio del tuo benessere. 
              La fisioterapia moderna per migliorare la tua qualità di vita.
            </p>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Info di contatto</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-foreground/70">
                <Mail className="w-5 h-5 text-success-green flex-shrink-0" />
                <a href="mailto:info@armellini.it" className="hover:text-foreground transition-colors">
                  info@armellini.it
                </a>
              </div>
              <div className="flex items-center gap-3 text-foreground/70">
                <Phone className="w-5 h-5 text-success-green flex-shrink-0" />
                <a href="tel:+393471234567" className="hover:text-foreground transition-colors">
                  +39 347 123 4567
                </a>
              </div>
              <div className="flex items-start gap-3 text-foreground/70">
                <MapPin className="w-5 h-5 text-success-green flex-shrink-0 mt-1" />
                <address className="not-italic">
                  Via Roma 123<br />
                  38100 Trento, Italia
                </address>
              </div>
            </div>
          </div>

          {/* Social media */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Seguimi:</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-background rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-foreground/60">
          <p>© 2024 Dott.ssa Armellini. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
