# HEARD engineering workspace baseline

HEARD-03 is an incremental developer tooling unit. The foundation currently runs dependency-free Node checks and is not yet a Next.js app. The root TypeScript configuration encodes intended strict type safety for subsequent packages. Node 22 remains the minimum documented runtime. A Next.js TypeScript application, pinned lockfile, containerized Postgres and test storage, CI secret scan and reproducible build remain pending. Do not claim an application can be deployed from this document.

## Reproducibility requirements

- Keep all new package dependencies pinned and lockfiles committed.
- Ensure each package extends tsconfig.base.json and has strict checks in CI.
- Never expose sensitive personal testimony to development fixtures or logs.
- Maintain a failing-check fixture in dedicated CI test jobs to validate protection gates without deliberately breaking main.
- Record source SHA, dependencies, runtimes and build artifacts for every release.
