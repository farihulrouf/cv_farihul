import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";

const Index = () => {
  const skills = {
    frontend: ["React.js", "Vue.js"],
    backend: ["Python", "Node.js", "Go", "Kafka"],
    database: ["MongoDB", "PostgreSQL"],
    cloud: ["AWS", "Digital Ocean"],
    ai: ["AI LLM"],
    OS: ["Linux"],
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
      description:
        "Building automated workflows using n8n and other automation tools. Get in touch for automation solutions!",
    },
  ];

  return (
    <div className="min-h-screen bg-background relative">
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
                <a
                  href="mailto:farihulrouf@gmail.com"
                  className="hover:text-primary-foreground transition-colors"
                >
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
              Experienced Full Stack Developer with 7 years of expertise in
              building scalable web applications. Proficient in both frontend
              and backend technologies, with strong capabilities in AI LLM
              integration and workflow automation. Specialized in data
              processing, social media analytics, transcription services, and
              building automated solutions using tools like n8n.
            </p>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 bg-cv-section-bg">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-foreground">
            Technical Skills
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6 border-border">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Frontend
              </h3>
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
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Backend
              </h3>
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
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Database
              </h3>
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
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Cloud & Infrastructure
              </h3>
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
              <h3 className="text-xl font-semibold mb-4 text-primary">
                AI & Automation
              </h3>
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
          <h2 className="text-3xl font-bold mb-8 text-foreground">
            Experience & Projects
          </h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-6 border-l-4 border-l-primary bg-card hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {exp.title}
                </h3>
                <p className="text-card-foreground">{exp.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-cv-section-bg">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Let's Connect
          </h2>
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

      {/* Floating WhatsApp Chat Button */}
      <a
        href="https://wa.me/6282333899903"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="h-6 w-6"
        >
          <path d="M12.04 2c-5.5 0-9.96 4.44-9.96 9.93 0 1.75.46 3.44 1.34 4.94L2 22l5.3-1.37a9.98 9.98 0 0 0 4.74 1.21h.01c5.5 0 9.96-4.43 9.96-9.93A9.94 9.94 0 0 0 12.04 2zm0 18.2h-.01a8.17 8.17 0 0 1-4.16-1.14l-.3-.18-3.14.81.84-3.06-.2-.31a8.14 8.14 0 0 1-1.25-4.36c0-4.5 3.68-8.16 8.2-8.16a8.1 8.1 0 0 1 8.19 8.16c0 4.5-3.69 8.16-8.17 8.16zm4.55-6.12c-.25-.12-1.48-.73-1.71-.81-.23-.09-.4-.12-.57.12-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.12-1.06-.39-2.02-1.23a7.5 7.5 0 0 1-1.39-1.72c-.15-.25 0-.38.11-.5.11-.11.25-.3.37-.45.12-.15.16-.25.25-.42.09-.17.05-.31-.02-.43-.07-.12-.56-1.35-.77-1.86-.2-.5-.41-.43-.57-.44h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.23.9 2.42 1.02 2.58.12.17 1.76 2.8 4.27 3.93.6.26 1.07.42 1.43.54.6.19 1.14.16 1.57.1.48-.07 1.48-.26 1.69-1.02.21-.75.21-1.4.15-1.54-.06-.14-.22-.21-.47-.33z" />
        </svg>
      </a>
    </div>
  );
};

export default Index;
