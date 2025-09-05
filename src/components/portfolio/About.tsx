import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Briefcase, Users } from "lucide-react";

export const About = () => {
  const skills = {
    "Programming": ["Python", "C", "C++", "Java", "JavaScript"],
    "AI/ML": ["Machine Learning", "Deep Learning", "AI Development", "Data Science"],
    "DevOps": ["Git/GitHub", "CI/CD", "Cloud Platforms", "Docker"],
    "Management": ["Project Management", "Team Leadership", "Agile", "Scrum"]
  };

  const stats = [
    { icon: Code, label: "Projects", value: "15+" },
    { icon: Users, label: "Teams Led", value: "10+" },
    { icon: Briefcase, label: "Experience", value: "2+ Years" },
    { icon: Database, label: "Technologies", value: "20+" }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Currently pursuing my Diploma in Information Technology with a 92% aggregate at Thakur Polytechnic, 
            I bring both industry and startup exposure through hands-on project management and technical innovation.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="card-hover animate-slide-up bg-gradient-card border-primary/20" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary-glow" />
                <div className="text-2xl font-bold text-primary-glow">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-bold">Skills & Expertise</h3>
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={category} className="space-y-3">
                <h4 className="text-lg font-semibold text-primary-glow">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <Badge key={skill} variant="secondary" className="skill-tag">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Card className="card-hover animate-slide-up bg-gradient-card border-primary/20" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  🎓 <strong>Student at Thakur Polytechnic</strong> - Pursuing Diploma in IT with 92% aggregate
                </p>
                <p>
                  💼 <strong>Project Manager at Elite Forums</strong> - Leading cross-functional teams and delivering results
                </p>
                <p>
                  🌍 <strong>International Experience</strong> - Contributing to projects at LiveTech, Canada
                </p>
                <p>
                  🚀 <strong>Startup Exposure</strong> - Building solutions from ideation to deployment
                </p>
                <p>
                  🏆 <strong>Community Leader</strong> - Mentor, committee member, and active contributor
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};