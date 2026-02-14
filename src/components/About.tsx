import profileImg from "@/assets/saad-photo.jpg";
import { Code2, Server, Palette } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Frontend", desc: "React, TypeScript, Tailwind, Bootstrap" },
  { icon: Server, label: "Backend", desc: "Node.js, Express.js, Python, PostgreSQL" },
  { icon: Palette, label: "Design", desc: "Figma, UI/UX, Responsive" },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="flex justify-center animate-fade-up">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={profileImg}
                  alt="Saad Jamshaid"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 md:w-80 md:h-80 rounded-2xl border-2 border-primary/30 -z-10" />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2 animate-fade-up">
              About Me
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 animate-fade-up delay-100">
              Building digital experiences that matter
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 animate-fade-up delay-200">
              I'm a Full Stack Developer with 1+ years of experience building web
              applications. I specialize in creating performant, accessible, and
              visually compelling products using modern tools and frameworks.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 animate-fade-up delay-200">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source, or writing technical articles.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-up delay-300">
              {highlights.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="p-4 rounded-xl bg-secondary/50 border border-border hover-lift"
                >
                  <Icon className="text-primary mb-2" size={22} />
                  <h4 className="font-semibold text-sm mb-1">{label}</h4>
                  <p className="text-muted-foreground text-xs">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
