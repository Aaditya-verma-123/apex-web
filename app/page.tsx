import Hero from "@/components/home/Hero";
import CurrentlyBuilding from "@/components/home/CurrentlyBuilding";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Skills from "@/components/home/Skills";
import Journey from "@/components/home/Journey";
import Resume from "@/components/resume/Resume";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <CurrentlyBuilding />
      <FeaturedProjects />
      <Skills />
      <Journey />
      <Resume />
      <Contact />
    </>
  );
}