import { ListChecks, MousePointerClick, Download, Settings } from "lucide-react";
import { Card } from "@/components/ui/card";
// Reveal animations disabled per request

const Tutorial = () => {
  return (
    <section id="tutorial" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Como usar o gerador</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Siga os passos abaixo para criar seu QR Code em segundos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch justify-items-center md:justify-items-stretch">
          <Card className="p-5 sm:p-6 glass border-primary/20 hover-glow transition-transform h-full">
            <div className="flex flex-col gap-2.5 sm:gap-3 h-full">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg">1. Escolha o tipo</h3>
              <p className="text-muted-foreground text-sm md:text-base">Escolha: Texto, Link, Email, Telefone, WiFi ou SMS.</p>
            </div>
          </Card>

          <Card className="p-5 sm:p-6 glass border-primary/20 hover-glow transition-transform h-full">
            <div className="flex flex-col gap-2.5 sm:gap-3 h-full">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <ListChecks className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg">2. Preencha os dados</h3>
              <p className="text-muted-foreground text-sm md:text-base">Informe os dados conforme o tipo escolhido.</p>
            </div>
          </Card>

          <Card className="p-5 sm:p-6 glass border-primary/20 hover-glow transition-transform h-full">
            <div className="flex flex-col gap-2.5 sm:gap-3 h-full">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <MousePointerClick className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg">3. Clique em Gerar</h3>
              <p className="text-muted-foreground text-sm md:text-base">O QR é criado na hora. Veja a prévia.</p>
            </div>
          </Card>

          <Card className="p-5 sm:p-6 glass border-primary/20 hover-glow transition-transform h-full">
            <div className="flex flex-col gap-2.5 sm:gap-3 h-full">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Download className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg">4. Baixe o PNG</h3>
              <p className="text-muted-foreground text-sm md:text-base">Baixe em alta qualidade ou copie a URL.</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Tutorial;


