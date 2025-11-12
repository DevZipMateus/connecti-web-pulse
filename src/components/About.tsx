import { Target, Eye, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    "Inovação: buscamos constantemente novas ideias e tecnologias que melhorem nossos produtos e serviços.",
    "Confiabilidade: atuamos com transparência, ética e comprometimento em cada entrega.",
    "Excelência: perseguimos a qualidade em todas as etapas dos nossos projetos.",
    "Colaboração: valorizamos o trabalho em equipe e as parcerias estratégicas.",
    "Foco no cliente: entendemos as necessidades de cada cliente para oferecer soluções personalizadas e eficazes.",
    "Sustentabilidade: promovemos o uso responsável da tecnologia para um futuro melhor.",
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 sm:mb-4">Sobre nós</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Conheça nossa missão, visão e os valores que nos guiam
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-smooth">
            <CardContent className="pt-8">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-primary rounded-full">
                  <Target size={32} className="text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-primary text-center mb-4">Missão</h3>
              <p className="text-foreground leading-relaxed text-center">
                Oferecer soluções tecnológicas inovadoras que conectem pessoas, negócios e oportunidades,
                impulsionando a transformação digital com eficiência, segurança e qualidade.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-smooth">
            <CardContent className="pt-8">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-primary rounded-full">
                  <Eye size={32} className="text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-primary text-center mb-4">Visão</h3>
              <p className="text-foreground leading-relaxed text-center">
                Ser referência nacional em inovação e excelência em tecnologia, reconhecida por transformar
                desafios em soluções inteligentes que geram valor e crescimento sustentável para nossos
                clientes e parceiros.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-smooth">
            <CardContent className="pt-8">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-primary rounded-full">
                  <Heart size={32} className="text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-primary text-center mb-4">Valores</h3>
              <ul className="space-y-2">
                {values.map((value, index) => (
                  <li key={index} className="text-foreground text-sm leading-relaxed">
                    • {value}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
