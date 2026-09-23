export default function BgImage() {
  return (
    <div
      className="mb-12 h-[60vh] sm:h-[70vh] min-h-[380px] sm:min-h-[420px] flex flex-col justify-center items-center text-center text-white px-5"
      style={{
        backgroundImage: "url('/image-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="text-[clamp(26px,6vw,46px)] font-semibold mb-2.5">
        ll tuo accesso al sole
      </h2>
      <span className="text-[clamp(14px,2.5vw,18px)] max-w-[700px]">
        Sistemi fotovoltici intelligenti ad uso resdidenziale , anche in assenza di tettlo.
      </span>
      <p className="text-[clamp(13px,2vw,16px)] mt-2">
        La tua fonta d'engergia, gratuita e sostenibile.
      </p>
    </div>
  );
}
