import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/connecti-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="CONNECTI Logo" className="h-12 w-12" />
            <span className="text-xl font-bold text-primary">CONNECTI</span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <button
                onClick={() => scrollToSection("hero")}
                className="text-foreground hover:text-primary transition-smooth font-medium"
              >
                Início
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-smooth font-medium"
              >
                Sobre
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground hover:text-primary transition-smooth font-medium"
              >
                Serviços
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-smooth font-medium"
              >
                Contato
              </button>
            </li>
            <li>
              <Button
                onClick={() => window.open("https://wa.me/5564999379293", "_blank")}
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Fale conosco
              </Button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground hover:text-primary transition-smooth"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="block w-full text-left text-foreground hover:text-primary transition-smooth font-medium py-2"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block w-full text-left text-foreground hover:text-primary transition-smooth font-medium py-2"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="block w-full text-left text-foreground hover:text-primary transition-smooth font-medium py-2"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block w-full text-left text-foreground hover:text-primary transition-smooth font-medium py-2"
                >
                  Contato
                </button>
              </li>
              <li>
                <Button
                  onClick={() => window.open("https://wa.me/5564999379293", "_blank")}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Fale conosco
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
