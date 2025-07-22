import HeroSection from "@/components/HeroSection";
import PathsSection from "@/components/PathsSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DifferenceSection from "@/components/DifferenceSection";
import LearningPathsSection from "@/components/LearningPathsSection";
import InsightsSection from "@/components/InsightsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PathsSection />
      <BenefitsSection />
      <TestimonialsSection />
      <DifferenceSection />
      <LearningPathsSection />
      <InsightsSection />
      <CTASection />
    </div>
  );
};

export default Index;
