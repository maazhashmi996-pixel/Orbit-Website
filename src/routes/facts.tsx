import { createFileRoute } from "@tanstack/react-router";
import { Zap } from "lucide-react";
import { facts, planets } from "@/data/solar";

export const Route = createFileRoute("/facts")({
  head: () => ({
    meta: [
      { title: "Facts — Orbit" },
      {
        name: "description",
        content:
          "Mind-bending solar system facts and a true-scale size comparison of all eight planets, from Mercury to Jupiter.",
      },
      { property: "og:title", content: "Facts — Orbit" },
      {
        property: "og:description",
        content:
          "Mind-bending solar system facts and a true-scale size comparison of all eight planets, from Mercury to Jupiter.",
      },
    ],
  }),
  component: FactsPage,
});

function FactsPage() {
  const maxSize = Math.max(...planets.map((p) => p.size));

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="relative overflow-hidden">
        <div className="nebula-amber pointer-events-none absolute -right-32 -top-24 h-[360px] w-[360px]" />
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          <Zap className="h-3.5 w-3.5 text-primary" />
          Stranger than fiction
        </span>
        <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Facts that bend the mind
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          The solar system doesn't just look alien — the numbers behind it
          behave in ways that sound made up. They aren't.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {facts.map((f) => (
          <div
            key={f.title}
            className="group rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40"
          >
            <p className="font-display text-lg font-semibold text-primary">
              {f.stat}
            </p>
            <h2 className="mt-2 font-display text-xl font-semibold">
              {f.title}
            </h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              {f.body}
            </p>
          </div>
        ))}
      </div>

      {/* Size comparison */}
      <section className="mt-20">
        <h2 className="font-display text-3xl font-bold tracking-tight">
          How big is big?
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          All eight planets at their relative sizes — Earth's 12,756 km sets
          the scale, and Jupiter dwarfs everything.
        </p>
        <div className="mt-10 rounded-3xl border border-border bg-card p-8">
          <div className="flex flex-wrap items-end justify-center gap-x-8 gap-y-6 sm:gap-x-10">
            {planets.map((p) => (
              <div key={p.name} className="flex flex-col items-center gap-3">
                <div className="flex h-32 items-end">
                  <span
                    className="block rounded-full"
                    style={{
                      width: p.size,
                      height: p.size,
                      backgroundColor: p.color,
                      boxShadow: `0 0 ${p.size / 2}px ${p.color}44`,
                    }}
                  />
                </div>
                <div className="text-center">
                  <p className="font-display text-sm font-semibold">
                    {p.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {p.diameterKm}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
            Jupiter's diameter is about {Math.round(maxSize / 52)}× that of
            Earth — and the Sun is roughly 10× wider than Jupiter itself.
          </p>
        </div>
      </section>
    </div>
  );
}
