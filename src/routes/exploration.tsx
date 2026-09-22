import { createFileRoute } from "@tanstack/react-router";
import { Rocket, Flag } from "lucide-react";
import { missions } from "@/data/solar";

export const Route = createFileRoute("/exploration")({
  head: () => ({
    meta: [
      { title: "Exploration — Orbit" },
      {
        name: "description",
        content:
          "A timeline of solar system exploration: from Sputnik's first beep to the James Webb Space Telescope's view of the early universe.",
      },
      { property: "og:title", content: "Exploration — Orbit" },
      {
        property: "og:description",
        content:
          "A timeline of solar system exploration: from Sputnik's first beep to the James Webb Space Telescope's view of the early universe.",
      },
    ],
  }),
  component: ExplorationPage,
});

function ExplorationPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="relative overflow-hidden">
        <div className="nebula-violet pointer-events-none absolute -left-32 -top-24 h-[380px] w-[380px]" />
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          <Rocket className="h-3.5 w-3.5 text-primary" />
          1957 → today
        </span>
        <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Exploration
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          In a single human lifetime we've gone from a beeping metal sphere to
          driving robots on Mars and photographing galaxies 13 billion years
          old. These are the milestones.
        </p>
      </div>

      <ol className="relative mt-14 space-y-10 border-l border-border pl-8 sm:pl-12">
        {missions.map((m) => (
          <li key={m.name} className="relative">
            <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border border-primary/50 bg-background sm:-left-[57px]">
              <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_var(--glow)]" />
            </span>
            <div className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-display text-2xl font-bold text-primary">
                  {m.year}
                </span>
                <h2 className="font-display text-xl font-semibold">
                  {m.name}
                </h2>
                <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                  <Flag className="h-3 w-3 text-primary" />
                  {m.highlight}
                </span>
              </div>
              <p className="mt-1.5 text-sm font-medium text-muted-foreground">
                {m.target}
              </p>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
                {m.description}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-16 rounded-3xl border border-primary/30 bg-primary/5 p-8 text-center">
        <h2 className="font-display text-2xl font-semibold">
          And the journey continues
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
          Artemis crews are preparing to return to the Moon, rovers are caching
          samples on Mars, and Europa Clipper is on its way to an ocean world.
          The next chapter is already being written.
        </p>
      </div>
    </div>
  );
}
