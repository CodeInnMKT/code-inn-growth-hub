import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

/**
 * Botão fixo/flutuante de WhatsApp, visível em todas as seções da página.
 * Renderizado uma vez no App para aparecer em qualquer rota.
 */
const WhatsAppButton = () => {
  return (
    <a
      href={getWhatsAppLink("Olá! Vi o site e quero fazer um orçamento.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 text-white shadow-lg shadow-black/30 transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-6 w-6 shrink-0" fill="white" strokeWidth={0} />
      <span className="hidden text-sm font-semibold sm:inline">Falar no WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
