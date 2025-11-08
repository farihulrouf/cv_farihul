import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";

const Index = () => {
  const skills = {
    frontend: ["React.js", "Vue.js"],
    backend: ["Python", "Node.js", "Go"],
    database: ["MongoDB", "PostgreSQL"],
    cloud: ["AWS"],
    ai: ["AI LLM"],
    automation: ["n8n", "Workflow Automation"],
  };

  const experiences = [
    {
      title: "Transcriber",
      description: "Audio and video transcription services with high accuracy",
    },
    {
      title: "Social Media Analytics",
      description: "Data analysis and insights from social media platforms",
    },
    {
      title: "Data Scraping",
      description: "Web scraping and data extraction solutions",
    },
    {
      title: "Automation & Workflow",
      description: "Building automated workflows using n8n and other automation tools. Get in touch for automation solutions!",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-4">
              Farihul Rouf
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-2">
              Full Stack Developer | AI LLM Specialist
            </p>
            <p className="text-lg text-primary-foreground/80 mb-6">
              7 Years of Professional Experience
            </p>
            <div className="flex flex-wrap gap-4 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <a href="mailto:farihulrouf@gmail.com" className="hover:text-primary-foreground transition-colors">
                  farihulrouf@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>+62 823 3389 9903</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-foreground">About Me</h2>
          <Card className="p-6 bg-cv-section-bg border-border">
            <p className="text-lg text-card-foreground leading-relaxed">
              Experienced Full Stack Developer with 7 years of expertise in building scalable web applications. 
              Proficient in both frontend and backend technologies, with strong capabilities in AI LLM integration 
              and workflow automation. Specialized in data processing, social media analytics, transcription services, 
              and building automated solutions using tools like n8n.
            </p>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 bg-cv-section-bg">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Technical Skills</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6 border-border">
              <h3 className="text-xl font-semibold mb-4 text-primary">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <Badge 
                    key={skill} 
                    className="bg-cv-skill-bg text-primary border-cv-skill-border hover:bg-primary hover:text-primary-foreground transition-colors"
                    variant="outline"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 border-border">
              <h3 className="text-xl font-semibold mb-4 text-primary">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <Badge 
                    key={skill} 
                    className="bg-cv-skill-bg text-primary border-cv-skill-border hover:bg-primary hover:text-primary-foreground transition-colors"
                    variant="outline"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 border-border">
              <h3 className="text-xl font-semibold mb-4 text-primary">Database</h3>
              <div className="flex flex-wrap gap-2">
                {skills.database.map((skill) => (
                  <Badge 
                    key={skill} 
                    className="bg-cv-skill-bg text-primary border-cv-skill-border hover:bg-primary hover:text-primary-foreground transition-colors"
                    variant="outline"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 border-border">
              <h3 className="text-xl font-semibold mb-4 text-primary">Cloud & Infrastructure</h3>
              <div className="flex flex-wrap gap-2">
                {skills.cloud.map((skill) => (
                  <Badge 
                    key={skill} 
                    className="bg-cv-skill-bg text-primary border-cv-skill-border hover:bg-primary hover:text-primary-foreground transition-colors"
                    variant="outline"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 border-border">
              <h3 className="text-xl font-semibold mb-4 text-primary">AI & Automation</h3>
              <div className="flex flex-wrap gap-2">
                {skills.ai.map((skill) => (
                  <Badge 
                    key={skill} 
                    className="bg-cv-skill-bg text-primary border-cv-skill-border hover:bg-primary hover:text-primary-foreground transition-colors"
                    variant="outline"
                  >
                    {skill}
                  </Badge>
                ))}
                {skills.automation.map((skill) => (
                  <Badge 
                    key={skill} 
                    className="bg-cv-skill-bg text-primary border-cv-skill-border hover:bg-primary hover:text-primary-foreground transition-colors"
                    variant="outline"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Experience & Projects</h2>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="p-6 border-l-4 border-l-primary bg-card hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-primary mb-2">{exp.title}</h3>
                <p className="text-card-foreground">{exp.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-cv-section-bg">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Open to new opportunities and collaborations
          </p>
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/farihulrouf" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/farihulrouf/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="mailto:farihulrouf@gmail.com" 
              className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="h-6 w-6" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
