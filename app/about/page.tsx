import AboutHero from "@/components/about/Hero";
import Story from "@/components/about/Story";
import Education from "@/components/about/Education";
import CurrentFocus from "@/components/about/CurrentFocus";
import Goals from "@/components/about/Goals";
import CTA from "@/components/about/CTA";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <Story />
      <Education />
      <CurrentFocus />
      <Goals />
      <CTA />
    </main>
  );
}