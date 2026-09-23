import Dots from "./Dots";

export default function SIRE() {
  return (
    <div className="max-w-[1300px] mx-auto px-4 sm:px-6 pb-16 lg:pb-[270px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-4">
        <div className="w-full md:w-5/12 flex items-center relative">
          <div className="relative">
            <Dots className="hidden lg:block absolute -top-[8%] -left-[13%] -z-10" />
            <img src="/SIRE1.jpg" className="block w-full" alt="" />
            <img
              src="/SIRE2.png"
              className="hidden lg:block absolute -bottom-[190px] -right-[135px]"
              alt=""
            />
            <Dots className="hidden lg:block absolute -bottom-[72%] left-[125%] -z-10" />
          </div>
        </div>

        <div className="w-full md:w-7/12 mt-4 md:mt-0">
          <Dots className="hidden sm:flex justify-end pe-5 mt-5" />
          <h4 className="text-[clamp(20px,3vw,27px)] font-medium text-brand-dark">S.I.R.E</h4>
          <h3 className="m-0 text-[clamp(20px,4vw,29px)] font-semibold leading-[1.35]">
            Smart Integrated Renewable Energy
          </h3>
          <div className="w-[110px] h-[3px] bg-brand my-2"></div>
          <p className="text-[17px] font-normal leading-[1.55]">
            S.I.R.E. è il primo sistema fotovoltaico intelligente al mondo per
            la produzione, conversione e gestione dell'energia solare,
            studiato specificatamente per installazioni all'interno di
            condomini.
          </p>
        </div>
      </div>
    </div>
  );
}
