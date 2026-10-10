# HEARD — independent-account handoff

**Repository:** https://github.com/neophilism/HEARD  
**Product:** HEARD, an initiative of Justice For All  
**Positioning:** *Your rights. Your voice. Your next step.*  
**Primary specification:** [DEVELOPMENT_PLAN.md](DEVELOPMENT_PLAN.md)  
**Public copy and editorial policy:** [CONTENT_STRATEGY.md](CONTENT_STRATEGY.md) and [../content/site-copy.json](../content/site-copy.json)  
**Date:** 2026-10-10

## Product and experience

HEARD brings rights information, practical support, and firsthand experiences together in one place. Its primary services are a rights library, questions and help, experience/evidence preservation, a reviewed public archive, and ways to help others. Its voice is clear, welcoming, and specific: people should immediately see what HEARD offers and how to begin.

The homepage has six independent pathways—know your rights, ask a question, find support, share an experience, help someone else, explore stories—and must use the canonical approved language from `content/site-copy.json`. The educational and help pathways are not mere lead-ins to public testimony.

## Engineering and safety requirements

- Rights-specific materials require jurisdiction, citations, a review date, and editorial/legal quality controls.
- Distinguish personal accounts, source documents, independent corroboration, and disputes or corrections.
- Private inquiries, evidence, selected helper disclosures, public publication and distributed archival are separate permissions and processing domains.
- Treat storage, contact information, authentication, recipient choices and confidentiality as consequential decisions; all security promises must match tested implementation.
- Confidential server-managed intake is not automatically E2EE. Component/flow E2EESA claims require evidence, not only a settings file or fixture pass.
- Restrict original material to authorized recipients, and use separately approved redacted derivatives for public release.
- Do not activate sensitive intake or promise secure communication before security, privacy, legal, operational and incident-response reviews are satisfied.

## Verified repository state

- GitHub contains the specification, editorial/content files, development handoff, basic checks and CI workflow.
- A running application, database, production intake, deployment, domain, verified secure messaging and Engine Room monitoring have **not** been established by the foundational commits.
- Roadmap work packages `HEARD-01` through `HEARD-48` are planning identifiers, **not** GitHub PR numbers or evidence of completed features.
- No genuine case information, contact details or privileged material should be committed to source control, fixtures, issue comments or logs.

## Immediate development sequence

1. Read the README, the full development plan, `docs/CONTENT_STRATEGY.md`, and `content/site-copy.json`. Verify the current branch, CI and commit history.
2. Confirm actual upstream interfaces and compatible versions of Secure Intake & Case Workflow Engine, E2EESA, FOIA Aggregator, Justice For All and Engine Room.
3. Build the accessible application shell and route structure, using the canonical copy instead of hardcoded alternative wording.
4. Add rights guide schema, source-review records and public browsing first; keep unreviewed rights examples fictional or clearly marked as samples.
5. Implement protected inquiry, private records, assistance and publication as separately tested services in dependency order.
6. Keep real status evidence for each PR: actual link and merge state, build/test results, migration/rollback, release SHA, deployment readiness and known issues.

## Infrastructure status

TypeScript/Next.js and PostgreSQL with separate workers and private object storage are planning choices, not a statement that production services have been configured. Render, Neon and B2 resources and keys must be obtained and verified at the appropriate milestone. Do not commit credentials.

## Completion and handoff update discipline

Update this file on every meaningful implementation milestone with latest merged SHA, exact roadmap IDs and actual PRs, current test evidence, dependency versions, observed deployment state, migrations, backup/restore evidence, unresolved risks, blockers and next actionable task. Keep completed code, security review and live production readiness as distinct status fields. An agent with no earlier conversation history should be able to continue from this repository alone.
