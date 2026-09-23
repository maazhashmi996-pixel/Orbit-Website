export default function Subscribe() {
  return (
    <div className="bg-[#86be3fdb]">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 text-white">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-8 md:py-12">
          <div className="w-full md:w-1/2">
            <p className="font-semibold text-[clamp(19px,3vw,24px)]">Subscribe for Newsletter</p>
            <p className="mt-2">
              Leo dui fermentum tristique urna tellus eget amet aliquam. Id
              vitae orci maecenas tortor odio
            </p>
          </div>
          <div className="w-full md:w-5/12 flex items-center bg-[#f0f0f0] rounded-full p-2">
            <input
              type="text"
              className="flex-1 bg-transparent border-0 outline-none px-3 text-gray-800"
              placeholder="Insert your e-mail"
            />
            <button
              type="button"
              aria-label="Subscribe"
              className="w-10 h-10 shrink-0 rounded-full bg-[#86be3fdb] flex items-center justify-center ml-2 cursor-pointer"
            >
              <img src="/Airoplane.png" alt="" className="w-[18px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
