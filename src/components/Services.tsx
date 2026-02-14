import { Globe, Server, Palette, Smartphone, Database, Zap } from "lucide-react";

const services = [
  { icon: Globe, title: "Web Development", desc: "Custom websites and web applications built with modern frameworks and best practices." },
  { icon: Server, title: "API Development", desc: "Scalable RESTful and GraphQL APIs with robust authentication and documentation." },
  { icon: Palette, title: "UI/UX Design", desc: "Intuitive, accessible interfaces designed with user experience as the priority." },
  { icon: Smartphone, title: "Mobile Development", desc: "Cross-platform mobile apps using React Native for iOS and Android." },
  { icon: Database, title: "Database Design", desc: "Efficient database architecture, optimization, and migration strategies." },
  { icon: Zap, title: "Performance Optimization", desc: "Speed audits, code splitting, caching strategies for faster load times." },
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
