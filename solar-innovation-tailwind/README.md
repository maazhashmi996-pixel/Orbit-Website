# Solar Innovation — React + Tailwind CSS

This project was converted from Bootstrap 5 + custom CSS to **Tailwind CSS v4**, fully responsive (mobile / tablet / desktop).

## What changed
- Removed Bootstrap CSS/JS and jQuery-style `data-bs-*` toggles (CDN links removed from `index.html`)
- Removed the large custom `index.css` — replaced with Tailwind utility classes directly in components
- Custom brand colors are defined once in `src/index.css` under `@theme` (`brand`, `brand-dark`, `surface`, `surface-2`) and used as `bg-brand`, `text-brand-dark`, etc.
- Mobile navigation (both the top info bar and the main nav links) now uses React `useState` toggles instead of Bootstrap's collapse JS
- Fixed a couple of broken image paths (e.g. `../public/Testoni Cristian.jpg` → `/Testoni Cristian.jpg`) so images load correctly in a production build
- Added a submit button to the contact form (the original had none)
- FontAwesome icons kept via CDN (only used for a handful of icons) — everything else is plain Tailwind

## Install & run

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```

## Notes
- All original Italian copy, images, and layout structure were preserved exactly — only the styling approach changed (Bootstrap → Tailwind).
- A few source strings have typos from the original content (e.g. "resdidenziale", "tettlo", "conne ssione") — left as-is since they're content, not code. Edit directly in the relevant component if you want them fixed.
