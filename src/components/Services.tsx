import { Monitor, Network, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Equipamentos de informática",
      description: "Venda e instalação de equipamentos de informática em geral, com foco em qualidade e desempenho.",
    },
    {
      icon: Network,
      title: "Infraestrutura de rede",
      description: "Venda e instalação de produtos de infraestrutura de rede para garantir conectividade eficiente.",
    },
    {
      icon: Shield,
      title: "Segurança eletrônica",
      description: "Venda e instalação de equipamentos de segurança eletrônica para proteção do seu negócio.",
    },
    {
      icon: Zap,
      title: "Produtos de energia",
      description: "Venda e instalação de produtos de energia para garantir estabilidade e continuidade operacional.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Nossos serviços</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções tecnológicas completas para o seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="border-2 border-border hover:border-accent transition-smooth hover:shadow-lg group"
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gradient-accent rounded-full group-hover:scale-110 transition-smooth">
                      <Icon size={32} className="text-accent-foreground" />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-center text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground text-center leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
