import { Mail, Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 sm:mb-4">Entre em contato</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Estamos prontos para atender você e transformar suas ideias em realidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          <Card className="border-2 border-border">
            <CardContent className="pt-8 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-primary rounded-full flex-shrink-0">
                  <Phone size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">Telefone</h3>
                  <a
                    href="tel:+5564999379293"
                    className="text-foreground hover:text-primary transition-smooth"
                  >
                    (64) 99937-9293
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-primary rounded-full flex-shrink-0">
                  <Mail size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">E-mail</h3>
                  <a
                    href="mailto:ten1233819@hotmail.com"
                    className="text-foreground hover:text-primary transition-smooth break-all"
                  >
                    ten1233819@hotmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-primary rounded-full flex-shrink-0">
                  <MapPin size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">Endereço</h3>
                  <p className="text-foreground">Rua Inácio José de Melo, 569</p>
                  <p className="text-foreground">Santa Terezinha</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-primary rounded-full flex-shrink-0">
                  <Clock size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">Horário de funcionamento</h3>
                  <p className="text-foreground">Segunda a sexta: 08:00 às 22:00</p>
                  <p className="text-foreground">Sábado: 08:00 às 12:00</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-border">
            <CardContent className="pt-8 flex flex-col justify-between h-full">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Redes sociais</h3>
                  <p className="text-foreground mb-6">Siga-nos nas redes sociais e fique por dentro das novidades</p>
                </div>

                <div className="space-y-4">
                  <a
                    href="https://www.instagram.com/connec_ti/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-foreground hover:text-primary transition-smooth group"
                  >
                    <div className="p-3 bg-gradient-accent rounded-full group-hover:scale-110 transition-smooth">
                      <Instagram size={24} className="text-accent-foreground" />
                    </div>
                    <span className="font-medium">@connec_ti</span>
                  </a>

                  <a
                    href="https://www.facebook.com/solucoesconnecti"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-foreground hover:text-primary transition-smooth group"
                  >
                    <div className="p-3 bg-gradient-accent rounded-full group-hover:scale-110 transition-smooth">
                      <Facebook size={24} className="text-accent-foreground" />
                    </div>
                    <span className="font-medium">solucoesconnecti</span>
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  onClick={() => window.open("https://wa.me/5564999379293", "_blank")}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6"
                >
                  Fale conosco no WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
