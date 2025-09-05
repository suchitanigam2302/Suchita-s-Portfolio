import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "nigamsuchita8@gmail.com",
      href: "mailto:nigamsuchita8@gmail.com",
      primary: true
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/suchita-nigam",
      href: "https://www.linkedin.com/in/suchita-nigam-04a0792a6",
      primary: true
    },
    {
      icon: Github,
      label: "GitHub",
      value: "/suchitanigam2302",
      href: "https://github.com/suchitanigam2302",
      primary: true
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mumbai, India",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-accent">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities in AI/ML, DevOps, or project management
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            
            {contactMethods.map((method, index) => (
              <Card 
                key={method.label} 
                className={`card-hover bg-gradient-card border-primary/20 ${
                  method.primary ? 'glow-accent' : ''
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <method.icon className="h-6 w-6 text-primary-glow" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-foreground">{method.label}</div>
                      {method.href ? (
                        <a 
                          href={method.href}
                          target={method.href.startsWith('http') ? '_blank' : undefined}
                          rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-primary-glow hover:text-accent-glow transition-colors"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <div className="text-muted-foreground">{method.value}</div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="bg-gradient-primary glow-effect">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Ready to Work Together?
                </h3>
                
                <div className="space-y-4 text-white/90 mb-8">
                  <p>🚀 Open to full-time opportunities</p>
                  <p>💡 Available for consulting projects</p>
                  <p>🤝 Interested in collaborative ventures</p>
                  <p>🎓 Happy to mentor and share knowledge</p>
                </div>

                <div className="space-y-4">
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="w-full bg-white text-primary hover:bg-white/90"
                    asChild
                  >
                    <a href="mailto:nigamsuchita8@gmail.com">
                      <Mail className="mr-2 h-5 w-5" />
                      Send Email
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full border-white/30 text-white hover:bg-white/10"
                    asChild
                  >
                    <a 
                      href="https://www.linkedin.com/in/suchita-nigam-04a0792a6" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="mr-2 h-5 w-5" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Education Info */}
        <Card className="bg-gradient-card border-primary/20 animate-fade-in">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Current Education</h3>
            <p className="text-muted-foreground">
              <strong>SNDT Women's University</strong>
              <br />
              <span className="text-sm">(Shreemati Nathibai Damodar Thackersey Women's University)</span>
              <br />
              Mumbai, India
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};