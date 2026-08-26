import { MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";

const Hero = () => {
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
            className="h-40 sm:h-56 w-auto object-contain select-none"
            draggable={false}
          />

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-sm font-medium text-primary">
            <MapPin className="h-4 w-4" />
            Florianópolis, São José, Palhoça e Biguaçu
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Transformo suas avaliações no Google em{" "}
          <span className="gradient-text">clientes novos</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Você já tem nota alta no Google e clientela fiel. Só falta um site
          profissional pra quem te procura na internet{" "}
          <span className="text-foreground font-medium">te encontrar antes da concorrência</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button
            asChild
            size="lg"
            className="gradient-primary text-lg px-8 py-6 glow-primary hover:scale-105 transition-transform"
          >
            <a
              href={getWhatsAppLink("Olá! Vi o site e quero saber mais sobre criar meu site.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar no WhatsApp
            </a>
          </Button>
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
