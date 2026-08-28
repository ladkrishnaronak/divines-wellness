# Divines Wellness Program — Landing Page

Next.js (App Router) + Tailwind CSS build of the Figma design:
https://www.figma.com/proto/C3JyzsAhZT11uO5iVPGpdC/Divines-Wellness-Program-Landing-Page (node 7:2)

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Important: placeholder images

This sandbox's network can't reach figma.com, so the real photos/exports
couldn't be downloaded automatically. Every photo in the design (hero video
thumbnail, symptom tiles, program-journey pillar photos, founder portraits)
is currently a labeled gradient placeholder — see
`src/components/PlaceholderImage.tsx`.

To finish:
1. In Figma, select each image layer → right-click → **Export** (or Dev
   Mode → Export).
2. Drop the exported file into `public/images/` using the filename shown
   on each placeholder (hover/inspect the component, or check the `file`
   values in `src/components/SymptomChecker.tsx`, `ProgramJourney.tsx`,
   `Founders.tsx`, `Hero.tsx`, `Header.tsx`).
3. Swap `<PlaceholderImage ... />` for `<img src="/images/<file>" alt="..." />`
   (or `next/image`).

Icons (calendar, monitor, phone, map pin, hamburger menu, play button) are
real icons from `lucide-react` — no placeholders needed there.

## One content note

The original design's "6 Consultations" list had "Yoga Therapist" listed
twice (looks like a Figma copy/paste artifact). I relabeled the third item
as "Ayurveda Coach" as a placeholder — confirm the actual 4th specialist
and update `src/components/Sessions.tsx`.

## Deploy to Vercel

1. Push this project to a new GitHub repo.
2. In Vercel, "Add New Project" → import that repo → deploy (no config
   needed, it's a standard Next.js app).

## Syncing future Figma changes

See the project's `figma-to-vercel-sync-plan.md` doc for the sync workflow
(manual "sync now" trigger, recommended to start).
