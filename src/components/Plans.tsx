import { Check, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PlansProps {
  onSelectPlan: (planName: string) => void;
}

const plans = [
  {
    name: "Essencial",
    description: "Para quem está começando e quer dar os primeiros passos",
    price: "A definir",
    featured: false,
    features: [
      "Análise inicial do negócio",
      "Estratégia básica de marketing",
      "Relatórios mensais",
      "Suporte por email",
      "1 reunião mensal de acompanhamento",
    ],
  },
  {
    name: "Crescimento",
    description: "Para empresas em expansão que querem acelerar resultados",
    price: "A definir",
    featured: true,
    features: [
      "Tudo do plano Essencial",
      "Gestão completa de campanhas",
      "Dashboard personalizado",
      "Suporte prioritário",
      "2 reuniões mensais",
      "Otimização de e-commerce",
    ],
  },
  {
    name: "Aceleração",
    description: "Solução completa para escalar e dominar seu mercado",
    price: "A definir",
    featured: false,
    features: [
      "Tudo do plano Crescimento",
      "Estratégia omnichannel",
      "Business Intelligence avançado",
      "Consultoria dedicada",
      "Reuniões semanais",
      "Integração completa de dados",
      "Suporte 24/7",
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
            Nossos Planos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Escolha o plano ideal para{" "}
            <span className="gradient-text">seu momento</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Planos flexíveis que crescem com o seu negócio
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
                    Mais Popular
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
                  Selecionar Plano
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