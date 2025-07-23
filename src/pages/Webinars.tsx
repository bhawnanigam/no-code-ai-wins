import { useState } from "react";
import { Search, Calendar, Clock, Play, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";

const Webinars = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const webinars = [
    {
      id: 1,
      title: "FREE & Online (LIVE only) Boost Your Study Abroad Applications Through Research Paper Publishing",
      host: "Deepiotics Academy",
      date: "2025-01-30",
      time: "7:00 PM IST",
      description: "Learn how to strengthen your study abroad applications by publishing research papers in reputable journals.",
      tags: ["Study Abroad", "Research", "Academic Writing"],
      type: "live",
      category: "Research",
      duration: "2 hours",
      thumbnail: "/placeholder.svg",
      registered: 156
    },
    {
      id: 2,
      title: "How to Convert the Doctorate of Business Administration Research to Published Research Paper",
      host: "Deepiotics Academy",
      date: "2025-02-05",
      time: "6:30 PM IST",
      description: "Transform your DBA research into publishable papers that advance your academic and professional career.",
      tags: ["DBA", "Research", "Publication"],
      type: "live",
      category: "Research",
      duration: "1.5 hours",
      thumbnail: "/placeholder.svg",
      registered: 89
    },
    {
      id: 3,
      title: "How to Generate Organic Leads for MSMEs",
      host: "Deepiotics Academy",
      date: "2025-01-20",
      time: "Recorded",
      description: "Discover proven strategies to generate high-quality organic leads for small and medium enterprises.",
      tags: ["MSME", "Lead Generation", "Marketing"],
      type: "recording",
      category: "Business",
      duration: "45 minutes",
      thumbnail: "/placeholder.svg",
      registered: 234
    },
    {
      id: 4,
      title: "AI Marketing Strategies for Modern Businesses",
      host: "Deepiotics Academy",
      date: "2025-02-10",
      time: "8:00 PM IST",
      description: "Harness the power of AI to transform your marketing efforts and drive business growth.",
      tags: ["AI", "Marketing", "Business"],
      type: "live",
      category: "AI",
      duration: "1 hour",
      thumbnail: "/placeholder.svg",
      registered: 178
    },
    {
      id: 5,
      title: "Building Your Personal Brand Through Research",
      host: "Deepiotics Academy",
      date: "2025-01-15",
      time: "Recorded",
      description: "Learn how to establish yourself as a thought leader through strategic research and publication.",
      tags: ["Personal Branding", "Research", "Career"],
      type: "recording",
      category: "Career",
      duration: "1.5 hours",
      thumbnail: "/placeholder.svg",
      registered: 145
    },
    {
      id: 6,
      title: "Data-Driven Decision Making for Business Leaders",
      host: "Deepiotics Academy",
      date: "2025-02-15",
      time: "7:30 PM IST",
      description: "Master the art of making informed business decisions using data analytics and insights.",
      tags: ["Data Analytics", "Leadership", "Business"],
      type: "live",
      category: "Business",
      duration: "2 hours",
      thumbnail: "/placeholder.svg",
      registered: 92
    }
  ];

  const filteredWebinars = webinars.filter(webinar => {
    const matchesSearch = webinar.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         webinar.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = filterType === "all" || webinar.type === filterType;
    const matchesCategory = filterCategory === "all" || webinar.category === filterCategory;
    
    return matchesSearch && matchesType && matchesCategory;
  });

  const webinarsPerPage = 6;
  const totalPages = Math.ceil(filteredWebinars.length / webinarsPerPage);
  const startIndex = (currentPage - 1) * webinarsPerPage;
  const currentWebinars = filteredWebinars.slice(startIndex, startIndex + webinarsPerPage);

  const isUpcoming = (date: string) => {
    if (date === "Recorded") return false;
    return new Date(date) > new Date();
  };

  const formatDate = (date: string) => {
    if (date === "Recorded") return "Available Now";
    return new Date(date).toLocaleDateString('en-US', { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Live & Recorded Webinars to{" "}
            <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Accelerate Your Growth
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join free expert-led sessions on AI, Business & Career Strategy – Live or On-Demand
          </p>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search webinars by title or topic..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-4">
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="live">Live</SelectItem>
                  <SelectItem value="recording">Recording</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Research">Research</SelectItem>
                  <SelectItem value="Business">Business</SelectItem>
                  <SelectItem value="AI">AI</SelectItem>
                  <SelectItem value="Career">Career</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Webinar Grid Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {currentWebinars.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-foreground mb-4">No Webinars Found</h3>
              <p className="text-muted-foreground mb-8">Try adjusting your search criteria or browse all webinars</p>
              <Button onClick={() => { setSearchTerm(""); setFilterType("all"); setFilterCategory("all"); }}>
                Clear Filters
              </Button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentWebinars.map((webinar) => (
                  <Card key={webinar.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="relative">
                      <img 
                        src={webinar.thumbnail} 
                        alt={webinar.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <Badge 
                        variant={webinar.type === "live" ? "default" : "secondary"}
                        className="absolute top-4 right-4"
                      >
                        {webinar.type === "live" ? "Live" : "Recording"}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                        {webinar.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>By {webinar.host}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {webinar.description}
                      </p>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {formatDate(webinar.date)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {webinar.duration}
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        {webinar.registered} registered
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {webinar.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <Button 
                        className="w-full" 
                        variant={webinar.type === "live" ? "default" : "secondary"}
                      >
                        {webinar.type === "live" ? (
                          <>
                            <Calendar className="h-4 w-4 mr-2" />
                            {isUpcoming(webinar.date) ? "Register Now" : "Join Live"}
                          </>
                        ) : (
                          <>
                            <Play className="h-4 w-4 mr-2" />
                            Watch Recording
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-4 mt-12">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  <span className="text-muted-foreground">
                    Page {currentPage} of {totalPages}
                  </span>
                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-16 bg-card-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Want Free Access to All Live Webinars?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community and never miss an expert-led session. Get instant notifications for upcoming webinars.
          </p>
          <Button size="lg" variant="hero">
            Join Our Community
          </Button>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Don't Miss Future Webinars
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about upcoming webinars, exclusive content, and special offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email address"
              className="flex-1"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#upcoming" className="text-muted-foreground hover:text-primary">Upcoming Webinars</a></li>
                <li><a href="#recordings" className="text-muted-foreground hover:text-primary">Watch Recordings</a></li>
                <li><a href="#faq" className="text-muted-foreground hover:text-primary">FAQ</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-primary">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Categories</h3>
              <ul className="space-y-2">
                <li><a href="#research" className="text-muted-foreground hover:text-primary">Research</a></li>
                <li><a href="#business" className="text-muted-foreground hover:text-primary">Business</a></li>
                <li><a href="#ai" className="text-muted-foreground hover:text-primary">AI & Technology</a></li>
                <li><a href="#career" className="text-muted-foreground hover:text-primary">Career Development</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#help" className="text-muted-foreground hover:text-primary">Help Center</a></li>
                <li><a href="#technical" className="text-muted-foreground hover:text-primary">Technical Support</a></li>
                <li><a href="#privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</a></li>
                <li><a href="#terms" className="text-muted-foreground hover:text-primary">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                <a href="#whatsapp" className="text-muted-foreground hover:text-primary">WhatsApp</a>
                <a href="#youtube" className="text-muted-foreground hover:text-primary">YouTube</a>
                <a href="#linkedin" className="text-muted-foreground hover:text-primary">LinkedIn</a>
                <a href="#instagram" className="text-muted-foreground hover:text-primary">Instagram</a>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground">© 2025 Deepiotics Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Webinars;