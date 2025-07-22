import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Zap, TrendingUp } from "lucide-react";

const PathsSection = () => {
  const paths = [
    {
      icon: GraduationCap,
      title: "🎓 Learn AI (No Code Required)",
      description: "Master AI tools and techniques through hands-on projects — all taught in clear, simple English. No programming background needed.",
      features: ["Hands-on projects", "Plain English teaching", "No coding required", "Immediate results"]
    },
    {
      icon: Zap,
      title: "⚡ Done-for-You AI Solutions",
      description: "Need results fast? Our experts build custom AI solutions for your business while you focus on what you do best.",
      features: ["Custom solutions", "Expert implementation", "Fast results", "Focus on your business"]
    },
    {
      icon: TrendingUp,
      title: "📈 Stay AI-Ready",
      description: "Keep up with the latest tools, trends, and opportunities through our expert insights and real-world case studies.",
      features: ["Latest AI trends", "Expert insights", "Real case studies", "Competitive advantage"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            🚀 Your AI Journey Starts Here
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn AI in plain English. Build real solutions with no-code tools. Get results that matter.
          </p>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-foreground mb-8">Choose Your Path:</h3>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {paths.map((path, index) => (
            <Card key={index} className="h-full bg-card-gradient border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent-gradient rounded-2xl flex items-center justify-center">
                  <path.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground leading-tight">
                  {path.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {path.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {path.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">✅</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="card" className="w-full">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PathsSection;