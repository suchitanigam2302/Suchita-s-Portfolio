import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-primary opacity-20" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-primary rounded-full opacity-10 floating-animation" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-secondary rounded-full opacity-10 floating-animation" style={{ animationDelay: '2s' }} />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold">
            <span className="gradient-text">Suchita</span>
            <br />
            <span className="text-foreground">Nigam</span>
          </h1>
          
          <div className="space-y-4">
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              AI/ML Enthusiast • DevOps Learner • Project Manager
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Building innovative solutions and leading diverse teams with expertise in 
              AI/ML, DevOps, and end-to-end project management
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="group"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="lg"
                className="glow-accent"
                asChild
              >
                <a href="https://github.com/suchitanigam2302" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="glow-accent"
                asChild
              >
                <a href="https://www.linkedin.com/in/suchita-nigam-04a0792a6" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="glow-accent"
                asChild
              >
                <a href="mailto:nigamsuchita8@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};