import { Shield, Zap, Download, Smartphone, Globe, Palette } from "lucide-react";
import { Card } from "@/components/ui/card";
// animations removed
import { useEffect, useState } from "react";
import { formatNumber, getGeneratedCount } from "@/lib/metrics";

const features = [
  {
    icon: Zap,
    title: "Geração Instantânea",
    description: "Crie códigos QR em tempo real, sem espera ou delays. Nossa tecnologia garante velocidade máxima de processamento.",
    color: "from-primary to-primary-glow"
  },
  {
    icon: Shield,
    title: "100% Seguro",
    description: "Todos os dados são processados localmente. Nenhuma informação sensível é armazenada em nossos servidores.",
    color: "from-secondary to-secondary-hover"
  },
  {
    icon: Download,
    title: "Download Gratuito",
    description: "Baixe seus QR codes em alta resolução (PNG), sem marcas d'água ou limitações.",
    color: "from-accent to-accent/80"
  },
  {
    icon: Smartphone,
    title: "Responsivo",
    description: "Interface otimizada para todos os dispositivos. Funciona perfeitamente em desktop, tablet e celular.",
    color: "from-success to-success/80"
  },
  {
    icon: Globe,
    title: "Múltiplos Tipos",
    description: "Suporte para URLs, texto, email, telefone, WiFi, SMS e muito mais. Versatilidade total para suas necessidades.",
    color: "from-primary to-secondary"
  },
  {
    icon: Palette,
    title: "Diferentes Tamanhos",
    description: "Escolha entre diversos tamanhos para adequar seu QR code ao uso pretendido, desde 200x200 até 500x500 pixels.",
    color: "from-secondary to-accent"
  }
];

const Features = () => {
  const [generatedCount, setGeneratedCount] = useState<number>(getGeneratedCount());

  useEffect(() => {
    const update = () => setGeneratedCount(getGeneratedCount());
    window.addEventListener("qr_generated", update);
    update();
    return () => window.removeEventListener("qr_generated", update);
  }, []);

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Por que escolher nosso gerador?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Desenvolvido com as mais modernas tecnologias para oferecer a melhor experiência 
            na criação de códigos QR. Simples, rápido e confiável.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch justify-items-center md:justify-items-stretch">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="p-5 sm:p-6 glass border-primary/20 hover-glow scale-hover group transition-colors h-full"
              >
                <div className="flex flex-col gap-3 h-full text-center md:text-left">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold gradient-text">{formatNumber(generatedCount)}</div>
            <div className="text-muted-foreground">QR Codes gerados por você</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold gradient-text">100%</div>
            <div className="text-muted-foreground">Gratuito</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold gradient-text">0s</div>
            <div className="text-muted-foreground">Tempo de Espera</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold gradient-text">24/7</div>
            <div className="text-muted-foreground">Disponível</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;