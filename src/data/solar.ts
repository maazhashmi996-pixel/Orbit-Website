export interface Planet {
  name: string;
  tagline: string;
  color: string;
  size: number; // relative render size in px
  diameterKm: string;
  distance: string;
  day: string;
  year: string;
  moons: string;
  temp: string;
  type: "Terrestrial" | "Gas giant" | "Ice giant";
  description: string;
}

export const planets: Planet[] = [
  {
    name: "Mercury",
    tagline: "The swift messenger",
    color: "oklch(0.72 0.03 70)",
    size: 34,
    diameterKm: "4,879 km",
    distance: "57.9 million km",
    day: "59 Earth days",
    year: "88 Earth days",
    moons: "0",
    temp: "-173°C to 427°C",
    type: "Terrestrial",
    description:
      "The smallest planet and the closest to the Sun, Mercury races around its orbit faster than any other world. Its cratered surface swings between scorching days and freezing nights.",
  },
  {
    name: "Venus",
    tagline: "The veiled furnace",
    color: "oklch(0.84 0.1 88)",
    size: 50,
    diameterKm: "12,104 km",
    distance: "108.2 million km",
    day: "243 Earth days",
    year: "225 Earth days",
    moons: "0",
    temp: "465°C average",
    type: "Terrestrial",
    description:
      "Wrapped in thick clouds of sulfuric acid, Venus traps heat in a runaway greenhouse effect — making it the hottest planet, even though Mercury is closer to the Sun.",
  },
  {
    name: "Earth",
    tagline: "The living world",
    color: "oklch(0.62 0.13 240)",
    size: 52,
    diameterKm: "12,756 km",
    distance: "149.6 million km",
    day: "24 hours",
    year: "365.25 days",
    moons: "1",
    temp: "-88°C to 58°C",
    type: "Terrestrial",
    description:
      "The only known world to harbor life. Liquid oceans cover 71% of its surface, and a protective magnetic field shields a biosphere of millions of species.",
  },
  {
    name: "Mars",
    tagline: "The red frontier",
    color: "oklch(0.58 0.17 40)",
    size: 40,
    diameterKm: "6,792 km",
    distance: "227.9 million km",
    day: "24.6 hours",
    year: "687 Earth days",
    moons: "2",
    temp: "-153°C to 20°C",
    type: "Terrestrial",
    description:
      "Rusty dust, ancient riverbeds and the tallest volcano in the solar system make Mars the most explored alien world — and the leading candidate for humanity's first footstep.",
  },
  {
    name: "Jupiter",
    tagline: "The giant king",
    color: "oklch(0.76 0.09 68)",
    size: 110,
    diameterKm: "142,984 km",
    distance: "778.6 million km",
    day: "9.9 hours",
    year: "11.9 Earth years",
    moons: "95+",
    temp: "-108°C cloud tops",
    type: "Gas giant",
    description:
      "A gas giant more massive than all other planets combined. Its Great Red Spot is a storm wider than Earth that has raged for centuries, and its moon Europa may hide a subsurface ocean.",
  },
  {
    name: "Saturn",
    tagline: "The ringed jewel",
    color: "oklch(0.83 0.09 90)",
    size: 94,
    diameterKm: "120,536 km",
    distance: "1.44 billion km",
    day: "10.7 hours",
    year: "29.4 Earth years",
    moons: "146+",
    temp: "-139°C cloud tops",
    type: "Gas giant",
    description:
      "Saturn's dazzling rings of ice and rock span 280,000 km yet are only about 10 meters thick in places. Its moon Titan has rivers and lakes of liquid methane.",
  },
  {
    name: "Uranus",
    tagline: "The sideways ice giant",
    color: "oklch(0.8 0.07 210)",
    size: 68,
    diameterKm: "51,118 km",
    distance: "2.87 billion km",
    day: "17.2 hours",
    year: "84 Earth years",
    moons: "28",
    temp: "-197°C average",
    type: "Ice giant",
    description:
      "Uranus rolls around the Sun on its side, tilted 98 degrees. Methane in its atmosphere absorbs red light, painting the planet a serene cyan.",
  },
  {
    name: "Neptune",
    tagline: "The deep blue wanderer",
    color: "oklch(0.56 0.15 260)",
    size: 66,
    diameterKm: "49,528 km",
    distance: "4.5 billion km",
    day: "16.1 hours",
    year: "165 Earth years",
    moons: "16",
    temp: "-201°C average",
    type: "Ice giant",
    description:
      "The windiest world we know — supersonic gusts tear through its deep blue clouds at 2,100 km/h. Neptune was found by mathematics before any telescope saw it.",
  },
];

