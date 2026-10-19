# HEARD engineering workspace baseline

HEARD-03 now has a dependency-free npm workspace with a committed lockfile and a private `@heard/contracts` package. The package exports runtime validation and a matching TypeScript declaration for a bounded public content record. The public contract intentionally rejects extra fields, including private intake or contact fields. Root `npm run check` includes workspace/lock validation and negative tests under the existing foundation CI job.

The foundation is not yet a Next.js application. No TypeScript compiler, application package, database, or deployment artifact is installed in this branch; a declaration file and strict base config do not prove type-check execution. Add a pinned Next.js app and compiler only with a reproducible resolved lockfile, then run build and type checks in CI. Add CI secret scanning and containerized integration services when those dependencies and workflows can be verified. Do not treat passing foundation checks as production acceptance.

Package and source tests remain covered by `npm run check` in the existing workflow.
