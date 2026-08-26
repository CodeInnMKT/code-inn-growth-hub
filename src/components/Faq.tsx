import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto tempo demora pra ficar pronto?",
    answer:
      "Na maioria dos casos, entre 7 e 14 dias corridos, do primeiro contato até o site no ar. Depende do escopo do plano e da rapidez pra você me mandar textos e fotos.",
  },
  {
    question: "Depois de pronto, dá pra mexer no conteúdo?",
    answer:
      "Dá sim. Você pode pedir ajustes pontuais quando precisar, e no Site Institucional e no plano de Funcionalidades te oriento sobre como fazer pequenas mudanças sozinho, se preferir.",
  },
  {
    question: "O site funciona bem no celular?",
    answer:
      "Funciona — é o principal. A maioria de quem vai visitar seu site vem do celular, então todo site que eu entrego é construído primeiro pensando no celular, e depois adaptado pro computador.",
  },
  {
    question: "Preciso entender de tecnologia?",
    answer:
      "Não precisa. Eu cuido de toda a parte técnica: domínio, hospedagem, configuração. Você só participa das decisões que importam pro seu negócio — textos, fotos, informações de contato.",
  },
  {
    question: "Depois de pronto, quem cuida da manutenção?",
    answer:
      "Eu. O site fica no ar com hospedagem e domínio configurados, e caso algo precise de ajuste técnico, correção ou atualização, você fala comigo diretamente pelo WhatsApp.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "Geralmente 50% no início do projeto e 50% na entrega, quando o site já está no ar. Combinamos os detalhes na conversa inicial, sem burocracia.",
  },
];

const Faq = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden" id="faq">
      <div className="absolute top-0 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Perguntas frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Dúvidas <span className="gradient-text">comuns</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question} className="border-border">
              <AccordionTrigger className="text-left font-display text-base sm:text-lg hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
