import { Code, Palette, Server, Briefcase } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Building responsive, performant web applications using modern frameworks and best practices for optimal user experience.",
    color: "primary",
  },
  {
    icon: Palette,
    title: "Web Designing",
    description:
      "Creating visually stunning and intuitive interfaces with attention to detail, accessibility, and modern design trends.",
    color: "accent",
  },
  {
    icon: Server,
    title: "Full-Stack Development",
    description:
      "End-to-end development from database design to frontend implementation, delivering complete, scalable solutions.",
    color: "primary",
  },
  {
    icon: Briefcase,
    title: "Portfolio Websites",
    description:
      "Crafting professional portfolio websites that showcase your work effectively and help you stand out from the crowd.",
    color: "accent",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Expertise Services! Let's Check It Out
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Comprehensive web development services tailored to bring your digital vision to life
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 opacity-0 animate-fade-in ${
                index % 2 === 1
                  ? "bg-gradient-accent text-accent-foreground"
                  : "bg-background hover:shadow-card-hover"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${
                  index % 2 === 1
                    ? "bg-accent-foreground/20"
                    : "bg-primary/10"
                }`}
              >
                <service.icon
                  size={28}
                  className={index % 2 === 1 ? "text-accent-foreground" : "text-primary"}
                />
              </div>
              <h3
                className={`text-xl font-bold mb-3 ${
                  index % 2 === 1 ? "text-accent-foreground" : "text-foreground"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  index % 2 === 1
                    ? "text-accent-foreground/80"
                    : "text-muted-foreground"
                }`}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
