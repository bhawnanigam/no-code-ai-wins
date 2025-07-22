import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Wrench, Target, MapPin } from "lucide-react";

const DifferenceSection = () => {
  const differences = [
    {
      icon: MessageCircle,
      title: "🗣️ AI in Plain English",
      description: "Complex AI concepts explained in simple language anyone can understand. No coding. No confusion. Just clarity."
    },
    {
      icon: Wrench,
      title: "🛠️ No-Code AI Tools", 
      description: "Learn to use powerful AI platforms without writing a single line of code. Build chatbots, automate tasks, and create smart solutions using visual, drag-and-drop interfaces."
    },
    {
      icon: Target,
      title: "🎯 Project-Based Learning",
      description: "Every lesson ends with something you can actually use — whether it's automating your work, solving a business problem, or impressing your boss."
    },
    {
      icon: MapPin,
      title: "🇮🇳 Made for India",
      description: "Courses designed with Indian students, professionals, and businesses in mind. Real examples, relevant use cases, practical solutions."
    }
  ];

  return (
    <section className="py-20 bg-accent-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            🔥 What Makes Us Different?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differences.map((item, index) => (
            <Card key={index} className="bg-card-gradient border-border/50 hover:shadow-lg transition-all duration-300 text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg font-bold text-card-foreground leading-tight">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;