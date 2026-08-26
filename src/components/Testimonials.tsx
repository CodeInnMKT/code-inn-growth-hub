import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// TODO: substituir pelos depoimentos reais dos primeiros clientes.
const testimonials = [1, 2, 3];

const Testimonials = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            O que os clientes{" "}
            <span className="gradient-text">dizem</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Em breve, os primeiros depoimentos de quem já colocou o site no ar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <Card
              key={item}
              className="bg-card/50 backdrop-blur-sm border-dashed border-2 border-border opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-muted-foreground/40 mb-4" />
                <p className="text-muted-foreground text-sm mb-6">Depoimento em breve.</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted" />
                  <div>
                    <p className="text-sm font-medium">Nome do cliente</p>
                    <p className="text-xs text-muted-foreground">Segmento do negócio</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
