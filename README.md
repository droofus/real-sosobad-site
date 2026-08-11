# Soccer team site

A small Next.js site designed for free deployment on Vercel. The schedule is stored in `lib/schedule.ts`; RSVP buttons can point to Google Forms so responses land in Google Sheets. The current schedule is for Real Sosobad in the MVSL Fall 2026 Men's Open 11v11 league.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Customize it

1. Open `lib/schedule.ts`.
2. Change the team name, short name, league, and season if needed.
3. Update matches if the league publishes schedule changes.
4. The current Google Form URL is already connected to every match. Add a required `Which match?` dropdown to the form so responses identify the fixture.

The simplest Google Form setup is one form with these questions:

- Name
- Which match? — use a dropdown with the remaining fixtures, including the day and field:
  - Sunday, Aug 9 · 5:00 PM · Field 1 · Highnoon · WARRIORS (test match)
  - Tuesday, Aug 18 · 7:00 PM · Field 1 · Highnoon · Stallions FC
  - Tuesday, Aug 25 · 7:00 PM · Field 1 · Highnoon · Pistoleros FC
  - Sunday, Aug 30 · 1:00 PM · Field 1 · Highnoon · Deming FC
  - Sunday, Sep 13 · 5:00 PM · Field 1 · PVD · Elite FC
  - Sunday, Sep 20 · 1:00 PM · Field 1 · Highnoon · International United
  - Sunday, Sep 27 · 3:00 PM · Field 1 · Highnoon · Kaiser FC
  - Sunday, Oct 4 · 5:00 PM · Field 1 · Highnoon · Gansitos
  - Sunday, Oct 11 · 1:00 PM · Field 1 · Highnoon · Cuervos
- Are you going to be there? — Yes / Maybe / No

## Deploy to Vercel

Push this folder to GitHub, import the repository in Vercel, and use the defaults for a Next.js project. No environment variables are required for the first version.
