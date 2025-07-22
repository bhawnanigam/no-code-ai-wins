import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    "English-Only Learning — No technical jargon, no coding required",
    "Real Projects — Build actual AI tools you can use immediately",
    "All Skill Levels — From complete beginner to business leader",
    "Proven Results — Our students are already transforming their lives",
    "Expert Support — Get guidance from AI professionals who speak your language",
    "Fast-Track Success — See results in weeks, not years"
  ];

  return (
    <section className="py-20 bg-accent-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            💡 Why Choose Us?
          </h2>
          <p className="text-2xl text-muted-foreground mb-12 font-medium">
            Because AI shouldn't be rocket science.
          </p>

          <Card className="bg-card-gradient border-border/50 shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 text-left">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-card-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;