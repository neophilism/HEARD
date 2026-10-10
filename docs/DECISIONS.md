# HEARD — product decisions and architecture record

## Settled product direction (October 10, 2026)

**Name:** HEARD  
**Parent initiative:** Justice For All  
**Positioning:** Your rights. Your voice. Your next step.

**Purpose:** Help people understand their rights, make sense of government actions that affect their lives, and find paths to answers and accountability. Connect clear guidance, practical support and personal stories in one welcoming public-interest platform.

**Visitor journeys:** Rights education, asking a question, finding support, preserving or sharing an experience, helping another person, and exploring approved stories. Each has an independent path; the homepage is a useful introduction, not a legal filing or mandatory intake.

**Editorial identity:** Human, direct, calm, serious about evidence, careful about contested claims, and free of sensational or defensive language. The homepage and introductory descriptions should communicate the value of the project immediately. Public copy is canonical in `content/site-copy.json`; the design and review contract is in `docs/CONTENT_STRATEGY.md`.

**Privacy and agency:** Meaningful, separate authorization governs confidential submissions, specific helper access, public stories and any independent archival replication. Staff may not imply that an account is legally or medically established merely because it was submitted.

**Architecture:** HEARD remains an independently deployable public-facing application. Reuse stable generic workflow capabilities and apply E2EESA protections to relevant components and flows after compatibility and security review.

## Implementation choices proposed for engineering verification

- Next.js/TypeScript and PostgreSQL with separate service and worker permissions.
- Versioned, human-reviewed rights guides with primary sources and jurisdiction context.
- Render, Neon and private object storage where authorized and cost-appropriate.
- Separate managed-confidential and genuinely sealed/E2EE processing models; no undemonstrated security claims.
- Publication through specifically consented, reviewed derivatives rather than direct raw-evidence URLs.
- Case management adapter pinned to the tested Secure Intake engine version.

These are directions, not assertions that every provider, release, schema or key is already configured.

## Safety, legal and content boundaries

- Provide general education, not implied attorney-client representation or guaranteed legal outcomes.
- Handle urgent safety matters through accurate information and appropriate referral; do not imply emergency response staffing.
- Distinguish personal accounts, documents, independent findings and corrections in all public views.
- No automatic publication, referral, political enrollment, unrestricted case access or transmission of private originals to distributed public archives.
- Do not claim anonymous or end-to-end encrypted communications without threat-model and implementation evidence.
- Respect privacy of contributors, third parties and people named in disputed accounts; maintain independent complaint and correction processes.

## Release-dependent product decisions still open

- Initial jurisdiction coverage and legally qualified reviewer capacity.
- Response/service availability for private questions and support requests.
- Partner and volunteer credential verification and referral rules.
- Approved communication modes, cryptographic profiles and retained metadata.
- Retention schedules, lawful-process response, safeguarding and cross-border data handling.
- Production domain, hosting authorization, cost ceiling, support coverage and operational targets.

Engineers may resolve routine implementation details through documented ADRs. Escalate privacy-impacting policy changes, legal commitments, infrastructure spending and other material choices.
