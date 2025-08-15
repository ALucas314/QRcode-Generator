import { Server, Link2 } from "lucide-react";
import { Card } from "@/components/ui/card";
// Reveal animations disabled per request

const APIInfo = () => {
  return (
    <section id="api" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">API utilizada</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Este gerador utiliza uma API pública para criar imagens de QR Code a partir do conteúdo informado.
          </p>
        </div>

          <Card className="p-6 glass border-primary/20 hover-glow transition-transform">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Server className="w-5 h-5" />
                <span className="font-semibold">Endpoint base</span>
              </div>
              <code className="text-sm break-all bg-muted rounded px-3 py-2">
                https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=SEU_CONTEUDO
              </code>

              <div className="flex items-center gap-3 mt-4">
                <Link2 className="w-5 h-5" />
                <a
                  href="https://goqr.me/api/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Documentação da API pública
                </a>
              </div>
            </div>
          </Card>
      </div>
    </section>
  );
};

export default APIInfo;


