# HEARD-04 migration notes
This versioned SQL baseline records private cases, consent decisions, audit-like event records, quarantined objects, and separately approved public derivatives. It does NOT implement row-level security, identity authentication, keys, grants, publication state machine, migration runner, or operational database access. Until those controls are implemented, grant no application role access to these tables. Run exclusively on a new isolated HEARD Postgres database after owner-approved provisioning.

## Planned integration checks
- Apply migration twice in a disposable database; verify idempotency and migration version record.
- Insert every case kind and reject invalid state/visibility, especially attempted public cases.
- Ensure no restricted original object reference appears in publication rows.
- Verify consent purpose and policy versions; distinguish latest grant from revocation.
- Verify unauthorized DB roles cannot read cases/objects, including guessed identifiers.
- Verify transactions roll back on failure; verify cross-case access is denied in service code.
- Verify tested backups and restore before production use.

**Status:** Schema design source only. None of the above PostgreSQL runtime tests has yet passed.
