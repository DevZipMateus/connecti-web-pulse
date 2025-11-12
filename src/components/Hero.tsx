import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
            CONNECTI SOLUCOES EM TECNOLOGIA
          </h1>
          <h2 className="text-2xl md:text-3xl text-primary-foreground/90 mb-8 animate-fade-in font-light">
            Conectando tecnologia e resultados
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 animate-fade-in leading-relaxed">
            Oferecemos soluções tecnológicas inovadoras que conectam pessoas, negócios e oportunidades,
            impulsionando a transformação digital com eficiência, segurança e qualidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6"
            >
              Entre em contato
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              onClick={() => window.open("https://wa.me/5564999379293", "_blank")}
              size="lg"
              variant="outline"
              className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/60 hover:bg-primary-foreground/20 hover:text-primary-foreground hover:border-primary-foreground text-lg px-8 py-6"
            >
              Fale no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
