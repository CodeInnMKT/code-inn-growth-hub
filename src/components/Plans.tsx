import { Check, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PlansProps {
  onSelectPlan: (planName: string) => void;
}

const plans = [
  {
    name: "Landing Page",
    description: "Pra quem quer sair do zero e ter uma presença profissional rápido",
    price: "R$ 997",
    featured: false,
    features: [
      "1 página, direto ao ponto",
      "Seção de serviços e diferenciais",
      "Botão de WhatsApp em destaque",
      "Otimizado pra celular",
      "Domínio e hospedagem configurados",
    ],
  },
  {
    name: "Site Institucional",
    description: "O mais escolhido: um site completo pra sua empresa aparecer online",
    price: "R$ 1.997",
    featured: true,
    features: [
      "Até 5 páginas (Home, Sobre, Serviços, Depoimentos, Contato)",
      "Formulário de contato",
      "Localização integrada com Google Maps",
      "SEO local básico (aparecer nas buscas da sua região)",
      "Botão de WhatsApp flutuante",
    ],
  },
  {
    name: "Site + Funcionalidades",
    description: "Pra quem quer automatizar parte do atendimento no próprio site",
    price: "R$ 3.000",
    featured: false,
    features: [
      "Tudo do Site Institucional",
      "Agendamento online integrado",
      "Galeria de fotos / portfólio de trabalhos",
      "Integração com Instagram",
      "Suporte estendido no lançamento",
    ],
  },
];

const Plans = ({ onSelectPlan }: PlansProps) => {
  return (
    <section className="py-24 px-4 relative overflow-hidden" id="planos">
      {/* Background effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Investimento
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Escolha o site ideal pra{" "}
            <span className="gradient-text">o seu negócio</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Preço fechado, sem letra miúda. Valores podem variar um pouco conforme o escopo — confirme no WhatsApp.
          </p>
        </div>

        {/* Plan cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative bg-card/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 opacity-0 animate-fade-in-up ${
                plan.featured
                  ? "border-primary glow-primary md:scale-105"
                  : "border-border hover:border-primary/50"
              }`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Featured badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full gradient-primary text-sm font-medium text-white">
                    <Sparkles className="h-3 w-3" />
                    Mais Escolhido
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-4 pt-8">
                <CardTitle className="text-2xl font-display">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold gradient-text">{plan.price}</span>
                </div>
              </CardHeader>

              <CardContent className="pb-8">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => onSelectPlan(plan.name)}
                  className={`w-full ${
                    plan.featured
                      ? "gradient-primary hover:opacity-90"
                      : "bg-muted hover:bg-muted/80"
                  } transition-all hover:scale-105`}
                  size="lg"
                >
                  Quero esse plano
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
