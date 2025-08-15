import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Ana Silva",
    role: "Marketing Digital",
    company: "TechStart",
    content: "Perfeito para nossas campanhas! A interface é super intuitiva e os QR codes ficam com qualidade excelente. Uso diariamente para materiais promocionais.",
    rating: 5,
    avatar: "AS"
  },
  {
    name: "Carlos Oliveira",
    role: "Proprietário",
    company: "Restaurante Sabor",
    content: "Revolucionou nosso cardápio digital! Agora os clientes acessam o menu instantaneamente. O gerador é rápido e fácil de usar, até mesmo para quem não é técnico.",
    rating: 5,
    avatar: "CO"
  },
  {
    name: "Mariana Costa",
    role: "Coordenadora de Eventos",
    company: "Eventos Premium",
    content: "Uso para check-ins em eventos e funciona perfeitamente. A qualidade das imagens é profissional e o download é instantâneo. Recomendo para todos!",
    rating: 5,
    avatar: "MC"
  },
  {
    name: "Roberto Santos",
    role: "Professor",
    company: "UniTech",
    content: "Fantástico para compartilhar materiais com alunos. Crio QR codes para links de aulas, documentos e formulários. Interface moderna e muito prática.",
    rating: 5,
    avatar: "RS"
  },
  {
    name: "Julia Fernandes",
    role: "Social Media",
    company: "Agência Criativa",
    content: "A ferramenta que eu precisava! Crio QR codes para redes sociais, websites e campanhas. Design lindo e funcionalidade impecável. 5 estrelas!",
    rating: 5,
    avatar: "JF"
  },
  {
    name: "Pedro Lima",
    role: "Desenvolvedor",
    company: "DevSolutions",
    content: "Interface excepcional e tecnologia confiável. Uso em projetos para clientes e sempre impressiona. A qualidade do código e a velocidade são incríveis.",
    rating: 5,
    avatar: "PL"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            O que nossos usuários dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Milhares de pessoas já confiam em nossa plataforma. 
            Veja os depoimentos de quem usa diariamente nosso gerador de QR codes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 glass border-primary/20 hover-glow scale-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                {/* Quote icon */}
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Quote className="w-5 h-5 text-white" />
                </div>

                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-gradient-primary text-white font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-8">Confiança de profissionais em diversos setores</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-lg font-semibold">Marketing Digital</div>
            <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
            <div className="text-lg font-semibold">Restaurantes</div>
            <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
            <div className="text-lg font-semibold">Eventos</div>
            <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
            <div className="text-lg font-semibold">Educação</div>
            <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
            <div className="text-lg font-semibold">Tecnologia</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;