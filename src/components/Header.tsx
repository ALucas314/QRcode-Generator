import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";

const navItems = [
  { href: "/#qr-generator", label: "Gerador" },
  { href: "/#tutorial", label: "Tutorial" },
  { href: "/#api", label: "API" },
  { href: "/#contato", label: "Contato" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all backdrop-blur-glass bg-background/70 border-b border-border ${
        isScrolled ? "" : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between md:grid md:grid-cols-[auto_1fr_auto] relative">
        <a href="/" className="flex items-center gap-2 font-bold text-lg gradient-text">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
            <path d="M10 10h.01" />
            <path d="M10 14h.01" />
            <path d="M14 10h.01" />
            <path d="M14 14h.01" />
          </svg>
          QRcode-Generator
        </a>

        <nav className="hidden md:flex items-center gap-6 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-primary interactive-link px-2 py-1 rounded-md">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-3 sm:gap-4">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <a href="/#qr-generator" className="hidden sm:inline-flex">
            <Button size="sm">Começar</Button>
          </a>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Abrir menu">
                  <Menu className="w-8 h-8" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col gap-6 mt-6">
                  <a href="/" className="flex items-center gap-2 font-bold text-lg">
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="w-6 h-6"
                    >
                      <rect x="3" y="3" width="7" height="7" />
                      <rect x="14" y="3" width="7" height="7" />
                      <rect x="14" y="14" width="7" height="7" />
                      <rect x="3" y="14" width="7" height="7" />
                      <path d="M10 10h.01" />
                      <path d="M10 14h.01" />
                      <path d="M14 10h.01" />
                      <path d="M14 14h.01" />
                    </svg>
                    QRcode-Generator
                  </a>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Tema</span>
                    <ThemeToggle />
                  </div>
                  <nav className="flex flex-col gap-3">
                    {navItems.map((item) => (
                      <SheetClose asChild key={item.href}>
                        <a href={item.href} className="text-base hover:text-primary">
                          {item.label}
                        </a>
                      </SheetClose>
                    ))}
                  </nav>
                  <SheetClose asChild>
                    <a href="/#qr-generator">
                      <Button className="w-full">Começar</Button>
                    </a>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


