import {
  Globe,
  Server,
  Palette,
  Smartphone,
  Database,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "Building responsive websites and web applications using modern frameworks with clean code and best practices.",
  },
  {
    icon: Server,
    title: "API Development",
    desc: "Scalable RESTful APIs with PostgreSQL, secure authentication, and well-documented backend architecture.",
  },
  {
    icon: Palette,
    title: "Desktop App Development",
    desc: "Developing scalable and high-performance desktop applications using Electron with modern UI design, smooth user experience, and optimized system integration.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    desc: "Cross-platform mobile applications using React Native for seamless iOS and Android experiences.",
  },
  {
    icon: Database,
    title: "Database Design",
    desc: "Designing efficient and scalable database architectures with optimization and migration strategies.",
  },

  {
    icon: Zap,
    title: "Performance Optimization",
    desc: "Improving application speed through code optimization, caching strategies, and performance audits.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-section-alt">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">
            Services
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            What I Offer
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group bg-card rounded-2xl border border-border p-6 hover-lift text-center"
            >
              <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
