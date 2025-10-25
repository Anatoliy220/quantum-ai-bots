import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import AdvantagesDetailed from "@/components/AdvantagesDetailed";
import UseCases from "@/components/UseCases";
import Platforms from "@/components/Platforms";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Benefits />
      <AdvantagesDetailed />
      <UseCases />
      <Platforms />
      <Process />
      <Portfolio />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
