import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Clock3,
} from "lucide-react";

import { blogPosts } from "@/data/blog";

import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import GlassCard from "@/components/ui/GlassCard";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogArticlePage({
  params,
}: BlogPageProps) {
  const { slug } = await params;

  const post = blogPosts.find(
    (item) => item.slug === slug
  );

  if (!post) {
    notFound();
  }

  return (
    <main className="relative overflow-hidden">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[550px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[140px]"
      />

      <section className="relative py-24 pt-36">
        <Container>
          {/* Back */}
          <Link
            href="/blog"
            className="relative z-10 inline-flex items-center text-sm font-medium text-slate-400 transition-colors hover:text-cyan-400"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          <article className="relative z-10 mx-auto mt-12 max-w-4xl">
            {/* Header */}
            <header>
              <Badge variant="info">
                {post.category}
              </Badge>

              <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                {post.title}
              </h1>

              <p className="mt-7 text-lg leading-8 text-slate-400 sm:text-xl">
                {post.excerpt}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-cyan-400" />
                  {post.published}
                </span>

                <span className="flex items-center gap-2">
                  <Clock3 className="h-4 w-4 text-cyan-400" />
                  {post.readTime}
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </header>

            {/* Article */}
            <GlassCard className="mt-14 p-7 sm:p-10 lg:p-12">
              <div className="space-y-8">
                {post.content.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base leading-8 text-slate-300 sm:text-lg sm:leading-9"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </GlassCard>

            {/* Footer */}
            <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href="/blog"
                className="inline-flex items-center font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all articles
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center font-semibold text-slate-400 transition-colors hover:text-white"
              >
                Get in touch
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </article>
        </Container>
      </section>
    </main>
  );
}