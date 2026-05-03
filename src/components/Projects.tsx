import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title:
      "Premium Hormone - Healthcare Management & Patient Engagement Platform",
    description:
      "Multi-tenant healthcare platform with role-based access, patient management, appointments, and billing workflows. Built with React (TypeScript), Node.js/Express, Socket.io, and PostgreSQL with secure JWT authentication.",
    tech: [
      "React (TypeScript, Context API)",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Socket.io",
      "React Query",
    ],
    demo: "#",
    github: "#",
  },
  {
    title: "Point of Sale (POS) System",
    description:
      "Contributed to a scalable Electron-based POS desktop app for dine-in, takeaway, and delivery workflows with full order lifecycle management. Built React (TypeScript) frontend with REST APIs, React Query, and Zustand, implementing core features like table management, KOT system, multi-payment checkout, real-time tracking, and printer integration.",
    tech: [
      "Electron.js",
      "React (TypeScript, Zustand)",
      "React Query",
      "REST APIs",
    ],
    demo: "#",
    github: "#",
  },
  {
    title: "Blood Group Prediction using Finger Print Analysis",
    description:
      "An AI-based system that predicts a person’s blood group by analyzing fingerprint patterns using deep learning techniques. The project combines a Python (Flask) backend with a JavaScript frontend to provide a fast, interactive, and user-friendly experience, focusing on accurate pattern recognition and real-time predictions.",
    tech: ["Javascript", "Python", "Flask", "Deep Learning"],
    demo: "#",
    github:
      "https://github.com/Saadjamshaid64/blood-group-prediction-using-fingerprint-analysis",
  },
  {
    title: "Hotel Dashboard",
    description:
      "An interactive hotel analytics dashboard that provides real-time data visualization and financial reporting. It helps monitor bookings, revenue trends, and operational performance using dynamic charts and REST API integration. Built with React for the frontend and Node.js/Express with PostgreSQL for efficient backend data handling.",
    tech: ["React", "Node.js", "Express", "Postgres", "REST API"],
    demo: "#",
    github: "https://github.com/Saadjamshaid64/Hotel-Dashboard",
  },
  // {
  //   title: "Social Media App",
  //   description:
  //     "A social platform with real-time messaging, posts, stories, and user engagement features.",
  //   tech: ["React Native", "Firebase", "Redux", "Node.js"],
  //   demo: "#",
  //   github: "#",
  // },
  // {
  //   title: "Portfolio CMS",
  //   description:
  //     "A headless CMS built for developers to manage and showcase their portfolio content.",
  //   tech: ["Next.js", "Sanity", "Tailwind", "Vercel"],
  //   demo: "#",
  //   github: "#",
  // },
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
                  {/* <a
                    href={project.demo}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  > */}
                  {/* <ExternalLink size={14} />
                    Live Demo
                  </a> */}
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    target="_blank"
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
