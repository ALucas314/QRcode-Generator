import { ArrowDown, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAnimation, useStaggeredAnimation } from "@/hooks/use-animation";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const { elementRef: heroRef, isVisible: heroVisible } = useAnimation({ threshold: 0.1 });
  const { elementRef: featuresRef, isVisible: featuresVisible } = useAnimation({ threshold: 0.3 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToGenerator = () => {
    const element = document.getElementById('qr-generator');
    element?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToTutorial = () => {
    const element = document.getElementById('tutorial');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} className="relative min-h-screen w-full flex items-start justify-start overflow-visible hero-fullscreen">
      {/* Background gradient with animation */}
      <div className={`absolute inset-0 bg-gradient-hero opacity-30 transition-opacity duration-1000 z-0 ${mounted ? 'opacity-30' : 'opacity-0'}`} />
      
      {/* Decorative elements with floating animation and parallax */}
      <div className={`absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float transition-all duration-1000 hover:scale-110 z-10 ${mounted ? 'opacity-100' : 'opacity-0'}`} />
      <div className={`absolute top-40 right-20 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-float delay-300 transition-all duration-1000 hover:scale-110 z-10 ${mounted ? 'opacity-100' : 'opacity-0'}`} />
      <div className={`absolute bottom-32 left-1/4 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-float delay-600 transition-all duration-1000 hover:scale-110 z-10 ${mounted ? 'opacity-100' : 'opacity-0'}`} />
      
      {/* Additional floating particles */}
      <div className={`absolute top-1/4 right-1/3 w-3 h-3 bg-primary/20 rounded-full animate-float delay-1000 transition-all duration-1000 z-10 ${mounted ? 'opacity-100' : 'opacity-0'}`} />
      <div className={`absolute bottom-1/3 left-1/3 w-2 h-2 bg-secondary/20 rounded-full animate-float delay-1200 transition-all duration-1000 z-10 ${mounted ? 'opacity-100' : 'opacity-0'}`} />
      
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-20 flex flex-col justify-start py-2 sm:py-4 hero-content">
        <div className="max-w-4xl mx-auto w-full">
          {/* Spacer to push content below header */}
          <div className="h-8 sm:h-10 mb-4 sm:mb-6"></div>
          
          {/* Badge with slide down animation */}
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-primary/20 mb-8 sm:mb-10 transition-all duration-700 ${mounted ? 'animate-slide-down opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-xs sm:text-sm font-medium">Gerador de QR Code Moderno</span>
          </div>

          {/* Main heading with staggered slide up animation */}
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight tracking-tight break-words transition-all duration-700 ${mounted ? 'animate-slide-up opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <span className={`inline-block transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Crie{" "}
            </span>
            <span className={`gradient-text inline-block transition-all duration-700 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              QR Codes
            </span>
            <br />
            <span className={`inline-block transition-all duration-700 delay-600 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Instantaneamente
            </span>
          </h1>

          {/* Subheading with fade in animation */}
          <p className={`text-base sm:text-lg md:text-2xl text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-800 ${mounted ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
            Transforme qualquer texto, URL ou dados em códigos QR elegantes. 
            Design moderno, velocidade instantânea, downloads em alta qualidade.
          </p>

          {/* CTA buttons with enhanced animations */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-16 transition-all duration-700 delay-1000 ${mounted ? 'animate-scale-in opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-all duration-300 hover-glow text-lg px-6 py-5 h-auto hover-lift group"
              onClick={scrollToGenerator}
            >
              <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Começar Agora
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 hover:border-primary/50 hover:bg-primary/10 text-lg px-6 py-5 h-auto glass hover-lift transition-all duration-300 group"
              onClick={scrollToTutorial}
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">Ver Demonstração</span>
            </Button>
          </div>

          {/* Features highlight with independent scroll animations */}
          <div ref={featuresRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mt-12 sm:mt-16 pb-12 sm:pb-16">
            <div className={`glass rounded-xl p-4 sm:p-5 hover-glow scale-hover transition-all duration-700 hover-lift group ${featuresVisible ? 'animate-slide-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-2 group-hover:text-primary transition-colors duration-300">Instantâneo</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">
                Geração em tempo real sem delays
              </p>
            </div>
            
            <div className={`glass rounded-xl p-4 sm:p-5 hover-glow scale-hover transition-all duration-700 hover-lift group ${featuresVisible ? 'animate-slide-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-2 group-hover:text-primary transition-colors duration-300">Alta Qualidade</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">
                Imagens cristalinas para qualquer uso
              </p>
            </div>
            
            <div className={`glass rounded-xl p-4 sm:p-5 hover-glow scale-hover transition-all duration-700 hover-lift group ${featuresVisible ? 'animate-slide-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-2 group-hover:text-primary transition-colors duration-300">Download Fácil</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">
                Um clique para salvar seu QR Code
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;