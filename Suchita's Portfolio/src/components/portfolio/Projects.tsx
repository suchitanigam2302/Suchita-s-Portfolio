import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "PrepAI",
      description: "AI-powered interview preparation platform with real-time feedback and personalized coaching.",
      tech: ["Python", "Machine Learning", "React", "Flask"],
      category: "AI/ML",
      featured: true
    },
    {
      title: "Campus++",
      description: "Smart campus management system integrating notes, interview prep, and collaboration tools.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      category: "Web Development",
      featured: true
    },
    {
      title: "Interview Chatbots",
      description: "AI-powered chatbots for mock interviews and comprehensive skill assessment.",
      tech: ["Python", "NLP", "TensorFlow", "Flask"],
      category: "AI/ML"
    },
    {
      title: "CRM Tool",
      description: "Customer Relationship Management platform designed specifically for startups and SMEs.",
      tech: ["React", "Python", "PostgreSQL", "Docker"],
      category: "SaaS",
      award: "🏆 Winner - Nirman X Odoo Hackathon 2024"
    },
    {
      title: "Healthcare Solution",
      description: "Comprehensive patient management and analytics platform for healthcare providers.",
      tech: ["React", "Python", "MongoDB", "AWS"],
      category: "Healthcare"
    },
    {
      title: "AI Inventory Management",
      description: "SaaS platform with predictive analytics, logistics tracking, and sustainability monitoring.",
      tech: ["Python", "ML", "React", "PostgreSQL"],
      category: "SaaS"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-accent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions spanning AI/ML, web development, and SaaS platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className={`card-hover animate-slide-up bg-gradient-card border-primary/20 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {project.title}
                    </CardTitle>
                    <Badge variant="secondary" className="skill-tag mt-2">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {project.award && (
                  <div className="text-sm text-accent-glow font-medium mb-4">
                    {project.award}
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};