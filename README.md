# The Continental v2
### Sanctuary for Digital Excellence

A cinematic, premium-dark organization portfolio website — inspired by *The Continental Hotel* from the John Wick universe. Built with Next.js 15, GSAP-style scroll reveals, Lenis smooth scroll, glassmorphism, and a procedural Web Audio ambient soundtrack.

---

## Quick Start

```bash
npm install
npm run dev
# → http://localhost:3000
```

---

## Tech Stack

| Layer         | Tech                                |
|---------------|-------------------------------------|
| Framework     | Next.js 15 (App Router)             |
| Language      | TypeScript                          |
| Styling       | Tailwind CSS 3 + CSS Variables      |
| Animations    | CSS keyframes + IntersectionObserver |
| Smooth Scroll | Lenis v1                            |
| Sound         | Web Audio API (zero external files) |
| Fonts         | Cinzel · Cormorant Garamond · Montserrat |

---

## Project Structure

```
src/
├── app/
│   ├── globals.css          ← full design system (tokens, glass, glow, keyframes)
│   ├── layout.tsx           ← root layout (SmoothScroll, Cursor, Nav, SoundButton)
│   ├── page.tsx             ← Home: Entry Gate → Hero → Intro → Featured → Quote
│   ├── not-found.tsx        ← 404 / Access Denied
│   ├── registry/page.tsx    ← Products with live filter (All/Deployed/Active/Classified)
│   ├── ledger/page.tsx      ← Timeline grouped by year with animated status dots
│   ├── about/page.tsx       ← Organization story, mission, values, tech arsenal
│   ├── council/page.tsx     ← Founders with hover glow avatar cards
│   └── access/page.tsx      ← Contact form with validation + confirmation
│
├── components/
│   ├── Cursor.tsx           ← Custom gold cursor with lerp ring + hover/click states
│   ├── EntryGate.tsx        ← Cinematic full-screen lock screen with floating particles
│   ├── Footer.tsx           ← Reusable footer with configurable links
│   ├── GSAPReveal.tsx       ← IntersectionObserver scroll-reveal (up/left/right/scale/fade)
│   ├── Navigation.tsx       ← Fixed nav: scroll-aware blur, active route, mobile menu
│   ├── ParallaxSection.tsx  ← Scroll-based parallax wrapper
│   ├── SmoothScroll.tsx     ← Lenis smooth scroll provider
│   ├── SoundButton.tsx      ← Web Audio API ambient soundtrack toggle
│   └── StatusBadge.tsx      ← Deployed (gold) / Active (red pulse) / Classified / Upcoming
│
└── lib/
    ├── products.ts          ← 9 product case files with metadata + accentColor
    └── data.ts              ← Timeline entries + Council members
```

---

## Pages

| Route       | Theme Name          | Description                                              |
|-------------|---------------------|----------------------------------------------------------|
| `/`         | Sanctuary           | Entry gate → expanding rings hero → org intro → featured |
| `/registry` | The Registry        | 9 case files, live filter, glassmorphism product cards    |
| `/ledger`   | The Ledger          | Year-grouped timeline, status dots, GSAP reveals          |
| `/about`    | The Organization    | Origin story, mission, vision, The Code, tech arsenal     |
| `/council`  | The Council         | Founder profiles with hover glow effects                  |
| `/access`   | System Access       | Contact form with validation + thematic confirmation      |

---

## Design System

```css
--gold:        #C9A66B   /* primary accent */
--gold-bright: #D4AF37   /* hover/active gold */
--gold-dim:    #7a6235   /* borders, labels */
--red:         #C8102E   /* active status, danger */
--black:       #0a0a0a   /* primary background */
--black-2:     #111111   /* section backgrounds */
--white:       #f0ece4   /* primary text */
--white-dim:   #a09a8e   /* secondary text */
--glass-bg:    rgba(15,12,8,0.65)   /* glassmorphism */
--glass-blur:  16px
```

**Fonts:** Cinzel (display/headings) · Cormorant Garamond (body) · Montserrat (UI/labels)

---

## Ambient Soundtrack (Web Audio API)

Zero external audio files. Built with 9 layered oscillators:

| Layer              | Frequency | Type     |
|--------------------|-----------|----------|
| Sub drone          | 40 Hz     | Sine     |
| Fundamental        | 55 Hz     | Sine + LFO detune |
| 5th harmony        | 82.5 Hz   | Sine     |
| Octave             | 110 Hz    | Triangle |
| Shimmer + LFO      | 220 Hz    | Sine     |
| High shimmer + LFO | 440 Hz    | Sine     |
| Bell shimmer       | 880 Hz    | Sine     |
| Low noise pad      | <140 Hz   | Filtered noise |
| Breathing noise    | ~300 Hz   | Bandpass noise |

Triggered on **Enter the System**. Toggle via gold button (bottom-right).

---

## Animations

| Technique              | Implementation                              |
|------------------------|---------------------------------------------|
| Scroll reveal          | `GSAPReveal` — IntersectionObserver + CSS   |
| Smooth scroll          | Lenis v1 (ease-out, 1.4s duration)          |
| Parallax               | `ParallaxSection` — scroll-based translateY |
| Cursor                 | Lerp ring follower, hover/click states      |
| Page transitions       | CSS `pageIn` keyframe on mount              |
| Hero rings             | CSS `ringExpand` keyframe with stagger      |
| Status dot pulse       | CSS `blink` on active status                |
| Coin glow              | CSS `coinPulse` with box-shadow animation   |
| Gold shimmer text      | `text-shimmer` with moving gradient         |

---

## Customization

**Add a product** → `src/lib/products.ts`  
**Add timeline entry** → `src/lib/data.ts` (timeline array)  
**Update founders** → `src/lib/data.ts` (council array)  
**Change accent colors** → `src/app/globals.css` (`:root` block)  
**Adjust scroll speed** → `src/components/SmoothScroll.tsx` (duration)

---

## Build & Deploy

```bash
npm run build    # production build
npm start        # start production server
```

**Vercel (recommended):**
```bash
npx vercel       # one-command deploy
```
Or push to GitHub → connect on vercel.com → auto-deploys on every push. Zero config needed.
