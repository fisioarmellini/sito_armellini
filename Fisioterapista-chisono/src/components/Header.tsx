import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
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

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Chi sono
          </button>
          <button
            onClick={() => scrollToSection("treatments")}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Trattamenti
          </button>
          <button
            onClick={() => scrollToSection("conditions")}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Patologie curate
          </button>
          <button
            onClick={() => scrollToSection("footer")}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Blogs
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-secondary transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <Button 
            onClick={() => scrollToSection("cta")}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Prenota ora
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
