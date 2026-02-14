import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with cart, checkout, payment integration, and admin dashboard.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    demo: "#",
    github: "#",
  },
  {
    title: "Task Management App",
    description:
      "Real-time collaborative project management tool with drag-and-drop boards and team features.",
    tech: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
    demo: "#",
    github: "#",
  },
  {
    title: "AI Content Generator",
    description:
      "An AI-powered platform for generating marketing copy, blog posts, and social media content.",
    tech: ["React", "Python", "OpenAI", "FastAPI"],
    demo: "#",
    github: "#",
  },
  {
    title: "Finance Dashboard",
    description:
      "Interactive analytics dashboard with real-time data visualization and financial reporting.",
    tech: ["React", "D3.js", "Express", "MongoDB"],
    demo: "#",
    github: "#",
  },
  {
    title: "Social Media App",
    description:
      "A social platform with real-time messaging, posts, stories, and user engagement features.",
    tech: ["React Native", "Firebase", "Redux", "Node.js"],
    demo: "#",
    github: "#",
  },
  {
    title: "Portfolio CMS",
    description:
      "A headless CMS built for developers to manage and showcase their portfolio content.",
    tech: ["Next.js", "Sanity", "Tailwind", "Vercel"],
    demo: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">
            Projects
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Featured Work
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover-lift"
            >
              {/* Color bar */}
              <div className="h-1 bg-gradient-to-r from-primary to-gold-glow" />
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={14} />
                    Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
