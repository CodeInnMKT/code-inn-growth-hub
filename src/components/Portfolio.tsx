import { ImageIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// TODO: substituir os 3 placeholders por cases reais (print do site + segmento do cliente + link).
const cases = [
  { category: "Clínica de estética" },
  { category: "Barbearia" },
  { category: "Oficina mecânica" },
];

const Portfolio = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden" id="portfolio">
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Portfólio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Sites feitos pra{" "}
            <span className="gradient-text">negócios como o seu</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Alguns dos projetos recentes na região. Em breve, com mais detalhes de cada um.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((item, index) => (
            <Card
              key={item.category}
              className="bg-card/50 backdrop-blur-sm border-dashed border-2 border-border opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="aspect-video flex items-center justify-center bg-muted/30 rounded-t-lg">
                <ImageIcon className="h-10 w-10 text-muted-foreground/50" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-display">{item.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Case em breve</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
