import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/connecti-logo.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo e Descrição */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="CONNECTI Logo" className="h-12 w-12" />
              <span className="text-xl font-bold">CONNECTI</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Conectando tecnologia e resultados para transformar seu negócio.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="text-lg font-bold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <a
                  href="tel:+5564999379293"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm"
                >
                  (64) 99937-9293
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <a
                  href="mailto:ten1233819@hotmail.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm break-all"
                >
                  ten1233819@hotmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  Rua Inácio José de Melo, 569<br />Santa Terezinha
                </span>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-lg font-bold mb-4">Redes sociais</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/connec_ti/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary-foreground/10 rounded-full hover:bg-accent transition-smooth group"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-primary-foreground group-hover:text-accent-foreground" />
              </a>
              <a
                href="https://www.facebook.com/solucoesconnecti"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary-foreground/10 rounded-full hover:bg-accent transition-smooth group"
                aria-label="Facebook"
              >
                <Facebook size={20} className="text-primary-foreground group-hover:text-accent-foreground" />
              </a>
            </div>
            <p className="text-primary-foreground/80 text-sm mt-4 leading-relaxed">
              Segunda a sexta: 08:00 às 22:00<br />
              Sábado: 08:00 às 12:00
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} CONNECTI SOLUCOES EM TECNOLOGIA. Todos os direitos reservados.
            </p>
            <p className="text-primary-foreground/60 text-sm text-center md:text-right">
              CNPJ: 47.308.529/0001-30
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
