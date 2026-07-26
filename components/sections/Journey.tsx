import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const journey = [
  {
    year: "2024",
    title: "Started Web Development",
    description: "Learned HTML, CSS, JavaScript and began building websites.",
  },
  {
    year: "2025",
    title: "Cybersecurity Journey",
    description: "Started learning cybersecurity and security fundamentals.",
  },
  {
    year: "2026",
    title: "IIT Madras BS",
    description: "Began the IIT Madras BS program while continuing to improve my software development skills.",
  },
  {
    year: "Future",
    title: "B.Tech & AI",
    description: "Planning to pursue B.Tech and build AI-powered products with real-world impact.",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="scroll-mt-32 py-28">
      <Container>
        <SectionTitle
          eyebrow="Journey"
          title="My Learning Journey"
          description="Every milestone has helped shape my skills and goals."
        />

        <div className="mt-16 space-y-8">
          {journey.map((item) => (
            <div
              key={item.year}
              className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6"
            >
              <p className="text-blue-400 font-semibold">{item.year}</p>
              <h3 className="mt-2 text-2xl font-bold">{item.title}</h3>
              <p className="mt-3 text-zinc-400">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}