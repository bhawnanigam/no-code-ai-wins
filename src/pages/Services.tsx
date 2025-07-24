import { useState } from "react";
import { ChevronDown, ChevronUp, Phone, Globe, Users, Calendar, Brain, BookOpen, User, Building } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const services = [
    {
      title: "Go Digital with Your Website (in 1 Day)",
      steps: [
        "You bring your brand name and offerings",
        "Our AI auto-generates content, design, and pages",
        "You get a launch-ready, SEO-friendly website"
      ],
      icon: Globe
    },
    {
      title: "Generate 5 Organic Leads (in 1 Day)",
      steps: [
        "You define your niche and offer",
        "Our AI builds opt-ins, funnels, and content",
        "You start receiving 5+ high-quality organic leads"
      ],
      icon: Users
    },
    {
      title: "Autopilot Social Media Calendar (30 Days)",
      steps: [
        "You share goals and branding",
        "Our AI generates and schedules content",
        "You get automated posting for 30 days"
      ],
      icon: Calendar
    },
    {
      title: "Instant Business Starter Pack (All-in-One)",
      steps: [
        "You share your business vision",
        "We integrate all tools into one seamless setup",
        "You go live with website, leads, and social automation — in 1 day"
      ],
      icon: Brain
    }
  ];

  const capabilities = [
    {
      icon: Globe,
      title: "Website + Funnel Launch",
      description: "Sales-ready website and funnel within hours"
    },
    {
      icon: Users,
      title: "Lead Generation Funnels", 
      description: "Organic lead capture through value hooks"
    },
    {
      icon: Calendar,
      title: "Content Automation",
      description: "Schedule and publish 30+ days of content"
    },
    {
      icon: Brain,
      title: "AI-Powered Copy & Design",
      description: "Smart branded content tailored instantly"
    }
  ];

  const personas = [
    {
      icon: BookOpen,
      title: "Students / Coaches",
      description: "Launch a personal brand or online course fast"
    },
    {
      icon: User,
      title: "Freelancers / Solopreneurs", 
      description: "Save time with lead funnels + content auto-posting"
    },
    {
      icon: Building,
      title: "Small Business Owners",
      description: "Get a full digital setup without technical stress"
    }
  ];

  const faqs = [
    {
      question: "What industries can benefit from your AI?",
      answer: "Our AI solutions work across all industries - from coaching and consulting to e-commerce, healthcare, education, and professional services. The AI adapts to your specific niche and industry requirements."
    },
    {
      question: "Do I need coding skills?",
      answer: "Not at all! Our solutions are completely no-code. You just need to provide your business vision and goals, and our AI handles all the technical implementation."
    },
    {
      question: "Can you customize the AI engine for my niche?",
      answer: "Yes, absolutely! Our AI engine is trained to understand different niches and can be customized to match your specific industry, target audience, and business goals."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            AI-Powered Solutions to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Maximize Your Business Profit
            </span>
            —Fast
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            From solopreneurs to enterprises, our ready-to-deploy AI tools help you scale, 
            automate, and grow your business digitally—all in just one day.
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            <Phone className="mr-2 h-5 w-5" />
            Call for 1-Day Setup
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            How It Works – Our Fast-Track AI Services
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16">
            1-Day Launch for Maximum Impact
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {service.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-semibold flex items-center justify-center mt-0.5">
                            {stepIndex + 1}
                          </div>
                          <p className="text-muted-foreground">{step}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Core Capabilities
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="p-4 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{capability.title}</h3>
                    <p className="text-sm text-muted-foreground">{capability.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Who It's For
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {personas.map((persona, index) => {
              const IconComponent = persona.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="p-4 rounded-full bg-secondary/10 w-fit mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="font-semibold mb-2">{persona.title}</h3>
                    <p className="text-muted-foreground">{persona.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Flow */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            How It Works
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mb-3">
                1
              </div>
              <h3 className="font-semibold mb-2">User Inputs</h3>
              <p className="text-sm text-muted-foreground">Share your vision</p>
            </div>
            
            <div className="hidden md:block text-muted-foreground">→</div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mb-3">
                2
              </div>
              <h3 className="font-semibold mb-2">AI Strategy Engine</h3>
              <p className="text-sm text-muted-foreground">Smart processing</p>
            </div>
            
            <div className="hidden md:block text-muted-foreground">→</div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mb-3">
                3
              </div>
              <h3 className="font-semibold mb-2">Auto-Generated Content</h3>
              <p className="text-sm text-muted-foreground">Ready solutions</p>
            </div>
            
            <div className="hidden md:block text-muted-foreground">→</div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mb-3">
                4
              </div>
              <h3 className="font-semibold mb-2">Instant Deployment</h3>
              <p className="text-sm text-muted-foreground">Go live fast</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to See Deepiotics in Action?
          </h2>
          <Button size="lg" className="text-lg px-8 py-6">
            <Phone className="mr-2 h-5 w-5" />
            Call for 1-Day Setup
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader 
                  className="cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{faq.question}</h3>
                    {expandedFaq === index ? 
                      <ChevronUp className="h-5 w-5" /> : 
                      <ChevronDown className="h-5 w-5" />
                    }
                  </div>
                </CardHeader>
                {expandedFaq === index && (
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/services" className="hover:text-foreground transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
                <li><a href="#faq" className="hover:text-foreground transition-colors">FAQs</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Social Media</h3>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">WhatsApp</a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">YouTube</a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Instagram</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2025 Deepiotics Academy
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;