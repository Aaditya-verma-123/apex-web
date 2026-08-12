import Link from "next/link";
import {
  ArrowRight,
  Mail,
  Sparkles,
} from "lucide-react";

import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24">
      <Container>
        <GlassCard className="relative overflow-hidden p-10 text-center sm:p-14 lg:p-20">
          {/* Background Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[100px]"
          />

          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
              <Mail className="h-6 w-6 text-cyan-400" />
            </div>

            <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-400">
              <Sparkles className="h-4 w-4" />
              Let&apos;s connect
            </div>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Let&apos;s build something meaningful.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
              Have an idea, project, or opportunity? I&apos;m always
              interested in learning, collaborating, and building.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button asChild className="group">
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button variant="secondary" asChild>
                <Link href="/projects">
                  View Projects
                </Link>
              </Button>
            </div>
          </div>
        </GlassCard>
      </Container>
    </section>
  );
}