import { useState, useEffect, forwardRef } from "react";
import { Send, Calendar, Building2, Mail, Phone, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface ContactFormProps {
  selectedPlan: string;
}

// Vite exige prefixo VITE_ para expor env no client
const FORM_URL = import.meta.env.VITE_FORM_URL as string | undefined;

// ✅ ADIÇÃO 1: função de máscara de telefone (BR)
const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length <= 10) {
    return digits
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  }

  return digits
    .replace(/^(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2");
};

const ContactForm = forwardRef<HTMLDivElement, ContactFormProps>(({ selectedPlan }, ref) => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    plan: selectedPlan || "",
    preferredTime: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedPlan) {
      setFormData((prev) => ({ ...prev, plan: selectedPlan }));
    }
  }, [selectedPlan]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!FORM_URL) {
        throw new Error("VITE_FORM_URL não definida no .env");
      }

      const response = await fetch(FORM_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          plan: formData.plan,
          preferredTime: formData.preferredTime,
          message: formData.message,
          source: "website",
        }),
      });

      if (!response.ok) {
        let details = "";
        try {
          const data = await response.json();
          details = data?.error || data?.message || "";
        } catch {}
        throw new Error(details || "Erro ao enviar formulário");
      }

      toast({
        title: "Mensagem enviada! 🎉",
        description: "Recebemos seus dados e entraremos em contato em breve.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        plan: selectedPlan || "",
        preferredTime: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar 😕",
        description:
          "Não foi possível enviar agora. Tente novamente em instantes ou fale conosco pelo WhatsApp.",
        variant: "destructive",
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} className="py-24 px-4 relative overflow-hidden" id="contato">
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

      <div className="container max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Agende sua Reunião
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Vamos conversar sobre <span className="gradient-text">seus objetivos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Preencha o formulário e nossa equipe entrará em contato para agendar uma reunião estratégica
          </p>
        </div>

        <Card className="bg-card/50 backdrop-blur-sm border-border card-glow opacity-0 animate-fade-in-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Calendar className="h-5 w-5 text-primary" />
              Agendar Reunião
            </CardTitle>
            <CardDescription>
              {selectedPlan
                ? `Você selecionou o plano ${selectedPlan}. Preencha seus dados para agendar.`
                : "Preencha o formulário e escolha seu plano preferido."}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    Nome completo *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    E-mail *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="bg-background/50"
                  />
                </div>

                {/* ✅ ADIÇÃO 2: máscara aplicada aqui */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    Telefone/WhatsApp *
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      handleInputChange("phone", formatPhone(e.target.value))
                    }
                    placeholder="(11) 99999-9999"
                    required
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-muted-foreground" />
                    Empresa
                  </Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="plan">Plano de interesse *</Label>
                  <Select value={formData.plan} onValueChange={(value) => handleInputChange("plan", value)} required>
                    <SelectTrigger className="bg-background/50">
                      <SelectValue placeholder="Selecione um plano" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Essencial">Essencial</SelectItem>
                      <SelectItem value="Crescimento">Crescimento</SelectItem>
                      <SelectItem value="Aceleração">Aceleração</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preferredTime">Horário preferido</Label>
                  <Select
                    value={formData.preferredTime}
                    onValueChange={(value) => handleInputChange("preferredTime", value)}
                  >
                    <SelectTrigger className="bg-background/50">
                      <SelectValue placeholder="Escolha um horário" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Manhã (9h - 12h)</SelectItem>
                      <SelectItem value="afternoon">Tarde (14h - 18h)</SelectItem>
                      <SelectItem value="evening">Noite (18h - 20h)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensagem (opcional)</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="bg-background/50 min-h-[120px]"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full gradient-primary glow-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar e Agendar Reunião"}
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
});

ContactForm.displayName = "ContactForm";
export default ContactForm;
