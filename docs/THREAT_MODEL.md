# HEARD threat model and privacy architecture

Status: design only; no deployment or E2EE certification. Unit HEARD-02.

## Components and trust boundaries

Public browser -> HEARD public web -> public approved content database/cache.
Authenticated or recoverable participant -> HEARD private intake boundary -> scoped Secure Intake adapter -> private case and encrypted object storage.
Privileged reviewer -> role-checked administration -> case and audit APIs.
Opt-in helper -> mediated permission service -> specifically granted limited records.
Approved editor -> review and consent gate -> sanitized publication derivative -> public archive and search.
Separate, further consent -> public replication export -> Liberty Nodes, if independently implemented.
External identity, object-storage, email, observability and hosting providers have distinct processing and metadata access. Do not assume any provider is blind to metadata.

## Data-flow classification

| Flow | Data | Sensitivity | Intended recipients | Protection and release gate |
|---|---|---|---|---|
| Rights browsing | public guide, anonymous request metadata | public/operational | web host, public reader | no account wall; minimize operational logs |
| Private question | text, optional contact, request metadata | restricted | participant, approved support staff | explicit processing notice, private access checks, no indexing |
| Experience | narrative, identity choices, context | restricted/high | participant, authorized case team | dedicated compartment, separate consent |
| Media and evidence | originals, embedded identifiers and metadata | high | allowed reviewer/storage processors | quarantine, authorization, immutable provenance, no public URLs |
| Volunteer offer | skills and contact | restricted | volunteer and limited matching staff | purpose limitation, no case access by default |
| Helper grant | allowed resource IDs, scope, expiration | high | participant, designated helper | explicit consent, expiry, revocation, audit |
| Public derivative | edited/reviewed content and provenance labels | public after approval | any visitor/search engine | consent, safety review, source labels, withdrawal process |
| Archive replication | approved public derivative | potentially permanent public | configured archive peers | new, separately explained irreversible-distribution consent |

## Threat actors and attack surfaces

- Harasser tries to identify pseudonymous users using public clues, exact dates, voice, EXIF, search snippets or repeated account handles.
- Malicious submitter sends malware, parser bombs, fabricated evidence, abusive content or attempts SQL/HTML injection.
- Insider with valid login attempts unauthorized case browsing, mass export, alteration or self-approval of publication.
- Compromised worker or API key attempts cross-tenant data access or exfiltration through logs and external requests.
- Unapproved collaborator uses broad grants, stale access tokens or message attachments to infer restricted identities.
- Hosting, email, model or observability provider may receive data or metadata outside declared purposes.
- Requester may misunderstand 'anonymous' as network anonymity or E2EE as compatible with server-side readable processing.

## Controls and abuse-resistant default decisions

Default-deny every private resource and service-to-service route; use stable subject/resource/action authorization rather than guessed identities. Bind grants to resources, scope, recipients and expiration; record changes and invalidate stale access. Compartmentalize encryption keys, databases, private originals and approved public projections; do not allow public CDN, analytics, search or error logs to receive restricted content. Minimize and retain metadata according to an approved, documented schedule. Validate uploads by size, type and isolated scanning before parsing or review; never directly serve unreviewed bytes. Separate security review of a redacted derivative from contributor publication consent, with different approvers for high-risk cases. Revocation prevents future HEARD access but cannot recall already copied public material; explain limitations.

Protect political independence by ensuring no default sharing with parties, donors or campaign systems. No legal representation or emergency responder is implied. Unsupported vendor choices, retention periods and security assertions remain open decisions.

## Negative verification matrix

| Scenario | Expected failure-safe behavior | Planned test |
|---|---|---|
| Anonymous story reveals original EXIF, voice or face | Block release until human redaction assessment; never guarantee untraceability | tests/security/reidentification |
| Private question leaks through search, analytics or URL previews | No restricted payload or sensitive preview field | tests/security/metadata |
| Volunteer views unrelated evidence | Deny access, audit denied attempt | tests/security/authorization |
| Participant withdraws helper grant | Subsequent access rejected; previously exported material limitation disclosed | tests/integration/grants |
| User asks question but never consents to publication | No public derivative or partner referral | tests/integration/consent |
| Public story has no two-stage consent/review | Publication denied | tests/integration/publication |
| Worker logs media transcript on failure | Structured redacted error only | tests/security/logging |
| E2EE badge appears while server can read plaintext | Claim must be absent; architecture rejected until independently demonstrated | tests/security/claims |
| Public content sent to distributed replication without separate approval | Export denied and auditable | tests/integration/replication |
| Donor or political account linked to participant | No automatic linkage, data export or enrollment | tests/security/independence |

## Risk register

| Risk | Severity | Mitigation owner | Residual uncertainty |
|---|---|---|---|
| Retaliation through reidentification | Critical | Privacy/security | Real-world deanonymization cannot be eliminated |
| Unauthorized insider access | Critical | Identity/case security | Provider and administrative control design pending |
| Irreversible unintended publication | Critical | Editorial/privacy | Distributed copies cannot always be recalled |
| Malicious files and parsers | High | Media security | Actual scanner and sandbox selection pending |
| Broad integration credential | High | Platform integrations | Exact adapter/service identity contract pending |
| Inaccurate legal advice | High | Editorial/legal | Qualified jurisdictional review capacity pending |

## Evidence and release discipline

This document is design evidence only. Downstream PRs must enumerate actual recipient and decryption-capable actors, encryption modes, key ownership, audit trails, retention policies, legal holds, and negative tests for the implemented flows. Link exact-head CI and operational results; never equate AI review with an independent audit or standards certification. No secret values are stored here.
