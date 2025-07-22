import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Modern geometric background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-primary/5 via-transparent to-accent/5 rounded-full blur-2xl"></div>
        </div>
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* International trust badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border/50 shadow-lg backdrop-blur-sm mb-6">
              <div className="flex -space-x-1">
                <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-orange-500 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-purple-500 rounded-full border-2 border-white"></div>
              </div>
              <span className="text-sm font-medium text-foreground">Trusted by professionals in 50+ countries</span>
            </div>
          </div>

          {/* Main headline with international appeal */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-tight">
              <span className="block">Master</span>
              <span className="bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent block">
                AI Without Code
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl text-muted-foreground mt-4">
                Transform Your Future Today
              </span>
            </h1>
          </div>

          {/* Global positioning subtitle */}
          <div className="text-center mb-12">
            <p className="text-xl md:text-2xl text-foreground mb-6 max-w-4xl mx-auto leading-relaxed font-medium">
              Stop watching AI change the world. <span className="text-primary font-semibold">Start changing it yourself.</span>
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Whether you're a curious student, ambitious professional, or forward-thinking business leader worldwide, 
              we make enterprise-grade AI accessible to everyone — no coding, no confusion, just results.
            </p>
          </div>

          {/* International CTA section */}
          <div className="text-center mb-16">
            <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-8">
              <Button size="lg" variant="hero" className="text-lg px-10 py-6 h-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl">
                <Sparkles className="w-5 h-5 mr-2" />
                Start Your AI Transformation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-6 h-auto border-2 hover:bg-accent">
                Watch Demo
              </Button>
            </div>
            
            {/* Global stats */}
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm">5,000+ Global Students</span>
              </div>
              <div className="hidden md:block w-px h-4 bg-border"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm">50+ Countries</span>
              </div>
              <div className="hidden md:block w-px h-4 bg-border"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-sm">Enterprise-Grade Solutions</span>
              </div>
            </div>
          </div>

          {/* Global companies trust banner */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-6">Trusted by professionals at leading companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="h-8 px-4 bg-muted rounded flex items-center text-xs font-medium">MICROSOFT</div>
              <div className="h-8 px-4 bg-muted rounded flex items-center text-xs font-medium">GOOGLE</div>
              <div className="h-8 px-4 bg-muted rounded flex items-center text-xs font-medium">IBM</div>
              <div className="h-8 px-4 bg-muted rounded flex items-center text-xs font-medium">AMAZON</div>
              <div className="h-8 px-4 bg-muted rounded flex items-center text-xs font-medium">SALESFORCE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;