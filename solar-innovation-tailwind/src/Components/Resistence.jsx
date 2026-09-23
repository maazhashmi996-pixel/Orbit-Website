const leftItems = [
  {
    icon: "/icon-1.png",
    title: "Versatile",
    text: "Installabile in qualsiasi balcone anche all'interno del condominio. Non richiede autorizzazioni ne opere murarie. Utile anche come schermatura solare",
  },
  {
    icon: "/icon-3.png",
    title: "Automatizzato",
    text: "Totalmente automatico e retraibile, S.I.R.E regola la quantità di sole in casa in base alle necessità. Un perfetto connubio tra sole e ombra. I suoi sensori regolano l'esposizione in base alle condizioni atmosferiche.",
  },
  {
    icon: "/icon-5.png",
    title: "Efficiente",
    text: "Il sistema di accumulo permette di conservare l’energia generata in eccesso e renderla disponibile quando serve, per esempio di sera o in giornate nuvolose.",
  },
];

const rightItems = [
  {
    icon: "/icon-2.png",
    title: "Indipendente e Green",
    text: "dalle fonte non rinnovabili non è più un’utopia. S.i.r.e. fornisce l’accesso a fonti energetiche green anche a chi non ha un tetto di proprietà.",
  },
  {
    icon: "/icon-4.png",
    title: "Connesso",
    text: "Il sistema si connette ai dispositivi Alexa, Google, elettrodomestici 2.0 wi-fi. Tramite l’app accedi ai dati di produzione dell’energia e ricevi notifiche e suggerimenti per l’utilizzo ottimale dell’energia autoprodotta.",
  },
  {
    icon: "/icon-6.png",
    title: "Resistente",
    text: "Il sistema è realizzato con un rivestimento protettivo, impermeabile, isolante e resistente a fenomeni atmosferici aggressivi, all’abrasione, urti e graffi.",
  },
];

function Item({ icon, title, text }) {
  return (
    <div className="flex gap-3 mb-6">
      <div className="shrink-0 w-[55px] h-[55px] rounded-full border-2 border-brand flex justify-center items-center p-2">
        <img src={icon} alt="" />
      </div>
      <div>
        <h5 className="text-lg sm:text-xl font-semibold leading-[1.2]">{title}</h5>
        <p className="text-[15px] mt-1">{text}</p>
      </div>
    </div>
  );
}

export default function Resistence() {
  return (
    <div className="bg-surface flex flex-col items-center justify-center mb-12 pb-12 px-4">
      <h3 className="mt-16 sm:mt-24 text-center sm:text-left font-semibold text-[clamp(24px,5vw,36px)] leading-[1.2]">
        Connesso, Intelligente, Resistente
      </h3>
      <div className="w-[130px] h-[3px] bg-brand my-2.5"></div>

      <div className="flex flex-col md:flex-row justify-center gap-3 mt-12 max-w-[1000px] w-full px-2">
        <div className="w-full md:w-5/12">
          {leftItems.map((item) => (
            <Item key={item.title} {...item} />
          ))}
        </div>
        <div className="w-full md:w-5/12">
          {rightItems.map((item) => (
            <Item key={item.title} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
