import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase, Building } from "lucide-react";

const LearningPathsSection = () => {
  const learningPaths = [
    {
      icon: GraduationCap,
      title: "🎓 For Students",
      subtitle: "AI Fundamentals + School Project Builder",
      description: "Perfect for curious students who want to get ahead with AI skills and build impressive school projects."
    },
    {
      icon: Briefcase,
      title: "👔 For Professionals", 
      subtitle: "AI Productivity Mastery + Career Accelerator",
      description: "Designed for working professionals who want to automate tasks and advance their careers with AI."
    },
    {
      icon: Building,
      title: "🏢 For Businesses",
      subtitle: "AI Implementation Strategy + Custom Solutions", 
      description: "Comprehensive AI adoption plan for business owners and decision makers looking to gain competitive advantage."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            📚 Popular Learning Paths
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            All taught in English. All no-code. All results-driven.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {learningPaths.map((path, index) => (
            <Card key={index} className="bg-card-gradient border-border/50 hover:shadow-lg transition-all duration-300 text-center h-full">
              <CardHeader className="pb-4">
                <div className="w-20 h-20 mx-auto mb-6 bg-accent-gradient rounded-2xl flex items-center justify-center">
                  <path.icon className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-card-foreground mb-2">
                  {path.title}
                </CardTitle>
                <p className="text-primary font-semibold">
                  {path.subtitle}
                </p>
              </CardHeader>
              <CardContent className="pt-0 flex flex-col justify-between flex-grow">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {path.description}
                </p>
                <Button variant="card" className="w-full">
                  Explore Path
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningPathsSection;