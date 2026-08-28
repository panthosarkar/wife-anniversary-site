# For My Forever Love 💜

A static, romantic photo-album website for your wife — built with Next.js,
Tailwind CSS and Framer Motion animations.

## 1. Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## 2. Add your own photos

Put your real photos in `public/images/` and replace the placeholder
gradient SVGs (`memory-1.svg` ... `memory-6.svg`). Easiest path:

1. Name your photos `memory-1.jpg`, `memory-2.jpg`, ... `memory-6.jpg`
   (or any names you like) and drop them into `public/images/`.
2. Open `lib/data.ts` and update each `src` in the `memories` array to
   match, e.g. `src: "/images/memory-1.jpg"`.
3. Add as many memories as you want — just add more objects to the array,
   the timeline lays itself out automatically.

## 3. Edit all the text in one place

Everything you'd want to personalize — her name, your name, the tagline,
photo captions, the "reasons I love you" list, and the closing love
letter — lives in **`lib/data.ts`**. You don't need to touch any
component file to customize the content.

## 4. Build a static site

```bash
npm run build
```

This outputs a fully static site to the `out/` folder (thanks to
`output: 'export'` in `next.config.js`) which you can upload anywhere:
Vercel, Netlify, GitHub Pages, or any plain web host / shared hosting.

## Project structure

```
app/
  layout.tsx         Fonts + global HTML shell
  page.tsx            Assembles the sections
  globals.css         Tailwind + a few custom effects
components/
  Hero.tsx             Full-screen opening
  StoryTimeline.tsx    Polaroid photo timeline (the centerpiece)
  LoveNotes.tsx        "Reasons I love you" card grid
  ClosingSection.tsx  Closing love letter
  FloatingHearts.tsx  Ambient floating heart particles
lib/
  data.ts             ALL editable content lives here
public/images/         Your photos go here
```

## Color palette

| Name     | Hex       |
|----------|-----------|
| Lavender | `#C3A8E6` |
| Blush pink | `#F2A0C0` |
| Sky blue | `#B8D6FB` |
| Ink plum (near-black) | `#211A2C` |
| Cream (near-white) | `#FFFBFE` |

Happy anniversary! 🎉
