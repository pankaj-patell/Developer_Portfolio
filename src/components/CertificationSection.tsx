import { Award } from "lucide-react";

const certifications = [
  {
    title: "MERN Stack",
    duration: "6 months",
    organization: "DevexHUB Pvt. Ltd",
    period: "Jan 2024 – June 2024",
  },
  {
    title: "Web Development",
    duration: "45 days",
    organization: "O7 Services",
    period: "July 2023 – August 2023",
  },
];

const CertificationSection = () => {
  return (
    <section id="certifications" className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Decorative floating circles */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary/5 animate-float blur-xl" />
      <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-accent/10 animate-float-delayed blur-lg" />
      <div className="absolute bottom-20 left-1/4 w-40 h-40 rounded-full bg-primary/10 animate-float blur-2xl" />
      <div className="absolute bottom-40 right-1/3 w-20 h-20 rounded-full bg-accent/5 animate-float-delayed blur-md" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Certifications
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional <span className="text-gradient">Credentials</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Validated skills and knowledge through industry-recognized certifications
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-12 md:gap-20">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-xl scale-110 group-hover:scale-125 transition-transform duration-500" />
              
              {/* Main circular container */}
              <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-card via-card to-secondary/50 shadow-card-hover border border-border/50 flex flex-col items-center justify-center p-6 group-hover:shadow-glow transition-all duration-500">
                {/* Inner shine effect */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Glossy overlay */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/3 rounded-full bg-gradient-to-b from-background/30 to-transparent blur-sm" />
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Award className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{cert.title}</h3>
                  <p className="text-sm text-primary font-semibold mb-2">{cert.duration}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {cert.organization}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{cert.period}</p>
                </div>
              </div>

              {/* Connecting line to next circle (except last) */}
              {index < certifications.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-16 w-12 h-0.5 bg-gradient-to-r from-primary/30 to-accent/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
