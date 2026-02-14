import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-hero text-hero-foreground py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-hero-muted text-sm">
          © {new Date().getFullYear()} John Doe. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a href="#" className="text-hero-muted hover:text-primary transition-colors" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="#" className="text-hero-muted hover:text-primary transition-colors" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-hero-muted hover:text-primary transition-colors" aria-label="Twitter">
            <Twitter size={20} />
          </a>
        </div>

        <button
          onClick={scrollToTop}
          className="p-2 rounded-full border border-hero-muted/30 text-hero-muted hover:text-primary hover:border-primary transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
