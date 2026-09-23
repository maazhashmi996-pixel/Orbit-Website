import { useState } from "react";

export default function NavbarLogo() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 flex items-center justify-between py-3">
        <a href="#" className="flex items-center">
          <img src="/logo%201.png" alt="Logo" className="max-h-[42px] w-auto" />
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-300 text-gray-700"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`}></i>
        </button>

        <div
          className={`${
            open ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row items-center gap-3 lg:gap-4 w-full lg:w-auto absolute lg:static left-0 top-[64px] bg-white lg:bg-transparent px-4 lg:px-0 py-4 lg:py-0 shadow-md lg:shadow-none z-40`}
        >
          <div className="flex items-center justify-center gap-2">
            <i className="fa-solid fa-phone text-brand"></i>
            <span>0203 519 4420</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <i className="fa-solid fa-envelope text-brand"></i>
            <span>info@solarinnovation.com</span>
          </div>

          <button className="w-full lg:w-auto px-4 py-2 rounded-md bg-brand text-white hover:bg-brand-dark transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}
