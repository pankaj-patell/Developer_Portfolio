import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Yono Entertainment Pvt. Ltd.",
    period: "Jan 2026 - Jun 2026",
    description: [
      "Developed end-to-end full-stack features using React for UI components and animations",
      "Built secure backend services including APIs, authentication, and database workflows",
      "Implemented real-time communication using Socket.IO and WebRTC",
      "Integrated key third-party services to enhance platform functionality and performance",
    ],
    current: false,
  },
  {
    title: "MERN Stack Developer",
    company: "DevexHub Pvt. Ltd.",
    period: "Aug 2024 - Sept 2025",
    description: [
      "Developed and maintained scalable web applications using Angular, React, Node.js",
      "Designed, implemented, and optimized RESTful APIs for seamless front-end and back-end integration",
      "Assisted in integrating third-party APIs (payment, maps, authentication) into existing applications",
      "Worked with version control systems (Git/GitHub) for collaborative development and release management",
    ],
    current: false,
  },
  {
    title: "Junior Software Engineer Intern",
    company: "DevexHub Pvt. Ltd.",
    period: "May 2024 - Aug 2024",
    description: [
      "Collaborated with the development team to design and implement end-to-end features",
      "Worked across both front-end (React/Angular) and back-end (Node.js, Express.js)",
      "Created reusable UI components and optimized rendering for better performance",
      "Contributed to single-page application development with focus on code quality",
    ],
    current: false,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Career Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Work Experience
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            My professional journey building scalable applications and delivering impactful solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30 transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 opacity-0 animate-fade-in ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: "forwards" }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 md:-translate-x-1/2 border-4 border-background shadow-lg z-10">
                {exp.current && (
                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                )}
              </div>

              {/* Content card */}
              <div
                className={`ml-8 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="bg-card p-6 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 group">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Briefcase className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium text-sm">{exp.company}</p>
                      </div>
                    </div>
                    {exp.current && (
                      <span className="px-3 py-1 bg-green-500/10 text-green-500 text-xs font-semibold rounded-full">
                        Current
                      </span>
                    )}
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground text-sm flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
