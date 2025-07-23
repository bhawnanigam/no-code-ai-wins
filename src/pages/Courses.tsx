import { useState } from "react";
import { Search, Filter, ChevronDown, Star, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import Header from "@/components/Header";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [filterType, setFilterType] = useState("all");
  const [filterDomain, setFilterDomain] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const courses = [
    {
      id: 1,
      title: "Research Paper Writing for DBA",
      domain: "Research Writing",
      type: "Live",
      duration: "3 Months",
      enrolled: 1250,
      rating: 4.8,
      image: "photo-1461749280684-dccba630e2f6",
      badge: "Live",
    },
    {
      id: 2,
      title: "AI Marketing for Business",
      domain: "AI Marketing",
      type: "Recording",
      duration: "1 Month",
      enrolled: 890,
      rating: 4.7,
      image: "photo-1485827404703-89b55fcc595e",
      badge: "Crash Course",
    },
    {
      id: 3,
      title: "Research Paper Writing for High School",
      domain: "Research Writing",
      type: "Live",
      duration: "1 Week",
      enrolled: 2100,
      rating: 4.9,
      image: "photo-1581091226825-a6a2a5aee158",
      badge: "Live",
    },
    {
      id: 4,
      title: "Organic Lead Generation for MSME",
      domain: "Lead Generation",
      type: "Recording",
      duration: "1 Month",
      enrolled: 756,
      rating: 4.6,
      image: "photo-1487058792275-0ad4aaf24ca7",
      badge: "Recording",
    },
    {
      id: 5,
      title: "Advanced AI Programming",
      domain: "AI Programming",
      type: "Live",
      duration: "3 Months",
      enrolled: 543,
      rating: 4.8,
      image: "photo-1519389950473-47ba0277781c",
      badge: "Live",
    },
    {
      id: 6,
      title: "Web Development Fundamentals",
      domain: "Web Development",
      type: "Recording",
      duration: "1 Month",
      enrolled: 1876,
      rating: 4.7,
      image: "photo-1498050108023-c5249f4df085",
      badge: "Crash Course",
    },
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.domain.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "all" || course.type.toLowerCase() === filterType.toLowerCase();
    const matchesDomain = filterDomain === "all" || course.domain === filterDomain;
    
    return matchesSearch && matchesType && matchesDomain;
  });

  const coursesPerPage = 6;
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const startIndex = (currentPage - 1) * coursesPerPage;
  const paginatedCourses = filteredCourses.slice(startIndex, startIndex + coursesPerPage);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/20 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Discover Courses to Boost Your Career
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Live classes, self‑paced modules & executive certificates
            </p>
            
            {/* Search and Filter Bar */}
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search courses by title or domain..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>
                
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger className="w-full md:w-48 h-12">
                    <SelectValue placeholder="Course Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="live">Live</SelectItem>
                    <SelectItem value="recording">Recording</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full md:w-48 h-12">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="a-z">A–Z</SelectItem>
                    <SelectItem value="z-a">Z–A</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedCourses.map((course) => (
              <Card key={course.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={`https://images.unsplash.com/${course.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge 
                    variant={course.badge === "Live" ? "default" : "secondary"}
                    className="absolute top-4 right-4"
                  >
                    {course.badge}
                  </Badge>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">By Deepiotics Academy</p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{course.enrolled.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full" variant="hero">
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage > 1) setCurrentPage(currentPage - 1);
                      }}
                    />
                  </PaginationItem>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        href="#"
                        isActive={currentPage === page}
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(page);
                        }}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  
                  <PaginationItem>
                    <PaginationNext 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                      }}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Access Course</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Refund Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Facebook</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Instagram</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">YouTube</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">WhatsApp</a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <p className="text-muted-foreground">
                Get in touch with our team for any questions about our courses.
              </p>
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

export default Courses;