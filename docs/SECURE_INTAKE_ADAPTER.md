# HEARD-05 adapter contract baseline

The integration boundary is fail-closed and local-only. No external Secure Intake API version or service is verified. A proposed capability manifest is in contracts/secure-intake-boundary.v1.json; the local guard rejects unverified service configuration and malformed subject/resource/purpose before any future network adapter is invoked. Do not pass caller-supplied subject IDs as authentication: server-resolved identity and real engine authorization must be added in a later integration PR.

## Required compatibility and negative tests
- Verify actual engine OpenAPI/event spec, deployed version, token audiences, expiry, signature trust chain, error codes and subject/resource grant semantics before implementing network calls.
- Run real contract tests against an authorized isolated environment without production secrets in CI.
- Reject confused-deputy requests, forged helper grants, cross-tenant access, unsigned webhook events, repeats, overbroad scopes and accidental public publication.
- Only treat the adapter as ready after authoritative version/signing/authorization contracts and source-bound real integration evidence are verified; no routine independent human or service-owner review is invented as a prerequisite. No readiness claim here.


## Guard verification (2026-11-01)

Endpoint shape checks reject credential userinfo, whitespace, query and fragment material. Scope checks reject inherited/accessor/unapproved fields and blank or control-character purposes. These remain local input guards, not authentication, DNS/SSRF protection, signature verification or evidence of actual Secure Intake compatibility. The `verified` flag is caller-owned configuration and must never be interpreted as an authenticated remote observation. The proposed manifest still has no known upstream version and no verified live connection. Continue actual adapter/version/authorization/integration implementation on this same draft PR; do not hand off merely because these local checks pass.
