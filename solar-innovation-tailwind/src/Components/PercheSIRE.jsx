const reasonCards = [
  {
    img: "/why1.png",
    title: "Risparmio Energetico",
    text: "Risparmia da un minimo del 60% sulla bolletta fino all'indipendenza energetica anche grazie alla schermatura solare che consente una riduzione fino al 95% dei raggi UV e quindi un minor utilizzo del condizionatore.",
  },
  {
    img: "/why2.png",
    title: "Mobilità Elettrica",
    text: "L'unica soluzione che rende l’utilizzo di un’auto elettrica veramente economico. L’efficienza dei pannelli e le batterie di accumulo garantiscono fino a 29.000 chilometri annui a emissioni zero.",
  },
  {
    img: "/why3.png",
    title: "Comunità Energetica",
    text: "Dal concetto di condominio al concetto di comunità energetica: Si.Re. e il sistema che rende possibile realizzare una Comunità Energetica Rinnovabile senza acquisto di energia elettrica dalla rete.",
  },
];

const bonusCards = [
  { img: "/Group1.png", value: "110%", label: "Superbonus" },
  { img: "/Group2.png", value: "65%", label: "Detrazione DOMOTICA" },
  { img: "/Group3.png", value: null, label: "Progettazione personalizzata" },
  { img: "/Group4.png", value: null, label: "consulenza fiscale sui bonus" },
];

export default function PercheSIRE() {
  return (
    <div className="mt-12 flex flex-col items-center justify-center px-4">
      <h3 className="text-center font-semibold text-[clamp(24px,5vw,36px)] leading-[1.2]">
        Perche S.I.R.E.
      </h3>
      <div className="border-2 border-brand-dark w-[115px] mt-2.5"></div>

      <div className="flex flex-wrap justify-center gap-6 my-12 max-w-[1100px]">
        {reasonCards.map((card) => (
          <div
            key={card.title}
            className="w-full sm:w-[45%] lg:w-[30%] max-w-[320px] min-h-[260px] pb-4 rounded-md shadow border-0 bg-white"
          >
            <div className="flex justify-center items-center">
              <img src={card.img} className="w-[67px] h-[70px] mt-4" alt="" />
            </div>
            <div className="p-4">
              <h5 className="font-semibold text-2xl mb-3">{card.title}</h5>
              <p className="font-normal text-base leading-[26px] text-center">{card.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-surface w-full flex justify-center">
        <div className="flex flex-wrap justify-center gap-4 py-6 max-w-[1100px] w-full px-4">
          {bonusCards.map((card) => (
            <div
              key={card.label}
              className="w-full max-w-[230px] min-h-[120px] pb-3 bg-white rounded-md flex flex-col justify-center items-center"
            >
              <img src={card.img} className="mt-4 mb-0 max-w-[52px]" alt="" />
              <div className="flex flex-col items-center px-4 py-2">
                {card.value && <h4 className="mb-0 font-bold">{card.value}</h4>}
                <p className="mb-0 text-center">{card.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
