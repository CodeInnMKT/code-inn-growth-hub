import { Mail, Phone, Instagram, Linkedin, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-4 border-t border-border relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold gradient-text">
              Code Inn Marketing
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transformamos dados em resultados reais. Somos especialistas em e-commerce, 
              marketing digital e estratégia de dados para acelerar o crescimento do seu negócio.
            </p>
          </div>

          {/* Contact column */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:contato@codeinnmarketing.com" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Mail className="h-4 w-4" />
                  contato@codeinnmarketing.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+5548991810815" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Phone className="h-4 w-4" />
                  (48) 99181-0815
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MapPin className="h-4 w-4" />
                  Itapema, SC - Brasil
                </span>
              </li>
            </ul>
          </div>

          {/* Social column */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Redes Sociais</h4>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/codeinnmkt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
           
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Code Inn Marketing. Todos os direitos reservados.
          </p>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;