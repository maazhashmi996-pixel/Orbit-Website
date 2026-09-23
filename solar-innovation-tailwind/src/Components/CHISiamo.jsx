import Dots from "./Dots";

const team = [
  {
    img: "/Testoni Cristian.jpg",
    name: "Cristian Testoni",
    text: "Ingegnere Meccanico, MBA. Ho ricoperto cariche di consulente e progettista in aziende meccaniche. Ho avviato come imprenditore svariate iniziative in ambito Automotive e mobilità elettrica.",
  },
  {
    img: "/Gavioli.jpg",
    name: "Francesco Gavioli",
    text: "Nel corso degli anni ho maturato una profonda conoscenza nella progettazione e realizzazione di impianti elettrici e di energia rinnovabile. Dal 2020 sono fondatore di Gavioli Impianti, azienda all’avanguardia nell’installazione di impianti fotovoltaici",
  },
  {
    img: "/Fabi.jpg",
    name: "Massimo Fabi",
    text: "Laurato in Economia e Commercio mi sono occupato per anni di Business Development sia in multinazionali che PMI italiane in differenti settori",
  },
];

export default function CHISiamo() {
  return (
    <div>
      <div className="relative">
        <div className="text-center mb-12 px-4">
          <h3 className="relative inline-block pb-2.5 font-semibold text-[clamp(24px,5vw,36px)] leading-[1.2] uppercase after:content-[''] after:absolute after:bottom-0 after:left-5 after:w-[calc(100%-30px)] after:border-b-[3px] after:border-brand">
            CHI SIAMO
          </h3>
          <p className="mt-4 px-2 sm:px-10 md:px-20 lg:px-[165px] text-[15px] sm:text-[17px] font-normal leading-[1.55]">
            Solar Innovatio è una PMI innovativa italiana specializzata nella
            progettazione e realizzazione di sistemi fotovoltaici intelligenti.
            Solar Innovatio unisce alla decennale esperienza maturata nel
            panorama italiano nell'ambito delle soluzioni fotovoltaiche un
            approccio ingegneristico, innovativo, digitale alla principale fonte
            di energia rinnovabile.
          </p>
        </div>
        <div className="absolute left-[5%] top-[25px] z-0">
          <Dots className="opacity-50" />
        </div>
      </div>

      <div className="flex justify-center items-center gap-6 flex-wrap px-4">
        {team.map((member) => (
          <div
            key={member.name}
            className="relative w-full max-w-[340px] min-h-[260px] mt-[90px] sm:mt-[70px] md:mt-[70px] mb-12 bg-surface-2 rounded-md flex justify-center items-center pb-5"
          >
            <img
              src={member.img}
              alt={`${member.name} Img`}
              className="absolute -top-[60px] sm:-top-20 left-1/2 -translate-x-1/2 w-[90px] h-[90px] sm:w-auto sm:h-auto object-cover rounded-full sm:rounded-none"
            />
            <div className="absolute top-[65%] -translate-y-1/2 w-full px-4 text-center">
              <h5 className="text-xl font-medium mb-2">{member.name}</h5>
              <p className="text-sm leading-[19.5px]">{member.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-center items-center px-4">
        <p className="w-full sm:w-[90%] md:w-[63%] text-center italic font-medium text-[clamp(15px,2.5vw,21px)] leading-[1.5]">
          <i className="fa-solid fa-quote-left mr-1"></i>
          Non sviluppiamo pannelli fotovoltaici. Il pannello è solo una
          componente di una soluzione ingegneristica più completa che comprende
          sensoristiche avanzate e l'integrazione con i sistemi domotici di
          casa.
          <i className="fa-solid fa-quote-right ml-1"></i>
        </p>
        <div className="flex justify-center items-center w-[90%] sm:w-[70%] mb-12">
          <div className="h-px bg-brand-dark w-10"></div>
          <h5 className="text-brand mx-3 whitespace-nowrap">
            Cristian Testoni
          </h5>
          <div className="h-px bg-brand-dark w-10"></div>
        </div>
      </div>
    </div>
  );
}
