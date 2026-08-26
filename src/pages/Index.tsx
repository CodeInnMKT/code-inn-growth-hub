import { useRef, useState } from "react";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Authority from "@/components/Authority";
import HowItWorks from "@/components/HowItWorks";
import Plans from "@/components/Plans";
// TODO: reativar quando tivermos cases reais para mostrar.
// import Portfolio from "@/components/Portfolio";
// TODO: reativar quando tivermos depoimentos reais para mostrar.
// import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const [selectedPlan, setSelectedPlan] = useState("");

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Hero />
      <PainPoints />
      <Authority />
      <HowItWorks />
      <Plans onSelectPlan={handleSelectPlan} />
      {/* <Portfolio /> */}
      {/* <Testimonials /> */}
      <Faq />
      <FinalCta />
      <ContactForm ref={contactRef} selectedPlan={selectedPlan} />
      <Footer />
    </div>
  );
};

export default Index;
