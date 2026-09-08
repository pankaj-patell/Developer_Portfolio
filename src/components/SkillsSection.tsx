const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Angular", level: 85 },
      { name: "TypeScript", level: 88 },
      { name: "JavaScript", level: 92 },
    ],
    color: "primary",
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 82 },
    ],
    color: "accent",
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 80 },
    ],
    color: "primary",
  },
  {
    title: "Web Design",
    skills: [
      { name: "HTML/CSS", level: 95 },
      { name: "TailwindCSS", level: 90 },
      { name: "Bootstrap", level: 88 },
      { name: "Material UI", level: 82 },
    ],
    color: "accent",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            My Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Technical Skills
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className="bg-card p-6 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span
                  className={`w-3 h-3 rounded-full ${
                    category.color === "primary" ? "bg-primary" : "bg-accent"
                  }`}
                />
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${
                          category.color === "primary"
                            ? "bg-gradient-primary"
                            : "bg-gradient-accent"
                        }`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
