# marginalia

Marginalia is a minimal notes app — sign up, jot notes, pin the important ones, archive the rest.

**Stack:** Next.js 15 (App Router, TypeScript)

It is realistic but intentionally small, and 
## Key user actions

sign up · log in · create note · pin note · archive note

## Running it

```bash
npm install
npm run dev   # http://localhost:3000
```

## Feature flags

LaunchDarkly is wired in `app/flags.tsx` (`launchdarkly-react-client-sdk`, provider in `app/layout.tsx`). Two flags: `archive-button` (on for users whose `plan` is `pro`, 10% rollout for everyone else) and `pinned-first` (on for everyone). The client-side ID comes from `NEXT_PUBLIC_LD_CLIENT_ID` (see `.env.example`).
