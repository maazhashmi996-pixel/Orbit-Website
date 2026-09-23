const steps = [
  {
    img: "/connection-1.png",
    title: "Richiedi un Preventivo",
    text: "Senza impegno un nostro Solar expert ti contatterâ per verificare Ie tue esirenze ditilizzn",
  },
  {
    img: "/connection-2.png",
    title: "Verifica la compatibilitâ",
    text: "Verifica immediata della necessitâ tecniche di installazione",
  },
  {
    img: "/connection-3.png",
    title: "Installazione",
    text: "Un instalIatore qualificato Solar Innovatio posizionerâ il SIRE in massimo 2 ore",
  },
  {
    img: "/connection-4.png",
    title: "Enjoy your Sun Power",
    text: "Connettiti alla APP e goditi la tua energia solare",
  },
];

export default function Connettiti() {
  return (
    <div className="bg-surface flex flex-col items-center justify-center py-12 px-4">
      <h4 className="font-medium text-[clamp(24px,5vw,36px)] text-center">
        Connettiti al sole anche tu
      </h4>
      <div className="border-2 border-brand-dark w-[130px] mt-2.5"></div>

      <div className="flex flex-wrap justify-center mt-6 gap-4 max-w-[1150px]">
        {steps.map((step) => (
          <div
            key={step.title}
            className="w-full sm:w-[45%] md:w-[22%] border border-gray-200 rounded-md mt-4 p-2"
          >
            <div className="h-full rounded-[10px] flex flex-col items-center justify-center py-4 px-3 text-center">
              <img src={step.img} className="pt-2 max-w-[60px]" alt="..." />
              <h4 className="mt-3 font-medium text-base text-center">{step.title}</h4>
              <p className="mb-0 mt-1 text-sm text-center">{step.text}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-12 px-6 py-3 rounded-md bg-brand text-white font-medium hover:bg-brand-dark transition-colors">
        Collegati al sole
      </button>
    </div>
  );
}
