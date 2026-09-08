import { GraduationCap, Calendar, Award } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "I.K.G.P.T.U Hoshiarpur",
    year: "2020 - 2024",
    score: "CGPA: 8.6",
    icon: GraduationCap,
  },
  {
    degree: "PCM Stream (12th Standard)",
    institution: "G.S.S.S. School Dhadhe Fateh Singh, Hoshiarpur",
    year: "2019 - 2020",
    score: "Percentage: 91.5%",
    icon: Award,
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Designing Solutions, Not Just Visuals
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <div className="space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm Pankaj Patel, a passionate Full-Stack Developer based in Mohali, Punjab. 
              With a strong foundation in both frontend and backend technologies, I specialize 
              in creating robust, scalable web applications that deliver exceptional user experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in software development began during my B.Tech studies, where I 
              developed a deep understanding of computer science fundamentals. Since then, 
              I've worked on diverse projects ranging from SaaS platforms to e-learning systems, 
              always striving to write clean, maintainable code.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in continuous learning and staying updated with the latest technologies 
              and industry best practices. My goal is to create digital solutions that not only 
              meet client requirements but exceed their expectations.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center p-4 bg-secondary rounded-xl">
                <span className="text-3xl font-bold text-primary">8+</span>
                <p className="text-sm text-muted-foreground mt-1">Projects</p>
              </div>
              <div className="text-center p-4 bg-secondary rounded-xl">
                <span className="text-3xl font-bold text-primary">1.5</span>
                <p className="text-sm text-muted-foreground mt-1">Years Exp.</p>
              </div>
              <div className="text-center p-4 bg-secondary rounded-xl">
                <span className="text-3xl font-bold text-primary">8.6</span>
                <p className="text-sm text-muted-foreground mt-1">CGPA</p>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <GraduationCap className="text-primary" />
              Education
            </h3>

            <div className="space-y-6">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-6 border-l-2 border-primary/30 last:pb-0"
                >
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <item.icon size={14} className="text-primary-foreground" />
                  </div>
                  <div className="bg-secondary p-6 rounded-xl hover:shadow-card transition-shadow duration-300">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar size={14} />
                      <span>{item.year}</span>
                    </div>
                    <h4 className="font-bold text-foreground mb-1">{item.degree}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{item.institution}</p>
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {item.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
