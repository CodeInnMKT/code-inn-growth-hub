import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";

const FinalCta = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container max-w-3xl mx-auto relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
          Seu concorrente já tem site.{" "}
          <span className="gradient-text">E você?</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
          Manda uma mensagem agora e me conta sobre seu negócio. Sem compromisso, sem enrolação.
        </p>
        <Button
          asChild
          size="lg"
          className="gradient-primary text-lg px-8 py-6 glow-primary hover:scale-105 transition-transform"
        >
          <a
            href={getWhatsAppLink("Olá! Vi o site e quero conversar sobre criar o meu.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Falar no WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
};

export default FinalCta;
