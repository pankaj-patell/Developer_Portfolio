import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "PD Truck Rental",
    description:
      "A comprehensive truck rental SaaS platform featuring online payments, automated contract generation, and multi-tenant support for seamless fleet management.",
    technologies: ["TypeScript", "Angular", "Node.js", "MySQL"],
    color: "primary",
    showGitHub: true,
    githubUrl: "https://github.com/pankaj-patell/PD_Truck_Rental",
    showLiveDemo: true,
    liveUrl: "https://pdtruckrental.com/"
  },
  {
    title: "DazlPro",
    description:
      "A property selling platform with multiple user roles including agents, buyers, and administrators, featuring detailed property listings and advanced search functionality.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "React.js"],
    color: "accent",
    showGitHub: false,
    githubUrl: "#",
    showLiveDemo: true,
    liveUrl: "https://dazlpro.com/"
  },
  {
    title: "Lediea",
    description:
      "An interactive online learning platform enabling course browsing, progress tracking, and engaging learning features for students worldwide.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    color: "primary",
    showGitHub: true,
    githubUrl: "https://github.com/pankaj-patell/Lediea",
    showLiveDemo: false,
    liveUrl: "https://dazlpro.com/"
  },
  {
    title: "Attendance Management System",
    description:
      "A secure attendance tracking system with role-based access for admins and students, featuring dynamic course management and comprehensive reporting.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP"],
    color: "accent",
    showGitHub: true,
    githubUrl: "https://github.com/pankaj-patell/Attendance_Management_System",
    showLiveDemo: false,
    liveUrl: "#"
  },
   {
    title: "Boxxer World",
    description:
      "A custom fightwear platform that turns a fighter’s vision into production-ready gear through an interactive design experience. Users can personalize apparel, equipment, colours, logos, and artwork while creating individual or team collections.",
    technologies: ["Angular", "Feather", "TypeScript", "Material UI", "Tailwind CSS" ,"MongoDB"],
    color: "primary",
    showGitHub: false,
    githubUrl: "#",
    showLiveDemo: true,
    liveUrl: "https://www.boxxerworld.com/"
  },
   {
    title: "Developer Portfolio",
    description:
      "A thoughtfully designed digital space built to turn a developer’s experience into an interactive story, combining project showcases, technical expertise, and professional milestones in a seamless browsing experience.",
    technologies: ["React", "TypeScript" ,"Tailwind CSS"],
    color: "accent",
    showGitHub: true,
    githubUrl: "https://github.com/pankaj-patell/Developer_Portfolio",
    showLiveDemo: true,
    liveUrl: "https://pankajpatelportfolio.netlify.app/"
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Digital Product Showcases
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A collection of projects demonstrating my expertise in full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Project header with gradient */}
              <div
                className={`h-32 ${project.color === "primary"
                  ? "bg-gradient-primary"
                  : "bg-gradient-accent"
                  } relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-foreground/5" />
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card to-transparent" />
              </div>

              <div className="p-6 -mt-8 relative">
                <div className="bg-card p-4 rounded-xl shadow-card mb-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${project.color === "primary"
                        ? "bg-primary/10 text-primary"
                        : "bg-accent/10 text-accent"
                        }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                  <Button
                    variant={project.color === "primary" ? "default" : "accent"}
                    size="sm"
                    className="gap-2"
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </Button>
                </div> */}

                <div className="flex gap-3">
                  {project.showGitHub && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    </Button>
                  )}

                  {project.showLiveDemo && (
                    <Button
                      variant={project.color === "primary" ? "default" : "accent"}
                      size="sm"
                      className="gap-2"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
