import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institute: "University of Management and Technology",
    year: "2021 – 2025",
    coursework: ["Data Structures & Algorithms", "Software Engineering", "Database Systems", "Machine Learning", "Cloud Computing"],
  },
  {
    degree: "Introduction to Web Development with HTML, CSS, JavaScript",
    institute: "IBM",
    year: "2025",
    coursework: ["HTML", "CSS", "JavaScript", "Agile Development"],
  },
  {
    degree: "Introduction to Front-End Development",
    institute: "Meta",
    year: "2025",
    coursework: ["HTML", "CSS", "Bootstrap", "JavaScript", "React", "UI"],
  },
];

const Education = () => {
  return (
    <section id="education" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">
            Education
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Academic Background
          </h2>
        </div>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl border border-border p-6 md:p-8 hover-lift"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{edu.degree}</h3>
                  <p className="text-muted-foreground text-sm mb-1">
                    {edu.institute}
                  </p>
                  <p className="text-primary text-sm font-medium mb-3">
                    {edu.year}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((c) => (
                      <span
                        key={c}
                        className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
