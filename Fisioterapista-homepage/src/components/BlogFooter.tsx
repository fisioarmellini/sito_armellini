import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const BlogFooter = () => {
  return (
    <footer className="bg-accent border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Mission */}
          <div>
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-foreground">PhysioLogo</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Dedicati a migliorare la qualità della vita attraverso cure fisioterapiche professionali e personalizzate.
            </p>
            <p className="text-sm text-muted-foreground">
              © 2025 PhysioLogo. Tutti i diritti riservati.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">Info di contatto</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <a href="mailto:info@physio.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    info@physio.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Telefono</p>
                  <a href="tel:+390123456789" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    +39 012 345 6789
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Indirizzo</p>
                  <p className="text-sm text-muted-foreground">
                    Via della Salute, 123<br />
                    00100 Roma, Italia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">Seguimi:</h3>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-12 h-12 rounded-lg bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-lg bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-lg bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-lg bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BlogFooter;
