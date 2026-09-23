import { useState } from "react";

const links = [
  "Home",
  "Chi Siamo",
  "S.I.R.E",
  "SIRE Features",
  "Why SIRE?",
  "SIRE Product",
  "How it Works?",
];

export default function NavbarElements() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white relative">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden ml-auto my-2 flex items-center justify-center w-10 h-10 rounded-md border border-gray-300 text-gray-700"
          aria-label="Toggle navigation links"
          aria-expanded={open}
        >
          <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`}></i>
        </button>

        <ul
          className={`${
            open ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row lg:justify-between w-full mb-2 lg:mb-0 gap-1 lg:gap-0 pb-2 lg:pb-0`}
        >
          {links.map((label, i) => (
            <li key={label}>
              <a
                href="#"
                className={`block py-2 lg:py-4 ${
                  i === 0 ? "text-brand font-medium" : "text-gray-700 hover:text-brand"
                } transition-colors`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
