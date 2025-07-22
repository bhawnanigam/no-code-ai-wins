import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      emoji: "💼",
      name: "Sarah, Marketing Manager",
      quote: "I automated my weekly reports using no-code AI tools. I now save 12 hours every week and got promoted within 3 months.",
      impact: "12 hours saved weekly + promotion"
    },
    {
      emoji: "🎓",
      name: "Raj, High School Student", 
      quote: "I built an AI study assistant for my exams using what I learned here. My grades improved by 25% and I'm now helping my classmates too.",
      impact: "25% grade improvement"
    },
    {
      emoji: "🏢",
      name: "Mumbai Electronics Store",
      quote: "Their AI chatbot handles 80% of our customer queries automatically. Sales are up 40% and customers love the instant responses.",
      impact: "40% sales increase"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            🌟 Real People. Real Results. Real Impact.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our students aren't just learning AI — they're using it to win.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card-gradient border-border/50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">{testimonial.emoji}</div>
                  <h3 className="font-semibold text-card-foreground">{testimonial.name}</h3>
                </div>

                <blockquote className="text-muted-foreground text-center italic mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                <div className="text-center">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {testimonial.impact}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;