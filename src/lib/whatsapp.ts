// Número usado em todos os links de WhatsApp do site.
// Atualize aqui caso o número de contato mude — todos os CTAs usam esta constante.
export const WHATSAPP_NUMBER = "5548991810815";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Vi o site e quero saber mais sobre a criação do meu site.";

/**
 * Monta um link wa.me com mensagem pré-preenchida.
 * Usar mensagens específicas por seção ajuda a entender de onde veio o lead.
 */
export const getWhatsAppLink = (message: string = WHATSAPP_DEFAULT_MESSAGE) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
