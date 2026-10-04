
# Tulas International School (TIS) - Homepage Redesign

A modern, animated redesign of the Tulas International School homepage focusing on high conversion, fluid animations, and mobile responsiveness. All copy, statistics, rankings, reviews and contact details come from [tis.edu.in](https://tis.edu.in/). This is a front-end redesign exercise and is not an official TIS website.

## 🚀 Live Demo

- **Live URL:** https://tis-homepage-live.vercel.app/
- **Repository:** https://github.com/singhbhavya2103-eng/tis-homepage-redesign

## 🛠️ Tech Stack

- **Framework:** React 18+ with Vite
- **Styling:** Plain CSS, one stylesheet per component, with CSS custom properties for the light/dark theme tokens (`src/styles/theme.css`)
- **Animations:** Framer Motion (scroll reveals, count-up, toggle, cursor) and CSS keyframes (floating hero photos, mobile menu)
- **Icons:** Lucide React, React Icons (social brand icons)
- **Deployment:** Vercel

## ✨ Standout Features Implemented

1. **Scroll-Triggered Reveals:** `Reveal` fades and lifts content in once as it enters the viewport (`whileInView`, `once: true`, 0.5s). Cards use an increasing `delay` for a staggered entrance.
2. **Scroll Progress Bar:** `ScrollProgress` uses `useScroll` and `useSpring` to draw a smooth reading-progress bar above the sticky header.
3. **Custom Cursor:** `CustomCursor` is a spring-driven ring that trails the mouse and grows over links and buttons. It only renders for mouse users (`(hover: hover) and (pointer: fine)`) and is skipped when reduced motion is requested.
4. **Animated Dark/Light Theme Switcher:** `ThemeToggle` is an accessible `role="switch"` with a spring-animated knob. The choice is saved in `localStorage`, defaults to the OS setting, and is applied before first paint to avoid a flash.
5. **Count-up Statistics:** `CountUp` animates the campus numbers and collaborations total when they scroll into view.

Also included: a skip-to-content link, `prefers-reduced-motion` support throughout, semantic landmarks (`header`, `nav`, `main`, `section`, `footer`, `address`), and keyboard-accessible controls with visible focus styles.

## 📦 Getting Started Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/tis-homepage-redesign.git
   cd tis-homepage-redesign
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open the address printed in the terminal (usually http://localhost:5173).

### Other scripts

| Command           | What it does                           |
| ----------------- | -------------------------------------- |
| `npm run build`   | Creates the production build in `dist` |
| `npm run preview` | Serves the production build locally    |
| `npm run lint`    | Runs ESLint                            |

## 🌐 Deploying

### Vercel (recommended)

1. Push the project to a public GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel detects Vite automatically. Confirm these settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**. Every later push to `main` redeploys automatically.
5. Copy the live URL into the **Live Demo** section above.

### Netlify

1. Choose **Add new site → Import an existing project** and select the repository.
2. Set **Build command** to `npm run build` and **Publish directory** to `dist`.
3. Click **Deploy site**.

### GitHub Pages

Set `base: "/your-repo-name/"` in `vite.config.js`, run `npm run build`, and publish the `dist` folder.

## 🧩 Component Architecture Overview

```
src/
├── components/   # Shared pieces: Navbar, Footer, Reveal, ScrollProgress,
│                 #   CustomCursor, ThemeToggle, CountUp
├── sections/     # Page sections: Hero, About, Learning, Sports, Rankings,
│                 #   Reviews, Campus, Admissions
├── hooks/        # useTheme (theme state + persistence),
│                 #   useFinePointer (mouse vs touch detection)
├── data/         # Content kept out of the JSX: site contact info and links,
│                 #   programs, sports, stats, rankings, reviews, hero photos
└── styles/       # variables.css, theme.css (light/dark tokens),
                  #   global.css, animations.css, index.css
```

Content lives in `src/data/`, so copy can be updated without touching components.

## 🎨 Brand Identity Retained

- TIS maroon and teal colour palette, gold accents, and the school logo
- The "LET'S DO it With Tulas" headline
- Navigation labels, contact details, statistics (22 acres, 16+ sports, 24×7 medical assistance, 6:1 ratio), rankings and parent reviews from the live site

## 📝 Notes

- Hero and sports photos are placeholder stock images. Replace the `src` values in `src/data/heroPhotos.js` and `src/data/sports.js` with TIS photos saved in `public/images/`.
- The enquiry card links to the official admissions portal (`admission.tis.edu.in`) rather than collecting data itself.

