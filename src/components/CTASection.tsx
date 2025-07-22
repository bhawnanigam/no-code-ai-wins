import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-hero-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] bg-[length:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Card className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm border-white/20">
          <CardContent className="p-12 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white mb-6 backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Ready to Transform Your Future?</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                🎯 Ready to Join the AI Revolution?
              </h2>
            </div>

            <div className="space-y-4 mb-8 text-white text-lg md:text-xl">
              <p className="font-medium">Stop thinking "AI is too complicated for me."</p>
              <p className="font-medium">Start thinking "AI is my competitive advantage."</p>
              <p className="text-white/80">
                The future belongs to those who can harness AI's power — not those who can code it.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="text-lg px-8 py-4 h-auto bg-white text-primary hover:bg-white/90 shadow-lg">
                🚀 Start Your AI Journey Today — English Only, No Code Required
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            <p className="text-white/80 text-sm">
              Join 2,500+ students and professionals who've already transformed their careers with our no-code AI training.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;