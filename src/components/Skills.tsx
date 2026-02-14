const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML / CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Python / Django", level: 80 },
      { name: "REST / GraphQL", level: 85 },
      { name: "Express.js", level: 87 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 82 },
      { name: "Redis", level: 75 },
      { name: "Firebase", level: 78 },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git / GitHub", level: 92 },
      { name: "Docker", level: 80 },
      { name: "AWS / Vercel", level: 78 },
      { name: "CI/CD", level: 76 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-section-alt">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">
            Skills
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Technologies I Work With
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-card rounded-2xl p-6 border border-border hover-lift"
            >
              <h3 className="font-semibold text-lg mb-5">{cat.title}</h3>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-gold-glow rounded-full transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
