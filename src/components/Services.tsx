import { ShoppingCart, BarChart3, Database, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Estratégias completas para sua loja online vender mais. Da criação ao crescimento, otimizamos cada etapa da jornada de compra.",
    features: ["Gestão de Marketplace", "Otimização de Conversão", "Automação de Vendas"],
    gradient: "from-primary to-accent",
  },
  {
    icon: BarChart3,
    title: "Marketing Digital",
    description: "Campanhas que geram resultados mensuráveis. Performance, branding e crescimento orgânico trabalhando juntos.",
    features: ["Tráfego Pago", "Inbound Marketing", "Redes Sociais"],
    gradient: "from-accent to-secondary",
  },
  {
    icon: Database,
    title: "Estratégia de Dados",
    description: "Decisões baseadas em dados reais. Implementamos cultura data-driven para maximizar ROI e reduzir desperdícios.",
    features: ["Business Intelligence", "Analytics Avançado", "Dashboards Personalizados"],
    gradient: "from-secondary to-primary",
  },
];

const Services = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden" id="servicos">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Soluções integradas para{" "}
            <span className="gradient-text">acelerar seu crescimento</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Combinamos e-commerce, marketing e dados para criar estratégias que realmente funcionam
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group relative bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 card-glow opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Gradient top border */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} rounded-t-lg`} />
              
              <CardHeader className="pb-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl font-display flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;