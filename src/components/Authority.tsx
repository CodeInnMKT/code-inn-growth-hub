import { Search, Star, MessageSquareText, Globe } from "lucide-react";

// Números vindos da pesquisa de mercado local do Matheus (Florianópolis e região).
// Troque pelos números exatos assim que tiver a contagem final.
const stats = [
  { icon: Search, value: "Dezenas", label: "de negócios locais mapeados" },
  { icon: Star, value: "4,5+", label: "de nota média no Google" },
  { icon: MessageSquareText, value: "Centenas", label: "de avaliações por negócio" },
  { icon: Globe, value: "Sem site", label: "próprio, nenhum" },
];

const Authority = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Não é papo de agência
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Eu <span className="gradient-text">mapeei o mercado local</span> antes de fazer essa página
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pesquisei dezenas de negócios em Florianópolis e região — dentistas, clínicas,
            barbearias, oficinas, salões, marcenarias — e encontrei um padrão que se repete:
            empresas com centenas de avaliações e nota acima de 4,5 no Google que simplesmente{" "}
            <span className="text-foreground font-medium">não têm site próprio</span>. Elas
            conquistaram a confiança do cliente na prática, mas perdem quem pesquisa online e
            só acha a concorrência.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border card-glow opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <stat.icon className="h-6 w-6 text-primary mx-auto mb-3" />
              <div className="text-2xl md:text-3xl font-display font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <p className="text-muted-foreground text-xs md:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Authority;
