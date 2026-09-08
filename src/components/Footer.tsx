import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold">
              Pankaj<span className="text-primary">.</span>
            </a>
            <p className="text-background/60 mt-2 text-sm">
              Full-Stack Developer | Creating Digital Experiences
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/pankaj-patel5566"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:pp4439218@gmail.com"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-8 text-center">
          <p className="text-sm text-background/60 flex items-center justify-center gap-1">
            © {currentYear} Pankaj Patel. Made with{" "}
            <Heart size={14} className="text-destructive" fill="currentColor" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
