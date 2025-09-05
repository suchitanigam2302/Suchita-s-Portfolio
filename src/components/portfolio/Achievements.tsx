import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Users, Star } from "lucide-react";

export const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Nirman X Odoo Hackathon 2024",
      description: "Winner for developing innovative CRM Tool",
      category: "Competition",
      highlight: true
    },
    {
      icon: Award,
      title: "2X Hackathon",
      description: "Secured Top 10 position among hundreds of participants",
      category: "Competition"
    },
    {
      icon: Award,
      title: "Mumbai University Recognition",
      description: "Incubation support winner for entrepreneurial excellence",
      category: "Academic"
    },
    {
      icon: Users,
      title: "Women in Tech Committee",
      description: "Active member promoting diversity and inclusion in technology",
      category: "Leadership"
    },
    {
      icon: Star,
      title: "Hackathon Mentor",
      description: "Mentoring teams across multiple hackathons and events",
      category: "Mentorship"
    },
    {
      icon: Users,
      title: "GirlScript Summer of Code",
      description: "Contributor to open-source projects and community building",
      category: "Open Source"
    },
    {
      icon: Award,
      title: "Let'sUpgrade Student Ambassador",
      description: "Leading educational initiatives and student engagement",
      category: "Leadership"
    }
  ];

  const categories = ["Competition", "Academic", "Leadership", "Mentorship", "Open Source"];

  return (
    <section id="achievements" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Achievements</span> & Leadership
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognition for technical excellence, leadership, and community contribution
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Badge key={category} variant="secondary" className="skill-tag">
              {category}
            </Badge>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card 
              key={achievement.title}
              className="card-hover animate-slide-up border-primary/20 bg-gradient-primary glow-effect"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-white/20">
                    <achievement.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-white">
                        {achievement.title}
                      </h3>
                      <Badge 
                        variant="outline" 
                        className="text-xs border-white/30 text-white/80"
                      >
                        {achievement.category}
                      </Badge>
                    </div>
                    
                    <p className="text-sm leading-relaxed text-white/80">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="bg-gradient-card border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Passion & Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm passionate about creating scalable solutions, mentoring peers, and contributing to the tech community. 
                My goal is to apply my technical expertise, leadership skills, and innovative mindset to solve real-world 
                challenges and drive meaningful impact in the technology sector.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};