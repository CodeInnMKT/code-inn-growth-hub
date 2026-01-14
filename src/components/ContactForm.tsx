import { useState, forwardRef } from "react";
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

  // Update plan when selectedPlan prop changes
  if (selectedPlan && formData.plan !== selectedPlan) {
    setFormData(prev => ({ ...prev, plan: selectedPlan }));
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Mensagem enviada! 🎉",
      description: "Entraremos em contato em breve para agendar sua reunião.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      plan: "",
      preferredTime: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section ref={ref} className="py-24 px-4 relative overflow-hidden" id="contato">
      {/* Background effects */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

      <div className="container max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Agende sua Reunião
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Vamos conversar sobre{" "}
            <span className="gradient-text">seus objetivos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Preencha o formulário e nossa equipe entrará em contato para agendar uma reunião estratégica
          </p>
        </div>

        {/* Form card */}
        <Card className="bg-card/50 backdrop-blur-sm border-border card-glow opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
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
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    Nome completo *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Seu nome"
                    required
                    className="bg-background/50"
                  />
                </div>

                {/* Email */}
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
                    placeholder="seu@email.com"
                    required
                    className="bg-background/50"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    Telefone/WhatsApp *
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="(11) 99999-9999"
                    required
                    className="bg-background/50"
                  />
                </div>

                {/* Company */}
                <div className="space-y-2">
                  <Label htmlFor="company" className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-muted-foreground" />
                    Empresa
                  </Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    placeholder="Nome da sua empresa"
                    className="bg-background/50"
                  />
                </div>

                {/* Plan selection */}
                <div className="space-y-2">
                  <Label htmlFor="plan">Plano de interesse *</Label>
                  <Select
                    value={formData.plan}
                    onValueChange={(value) => handleInputChange("plan", value)}
                    required
                  >
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

                {/* Preferred time */}
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

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message">Mensagem (opcional)</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Conte um pouco sobre seu negócio e objetivos..."
                  className="bg-background/50 min-h-[120px]"
                />
              </div>

              {/* Submit button */}
              <Button 
                type="submit" 
                size="lg" 
                className="w-full gradient-primary glow-primary hover:opacity-90 transition-all hover:scale-[1.02]"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-pulse">Enviando...</span>
                  </>
                ) : (
                  <>
                    Enviar e Agendar Reunião
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
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