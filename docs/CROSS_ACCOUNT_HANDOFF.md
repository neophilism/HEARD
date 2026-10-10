# HEARD — independent-account handoff

**Repository:** https://github.com/neophilism/HEARD
**Primary specification:** [DEVELOPMENT_PLAN.md](DEVELOPMENT_PLAN.md)
**Status:** planning and foundational repository initialization; **not** a functioning intake product, deployed service, or security certification.
**Date:** 2026-10-10

## Product mandate

HEARD is a universal, low-pressure rights-awareness, confidential help, evidence preservation and optional public story platform. Visitors may learn, ask questions, request help, support another person, or share a story. No arrest, accusation, prior wrongdoing, victim identification, allegation of governmental misconduct, party affiliation, or formal legal commitment is necessary. No forced identity or account to read educational material.

## Critical non-negotiables

- Explain applicable laws accurately and by jurisdiction; editorial/legal review before publication.
- No private intake, production claims, or uploads of personal case evidence until security, privacy, media, access, moderation and retention gates pass.
- Distinct steps for information, private questions, cases, evidence, helper access, public release and distributed replication; consent does not silently flow between them.
- Confidential TLS-to-server intake is not E2EE. Do not claim E2EESA conformance based on configuration-only checks or candidate profiles.
- Original material stays private; publish only explicitly approved redacted derivatives.
- Keep claims, alleged events, and independently verified findings clearly separated.

## Actual project state

- GitHub repository initialized with README, full development plan and these handoff documents.
- No verified running application, database, credential configuration, public intake, Render service, object storage, domain, deployed E2EE protocol, or live Engine Room ingestion is established by these repository commits.
- Planning IDs HEARD-01 through HEARD-48 are **not** real PR numbers.
- Foundation bootstrap files may be added separately. Confirm latest repository tree, GitHub Actions and default branch before beginning new work.

## Development sequence

1. Read the entire canonical development plan, especially Section 0 and the 48-package roadmap; reject narrow interpretation that everyone must submit testimony.
2. Verify GitHub/CI and existing infrastructure APIs for Justice For All, Secure Intake & Case Workflow Engine, E2EESA, and FOIA Aggregator.
3. Implement the real app scaffold and test harness with issue/PR mapping. Add rights-content schema and inclusive home paths early.
4. Chain narrow PRs with real tests, reviews, migrations, negative authorization/privacy paths, and documentation.
5. Record PR links, merge state, CI evidence, actual runtime release and operational state separately. Never equate repo initialization with production readiness.

## Tooling and environment

The plan recommends TypeScript/Next.js/PostgreSQL, independent workers, object storage and secure deployment after threat modeling. These are proposed, not configured. No secrets or personal data should be committed or pasted into issues. Render/Neon/B2 identifiers and secrets remain **not recorded** in this repo. Ask for credentials only when actually blocked.

## Next safe action

Implement the HEARD-01 working application scaffold and test pipeline, with six navigation routes, placeholder educational content explicitly marked as not legal advice, basic accessibility tests, and no intake persistence. Then proceed by reviewed PRs in dependency order.

## Handoff maintenance rules

On each PR update this document with: latest merged SHA; release artifact and version; roadmap IDs → actual PRs; CI checks; migrations; observed deployment/readiness evidence; known blockers; exact next task; unresolved real product decisions and links to authoritative ADRs. Never rely on any ChatGPT account's memory.
