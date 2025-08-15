import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-3xl space-y-8">
            <div className="text-center mb-2">
              <h1 className="text-3xl md:text-4xl font-bold gradient-text">Política de Privacidade</h1>
              <p className="text-muted-foreground mt-2">Transparência sobre o uso de dados no gerador.</p>
            </div>
            <Card className="p-6 glass border-primary/20">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold">Coleta e Uso</h2>
                  <p className="text-muted-foreground">Os dados inseridos no gerador são processados apenas no momento da geração do QR Code. Não armazenamos dados sensíveis.</p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Cookies e Métricas</h2>
                  <p className="text-muted-foreground">Utilizamos armazenamento local do navegador para exibir a contagem pessoal de QR Codes gerados. Isso é opcional e não identifica o usuário.</p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Contato</h2>
                  <p className="text-muted-foreground">Dúvidas? Role até o <a className="text-primary hover:underline" href="#contato">contato</a> no rodapé.</p>
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

export default Privacy;


