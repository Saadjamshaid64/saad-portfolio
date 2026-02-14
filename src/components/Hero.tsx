import { ArrowDown, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero text-hero-foreground overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      {/* Accent glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4 animate-fade-up">
          Full Stack Developer
        </p>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 animate-fade-up delay-100">
          John <span className="text-gradient">Doe</span>
        </h1>
        <p className="text-hero-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up delay-200">
          I craft clean, scalable web experiences with modern technologies.
          Passionate about turning complex problems into elegant solutions.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            View Projects
            <ArrowDown size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-hero-muted/30 text-hero-foreground font-medium hover:border-primary/50 hover:text-primary transition-colors"
          >
            <Mail size={16} />
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown size={20} className="text-hero-muted" />
      </div>
    </section>
  );
};

export default Hero;
