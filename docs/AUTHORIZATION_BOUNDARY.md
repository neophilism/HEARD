# HEARD-08: deny-by-default authorization policy

A dependency-free pure authorization policy supports authenticated owner access, independently verified staff review, and bounded explicit helper grants. It refuses unknown actions, unverified resources, expired grants and self-review of publication. It is not wired to external identity, database transactions, or HTTP middleware. Passing a caller-supplied authenticated flag would be unsafe: the adapter MUST independently resolve the authenticated subject and source of truth for grants, bind the resource and enforce policy on every API and storage access. This code is not production authorization by itself.

Required adversarial acceptance: guessed IDs, forged staff roles, partial grants, concurrent revocation, cross-tenant data reads, stale cached grants, direct object URLs and background-worker identity. Apply row-level DB access defense after trusted policy enforcement, with actual negative test coverage.
