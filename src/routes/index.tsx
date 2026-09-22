import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Orbit as OrbitIcon, Rocket } from "lucide-react";
import { planets } from "@/data/solar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Orbit — A Tour of the Solar System" },
      {
        name: "description",
        content:
          "Journey through the solar system: eight worlds, legendary missions and cosmic facts that bend the mind.",
      },
      { property: "og:title", content: "Orbit — A Tour of the Solar System" },
      {
        property: "og:description",
        content:
          "Journey through the solar system: eight worlds, legendary missions and cosmic facts that bend the mind.",
      },
],
  }),
  component: Index,
});

const orbitRadii = [72, 106, 140, 176, 214, 252, 290, 326];
const orbitSpeeds = [12, 18, 25, 33, 46, 60, 78, 96];

function SolarSystemVisual() {
  return (
    <div className="relative h-[420px] w-[420px] scale-[0.55] sm:h-[520px] sm:w-[520px] sm:scale-90 lg:scale-100">
      {/* Sun */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="sun-glow absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-2xl" />
        <div className="relative h-20 w-20 rounded-full bg-primary shadow-[0_0_60px_var(--glow)]" />
      </div>
      {/* Orbits */}
      {orbitRadii.map((r, i) => (
        <div
          key={r}
          className="orbit-ring"
          style={{
            width: r * 2,
            height: r * 2,
            animationDuration: `${orbitSpeeds[i]}s`,
          }}
        >
          <span
            className="planet-dot"
            style={{
              backgroundColor: planets[i]!.color,
              width: i < 4 ? 9 : 16,
              height: i < 4 ? 9 : 16,
              top: -(i < 4 ? 5 : 8),
            }}
          />
        </div>
      ))}
      {/* Saturn ring hint */}
      <div
        className="orbit-ring"
        style={{
          width: 46,
          height: 14,
          animationDuration: "60s",
          animationDirection: "reverse",
          top: "calc(50% - 252px)",
          borderColor: "oklch(0.83 0.09 90 / 40%)",
        }}
      />
    </div>
  );
}

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="nebula-violet pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px]" />
        <div className="nebula-amber pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px]" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Our cosmic neighborhood
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              One star.
              <br />
              <span className="text-primary">Eight worlds.</span>
              <br />
              Endless wonder.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              From the scorching plains of Mercury to the supersonic winds of
              Neptune, the solar system is a place of fire, ice and storms the
              size of planets. Take the tour.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/planets"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                Meet the planets
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/exploration"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                <Rocket className="h-4 w-4 text-primary" />
                Follow the missions
              </Link>
            </div>
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                { k: "8", v: "planets" },
                { k: "290+", v: "moons" },
                { k: "4.6B", v: "years old" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-3xl font-bold text-primary">
                    {s.k}
                  </dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="flex items-center justify-center">
            <SolarSystemVisual />
          </div>
        </div>
      </section>

      {/* Planet strip */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight">
              The eight worlds
            </h2>
            <p className="mt-2 text-muted-foreground">
              Every planet, in order from the Sun.
            </p>
          </div>
          <Link
            to="/planets"
            className="hidden items-center gap-1.5 text-sm font-medium text-primary hover:underline sm:inline-flex"
          >
            Explore all
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {planets.map((p, i) => (
            <Link
              key={p.name}
              to="/planets"
              className="group rounded-2xl border border-border bg-card p-5 text-center transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <span
                className="mx-auto block rounded-full transition-transform group-hover:scale-110"
                style={{
                  width: Math.max(p.size * 0.55, 22),
                  height: Math.max(p.size * 0.55, 22),
                  backgroundColor: p.color,
                  boxShadow: `0 0 ${18 + i * 2}px ${p.color}55`,
                }}
              />
              <p className="mt-4 font-display font-semibold">{p.name}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{p.tagline}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Feature teasers */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-4 md:grid-cols-2">
          <Link
            to="/exploration"
            className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-colors hover:border-primary/40"
          >
            <OrbitIcon className="h-8 w-8 text-primary" />
            <h3 className="mt-4 font-display text-2xl font-semibold">
              65 years of exploration
            </h3>
            <p className="mt-2 max-w-sm text-muted-foreground">
              From a beeping metal sphere to a telescope that sees the first
              galaxies — trace the missions that carried us outward.
            </p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
              View the timeline
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
          <Link
            to="/facts"
            className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-colors hover:border-primary/40"
          >
            <Sparkles className="h-8 w-8 text-accent" />
            <h3 className="mt-4 font-display text-2xl font-semibold">
              Facts that bend the mind
            </h3>
            <p className="mt-2 max-w-sm text-muted-foreground">
              A day longer than a year. Rain made of diamonds. A planet that
              would float in water. The solar system is stranger than fiction.
            </p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
              Get surprised
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
