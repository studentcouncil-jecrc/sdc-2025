# JECRC Student Council — New Frontend (rebuild)

Deadline: **28 August** (12 days from today, 16 Aug)

## What's in this repo

- Same stack as the old site: React 19 + Vite + Tailwind v4 + React Router.
- All real copy pulled from the old codebase into one file: `src/data/content.js`
  (hero text, about text, all 13 club descriptions, mentor names/titles, footer
  info). Edit copy there, not inside components.
- All images/fonts/video copied over into `src/assets/` — nothing missing from
  the old site.
- A first pass at a new visual direction ("campus bulletin" — cream paper
  background, ink black text, cobalt + coral accents, Archivo Black display
  type, IBM Plex Mono for labels, numbered "stamp" badges on club cards since
  they're a real numbered roster). This is a starting point, not final —
  treat every component as editable.
- Routes: `/` (home, one-pager with anchor sections) + one route per club
  (`/aashayein`, `/adaa`, etc.) all driven by the same `ClubPage.jsx`
  template reading from `content.js`, so you don't need 13 near-duplicate
  files like the old site had.

## Run it

```
npm install
npm run dev
```

## What's NOT done yet (needs you + the team)

1. **Events section** (`src/components/Events.jsx`) — currently uses 6 old
   gallery photos as placeholders. Swap in this year's event photos + names.
2. **Club detail pages** — currently just show name/tag/description. If any
   club wants a richer page (team members, past events, socials), extend
   `ClubPage.jsx` or the `clubs` array in `content.js`.
3. **Mobile QA** — built mobile-first but needs a real pass on small screens.
4. **Real hero video/image** — old `vid.webm` is wired up but not used in the
   new hero yet; decide if you want video back or a static hero image.
5. **Deploy** — old site had a `vercel.json`; copy it over once you're ready
   to ship, or set up a fresh Vercel project pointing at this repo.

## Suggested split across your team (you + 2 others)

- **You (Akshat):** structure/content — own `content.js` accuracy, the
  ClubPage template, and routing. You already know this stack from your
  MERN work.
- **Person 2:** visual polish — refine Hero/About/Clubs/Mentors sections,
  swap in real event photos, mobile responsiveness pass.
- **Person 3:** content collection + QA — get final copy/photo approval from
  each club, proofread all 13 descriptions, test every route on a phone.

## Day-by-day to 28 Aug

- **Day 1–2 (16–17 Aug):** Everyone runs the project locally, agrees on the
  visual direction (keep this one / tweak it / go different) and who owns
  what section.
- **Day 3–6 (18–21 Aug):** Build out real sections in parallel — events
  photos, mobile pass, any club-specific page requests.
- **Day 7–9 (22–24 Aug):** Content QA — every description accurate, every
  image loading, every link working. Fix broken states.
- **Day 10–11 (25–26 Aug):** Deploy to Vercel, test the live URL on real
  phones, fix anything that only breaks in production.
- **Day 12 (27–28 Aug):** Buffer for last-minute fixes + final handoff.

If the team is smaller than expected, cut scope in this order: skip the
events photo refresh first, keep the club detail pages minimal, and prioritize
the home page + working navigation above everything else — that's what
people will actually judge first.
