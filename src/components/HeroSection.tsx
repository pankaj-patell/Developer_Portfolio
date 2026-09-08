import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import profilePhoto from "@/assets/portfolio-photo.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-hero flex items-center pt-20 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-primary rounded-full animate-float" />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent rounded-full animate-float-delayed" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in-left" style={{ animationDelay: "0.2s" }}>
            <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-card">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Available for work</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Hello, I'm{" "}
              <span className="text-gradient">Pankaj Patel</span>
              <br />
              Full-Stack Developer
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Passionate about crafting scalable web applications with modern technologies. 
              Specializing in frontend & backend development, web design, and creating 
              exceptional digital experiences.
            </p>

            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={18} className="text-primary" />
              <span>Mohali, Punjab, India</span>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="hero" asChild>
                <a href="#contact">
                  Get Started <ArrowRight size={18} />
                </a>
              </Button>
              <Button variant="hero-outline" asChild>
                <a href="#portfolio">View Projects</a>
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
       {/* Right Content - Profile Image */}
<div className="relative flex justify-center lg:justify-end animate-fade-in-right" style={{ animationDelay: "0.4s" }}>
  {/* Decorative blur blob */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-primary/20 rounded-full blur-xl" />

  {/* Main Outer Container with Grey Circular Ring */}
  <div className="relative flex items-center justify-center p-8 md:p-12 rounded-full bg-slate-300/80 dark:bg-zinc-700/80 ring-4 ring-white/60 dark:ring-zinc-800/60 shadow-xl">
    
    {/* Profile Image Container */}
    <div className="w-[260px] h-[260px] md:w-[340px] md:h-[340px] rounded-full overflow-hidden border-4 border-white dark:border-zinc-900 shadow-inner relative z-10">
      <img
        src={profilePhoto}
        alt="Pankaj Patel - Full Stack Developer"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Experience Badge */}
    <div className="absolute -right-2 top-1/4 bg-card px-5 py-3 md:px-6 md:py-4 rounded-2xl shadow-card-hover z-20 animate-float">
      <div className="text-center">
        <span className="text-2xl md:text-3xl font-bold text-primary">1.5</span>
        <p className="text-xs text-muted-foreground">Years<br />Experience</p>
      </div>
    </div>

    {/* Projects Badge */}
    <div className="absolute -left-2 bottom-1/4 bg-card px-5 py-3 md:px-6 md:py-4 rounded-2xl shadow-card-hover z-20 animate-float-delayed">
      <div className="text-center">
        <span className="text-2xl md:text-3xl font-bold text-accent">8+</span>
        <p className="text-xs text-muted-foreground">Projects<br />Completed</p>
      </div>
    </div>

  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
