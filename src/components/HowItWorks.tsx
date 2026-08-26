import { MessageCircle, Layout, PenTool, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Conversa inicial",
    time: "15 minutos",
    description:
      "Te entendo: o que seu negócio faz, quem é seu cliente e o que o site precisa resolver. Por WhatsApp ou chamada de vídeo.",
  },
  {
    icon: Layout,
    title: "Protótipo",
    time: "2 a 3 dias",
    description:
      "Você recebe uma primeira versão do site pra ver e sentir na prática — antes de qualquer coisa ficar definitiva.",
  },
  {
    icon: PenTool,
    title: "Ajustes",
    time: "1 a 2 dias",
    description:
      "Refino tudo com base no seu retorno: textos, fotos, cores, o que precisar até ficar do jeito certo.",
  },
  {
    icon: Rocket,
    title: "Site no ar",
    time: "1 dia",
    description:
      "Publico, configuro o domínio e te mostro como atualizar o básico sozinho, se quiser.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden" id="como-funciona">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Como funciona
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Do primeiro contato ao{" "}
            <span className="gradient-text">site no ar</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Um processo simples, sem enrolação. Na maioria dos casos, entre 7 e 14 dias, dependendo do escopo.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative text-center opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
              )}
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                <step.icon className="h-7 w-7 text-white" />
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-background border border-primary/50 text-xs font-bold flex items-center justify-center">
                  {index + 1}
                </span>
              </div>
              <h3 className="font-display font-bold text-lg mb-1">{step.title}</h3>
              <span className="inline-block text-xs font-medium text-primary mb-3">{step.time}</span>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
