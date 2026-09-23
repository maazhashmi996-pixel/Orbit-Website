const plans = [
  {
    img: "/Scegli-1.png",
    title: "S.I.R.E Direct",
    bullets: [
      "Sistema Plugin",
      "Struttura meccanizzata in poliuera e sensoristica intelligente",
      "Pannelli alta efficienza da 1KW",
      "Inverter e conne ssione aII'impianto domestico",
      "App di controllo e gesti one",
    ],
    scopriTitle: "Scopri le caratteristiche tecniche",
    list: [
      "Te mpo di ricarica medio in estate",
      "TBD Tempo di scarica a 16A.",
      "TBD Autonomia dalla rete elettrica.",
      "TBD Autonomia in casa di blackout.",
      "2gg Immissione di CO2 da 1.022 kg a SOO kg annui",
      "Te mpo di ricarica medio in estate.",
    ],
  },
  {
    img: "/Scegli-2.png",
    title: "S.I.R.E Full",
    bullets: [
      "Struttura meccanizzata in poliuera e sensoristica intelligente",
      "Pannelli alta efficienza da 1KW",
      "Inverter e conne ssione aII'impianto domestico",
      "App di controllo e gesti one",
    ],
    scopriTitle: "Title here if they have othervise remove this",
    list: [
      "Siste ma 2 kW con accumuIo.",
      "Tempo di ricarica medio in estate is 5 ore e 30 minuti",
      "Te mpo di scarica a 16A is 8 ore.",
      "Autonomia dalla rete eIettrica 62Po.",
    ],
  },
];

function PlanCard({ plan }) {
  return (
    <div className="w-full lg:w-[45%] max-w-[540px] bg-white rounded-md shadow-sm h-full">
      <img src={plan.img} className="w-full rounded-t-md" alt="..." />
      <div className="p-4">
        <h5 className="text-left font-semibold text-2xl leading-[1.1] mb-4 text-brand-dark">
          {plan.title}
        </h5>

        {plan.bullets.map((bullet, i) => (
          <div
            key={i}
            className={`flex items-start gap-2 ${i === plan.bullets.length - 1 ? "mb-3" : "mb-2"}`}
          >
            <i className="fa-solid fa-chevron-right text-brand-dark mt-1"></i>
            <p className="mb-0">{bullet}</p>
          </div>
        ))}

        <h4 className="font-medium text-base">CONSIGLIATO PER:</h4>

        <div className="flex gap-8 sm:gap-12 mt-4">
          <div>
            <div className="w-[50px] h-[50px] rounded-full bg-[#dbdbdb] flex justify-center items-center">
              <img src="/Scegli-3.png" alt="" />
            </div>
            <p className="text-base mt-2">Devices</p>
          </div>
          <div>
            <div className="w-[50px] h-[50px] rounded-full bg-[#dbdbdb] flex justify-center items-center">
              <img src="/Scegli-4.png" alt="" />
            </div>
            <p className="text-base mt-2">Families</p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <h4 className="font-medium text-base leading-[1.75] mb-0">{plan.scopriTitle}</h4>
          <i className="fa-solid fa-chevron-down text-brand-dark shrink-0 ml-2"></i>
        </div>

        <ul className="list-none pl-5 mt-2">
          {plan.list.map((item, i) => (
            <li key={i} className="relative before:content-['•'] before:absolute before:-left-[15px] before:text-brand-dark">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Scegli() {
  return (
    <div className="my-12 flex flex-col justify-center items-center px-4">
      <h4 className="font-semibold text-[clamp(24px,5vw,36px)]">Scegli il tuo SIRE</h4>
      <div className="border-2 border-brand-dark w-[110px] mt-4"></div>

      <div className="flex flex-col lg:flex-row justify-center gap-6 mt-12 max-w-[1150px]">
        {plans.map((plan) => (
          <PlanCard key={plan.title} plan={plan} />
        ))}
      </div>
    </div>
  );
}
