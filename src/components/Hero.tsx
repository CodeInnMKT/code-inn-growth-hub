import { ArrowRight, BarChart3, ShoppingCart, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onScrollToPlans: () => void;
}

const Hero = ({ onScrollToPlans }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "50px 50px"
        }}
      />

      <div className="container relative z-10 max-w-6xl mx-auto text-center">
      {/* Logo/Brand */}
        <div
          className="mb-8 flex flex-col items-center justify-center gap-4 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <img
            src="/Logo2.png"
            alt="Code Inn Marketing"
            className="h-80 w-auto object-contain select-none"
            draggable={false}
          />

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-sm font-medium text-primary">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Agência de Resultados
          </span>
        </div>


        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Transformamos dados em{" "}
          <span className="gradient-text">resultados reais</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          E-commerce, Marketing Digital e Estratégia de Dados para{" "}
          <span className="text-foreground font-medium">acelerar o crescimento</span> do seu negócio
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button 
            size="lg" 
            onClick={onScrollToPlans}
            className="gradient-primary text-lg px-8 py-6 glow-primary hover:scale-105 transition-transform"
          >
            Agende uma Reunião
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={onScrollToPlans}
            className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10 hover:scale-105 transition-transform"
          >
            Ver Planos
          </Button>
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
            <ShoppingCart className="h-4 w-4 text-primary" />
            <span className="text-sm">E-commerce</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
            <BarChart3 className="h-4 w-4 text-secondary" />
            <span className="text-sm">Marketing Digital</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
            <Database className="h-4 w-4 text-accent" />
            <span className="text-sm">Estratégia de Dados</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full animate-float" />
        </div>
      </div>
    </section>
  );
};

export default Hero;