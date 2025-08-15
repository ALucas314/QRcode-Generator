import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QRGenerator from "@/components/QRGenerator";
import Tutorial from "@/components/Tutorial";
import APIInfo from "@/components/APIInfo";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Reveal>
        <QRGenerator />
      </Reveal>
      <Reveal delayMs={50}>
        <Tutorial />
      </Reveal>
      <Reveal delayMs={100}>
        <Features />
      </Reveal>
      <Reveal delayMs={150}>
        <APIInfo />
      </Reveal>
      <Footer />
    </div>
  );
};

export default Index;