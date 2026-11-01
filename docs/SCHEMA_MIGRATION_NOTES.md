# HEARD-04 migrations, roles and verification

The SQL baseline defines principals, private cases, consent decisions, case events, quarantined object references, separately approved public derivatives, resource grants, append-only audit events and constrained jobs. Migration 0002 forces RLS on the original sensitive tables; 0003 extends that default-deny boundary and creates scoped NOLOGIN, NOINHERIT, NOBYPASSRLS roles. Existing privileged role attributes or inherited memberships are rejected instead of silently accepted. Table grants remain constrained by FORCE RLS: there are no permissive policies and no application login is created. Trusted identity/resource policies belong to HEARD-08 and downstream services; this baseline intentionally cannot serve private application requests yet.

Grants reference both the actual case owner and an object in the same case with composite foreign keys; they do not implicitly include future assets. Jobs enforce deduplication and lease/attempt shape, and audit rows reject update/deletion. These are relational invariants, not a completed queue, authorization service or consent-bound publication projector. Privileged database owners remain a trust boundary; no protection against a malicious superuser is claimed.

## Runner and rollback

`npm run db:migrate` requires DATABASE_URL for the authorized target. Never point fixture commands at production. The runner requires contiguous versioned files with one outer transaction, holds a session advisory lock, and records each migration's SHA-256 in the same transaction as its DDL/version. A failed file rolls back; repeated application is a no-op. Changed, unknown, gapped or checksum-less legacy history is rejected. It does not silently adopt an old manually initialized database, rewrite checksums or destructively downgrade. Audit and establish any legacy baseline through a separately reviewed data/schema comparison before using this runner.

The initial draft no longer requests pgcrypto solely for gen_random_uuid(), which is built into supported PostgreSQL. No cryptographic algorithm or confidential-content protection was replaced. Existing checksum-bound history must never be edited in place; this change is on the unmerged schema baseline and unknown legacy history remains gated.

Rollback strategy is transactional rollback of a failed migration and reviewed forward repair after a committed migration. Before production upgrades, retain and verify a real provider/database backup and restore plan; destructive down-migrations are deliberately not automated. Production recovery evidence belongs to the operations/recovery work and is not established by these tests.

## Synthetic fixtures and commands

`db/fixtures/synthetic.sql` contains only deterministic fictional records: a private draft, revoked contact consent, quarantined object and withdrawn publication. Apply it only in a disposable database with its dedicated migration role. It is idempotent by primary key. Ordinary application roles must remain denied.

```
npm ci --ignore-scripts
npm run check
npm run test:database
npm run test:database:wasm
```

The native command uses the exact PostgreSQL 17.11 binary from pinned embedded-postgres 17.11.0-beta.19 on Linux x64. Package-owned symlinks are restored explicitly after script-free installation. The cluster listens only on a private Unix socket and contains synthetic data. If the runner is root, it uses an existing non-root account only when that UID is mapped; it never creates a host account, changes UID mappings, disables PostgreSQL's root restriction or exposes a TCP listener. Other platforms must supply an approved supported runtime; the native test fails rather than silently skipping.

The separate WASM command explicitly selects pinned PGlite 0.5.14, observed as PostgreSQL 18.6. It executes the same migration SQL, fixtures, constraints, role/RLS queries and failure/upgrade tests. It is single-process and does not prove native PostgreSQL 17 behavior, wire authentication, concurrent backends or provider IAM.

## Observed evidence and remaining gates (2026-11-01)

The isolated WASM PostgreSQL run passes blank/repeated migration, RLS denial under a non-owner role, FK/visibility/publication/grant/job/audit failures, prior-fixture upgrade, unverified-history rejection, failed-DDL rollback and checksum drift refusal. Foundation checks also pass. See the durable checkpoint for exact source/CI bindings.

Native startup was unavailable in this activation: the runtime maps only UID/GID 0, and the attempted non-root fixture failed with `EINVAL: invalid argument, chown`. The runner now reports `NATIVE_POSTGRES_UID_UNAVAILABLE` before startup. Native 17 SQL results and real multi-backend concurrency are **not passed**. The existing foundation CI does not install dependencies or run database tests; the ordinary source proposal in docs/proposals must be applied only through authorized protected-workflow changes. Keep PR 10 draft until native/CI acceptance and actual merge gates are verified.
