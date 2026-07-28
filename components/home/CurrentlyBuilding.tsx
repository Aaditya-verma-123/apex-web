import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";

const items = [
  {
    title: "APEX WEB",
    description:
      "Building a premium developer platform using Next.js, React, Tailwind CSS, and Framer Motion.",
    status: "In Progress",
  },
  {
    title: "Google Cybersecurity Certificate",
    description:
      "Learning networking, Linux, SQL, security operations, and security best practices.",
    status: "Learning",
  },
  {
    title: "IIT Madras BS Degree",
    description:
      "Pursuing Data Science and Applications while strengthening software development skills.",
    status: "Ongoing",
  },
];

export default function CurrentlyBuilding() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionTitle
  eyebrow="Currently Building"
  title="What I'm Working On"
  description="I enjoy continuously learning, building real-world projects, and improving my technical skills every day."
/>

      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-blue-500/40 hover:bg-white/10"
          >
            <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
              {item.status}
            </span>

            <h3 className="mt-5 text-xl font-semibold text-white">
              {item.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Link
          href="/journey"
          className="text-blue-400 transition hover:text-blue-300"
        >
          View my complete journey →
        </Link>
      </div>
    </section>
  );
}