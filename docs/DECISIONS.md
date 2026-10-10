# HEARD — decisions and architectural boundaries

## Approved product decisions (2026-10-10)
- Name: **HEARD**. Parent initiative: Justice For All.
- Broad scope: all people who want to understand rights, question potentially improper state conduct, seek help or assist others. Do not focus the entire platform on people with criminal histories or on one type of claimed abuse.
- Tone: non-intimidating; "TESTIFY" is not the principal invitation; no coerced self-labeling.
- Six equal entry points: understand rights; ask privately; get help; share an experience; help someone else; explore stories.
- Optional private/anonymous help and optional public storytelling; privacy must be candid about technical limitations.
- Reuse existing generalized workflow/security standards where compatible; independent HEARD product and deployment.

## Proposed technical directions requiring verification (not implicit approvals)
- Next.js/TypeScript and PostgreSQL with separate service/worker permissions.
- Vetted external legal review and source provenance for guidance.
- Render + Neon + private object storage as potential infrastructure, after cost/authorization check.
- Managed confidential processing separated from independently reviewed sealed/E2EE processing.
- Media processing and derivative publication only after independent consent + review.
- Independent component/flow E2EESA applicability assessment.

## Explicit exclusions
- No global claim of E2EE for server-readable workflows.
- No implied attorney-client relationship, legal representation, emergency dispatch, or guarantee of a favorable outcome.
- No auto-publication, political enrollment, unwanted helper contact or unconditional replication.
- No blanket acceptance of testimony as established truth or blanket dismissal of people raising unusual claims.

## Product questions to resolve before relevant release gate
- Jurisdiction coverage and authorized legal-review capacity.
- Actual confidential messaging modes and encryption profile maturity.
- Verified organizations/helpers and referral policy.
- Retention schedules, lawful-process handling and cross-border data policy.
- Production budget, hosting accounts, domain, incident staffing and acceptable SLAs.

Implementers may make conventional engineering choices; escalate only material privacy, legal, funding, key-authority or product-policy decisions.
