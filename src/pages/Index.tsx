import { HeroSection } from "@/components/HeroSection";
import { SampleChallengeSection } from "@/components/SampleChallengeSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { WhyThisWorksSection } from "@/components/WhyThisWorksSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SampleChallengeSection />
      <HowItWorksSection />
      <WhyThisWorksSection />
      <Footer />
    </div>
  );
};

export default Index;
