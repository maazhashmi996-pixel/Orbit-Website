import { createFileRoute } from "@tanstack/react-router";
import { planets, type Planet } from "@/data/solar";

export const Route = createFileRoute("/planets")({
  head: () => ({
    meta: [
      { title: "Planets — Orbit" },
      {
        name: "description",
        content:
          "All eight planets of the solar system compared: size, distance, moons, temperature and what makes each one unique.",
      },
      { property: "og:title", content: "Planets — Orbit" },
      {
        property: "og:description",
        content:
          "All eight planets of the solar system compared: size, distance, moons, temperature and what makes each one unique.",
      },
    ],
  }),
  component: PlanetsPage,
});

function PlanetCard({ planet, index }: { planet: Planet; index: number }) {
  const stats = [
    { label: "Diameter", value: planet.diameterKm },
    { label: "Distance from Sun", value: planet.distance },
    { label: "Length of day", value: planet.day },
    { label: "Length of year", value: planet.year },
    { label: "Moons", value: planet.moons },
    { label: "Temperature", value: planet.temp },
  ];

  return (
    <article className="overflow-hidden rounded-3xl border border-border bg-card">
      <div className="flex items-center gap-6 border-b border-border p-8">
        <div className="relative flex h-32 w-32 shrink-0 items-center justify-center">
          <div
            className="absolute inset-0 rounded-full opacity-25 blur-xl"
            style={{ backgroundColor: planet.color }}
          />
          <span
            className="relative block rounded-full"
            style={{
              width: planet.size,
              height: planet.size,
              backgroundColor: planet.color,
              boxShadow: `inset -${Math.max(planet.size / 5, 6)}px -${Math.max(planet.size / 6, 4)}px ${Math.max(planet.size / 3, 10)}px oklch(0.1 0.03 277 / 60%)`,
            }}
          />
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Planet {index + 1} · {planet.type}
          </p>
          <h2 className="mt-1 font-display text-3xl font-bold tracking-tight">
            {planet.name}
          </h2>
          <p className="mt-1 text-sm text-primary">{planet.tagline}</p>
        </div>
      </div>
      <div className="p-8">
        <p className="max-w-2xl leading-relaxed text-muted-foreground">
          {planet.description}
        </p>
        <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                {s.label}
              </dt>
              <dd className="mt-0.5 font-display font-semibold">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}

function PlanetsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="relative overflow-hidden">
        <div className="nebula-amber pointer-events-none absolute -right-32 -top-20 h-[360px] w-[360px]" />
        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
          The planets
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          Four rocky worlds huddle close to the Sun; beyond the asteroid belt,
          four giants of gas and ice rule the outer dark. Here they all are, in
          order of distance.
        </p>
      </div>

      <div className="mt-12 space-y-8">
        {planets.map((p, i) => (
          <PlanetCard key={p.name} planet={p} index={i} />
        ))}
      </div>
    </div>
  );
}
