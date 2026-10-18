# HEARD Product Requirements

Status: planned foundation. Work unit HEARD-01. Date: 2026-10-18.

## Charter
HEARD provides public rights education, private questions, support discovery, separately consented experience sharing, voluntary assistance and reviewed public stories. It is a distinct Justice For All initiative, not a party signup or donor channel. Approved tagline: Your rights. Your voice. Your next step.

## Independent journeys
Know your rights; Ask a question; Find support; Share an experience; Help someone else; Explore stories. Public reading has no registration requirement. A private inquiry does not auto-publish, refer or register its author. Rights guides need jurisdiction, source, effective date and review date. Personal accounts, submitted evidence and independently established findings require distinct labels.

## Boundaries
No automatic legal representation, emergency response, fabricated claims, third-party private access, unsupported encryption/anonymity claims, unreviewed public distribution or political enrollment. Publication, helper access and archive replication require separately informed permissions. WCAG 2.2 AA and component-specific security verification are acceptance targets, not accomplished certifications.

## Canonical authority
Approved owner decisions and docs/DECISIONS.md govern policy; docs/DEVELOPMENT_PLAN.md defines scope; content/site-copy.json controls copy with docs/CONTENT_STRATEGY.md; registry/prs.json defines planned units; actual GitHub commits, CI and runtime evidence establish progress. Engineering proposals are not owner decisions. Capture new decisions in dated docs/ADR/ records with alternatives, risks and authority.

## Requirements register
Requirement IDs are stable by unit. Each downstream unit should add testable child IDs, actual test links and acceptance evidence. Owners are functional teams, not identified individuals. Test paths are future destinations, not claims of tests existing.

