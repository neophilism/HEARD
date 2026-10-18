# HEARD-07 identity and pseudonym boundary

Current work is a dependency-free pseudonym input policy and a conservative recovery readiness predicate, not working identity registration, access tokens, anonymous recovery or proven anonymity. A pseudonym hides only a public display choice and does not eliminate network, service-provider, timing, media or document reidentification risk. Reserved public names cannot falsely imply staff authority.

Complete independently verified authenticated account flows before enabling private case access. Recovery tokens require cryptographically strong randomness, short TTL, hashed at rest, limited attempts, binding to a specific subject and device/session invalidation. Do not use a user-supplied display name as an authorization subject. Missing secrets/verified rate-limits fail closed.

Further tests: duplicate normalized names and Unicode confusables, enumeration and recovery abuse, session theft, anonymous-to-account migration, revocation, identity deletion and lawful holds. Public rights reading must remain account-free.
