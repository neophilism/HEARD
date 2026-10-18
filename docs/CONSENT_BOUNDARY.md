# HEARD-09 versioned consent baseline

Purpose-specific, append-only consent events encode grants and revocations independently for private processing, contact, helper access, public release, and archive replication. Missing consent denies. This pure library is not identity authentication, persistence, a transactional authorization check or a usable consent interface. Grant state must be derived inside the trusted service from durable records bound to authenticated subject/resource. Prevent clock ties or tampering with a DB sequence and immutable audit events in follow-up work. Legal or safety holds and the limits of third-party public-copy revocation require accurate disclosures.

Acceptance needs adversarial tests for stale caches, reordered timestamps, replay, two users on the same case, identity impersonation, private-to-public projections, hidden defaults, consent policy changes and replica publication controls.
