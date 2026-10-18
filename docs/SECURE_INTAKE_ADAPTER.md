# HEARD-05 adapter contract baseline

The integration boundary is fail-closed and local-only. No external Secure Intake API version or service is verified. A proposed capability manifest is in contracts/secure-intake-boundary.v1.json; the local guard rejects unverified service configuration and malformed subject/resource/purpose before any future network adapter is invoked. Do not pass caller-supplied subject IDs as authentication: server-resolved identity and real engine authorization must be added in a later integration PR.

## Required compatibility and negative tests
- Verify actual engine OpenAPI/event spec, deployed version, token audiences, expiry, signature trust chain, error codes and subject/resource grant semantics before implementing network calls.
- Run real contract tests against an authorized isolated environment without production secrets in CI.
- Reject confused-deputy requests, forged helper grants, cross-tenant access, unsigned webhook events, repeats, overbroad scopes and accidental public publication.
- Only treat the adapter as ready after service owner compatibility approval and source-bound evidence; no readiness claim here.
