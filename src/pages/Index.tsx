import { useRef, useState } from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Plans from "@/components/Plans";
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
      <Hero onScrollToPlans={scrollToContact} />
      <Services />
      <Plans onSelectPlan={handleSelectPlan} />
      <ContactForm ref={contactRef} selectedPlan={selectedPlan} />
      <Footer />
    </div>
  );
};

export default Index;