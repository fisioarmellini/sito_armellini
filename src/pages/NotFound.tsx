import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ErrorNotFound from "@/components/ErrorNotFound"; // Importa il nuovo componente

const NotFound = () => {
  // Il tuo codice per il logging dell'errore (l'ho mantenuto)
  const location = useLocation();
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <ErrorNotFound /> {/* Componente centrale della pagina 404 */}
      <Footer />
    </div>
  );
};

export default NotFound;