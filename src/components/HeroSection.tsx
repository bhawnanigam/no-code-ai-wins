import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] bg-[length:40px_40px]"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main headline */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white mb-4 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Transform Your Future Today</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Master AI
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Without Code
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Stop watching AI change the world. Start changing it yourself.
            <br />
            <span className="text-lg opacity-80">
              Whether you're a curious student, ambitious professional, or forward-thinking business owner, 
              we make AI accessible to everyone — no coding, no confusion, just results.
            </span>
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" variant="hero" className="text-lg px-8 py-4 h-auto bg-white text-primary hover:bg-white/90">
              🚀 Start Your AI Journey Today
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 h-auto border-white/30 text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>

          {/* Trust indicator */}
          <div className="text-white/70 text-sm">
            Join 2,500+ students and professionals who've already transformed their careers
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;