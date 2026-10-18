# HEARD operations boundary (HEARD-06)

This repository has no active HEARD production service. A dependency-free liveness/readiness library allows an eventual adapter to distinguish process liveness from confirmed availability of private database, Secure Intake and private object storage. It does not itself probe providers. In particular, calling publicLiveness is never evidence that sensitive intake is ready. Never expose credentials, private data, connection strings, stack traces or request payloads through public health/status responses.

## Deployment requirements
- Keep environment-specific credentials in approved secret stores, never .env committed to Git.
- Assign independent staging/production HEARD databases and object-store scopes; do not reuse other initiatives' credentials.
- Configure minimal, redacted logs, authenticated admin health details, restart/rollback evidence and backup/restore checks.
- Verify actual dependency health, service identity, and migration status before reporting ready.
- Require approved new spending before infrastructure creation or paid capacity changes.
- Release only after functional private-intake and safe denial tests pass in an isolated environment.

Current state: service launch, actual probes and production release are pending.