export interface Mission {
  year: string;
  name: string;
  target: string;
  description: string;
  highlight: string;
}

export const missions: Mission[] = [
  {
    year: "1957",
    name: "Sputnik 1",
    target: "Earth orbit",
    description:
      "The first artificial satellite, a 58 cm metal sphere that beepingly announced the space age.",
    highlight: "First satellite",
  },
  {
    year: "1969",
    name: "Apollo 11",
    target: "The Moon",
    description:
      "Neil Armstrong and Buzz Aldrin became the first humans to walk on another world.",
    highlight: "First human landing",
  },
  {
    year: "1977",
    name: "Voyager 1 & 2",
    target: "Outer planets & beyond",
    description:
      "The twin probes toured the gas giants and now carry the Golden Record into interstellar space.",
    highlight: "Farthest human-made object",
  },
  {
    year: "1990",
    name: "Hubble Space Telescope",
    target: "Earth orbit",
    description:
      "Three decades of breathtaking images that measured the age of the universe.",
    highlight: "Deep-field imagery",
  },
  {
    year: "1997",
    name: "Cassini–Huygens",
    target: "Saturn & Titan",
    description:
      "Thirteen years orbiting Saturn, landing a probe on Titan and revealing Enceladus's geysers.",
    highlight: "First Titan landing",
  },
  {
    year: "2012",
    name: "Curiosity Rover",
    target: "Mars",
    description:
      "Nuclear-powered lab that found evidence ancient Gale Crater was habitable.",
    highlight: "Signs of habitability",
  },
  {
    year: "2015",
    name: "New Horizons",
    target: "Pluto & Kuiper Belt",
    description:
      "After nine years and 5 billion km, it revealed Pluto's heart-shaped nitrogen glacier.",
    highlight: "First Pluto flyby",
  },
  {
    year: "2021",
    name: "James Webb Space Telescope",
    target: "Sun–Earth L2",
    description:
      "Infrared eyes that peer at the first galaxies and analyze the air of alien worlds.",
    highlight: "Exoplanet atmospheres",
  },
];

export interface Fact {
  title: string;
  body: string;
  stat: string;
}

export const facts: Fact[] = [
  {
    title: "99.86% of everything",
    body: "The Sun holds almost all the mass of the solar system. Every planet, moon, asteroid and comet combined is a rounding error.",
    stat: "1.3 million Earths fit inside the Sun",
  },
  {
    title: "A day longer than a year",
    body: "Venus rotates so slowly that one spin takes 243 Earth days — while its year lasts only 225. A Venusian day outlasts its year.",
    stat: "243-day rotation",
  },
  {
    title: "It rains diamonds",
    body: "Deep inside Neptune and Uranus, pressure crushes carbon into diamond crystals that sink toward the cores.",
    stat: "2,100 km/h winds",
  },
  {
    title: "The tallest mountain",
    body: "Olympus Mons on Mars rises 21.9 km — nearly two and a half times the height of Mount Everest.",
    stat: "21.9 km high",
  },
  {
    title: "Saturn would float",
    body: "Saturn's density is lower than water. In an impossibly large bathtub, the ringed planet would bob at the surface.",
    stat: "0.687 g/cm³ density",
  },
  {
    title: "One world of gold",
    body: "Psyche, a metal-rich asteroid between Mars and Jupiter, may contain metals worth more than the entire world economy.",
    stat: "~$10 quintillion",
  },
];
