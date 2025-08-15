import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-3xl space-y-8">
            <div className="text-center mb-2">
              <h1 className="text-3xl md:text-4xl font-bold gradient-text">Termos de Uso</h1>
              <p className="text-muted-foreground mt-2">Diretrizes de utilização do gerador de QR Code.</p>
            </div>
            <Card className="p-6 glass border-primary/20">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold">Uso Permitido</h2>
                  <p className="text-muted-foreground">O serviço é fornecido “como está” e destina-se à criação de QR Codes para conteúdos lícitos.</p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Responsabilidade</h2>
                  <p className="text-muted-foreground">Não nos responsabilizamos por conteúdos de terceiros vinculados aos QR Codes gerados.</p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Alterações</h2>
                  <p className="text-muted-foreground">Podemos atualizar estes termos a qualquer momento, publicando uma nova versão nesta página.</p>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;