| ID | Requirement | Responsible function | Test destination | Status |
|---|---|---|---|---|
| R-HEARD-01 | Product charter and requirements ledger | Platform | tests/foundation/ | Planned |
| R-HEARD-02 | Threat model, data map and privacy architecture | Platform | tests/foundation/ | Planned |
| R-HEARD-03 | Monorepo, type safety, development tooling and CI | Platform | tests/foundation/ | Planned |
| R-HEARD-04 | Versioned PostgreSQL schema and fixtures | Platform | tests/foundation/ | Planned |
| R-HEARD-05 | Secure Intake engine adapter and compatibility contracts | Platform | tests/foundation/ | Planned |
| R-HEARD-06 | Environment configuration, readiness and operational skeleton | Platform | tests/foundation/ | Planned |
| R-HEARD-07 | Accounts, pseudonyms and anonymous recovery | Privacy and intake | tests/security/intake/ | Planned |
| R-HEARD-08 | Deny-by-default resource authorization | Privacy and intake | tests/security/intake/ | Planned |
| R-HEARD-09 | Privacy choice and versioned consent engine | Privacy and intake | tests/security/intake/ | Planned |
| R-HEARD-10 | Accessible testimony intake wizard | Privacy and intake | tests/security/intake/ | Planned |
| R-HEARD-11 | Secure drafts, recovery and submit receipt | Privacy and intake | tests/security/intake/ | Planned |
| R-HEARD-12 | Resumable private object uploads | Privacy and intake | tests/security/intake/ | Planned |
| R-HEARD-13 | Malware quarantine and parser safety | Privacy and intake | tests/security/intake/ | Planned |
| R-HEARD-14 | Evidence integrity, provenance and handling ledger | Privacy and intake | tests/security/intake/ | Planned |
| R-HEARD-15 | Durable constrained media-job framework | Media safety | tests/integration/media/ | Planned |
| R-HEARD-16 | Original-preserving media normalization | Media safety | tests/integration/media/ | Planned |
| R-HEARD-17 | Anonymization and visual/audio redaction editor | Media safety | tests/integration/media/ | Planned |
| R-HEARD-18 | Editable transcripts and accessible captions | Media safety | tests/integration/media/ | Planned |
| R-HEARD-19 | Contributor/redaction-review approval gate | Media safety | tests/integration/media/ | Planned |
| R-HEARD-20 | Complete case workflow state machine | Editorial | tests/integration/publication/ | Planned |
| R-HEARD-21 | Restricted reviewer console and triage | Editorial | tests/integration/publication/ | Planned |
| R-HEARD-22 | Contributor status and follow-up inbox | Editorial | tests/integration/publication/ | Planned |
| R-HEARD-23 | Consent-bound publication projector | Editorial | tests/integration/publication/ | Planned |
| R-HEARD-24 | Public Archive pages and media player | Editorial | tests/integration/publication/ | Planned |
| R-HEARD-25 | Public search, filtering and discovery | Editorial | tests/integration/publication/ | Planned |
| R-HEARD-26 | Evidentiary and source-status presentation | Editorial | tests/integration/publication/ | Planned |
| R-HEARD-27 | Amendments, corrections, withdrawal and public revisions | Editorial | tests/integration/publication/ | Planned |
| R-HEARD-28 | Content disputes, abuse reports and legally reviewed release policy | Editorial | tests/integration/publication/ | Planned |
| R-HEARD-29 | Helper registry, categories and credential verification | Collaboration | tests/integration/collaboration/ | Planned |
| R-HEARD-30 | Mediated -I can help- offers | Collaboration | tests/integration/collaboration/ | Planned |
| R-HEARD-31 | Contributor-controlled fine-grained evidence grants | Collaboration | tests/integration/collaboration/ | Planned |
| R-HEARD-32 | Protected contributor-helper messaging | Collaboration | tests/integration/collaboration/ | Planned |
| R-HEARD-33 | Restricted case collaboration, tasks and notes | Collaboration | tests/integration/collaboration/ | Planned |
| R-HEARD-34 | Minimal, reliable participant notifications | Collaboration | tests/integration/collaboration/ | Planned |
| R-HEARD-35 | Partner organizations and scoped referrals | Collaboration | tests/integration/collaboration/ | Planned |
| R-HEARD-36 | Justice For All core platform integration | Integrations | tests/integration/adapters/ | Planned |
| R-HEARD-37 | FOIA Aggregator citation and public-source bridge | Integrations | tests/integration/adapters/ | Planned |
| R-HEARD-38 | Optional Liberty Nodes public dissemination export | Integrations | tests/integration/adapters/ | Planned |
| R-HEARD-39 | Typed public/partner API, signed events and SDK | Integrations | tests/integration/adapters/ | Planned |
| R-HEARD-40 | E2EESA evidence register and conformance remediation | Integrations | tests/integration/adapters/ | Planned |
| R-HEARD-41 | Participant data export, retention and deletion requests | Integrations | tests/integration/adapters/ | Planned |
| R-HEARD-42 | Privacy-preserving analytics and administrator operations | Quality and operations | tests/e2e/ | Planned |
| R-HEARD-43 | Security hardening and adversarial test suite | Quality and operations | tests/e2e/ | Planned |
| R-HEARD-44 | WCAG 2.2 AA, usability and language review | Quality and operations | tests/e2e/ | Planned |
| R-HEARD-45 | Reliability, recovery, capacity and cost safety | Quality and operations | tests/e2e/ | Planned |
| R-HEARD-46 | Production-ready Render/Neon/B2 deployment | Quality and operations | tests/e2e/ | Planned |
| R-HEARD-47 | Engine Room integration and operating evidence | Quality and operations | tests/e2e/ | Planned |
| R-HEARD-48 | Controlled beta, independent review and GA release gate | Quality and operations | tests/e2e/ | Planned |

## Cross-cutting requirements
- R-UX-01: Six discoverable independent paths; UX; tests/e2e/navigation/; Planned.
- R-PRIV-01: No private-to-public disclosure without explicit separate consent; Privacy; tests/security/consent/; Planned.
- R-LEGAL-01: Sourced, reviewed jurisdictional rights guidance; Editorial; tests/e2e/rights/; Planned.
- R-EVID-01: Distinguish claims, records, independent findings and corrections; Editorial; tests/e2e/provenance/; Planned.
- R-SEC-01: No unsupported security or anonymity claims; Security; tests/security/claims/; Planned.

## Open decisions
Jurisdictions, legal review staffing, response capacity, helper vetting, data retention and holds, providers and production spending remain pending. Actual implementation and CI must be verified separately.
