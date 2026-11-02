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

## Tooling and fixture commands

```
npm run lint
npm run format
npm run test:integration
npm run check:secrets
npm run check:dependencies
npm run check:history
HEARD_BUILD_SHA=<verified-40-character-commit> npm run build:artifact
node scripts/build-web-artifact.mjs --verify dist/heard-web-<commit>.json
```

Biome checks/formats the app TSX, CSS and configuration. Exact app dependency versions and workspace lock links are checked by the dependency-free baseline. The runtime public-record contract rejects inherited, hidden, symbol and accessor fields, empty content and invalid UTC timestamps; its tests do not authorize publication or certify the source's truth.

The integration runner uses pinned PGlite (PostgreSQL in WASM) with a disposable file-backed database and private temporary object directory. It verifies blank initialization, fictional fixtures, rollback, restart persistence and non-overwriting local objects. PGlite is single-connection; these tests do not establish production PostgreSQL network roles, concurrent transactions, real case migrations or B2 IAM. No real accounts, allegations or provider credentials are used. A Docker/PostgreSQL server and real provider integration remain separate platform work where required.

Secretlint scans current source with its recommended rules. The history command refuses absent or shallow history, reads full historical Git blobs with their filename hints and scans them with masking enabled, including deleted content. Its regression test creates an isolated synthetic Git repository with an ephemeral test-only key, deletes the key and confirms history detection still fails. Another test proves the actual pinned TypeScript compiler fails an intentional type error. A source snapshot mirror has no authentic repository history: do not label a synthetic-repository test as a scan of HEARD's real history. New or unrecognized secret formats can remain outside a pattern scanner's coverage.

The artifact command requires an explicit source commit, uses it as the Next build ID, runs exported-page checks and creates a deterministic-metadata tar plus SHA-256 manifest in `dist/`. The manifest includes exported-file and build-source digests. In a Git checkout it rejects dirty tracked source or a HEAD mismatch; in a Boardroom snapshot mirror it labels that weaker binding explicitly so the mirror's file digests can be checked against immutable source. Digest verification detects changed artifact bytes; it is not a signature, deployment record or release authorization. No artifact is published by these local commands.

All of these checks have explicit commands. They must be installed and run by the authorized CI workflow before that workflow can be claimed to cover them. Branch protection must require the relevant failing checks to establish a merge block; a local compiler-negative test alone does not prove GitHub enforcement. Keep the unit draft while CI/branch-protection prerequisites or acceptance evidence remain incomplete.
