import SectionTitle from "@/components/ui/SectionTitle";
import { skillCategories } from "@/data/skills";

export default function SkillsPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionTitle
        eyebrow="Skills"
        title="Technologies I Work With"
        description="A growing toolkit of technologies, frameworks, and platforms that I use to build modern web applications and strengthen my cybersecurity knowledge."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-all duration-300 hover:border-blue-500/40 hover:bg-white/10"
          >
            <h3 className="mb-6 text-2xl font-semibold text-white">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition-colors duration-200 hover:border-blue-400 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}