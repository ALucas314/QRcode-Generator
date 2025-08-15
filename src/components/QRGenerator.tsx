import { useState, useEffect } from "react";
import { Download, Link2, Mail, Phone, Wifi, MessageSquare, Copy, Check, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
// Reveal animations disabled per request
import { incrementGeneratedCount } from "@/lib/metrics";

type QRType = 'text' | 'url' | 'email' | 'phone' | 'wifi' | 'sms';

interface QRTypeConfig {
  icon: any;
  label: string;
  placeholder: string;
  description: string;
}

const qrTypes: Record<QRType, QRTypeConfig> = {
  text: {
    icon: MessageSquare,
    label: "Texto",
    placeholder: "Digite seu texto aqui...",
    description: "Texto simples ou mensagem"
  },
  url: {
    icon: Link2,
    label: "URL/Link",
    placeholder: "https://exemplo.com",
    description: "Link para website"
  },
  email: {
    icon: Mail,
    label: "Email",
    placeholder: "exemplo@email.com",
    description: "Endereço de email"
  },
  phone: {
    icon: Phone,
    label: "Telefone",
    placeholder: "+55 11 99999-9999",
    description: "Número de telefone"
  },
  wifi: {
    icon: Wifi,
    label: "WiFi",
    placeholder: "Nome da rede;Senha;WPA",
    description: "Configuração de WiFi"
  },
  sms: {
    icon: MessageSquare,
    label: "SMS",
    placeholder: "+55 11 99999-9999:Sua mensagem",
    description: "Número e mensagem SMS"
  }
};

const QRGenerator = () => {
  const [qrType, setQRType] = useState<QRType>('text');
  const [inputValue, setInputValue] = useState('');
  const [generatedValue, setGeneratedValue] = useState('');
  const [qrSize, setQRSize] = useState('300');
  const [qrColor, setQrColor] = useState<string>('#000000');
  const [qrUrl, setQrUrl] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  // Generate QR code URL only when there is a generatedValue (after clicking o botão)
  useEffect(() => {
    if (generatedValue.trim()) {
      const encodedValue = encodeURIComponent(generatedValue);
      const colorHex = qrColor.replace('#', '');
      const newUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodedValue}&color=${colorHex}`;
      setQrUrl(newUrl);
    } else {
      setQrUrl('');
    }
  }, [generatedValue, qrSize, qrColor]);

  const formatValueForType = (value: string, type: QRType): string => {
    switch (type) {
      case 'email':
        return value.includes('mailto:') ? value : `mailto:${value}`;
      case 'phone':
        return value.includes('tel:') ? value : `tel:${value}`;
      case 'sms':
        const [phone, message] = value.split(':');
        return `sms:${phone}${message ? `?body=${encodeURIComponent(message)}` : ''}`;
      case 'wifi':
        const [ssid, password, security = 'WPA'] = value.split(';');
        return `WIFI:T:${security};S:${ssid};P:${password};;`;
      default:
        return value;
    }
  };

  const handleGenerate = () => {
    if (!inputValue.trim()) {
      toast({
        title: "Erro",
        description: "Por favor, insira um valor para gerar o QR Code",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    const formattedValue = formatValueForType(inputValue, qrType);
    setGeneratedValue(formattedValue);

    setTimeout(() => {
      setIsGenerating(false);
      incrementGeneratedCount(1);
      toast({
        title: "QR Code gerado!",
        description: "Seu código QR foi criado com sucesso",
      });
    }, 500);
  };


  const downloadQR = async () => {
    if (!qrUrl) return;

    try {
      const response = await fetch(qrUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `qr-code-${Date.now()}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      toast({
        title: "Download concluído!",
        description: "Seu QR Code foi baixado com sucesso",
      });
    } catch (error) {
      toast({
        title: "Erro no download",
        description: "Não foi possível baixar o QR Code",
        variant: "destructive"
      });
    }
  };

  const copyToClipboard = async () => {
    if (!qrUrl) return;

    try {
      await navigator.clipboard.writeText(qrUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast({
        title: "Copiado!",
        description: "URL do QR Code copiada para a área de transferência",
      });
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível copiar a URL",
        variant: "destructive"
      });
    }
  };

  const currentType = qrTypes[qrType];
  const IconComponent = currentType.icon;

  return (
    <section id="qr-generator" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Gerador de QR Code
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha o tipo de dados, insira as informações e gere seu código QR personalizado
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Left side - Controls */}
          <Card className="p-8 glass border-primary/20 hover-glow transition-transform">
              <div className="space-y-6">
              {/* Color Selection */}
              <div className="space-y-3">
                <Label className="text-lg font-semibold flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  Cor do QR Code
                </Label>
                <div className="flex items-center gap-3 flex-wrap">
                  <input
                    type="color"
                    value={qrColor}
                    onChange={(e) => setQrColor(e.target.value)}
                    className="h-10 w-16 rounded-md border border-input bg-background p-1 cursor-pointer"
                    aria-label="Selecionar cor do QR Code"
                  />
                  <div className="flex items-center gap-2">
                    {['#000000','#1D4ED8','#7C3AED','#10B981','#EF4444'].map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setQrColor(c)}
                        className="h-7 w-7 rounded-md border border-border hover:scale-105 transition"
                        style={{ backgroundColor: c }}
                        aria-label={`Definir cor ${c}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Escolha a cor dos módulos do QR (fundo permanece branco). Evite cores muito claras para manter a legibilidade.</p>
              </div>

              {/* Data Input */}
              <div className="space-y-3">
                <Label className="text-lg font-semibold flex items-center gap-2">
                  <IconComponent className="w-5 h-5" />
                  Dados para o QR Code
                </Label>
                {qrType === 'text' ? (
                  <Textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={currentType.placeholder}
                    className="min-h-24 resize-none"
                  />
                ) : (
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={currentType.placeholder}
                    className="h-12"
                  />
                )}
              </div>

              {/* Size Selection */}
              <div className="space-y-3">
                <Label className="text-lg font-semibold">Tamanho</Label>
                <Select value={qrSize} onValueChange={setQRSize}>
                  <SelectTrigger className="h-12">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="200">200x200px - Pequeno</SelectItem>
                    <SelectItem value="300">300x300px - Médio</SelectItem>
                    <SelectItem value="400">400x400px - Grande</SelectItem>
                    <SelectItem value="500">500x500px - Extra Grande</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Generate Button */}
              <Button
                onClick={handleGenerate}
                disabled={!inputValue.trim() || isGenerating}
                className="w-full h-12 bg-gradient-primary hover:opacity-90 transition-all duration-300 text-lg font-semibold"
              >
                {isGenerating ? "Gerando..." : "Gerar QR Code"}
              </Button>
            </div>
          </Card>

          {/* Right side - Preview */}
          <Card className="p-8 glass border-primary/20 hover-glow transition-transform">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold">Preview do QR Code</h3>
              
              {qrUrl ? (
                <div className="space-y-6">
                  <div className="inline-block p-3 sm:p-4 bg-white rounded-xl shadow-floating">
                    <img
                      src={qrUrl}
                      alt="QR Code"
                      className="w-full h-auto max-w-[280px] sm:max-w-md mx-auto"
                      style={{ imageRendering: 'pixelated' }}
                    />
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button
                      onClick={downloadQR}
                      className="bg-gradient-secondary hover:opacity-90 transition-all duration-300"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download PNG
                    </Button>
                    
                    <Button
                      onClick={copyToClipboard}
                      variant="outline"
                      className="border-primary/30 hover:border-primary/50 hover:bg-primary/10 glass"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 mr-2" />
                          Copiado!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-2" />
                          Copiar URL
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-64 bg-muted/20 rounded-xl border-2 border-dashed border-muted-foreground/30">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto opacity-50">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-muted-foreground">
                      Insira os dados e clique em "Gerar QR Code"
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QRGenerator;