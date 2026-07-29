import Hero from "@/components/home/Hero";
import CurrentlyBuilding from "@/components/home/CurrentlyBuilding";
import Skills from "@/components/home/Skills";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <CurrentlyBuilding />
      <FeaturedProjects />
      <Skills />
      <Contact />
    </>
  );
}