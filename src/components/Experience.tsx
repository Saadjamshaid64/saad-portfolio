import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    period: "Jan 2022 – Present",
    points: [
      "Led a team of 5 developers building a SaaS platform serving 10K+ users",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Architected microservices backend with Node.js and PostgreSQL",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "WebStudio Agency",
    period: "Jun 2020 – Dec 2021",
    points: [
      "Built 15+ client websites and web applications using React and Next.js",
      "Integrated third-party APIs including Stripe, SendGrid, and Twilio",
      "Mentored junior developers and conducted code reviews",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "StartupXYZ",
    period: "Jan 2020 – May 2020",
    points: [
      "Developed responsive UI components using React and Tailwind CSS",
      "Collaborated with designers to implement pixel-perfect interfaces",
      "Improved Lighthouse performance scores by 35%",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-section-alt">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">
            Experience
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Where I've Worked
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-2.5 top-1 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 md:left-1/2 md:-translate-x-1/2" />

                {/* Content */}
                <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="bg-card p-6 rounded-2xl border border-border hover-lift">
                    <div className="flex items-center gap-2 mb-1 text-primary">
                      <Briefcase size={16} />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                    <h3 className="font-semibold text-lg">{exp.role}</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {exp.company}
                    </p>
                    <ul className={`space-y-1.5 text-sm text-muted-foreground ${i % 2 === 0 ? "md:text-right" : ""}`}>
                      {exp.points.map((point, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="text-primary mt-1.5 shrink-0">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
