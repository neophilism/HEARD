# HEARD engineering workspace baseline

HEARD-03 includes a private npm workspace, committed dependency lockfile, strict TypeScript contracts and a public-only Next.js app in `apps/web`. The app uses canonical public copy, six independent pathways and explicit preview/availability notices. It contains no intake forms, private data loaders, accounts, upload handlers, referrals or case records. Unknown public paths produce not-found output. No sensitive service is enabled by this shell.

## Reproduce locally

Use Node 22 or newer (the baseline CI selects Node 22):

```
npm ci --ignore-scripts
npm run check
npm run check:types
NEXT_TELEMETRY_DISABLED=1 npm run build
npm run dev
```

The app exports static pages to `apps/web/out/`; this is a build artifact, not evidence of deployment. Next.js, React, React DOM, TypeScript and type dependencies are exact-version pinned in package manifests and the resolved lockfile. No provider credentials are needed for this public shell. No external fonts, analytics or live APIs are called by application source.

## Observed verification and limits

On 2026-11-01 in an isolated Node 24.22.1 workspace, `npm ci --ignore-scripts`, `npm run check` (14 tests), `npm run check:types`, and the Next.js production static build succeeded. The production dependency audit reported zero known advisories at that observation; this is not a security certification or a statement about future advisories.

The existing foundation workflow runs `npm run check` without installing dependencies. It does not execute the app compiler or build. A prior protected-workflow request is recorded in the private Owner Action Board. Do not claim those checks ran in CI or route an install through an existing script to evade workflow authorization. CI install/typecheck/build/scanning, immutable artifact/source binding, local database/storage fixtures and full app acceptance verification still require completion before this unit is ready. The PR must remain draft while those criteria are incomplete.
