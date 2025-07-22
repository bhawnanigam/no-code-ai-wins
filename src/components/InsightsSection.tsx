import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";

const InsightsSection = () => {
  const articles = [
    {
      title: "5 No-Code AI Tools Every Student Should Master in 2025",
      excerpt: "Discover the essential AI tools that can transform your learning experience and give you a competitive edge.",
      author: "AI Learning Team",
      date: "Jan 15, 2025",
      readTime: "5 min read"
    },
    {
      title: "How AI Helped This Small Business Owner Triple Their Revenue",
      excerpt: "Real case study showing how simple AI automation transformed a local business in just 6 months.",
      author: "Success Stories",
      date: "Jan 12, 2025", 
      readTime: "8 min read"
    },
    {
      title: "The Complete Guide to AI Careers (No Programming Required)",
      excerpt: "Explore lucrative AI career paths that don't require coding skills and how to get started today.",
      author: "Career Guidance",
      date: "Jan 10, 2025",
      readTime: "12 min read"
    }
  ];

  return (
    <section className="py-20 bg-accent-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            📝 Stay Ahead with Our AI Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get the inside scoop on AI tools, career opportunities, and success stories
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <Card key={index} className="bg-card-gradient border-border/50 hover:shadow-lg transition-all duration-300 h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground leading-tight">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 flex flex-col justify-between flex-grow">
                <div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                </div>
                <Button variant="card" className="w-full justify-between">
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" className="px-8 py-4 h-auto">
            → Read Our Latest Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;