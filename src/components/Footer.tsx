import { Github, Linkedin, Instagram, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "5591996014545"; // 55 + DDD + número sem espaços
  const email = "antoniolucas9014@gmail.com";
  const mailto = `mailto:${email}?subject=${encodeURIComponent("Contato via Pixel QR Gen")}&body=${encodeURIComponent("Olá, gostaria de saber mais sobre o gerador de QR Code.")}`;
  const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent("Contato via Pixel QR Gen")}&body=${encodeURIComponent("Olá, gostaria de entrar em contato.")}`;

  return (
    <footer className="relative border-t border-border bg-background">
      <div className="absolute inset-0 bg-gradient-hero opacity-30 pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">DigitalCraft</h3>
            <p className="text-muted-foreground leading-relaxed">
              Design & Development — Desenvolvedor Full Stack apaixonado por tecnologia, sempre explorando novas possibilidades e criando soluções inovadoras.
            </p>
            <div className="flex gap-2">
              <a
                href="https://github.com/ALucas314"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                  <Github className="w-4 h-4" />
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/antonio-lucas-costa-araujo-5462a52b0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                  <Linkedin className="w-4 h-4" />
                </Button>
              </a>
              <a
                href="https://www.instagram.com/a.lucas1920/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                  <Instagram className="w-4 h-4" />
                </Button>
              </a>
              <a href={gmailComposeLink} target="_blank" rel="noopener noreferrer" aria-label="Email">
                <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                  <Mail className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>

          {/* Product links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Produto</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#qr-generator" className="hover:text-primary transition-colors interactive-link">Gerador</a></li>
              <li><a href="#tutorial" className="hover:text-primary transition-colors interactive-link">Tutorial</a></li>
              <li><a href="#api" className="hover:text-primary transition-colors interactive-link">API</a></li>
              <li><a href="#contato" className="hover:text-primary transition-colors interactive-link">Contato</a></li>
            </ul>
          </div>

          {/* Contact shortcuts */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contato</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2" aria-label="Abrir conversa no WhatsApp">
                  <Phone className="w-4 h-4" /> WhatsApp
                </a>
              </li>
              <li>
                <a href={gmailComposeLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Email
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-primary transition-colors">Contato direto</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/privacy" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
              <li><a href="/terms" className="hover:text-primary transition-colors">Termos de Uso</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div id="contato" className="mt-12 pt-8 border-t border-border/60 grid lg:grid-cols-2 gap-6 items-start">
          <div className="space-y-3">
            <p className="text-muted-foreground">
              © {currentYear} Antônio Lucas Costa Araújo. Todos os direitos reservados.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.open(
                `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent("Contato via Pixel QR Gen")}&body=${encodeURIComponent("Olá, gostaria de entrar em contato.")}`,
                "_blank"
              );
            }}
            className="w-full"
          >
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full max-w-xl">
              <input
                type="email"
                required
                placeholder="Seu e-mail"
                className="w-full h-11 rounded-md sm:rounded-r-none border border-input bg-background px-3 text-sm"
              />
              <Button type="submit" className="h-11 w-full sm:w-auto sm:rounded-l-none">Entrar em Contato</Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Ao clicar, seu Gmail abrirá com uma nova mensagem preenchida.
            </p>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;