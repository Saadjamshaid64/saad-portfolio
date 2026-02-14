import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "John delivered our project ahead of schedule with exceptional quality. His attention to detail and communication made the entire process seamless.",
    name: "Sarah Chen",
    role: "CEO, TechStartup",
  },
  {
    quote: "An incredible developer who truly understands both the technical and business sides. Our platform's performance improved dramatically.",
    name: "Mark Williams",
    role: "CTO, WebScale",
  },
  {
    quote: "Working with John was a game-changer. He brought fresh ideas and implemented them flawlessly. Highly recommend for any web project.",
    name: "Emily Rodriguez",
    role: "Product Manager, DesignCo",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">
            Testimonials
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            What People Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl border border-border p-6 hover-lift relative"
            >
              <Quote className="text-primary/20 absolute top-4 right-4" size={32} />
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
