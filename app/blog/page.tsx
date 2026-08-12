import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";

export default function BlogPage() {
  return (
    <main>
      <BlogHero />

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <BlogGrid />
        </div>
      </section>
    </main>
  );
}