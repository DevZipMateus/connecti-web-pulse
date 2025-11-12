import { Monitor, Network, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import computersImage from "@/assets/service-computers.jpg";
import networkImage from "@/assets/service-network.jpg";
import securityImage from "@/assets/service-security.jpg";
import energyImage from "@/assets/service-energy.jpg";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Equipamentos de informática",
      description: "Venda e instalação de equipamentos de informática em geral, com foco em qualidade e desempenho.",
      image: computersImage,
    },
    {
      icon: Network,
      title: "Infraestrutura de rede",
      description: "Venda e instalação de produtos de infraestrutura de rede para garantir conectividade eficiente.",
      image: networkImage,
    },
    {
      icon: Shield,
      title: "Segurança eletrônica",
      description: "Venda e instalação de equipamentos de segurança eletrônica para proteção do seu negócio.",
      image: securityImage,
    },
    {
      icon: Zap,
      title: "Produtos de energia",
      description: "Venda e instalação de produtos de energia para garantir estabilidade e continuidade operacional.",
      image: energyImage,
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 sm:mb-4">Nossos serviços</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Soluções tecnológicas completas para o seu negócio
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="border-2 border-border hover:border-accent transition-smooth hover:shadow-lg group overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <div className="p-3 bg-accent rounded-full">
                      <Icon size={28} className="text-accent-foreground" />
                    </div>
                  </div>
                </div>
                <CardHeader>
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
