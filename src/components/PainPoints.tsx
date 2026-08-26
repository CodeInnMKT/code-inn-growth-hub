import { MapPinned, SearchX, Instagram } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const painPoints = [
  {
    icon: MapPinned,
    title: "Você depende só do Google Maps",
    description:
      "Se o cliente não estiver perto o suficiente ou não usar o mapa, ele simplesmente não te encontra. Você não tem uma página própria pra mostrar quem você é.",
  },
  {
    icon: SearchX,
    title: "Quem pesquisa seu nome não encontra você",
    description:
      "A pessoa já ouviu falar do seu negócio, pesquisa no Google pra confirmar o endereço ou ver mais informações — e quem aparece é a concorrência que tem site.",
  },
  {
    icon: Instagram,
    title: "Seu Instagram é ótimo, mas não converte",
    description:
      "Fotos boas, seguidores, comentários elogiando. Mas não existe um lugar profissional pra fechar negócio — só um perfil que não foi feito pra vender.",
  },
];

const PainPoints = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden" id="diagnostico">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Isso te soa familiar?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Seu negócio é bom.{" "}
            <span className="gradient-text">O problema é ser encontrado.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Você já construiu a reputação. Falta só o lugar certo pra transformar isso em cliente novo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <Card
              key={point.title}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 card-glow opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <point.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl font-display">{point.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
