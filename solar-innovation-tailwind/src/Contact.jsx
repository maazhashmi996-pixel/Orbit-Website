export default function Contact() {
  return (
    <div className="my-12 px-4">
      <h5 className="text-center font-semibold text-[clamp(24px,5vw,36px)]">CONTATTACI</h5>
      <div className="w-[130px] h-[3px] bg-brand mx-auto my-5"></div>

      <div className="flex items-center justify-center mt-4">
        <div className="w-full max-w-[550px]">
          <div className="p-6 rounded-md shadow-sm bg-white">
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                className="w-full rounded-md border border-gray-300 px-3 py-2.5 focus:outline-none focus:border-brand"
                placeholder="First Name"
              />
              <input
                type="text"
                className="w-full rounded-md border border-gray-300 px-3 py-2.5 focus:outline-none focus:border-brand"
                placeholder="Last Name"
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                className="w-full rounded-md border border-gray-300 px-3 py-2.5 focus:outline-none focus:border-brand"
                placeholder="Email Address"
              />
            </div>

            <div className="mb-4">
              <textarea
                className="w-full rounded-md border border-gray-300 px-3 py-2.5 focus:outline-none focus:border-brand resize-none"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button className="w-full px-4 py-2.5 rounded-md bg-brand text-white font-medium hover:bg-brand-dark transition-colors">
              Invia Messaggio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
