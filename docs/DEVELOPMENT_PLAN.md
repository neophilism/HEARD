# HEARD
## Comprehensive Development Plan and Independent-Account Handoff

**Version:** 2.0 comprehensive HEARD planning baseline  
**Date:** October 10, 2026  
**Parent initiative:** Justice For All  
**Recommended repository:** `neophilism/HEARD` (existing repository)  
**Status:** Comprehensive engineering specification and implementation roadmap; foundation repository initialized, no sensitive intake deployed  
**Roadmap:** 48 baseline implementation work packages plus HEARD-specific cross-cutting gates (`HEARD-01` through `HEARD-48`); PR identifiers are planning IDs, not existing GitHub PR numbers  
**Security baseline:** End-To-End-Everywhere Security Architecture Standard (E2EESA), scoped by component and data flow; OWASP ASVS 5.0.0; WCAG 2.2 AA

---

## 0. HEARD mission and inclusive product doctrine (supersedes any narrower framing below)

**Mission:** Help anyone understand their rights, examine potentially improper treatment by government or state-linked actors, ask confidential questions, preserve information, find appropriate help, and choose whether or how to seek accountability. The platform welcomes people who know they have been wronged, people who suspect an irregularity, those seeking basic legal education, witnesses, relatives, people acting under pressure, people who may have committed offenses, people who have never been accused of anything, and people helping others. **Neither a prior allegation, diagnosis, arrest, conviction, plea, political belief, demographic identity, nor certainty of injustice is a prerequisite.**

**Correct framing:** This is an inclusive rights-awareness, assistance and evidence platform. Public testimony is ONE optional outcome. A visitor must be able to get useful educational information or request private assistance without claiming victimhood, asserting criminal misconduct, endorsing Justice For All politics, identifying a legal cause of action, or volunteering an accusation.

**Tone:** clear, humane, non-patronizing, nonpartisan, privacy-conscious, action-optional. No gavel, courtroom ultimatum, "TESTIFY", "report a crime now", presumed victim status, assumed wrongdoing, or coercive narrative. Avoid language that presupposes an unverified account is proven. Do not affirm extraordinary, disputed, or uncertain allegations as established fact; consider independent evidence, alternative explanations and safety.

### 0.1 Homepage information architecture, hard acceptance

Primary heading: **"Your rights matter."** Supporting text: **"Wondering about something that happened? Looking for information, help, or a safe place to share? You can start here—without knowing what to call it or going public."** Final copy must be user-tested and localized. Six equally discoverable primary paths:

1. **Understand my rights** — browse plain-language legal explainers, realistic scenarios, source law, jurisdiction, date checked, qualifications and links to counsel.
2. **Ask about something that happened** — low-pressure private inquiry, selectable "I'm not sure" choices, optional incident details, no compulsory public story.
3. **Get help privately** — anonymous/pseudonymous/identified contact modes, recipient scopes and limitations, choice to request lawyer/advocate/nonlegal support.
4. **Share an experience** — written, video or audio narrative and evidence, optionally private forever, with distinct later public-release consent.
5. **Help someone else** — resources for family/witnesses, carefully permissioned referrals and volunteer offers, no taking over someone else's identity.
6. **Explore stories** — consented, curated, clearly labeled personal accounts and approved source material, without requiring account creation.

Utility navigation: emergency information, safety and privacy, languages and accessibility, how HEARD works, correction/dispute policy and platform limits. No forced signup to browse rights or public archive. No pop-up requiring identity/consent for ordinary reading. No political enrollment, donations or marketing implied.

### 0.2 Contextual discovery, without stigmatizing categories

Scenario entry points: government interactions; police encounters and force; protest and speech; search and seizure; involuntary hospitalization/civil commitment; detention and jail; administrative benefits and licensing; schools and child/family interactions; employment-related state decisions; retaliation/threats/coercion; discrimination; housing/property; whistleblowing; immigration; data privacy and surveillance; court proceedings and plea bargains; abuse involving public or delegated authority; and **"Other / I don't know."** This is a navigation taxonomy, not a diagnosis, accusation, or exclusive list.

Educational scenario pages explicitly distinguish: (a) what user reports or asks, (b) which facts are missing, (c) controlling law (state/federal/local), (d) typical exceptions, (e) likely evidence to preserve, (f) time-sensitive risks such as filing deadlines, (g) where to obtain licensed counsel or relevant services, and (h) when information was last legally reviewed. Example: a law enforcement officer's statement about protest rules may or may not describe applicable law; a designation used during involuntary evaluation has jurisdiction-specific criteria and review rights; previous guilty pleas can constrain remedies but do not negate all rights.

### 0.3 Inclusive, graduated assistance journey

**Browse → explore → ask → preserve privately → seek help → optionally publish or pursue remedy** is a suggested sequence, **not a gate**. Every step can be accessed independently; users can leave and return. Never ask "Are you a victim?" as a prerequisite. Provide save-and-exit, discreet browsing and clear device/privacy warnings; do not claim a panic button erases logs, history, account traces or third-party network records. Offer explicit "no contact" and "no public sharing" defaults for all intake.

Distinct services: self-serve education (no privileged legal advice), educational Q&A with uncertainty and citations, private inquiry, optional referral, evidence vault, rights incident chronology, optional moderated story publication, and multi-party collaboration by case-specific grant. Legal representation arises only from separately established professional relationships, never automatically through site usage.

### 0.4 Rights content system and governance

Each guide has: jurisdiction, agency/category, primary sources, statutory and regulatory citations, linked official policies where available, judicial decision context, effective/reviewed dates, author/editor and licensed legal reviewer status, reading level, translations, and explicit disclaimers. Workflow states: draft → legal/factual review → published → stale/updated → archived. Automatically flag potential change when monitored sources update, but **do not automatically rewrite legal conclusions**. Display "not checked recently" or "law may have changed" when applicable. Record disagreements and corrections transparently.

Search and browse prioritize readable concepts rather than legal jargon, with controlled synonyms: "they told me to leave a protest" → free-speech/assembly/public order; "they said I was gravely disabled" → civil commitment/rights and review. Avoid unsupported legal determinations; phrase as possibilities and questions. Free-form AI advice, if ever offered, needs separate approval, legal-safety evaluation, user consent, citations, hallucination tests, hard limits on sensitive-data sharing and human referral for consequential decisions.

### 0.5 Safeguards for coercion, vulnerability and mixed experiences

Provide a dedicated optional safety pathway for people afraid of retaliation or coercion, relatives supporting someone, people who feel ashamed/disbelieved, and those concerned about mandated processes. Ask the least identifying information necessary; provide carefully qualified confidentiality, anonymity and privilege explanations. Do not contact an allegedly involved person or agency, publish material, or file complaints for someone without specifically authorized action and an explicit legal basis. Allow trusted-person assistance without impersonation, with boundaries protecting the subject's privacy and autonomy. Equip moderators to distinguish reporting from verified facts and avoid validating unverified targeting theories as established; support real-world safety and appropriate professional resources without humiliating or dismissing visitors.

### 0.6 Explicit release gates for revised scope

HEARD is **not** ready for public intake until all of these are demonstrated:

- All six homepage paths work in mobile, keyboard and screen-reader checks, with no forced account or public accusation for educational use.
- An anonymous visitor can read current, sourced rights content, navigate scenarios, and quit without mandatory identifying fields.
- A private help seeker can safely ask a question without publishing evidence, opening a public case, or being assigned an unwanted political label.
- A legal-explainer entry carries jurisdiction and legal-review dates; stale and unknown-jurisdiction states are handled honestly.
- Every escalation from inquiry to case, referral, collaborator disclosure, publicity, or distributed replication requires individually meaningful consent and authorized recipient scope.
- Tests exercise coercion fears, people with no criminal history, people with prior pleas, third-party family inquiries, involuntary hospitalization narratives, protest rules uncertainty, and volunteers; do not stereotype or pre-judge those scenarios.
- Adversarial tests show private identities/evidence are absent from public search, analytics, notifications, cross-tenant access, public CDN, GitHub/Engine Room logs and partner events.
- Accessibility, threat-model review, privacy/legal/retention policy, abuse handling, restore testing, and operational readiness are independently evidenced.

### 0.7 Roadmap cross-cutting amendments

The 48 legacy implementation packages below remain as traceable engineering work units, now prefixed **HEARD-** rather than **IP-**. Every phase must implement the additional rights-content, inclusive entry point and assistance requirements above. In particular:

- HEARD-01 through HEARD-06: product doctrine, six paths, legal content architecture, scenario taxonomy, inclusive usability fixtures and threat model.
- HEARD-07 through HEARD-14: rights browsing without login, private question workflow distinct from testimony, minimal disclosure and anonymous help, consent boundaries.
- HEARD-15 through HEARD-28: evidence/media and optional publication only; preserve inquiry-only status without pressuring story creation.
- HEARD-29 through HEARD-35: direct help pathways and referral workflows with no publication requirement; family/witness support and permission scopes.
- HEARD-36 through HEARD-41: integrate Justice For All, reusable intake, FOIA and Liberty Nodes where permitted; legal-content provenance and update feeds.
- HEARD-42 through HEARD-48: broad-persona acceptance, rights content quality, legal review, privacy/security, end-to-end UX, release and independent handoff.

**Important:** The existing detailed PR roadmap provides implementation units, not a claim that all revised rights-content work is already specified there line by line. Each implementing PR MUST cite the relevant 0.x requirements and update the requirements traceability register. New scoped PRs may be added with HEARD-49+ if integration complexity warrants it; never silently drop requirements to keep a historical count.

---

## 1. Mission, product definition, and source of requirements

**Mission.** Build a non-intimidating first stop where anyone can understand their rights and available options, ask questions without making accusations, seek private assistance, and optionally document possible wrongdoing; it must also make it possible for a person to document an injustice they say they experienced; preserve supporting records; choose whether, how, and to whom their account is disclosed; invite informed, voluntary assistance; and—when the contributor consents—make their account discoverable as part of a public archive. A person may use **education**, **private inquiry**, **assistance**, **evidence preservation**, or **public storytelling** independently. Testimony → witnessing → documentation/investigation → assistance/remedy or cultural work → archive is one optional public-story path, not the product's prescribed funnel.

**Identity.** **HEARD** is the standalone public-facing product. *Justice For All* is the umbrella movement, which may be associated with the Justice Party but remains operationally independent. *HEARD* is the participation and assistance initiative; *HEARD Public Archive* is its public, curated body of released accounts and associated evidence. Do not silently make use of the Archive into party registration, political consent, donor enrollment, or mailing-list enrollment.

**Decisions carried forward from the earlier discussions and October 10 HEARD corrections:**
0. Everyone can explore their rights and seek help independently of wrongdoing, arrest status, identity or willingness to publish; no default legal-testimony framing.
1. First-person video testimony is central. Audio and written testimony are supported so inability or unwillingness to record video does not exclude participation.
2. Contributors can be named, pseudonymous, anonymous to the public, visibly/aurally obscured, or restricted to specifically approved helpers. Those privacy choices are not equivalent and must be explained separately.
3. A person can seek help from lawyers, researchers, investigators, advocates, journalists, artists, filmmakers, people reporting related experiences, and other relevant volunteers.
4. The storyteller—not a public volunteer directory—controls whether and how prospective helpers may contact them and see restricted evidence.
5. Personal accounts, submitted records, corroboration, and independently substantiated conclusions must have distinctly labeled evidentiary status. Submission alone proves only that a submission occurred.
6. Related initiatives—Justice Teams, Witness Corps, Justice Works, One Question, The Public Record, Public Witness, Human Firewall, and Liberty Nodes—will integrate where appropriate rather than being built inside this repository.
7. Restricted submissions and identifiable private evidence must **never** be exported to Liberty Nodes. Publicly released content may be replicated only through a separately explained and authorized publication/replication path.
8. The applicable E2EESA standard is a standing architectural constraint; conformance and certification claims require evidence and independent gates.

**Engineering proposals in this document** (specific stacks, limits, schemas, defaults, PR boundaries, SLAs, and vendor deployment) are recommended implementation decisions, not assertions that the user previously approved each one. No material product choice should be hidden in an implementation detail.

### 1.1 Success conditions

A successful launch allows a person, including one who does not want an account or public identity, to complete a submission and securely retain their receipt/recovery credential; permits staff to review it without unintentionally publishing it; provides an auditable path to publication of an explicitly authorized derivative; permits the contributor to accept or decline narrowly scoped assistance; and exposes no restricted originals, identities, transcripts, or private contacts to public interfaces or unrelated organizations.

### 1.2 Explicit non-goals

- No automatic finding that any accusation is factually true, judicially proven, criminal, or medically substantiated.
- No provision of legal representation, emergency response, psychiatric assessment, or journalistic endorsement merely by submitting.
- No open marketplace of private dossiers, unmoderated publication of accusations, crowdsourced doxxing, public identity verification of complainants, or automated mass disclosure to third parties.
- No built-in unlawful surveillance, retaliatory targeting, harassment, or evasion services.
- No automatic sharing with a political party, campaign, government agency, commercial data broker, or third-party AI provider.
- No promise that deleting an already downloaded public story or a replicated archive copy is universally enforceable.
- No claim that server-side processing of readable content is end-to-end encryption.

## 2. People, roles, and authorization

**Public visitor:** browse and search authorized published accounts; flag concerns; offer assistance through a controlled form; cannot enumerate contributor identities or draft cases.

**Contributor:** submit testimony and evidence; choose identity and publication modes independently; maintain private drafts; receive a private status/recovery credential; edit or withdraw publication requests; decide whether to engage with helpers. A contributor may have an ordinary account or may remain anonymous to the system except for unavoidable provider-side transport metadata.

**Potential helper:** register and state capabilities/interests, offer help without receiving private evidence automatically. Categories include lawyer, researcher, investigator, advocate, journalist, artist, filmmaker, and corroborating witness. Category is self-described until reviewed; professional licensure or organizational affiliation must not be represented as verified without checking.

**Approved helper:** receive a finite, revocable authorization to specified case material and functions, after contributor assent and any required staff safety review. Editorial and artistic helpers do not automatically receive legal or sensitive evidence compartments.

**Reviewer/moderator:** technical and content safety review in a restricted console. Distinguish reviewers with case-summary access from reviewers allowed to decrypt particular submissions; privileged access must be purpose-scoped and audited.

**Safeguarding/legal-response officer:** access to reporting, urgent escalation, takedown, preservation, and lawful-process workflows; no omniscient default browsing of all sealed material.

**Organization coordinator:** administer verified participating organization membership and assignments but cannot see cases outside explicit organizational/case grants.

**System operator:** deploy and monitor services, with zero routine plaintext access to case content. A production break-glass path requires dual approval, justification, expiry, and a reviewed audit trail when technically possible.

**Global administrator:** manage policies, permissions, and service configuration, not silently inherit access to every protected testimony. Account administration and content-decryption authority must be separated.

**Policy invariant:** every sensitive read, write, export, search result, download, contact request, and job requires object-level authorization and appropriate purpose; no permission may be inferred merely from a frontend role badge.

## 3. User experiences and functional requirements

### 3.1 Public site

- Accessible homepage with six equal invitations: Understand my rights; Ask about something that happened; Get help privately; Share an experience; Help someone else; Explore stories. Include privacy overview, safety/resources, editorial standards and no account requirement for browsing.
- Public Archive browse/search, topic and geography filters only where safe, indexable individual case pages, captions and transcripts, source labels, publish date/revision history, restricted-data-free share cards.
- Clearly distinguish *testimony*, *submitted supporting documentation*, *independent corroboration*, *contradictory evidence*, and *editorial review status*. Avoid credibility scores that conflate incomplete evidence with falsehood.
- Case pages can offer “I can help,” “I have relevant information,” and “Report a problem,” all mediated without displaying private contact details.
- Public reply/correction path for a person named in a story, subject to identity/safety checks and editorial policy; it does not provide access to the contributor's private information.

### 3.2 Contributor intake (optional story/evidence track, not the default site journey)

- Welcome and plain-language risk briefing; accessible text, audio, and video instructions; language selection; no coercive political or promotional consent.
- Choose **submission identity** separately from **publication attribution**: verified real-name account, pseudonym, or no account; public real name, public alias, or anonymous; optional withheld identity visible only to authorized helpers.
- Choose **visibility**: private draft; confidential submitted case; share only with named/approved helpers; public redacted derivative; public identified derivative. Public plus external immutable replication is a separate opt-in.
- Testimony form: summary/title; narrative; approximate dates/location (optional/precision-controlled); institutions involved; alleged conduct; relevant legal/policy category if known; impact; desired remedy; what assistance is requested; corroborating people/documents; safety concerns; exclusions; language; evidence consent.
- Support multiple narratives/episodes within a case but prevent duplicate inflation. A contributor can link related cases without establishing public identity links.
- Upload original video, audio, pictures, documents, and URLs. Provide drag/drop, resumable multi-part uploads, pause/retry, mobile capture, per-file descriptions, source provenance fields, and a progress indicator.
- Allow contact preference: no contact; mediated offers; platform message from approved helpers; opt-in off-platform details. Never publish email/phone by default.
- Before final submission show a **recipient-and-visibility confirmation** that enumerates exactly which information will be visible to whom; require affirmative acceptance and record policy version.
- For anonymous intake generate a high-entropy private recovery credential once, with a readable/printable explanation that losing it may make future access impossible. Server stores only a verifier hash. Do not invent identity recovery from IP address or browser fingerprint.
- Return an opaque tracking reference that is **not** sufficient to authenticate; anonymous access requires the separate high-entropy recovery credential.
- Contributor can review status, amend details, supply extra evidence, withdraw a pending publication request, export authorized records, ask for deletion (subject to specific retention/legal-hold limits), and revoke future helper access.

### 3.3 Evidence and media

- Originals stored in private protected storage; SHA-256 digest, byte length, detected MIME type, original asserted source, upload timestamp, revision ID, storage object version, and recorded handling events.
- Untrusted files quarantined; verify MIME by actual content and safe decoding; malware scanning; time/resource-bounded processing; block known executable, active HTML/SVG, archives and dangerous document payloads by default; use isolated workers and content disarm/reconstruction when appropriate.
- Preserve originals for authorized review and produce separate derivatives for web playback/publication. Original metadata such as EXIF, GPS, device IDs, document authoring properties, hidden PDF text, timestamps, and location clues must not propagate to public derivatives.
- Face blurring/masking, voice transformation, mute/bleep, subtitle edits, crop, background obscuring, and document redaction with preview and approval. Warn that these reduce—but do not guarantee elimination of—reidentification risks. Automatic detection requires human confirmation before release.
- Captions/transcripts are editable, versioned, and privacy-reviewed; run optional speech-to-text only on content for which the user has consented to the selected processing mode/provider. No unapproved third-party AI processing of confidential originals.
- Chain-of-custody ledger records handling; a checksum establishes file integrity, not the real-world authenticity of allegations. Preserve proof of an original privately, never surface raw originals accidentally.

### 3.4 Case management and publication

- Workflow: `draft → submitted → quarantine/processing → review → (needs_info | held_private | rejected_with_reason | publication_ready) → published`, with later `amendment_pending → revised`, `temporarily_unpublished`, `withdrawn`, or `archived` states. Media readiness, content safety, consent, and case state are **separate** dimensions; an approved case cannot bypass attachment restrictions.
- Reviewer queues support safety priority, limited assignments, explicit access requests, decision explanations, contributor communications, confidential notes, conflict-of-interest handling, case merge/split, and redaction review.
- The **public projection service** builds a new versioned object from authorized fields and approved media derivatives, never a direct database view or storage URL exposing a confidential case. Publication is all-or-nothing per approved snapshot; signed publication manifests identify authorized asset digests and consent version.
- Publication requires positive, current contributor authorization for every field, asset, attribution form, external target, and eligible recipient class. New uploads or new future content cannot inherit blanket public consent.
- Public case-page revision and update notices; contributor-visible change log; temporary unpublishing and correction workflow; takedown operations with cache/search purge and independent third-party replica limitations explained.
- Protect the privacy of nonparticipants mentioned in testimony; redact addresses, phone numbers, faces of bystanders, unnecessary medical or child information, and other sensitive details. Publication need not depend on the contributor proving all allegations.
- Provide a governed complaint/dispute process and fact/context corrections; do not silently erase editorial context or replace testimony with an administrative conclusion.

### 3.5 Offers of assistance and collaboration

- “I can help” is a structured offer with helper role, capability, preferred scope, verified credential status where applicable, conflict disclosure, and availability; it does not expose the storyteller's direct contact data.
- Staff/reviewer may screen spam/unsafe offers; contributor sees sufficient description to approve, decline, or block. Only after approval is a minimal contact or protected message channel opened.
- Granular grants: public-only; redacted evidence; specified original files; notes; conversation; case collaboration. Scope by helper, case, resource, purpose and time. A grant is not an entitlement to everything added later.
- Secure contributor-helper communications: encrypted confidential messages with clear recipient/key boundaries; platform cannot claim E2EE if server-side moderation, search, email export, AI summaries, or plaintext recovery is enabled on the same flow. Opt-in separately for any such functionality.
- Collaborator workspaces: tasks, notes, source citations, introductions, attachments, volunteer handoffs, and outcomes with scoped sharing. Lawyer-client privilege or confidentiality must not be implied automatically by using the platform.
- Record outcomes in neutral language (investigation underway, evidence submitted, referral requested, media published, remedy reported), with source and review status; do not imply successful legal relief absent confirmation.

### 3.6 Safety, rights, and content standards

- Standards for accurate attribution, fair treatment of contested allegations, no doxxing, no credible threats/incitement, no exploitation of minors, and no targeted harassment. Review both false-accusation risks and the risk of improperly silencing genuine first-person accounts.
- Crisis/safety resources and warning that the service is not an emergency dispatch center; provide an internal serious-incident escalation workflow without claiming 24/7 coverage unless staffed and tested.
- Cases involving minors, sexual violence, classified material, privileged material, court orders, or potentially illegal imagery route to restricted specialist review; some content types may require refusal or specialized legally approved intake.
- Report/appeal processes for contributors and accused third parties. Content decisions document policy version and rationale; allow appeal by a different reviewer when feasible.
- Explicit rules for reporting, preserving, and deleting material in response to valid legal process, with counsel review and jurisdiction-specific retention; never promise anonymity against every compelled disclosure or technical adversary.
- No raw third-party user submissions to public generative AI services by default; any assisted summarization, translation, transcription, or classification requires explicit data processing authorization, vendor assessment, and a separate audit event.

## 4. Security and privacy architecture

### 4.1 Classification and compartment boundaries

| Class | Examples | Default allowed access | Publicly indexable? |
|---|---|---|---|
| C0: public authorized derivative | Curated story page, explicitly released caption/media | Anyone; subject to contributor's selected dissemination | Yes |
| C1: private metadata | Status, non-public topic, publication decisions | Contributor and purpose-scoped staff | No |
| C2: confidential originals | Submitted media/evidence, private narrative | Explicit authorized recipients only | No |
| C3: identifying/sealed fields | Contact details, real identity, identity keys, high-risk witness records | Separate compartment and dual-control or recipient cryptographic access | No |
| C4: service/security metadata | Abuse checks, audit events, access decisions | Limited operations/safety roles | No |

Never infer C0 from a case's publication status. Each new derived file/field must be explicitly promoted through the projection gate. Never put C2/C3 data in public search indexes, analytics, logs, notifications, exception trackers, preview caches, or Liberty Nodes.

### 4.2 Two honest protected-submission modes

**Managed confidential intake:** browser/app sends content over authenticated TLS to a controlled intake service, where authorized service-side malware scanning, transcoding, transcription, and moderator review can read it. Encrypt at rest with scoped keys and tightly controlled plaintext access, but **do not describe this as E2EE**. Default for contributors requesting platform processing.

**Sealed end-to-end encrypted intake:** encrypt client-side only to an expressly selected/authorized reviewer or helper endpoint using a vetted, versioned E2EESA-applicable profile. The service stores ciphertext and routing metadata but cannot inspect/transcode/search/read it. Before server-side publication or malware scanning, the participant must make a separately approved disclosure to a trusted processing recipient; a server-held general decrypt key makes it managed confidential processing, not zero-knowledge intake. Sealed intake is a production feature only after key lifecycle, recipient binding, lost-key recovery rules, malware safety, UX warnings, and independent cryptographic review pass; until then disable it rather than use mock E2E claims.

**Privacy truthfulness:** server hosts, reverse proxies, email systems, and object-storage providers may collect limited network metadata even for anonymous submissions; disclose actual practices. Anonymized public video and typed pseudonyms do not inherently conceal a source from sophisticated inference.

### 4.3 Applied E2EESA requirement

Inventory and classify *each component and data flow*, not the repository as one security class. Cover browser/mobile endpoints, managed processing workers, sealed message endpoints, object storage, public publication, notification metadata, archival export, helper access, administration and logging. Bind every security claim to the data flow, threat model, crypto profile/version, actual code/build, recipient/key authority, intended exceptions, test evidence, and reviewer. Treat the existing E2EESA project as **under audit remediation** until a supported approved release is available. A configuration pass is not independent security certification.

Required control families: identity/key changes and verification; client-side secret handling; authenticated encryption; no silent recipient expansion; key rotation/revocation/recipient re-verification; safe loss and recovery; replay protection; signed event authenticity; endpoint export boundaries; encrypted backup semantics; attachment protection; purpose-scoped disclosure; audited exceptions; anti-exfiltration telemetry; and honest limitation statements. Never copy E2EESA library defaults that are illustrative, draft, or experimental into production without explicit approval and assessment.

### 4.4 Security details

- Deny-by-default RBAC plus resource/attribute policy, checked server-side on every operation; isolate organization memberships and individual cases.
- Hardened login options (passkeys preferred for ordinary accounts; secure session rotation, MFA for all staff, phishing-resistant factors for highly privileged roles); anonymous receipt code authentication separate from public tracking ID.
- Strong random opaque IDs; protect against enumeration through response timing and error differences; per-action throttles with privacy-preserving abuse controls.
- No public storage buckets for originals. Short-lived signed object operations limited to a single key, size, type, principal, and expiry; signed download URLs must not leak to analytics, referrers, logs or browser history when avoidable.
- Signed webhooks with timestamped replay checks and idempotency keys; no plaintext body in generic error logs. CSRF/XSS/CSP/SSRF safeguards and dependency pinning.
- Background jobs use separately scoped service identities; scanning and FFmpeg/document-parsing in network-isolated, resource-capped workers; malware result or timeout cannot silently promote an upload.
- Cryptographic and audit log changes are versioned. Store public audit digests without identifiable plaintext; protect audit log read permissions; periodically anchor integrity proofs without publishing private case hashes that enable known-content correlation.
- Data retention by class and user consent, with deletion of stale drafts and rejected uploads; delete backups as their retention period permits; legal holds narrow, documented, reviewed, and time-limited where legally allowed.
- Abuse handling without storing permanent raw IP addresses for ordinary participation; document third-party infrastructure logging and restrict it where configurable.

### 4.5 Security gates

Target **OWASP ASVS 5.0.0 Level 2**, plus selected higher-assurance controls for confidentiality, identity, administrative access and files; record specific requirements and evidence, not a blanket certification. Follow OWASP secure file-upload guidance. Require security review for all PRs that alter identity, permissions, exports, cryptography, media-processing, consent or retention. Independent penetration testing and cryptographic review precede high-risk production features.

## 5. System architecture

### 5.1 Services and ownership

1. **Web application:** accessible Next.js/TypeScript frontend and server-rendered public pages; separate contributor/volunteer/admin routes.
2. **API/BFF:** versioned HTTP API for contributors and public readers, typed validation, authz, rate limiting, idempotency and audit.
3. **Case workflow adapter:** leverage `neophilism/Secure-Intake-Case-Workflow-Engine` for generic intake, case states, assignments, deadlines, correspondence and audit when runtime contract tests confirm compatibility. Keep HEARD's domain models, editorial policy and UX separate; do not fork generic business logic by default.
4. **Consent/authorization service:** immutable consent versions, grants, revocation, contributor-controlled recipients and field/asset disclosure decisions.
5. **Upload and evidence service:** multipart upload sessions, immutable original records, integrity digests, malware quarantine, private storage, handling events.
6. **Isolated processing workers:** media normalization, captions/transcript jobs, manual/automated redaction drafts, malware scan and document-safe rendering; never run on sealed ciphertext without an authorized endpoint disclosure.
7. **Publication projector:** builds fixed public snapshots from an allowlisted consent-approved view; dual-checks safety and only then promotes outputs into separately scoped public delivery.
8. **Archive read/search service:** operates only on public projection tables/assets; no database view joining confidential records for ordinary public pages.
9. **Helper/communication service:** verified volunteer profiles, mediated offers, scoped grants and optional vetted encrypted message endpoint.
10. **Notifications/events:** minimal-content email or in-app notices, controlled metadata, durable queues and signed integration events.
11. **Administration/safety operations:** moderation, case review, appeals, audit, abuse response, backup status and operational analytics.

### 5.2 Infrastructure recommendation

- **Web/API:** TypeScript + Next.js on Render (existing portfolio convention); current supported Node LTS and pinned compatible packages determined at implementation.
- **Database:** PostgreSQL on a **separate Neon database/project or isolated credentials/schema with explicit tenancy and backups**; use versioned SQL migrations and a generated type-safe DB interface. Never reuse another application's database URL or secrets.
- **Object storage:** separate private Backblaze B2/S3-compatible buckets or prefixes with enforceable IAM boundaries for quarantine, raw originals, reviewer derivatives, public assets and backups. The existing FOIA Aggregator's free-storage allocation does not imply capacity or permission for this system; plan independent quotas and budget caps.
- **Workers:** Render background/cron worker or equivalent, provisioned only when required. FFmpeg/image/document parser sandbox; move expensive workloads to cost-controlled on-demand processing where possible.
- **Queue:** durable PostgreSQL-backed job/outbox queue initially (transactionally tied to writes); do not add Redis solely for convention. Upgrade after measuring contention and delay.
- **Search:** PostgreSQL full-text over **public projections only** at launch; add a dedicated engine later only with a verified scale/cost need.
- **Email:** separate transactional provider with privacy-safe content, DKIM/SPF/DMARC, delivery/abuse suppression; do not put sensitive allegation text in emails.
- **Secrets:** Render/Neon managed secrets or scoped vault, rotation runbook, no secrets in repo, CI logs or example values.
- **Monitoring:** private operational telemetry, release SHA, readiness checks and Engine Room integration. Public app must not expose detailed internal security instrumentation.

### 5.3 Environments

`local` (synthetic accounts/files), `ci` (ephemeral Postgres/private mock storage), `staging` (separate real resources and synthetic fixtures), `production` (isolated data/secrets), and controlled `security-test` environments. No production data copied to staging, CI, external LLM systems or developer machines unless separately permitted and protected by a formal incident/forensic process.

### 5.4 Scope of integration

- **Justice For All core platform:** shared navigation/branding, approved identity federation, launch page, campaign discovery and possibly public counts. Keep contributors' case access and political consent segregated; shared login must not mean shared case visibility.
- **Secure Intake & Case Workflow Engine:** reusable workflow primitives, with pinned semantic version, contract tests and explicit fallback behavior if the upstream release is not production ready.
- **FOIA Aggregator:** link to publicly archived FOIA material by stable source ID, URL and provenance; no importing private case material into that public aggregator. This integration can be completed independently of downstream FOIA-bias studies.
- **Justice Teams, Witness Corps, Justice Works:** signed, scoped, minimal-payload event APIs and cross-app linking with explicit contributor consent. Do not build their entire feature sets here.
- **Liberty Nodes:** independently approved **public** manifests and versioned safe assets only. Distributed publication requires a separate explicit consent step and a warning that replicas may persist after deletion requests.
- **Engine Room:** repository PR count, actual merged gates, test results, deployment release, monitoring freshness, storage quotas, security blockers and complete handoff manifest. Missing data must display as unknown, not green.

## 6. Data model (authoritative starting schema)

All identifiers are opaque UUIDv7/ULID-class sortable opaque values or equally safe variants; public slugs/IDs must not expose sequence counts or identity. Use separate tables/columns and per-class permissions, and field-level encryption or sealed envelopes where appropriate.

| Entity | Essential properties / boundaries |
|---|---|
| `principal` | Account or anonymous bearer principal; external identity links separated from public names |
| `profile` | Public alias, language, contact preferences; never implicitly publicize legal name |
| `staff_membership` | Role, organization, purpose, expiry, MFA state |
| `helper_profile` | Claimed roles, reviewed professional credentials, disclosures, public contact policy |
| `case_record` | Internal ID, owner principal, title stub, state, safety class, timestamps; restricted |
| `case_narrative_version` | Authored text version, language, source, encryption/visibility class |
| `case_topic` | Versioned taxonomy code and optional confidence/reviewer attribution |
| `intake_answer` | Intake schema version, question ID, typed answer, classification |
| `consent_event` | Actor, scope, recipients, assets/fields, publication/replication opt-in, version, time, expiration |
| `access_grant` | Grantee, case, specific resources/actions, purpose, expiry, revocation, grant provenance |
| `upload_session` | Principal, planned files, one-time signed upload bounds, state, expiry |
| `evidence_object` | Original encrypted storage key/version, SHA-256, MIME verification, bytes, submitted source, class |
| `evidence_handling_event` | Evidence ID, actor/service, exact operation, old/new storage/review states, time, integrity proof |
| `media_derivative` | Parent evidence ID/version, transform config and tool version, digest, redaction approvals, visibility |
| `processing_job` | Idempotency key, input digest, policy version, state, attempts, resource ceilings and error classification |
| `transcript_version` | Timestamped segments, captions, privacy edits, language, approver, linked media version |
| `review_decision` | Reviewer, purpose, policy version, outcome, rationale, escalation/appeal links |
| `case_task` | Assignment, allowed helper, due date, status, protected notes reference |
| `publication_snapshot` | Immutable public version, allowed fields, allowed asset digests, reviewer approvals, signing data |
| `published_case` | Public slug, current snapshot, indexed summary, publish/revision state; **contains no private joins** |
| `helper_offer` | Offeror, case, minimal role/intent, screening state, contributor decision |
| `conversation` / `message_envelope` | Scoped participants, encrypted message bytes, key/profile versions, visible metadata only |
| `organization` / `organization_member` | Partner boundaries; no implied case-level access |
| `notification` | Recipient/channel, generic template code, private minimal metadata, delivery status |
| `safety_report` / `appeal` | Report type, affected content, constrained reporter/subject details, review/closure |
| `disclosure_request` | Legal/safety/partner request, authority, authorization, decision, artifacts, time limit |
| `audit_event` | Actor/service, object reference, action, purpose, policy/authorization result, digest chain |
| `retention_hold` / `deletion_job` | Scoped freeze, legal basis, review expiration, deletion/backup propagation state |
| `integration_outbox` / `delivery_receipt` | Signed event ID, recipient, minimal safe payload, retries, acknowledgment and deduplication |

**Invariants:** all writes reference a consent/security policy version; all protected retrievals are resource-authorized; evidence original rows never become published asset rows; every public snapshot references explicit authorized derivative digests; no exported event contains sensitive narrative text unless separately and explicitly authorized; revocation blocks *future* access but cannot destroy previously exported plaintext or remote replica copies.

## 7. API and event contract

Version HTTP surface under `/api/v1/` with OpenAPI 3.1 committed to repository. Persist idempotency keys for retryable mutations, normalize timestamps to UTC, validate payloads with shared runtime schemas, pagination and bounded filtering, `429` with safe retry hints, and uniform non-enumerating error responses.

| API group | Illustrative endpoints and behavior |
|---|---|
| Public | `GET /archive`, `GET /archive/{slug}`, `GET /archive/{slug}/revisions`, `POST /reports`, `POST /help-offers` (mediated) |
| Intake | `POST /submissions`, `PATCH /submissions/{id}`, `POST /submissions/{id}/submit`, `GET /my/submissions/{id}` |
| Anonymous session | `POST /anonymous/redeem` exchanges submission-specific high-entropy recovery proof for narrowly scoped short-lived session |
| Files | `POST /uploads/start`, `POST /uploads/{id}/complete`, `GET /files/{id}/status`, `POST /files/{id}/request-derivative` |
| Consent | `GET /my/submissions/{id}/disclosure-preview`, `POST /my/submissions/{id}/consents`, `POST /consents/{id}/revoke` |
| Helper interactions | `GET /my/offers`, `POST /offers/{id}/approve`, `POST /offers/{id}/decline`, `POST /grants/{id}/revoke` |
| Participant messaging | `POST /conversations`, `POST /conversations/{id}/messages`, `GET /conversations/{id}/messages` with E2EE scope/profile defined |
| Reviewer | `GET /review/queue`, `POST /review/{case}/decision`, `POST /review/{case}/publish-preview`, `POST /review/{case}/publish` |
| Subject response | `POST /public-responses`, `GET /my/response-status` with safety-gated release |
| Export/deletion | `POST /my/submissions/{id}/export`, `POST /my/submissions/{id}/withdraw`, `POST /my/submissions/{id}/deletion-request` |
| Operations | `/api/health` (liveness), `/api/ready` (actual DB/storage/queue dependencies), scoped `/api/internal/metrics` |

**Event types** (versioned schema): `heard.submission.created.v1`, `heard.submission.received.v1`, `heard.evidence.verified-technical.v1`, `heard.review.requested-info.v1`, `heard.publication.released.v1`, `heard.publication.withdrawn.v1`, `heard.help.offer-received.v1`, `heard.help.offer-approved.v1`, `heard.grant.revoked.v1`, `heard.safety.escalated.v1`. Every event includes schema version, idempotent event ID, origin, occurred-at, subject ID, allowed metadata and cryptographic provenance where appropriate. No protected witness names, emails, raw account text, original attachments, or secret URLs in general partner events.

**Explicit error cases:** expired/unknown anonymous recovery credentials; upload bypassing malware quarantine; revoked grants; two simultaneous editors; publication from stale consent; unsupported media; failed redaction; missing storage version; absent recipient key; replayed event; rate cap; case held under lawful retention. Clients must expose safe, non-misleading recovery paths.

## 8. Detailed workflows and acceptance examples

### Flow A: anonymous private testimony

1. Visitor reviews risks and chooses no account, no contact, **confidential only**.
2. Client generates submission and displays high-entropy recovery secret; visitor saves it without server emailing it.
3. Visitor enters narrative and optionally uploads a video. Upload starts in quarantined storage and requires successful safe processing before reviewer access.
4. Submission receives a private tracking reference; public endpoints return no case details.
5. Reviewer may ask a question through the protected inbox if that communication mode was selected. Without an account/recovery credential the visitor may not be reachable.
6. Visitor re-enters using recovery proof, sees the restricted status, and may separately opt into publication or helper contact later.

**Acceptance:** cross-user API attempts fail; logs, email, search, Engine Room, storage listing and public API disclose neither content nor identity; loss of recovery code does not enable support impersonation; user experience explains the tradeoff.

### Flow B: public redacted video

1. Contributor uploads original and selects public **redacted** derivative.
2. Quarantine, malware checks, transcoding and provisional face/voice transforms occur under the selected managed-processing consent. Redaction preview identifies potential leaks: spoken names, bystanders, background, tattoos, documents, metadata, transcript and captions.
3. Contributor reviews corrected output and field/asset disclosure list; an authorized publication reviewer independently clears safety concerns.
4. Projector creates a new versioned publication snapshot from approved bytes; public case page shows testimony attribution/status and only safe derivatives.
5. A future correction yields a new snapshot, revision notice and purge request; the original remains private and never appears in the archive URL path.

**Acceptance:** there is no route, CDN object, search index, public backup or browser prefetch that can access the original; consent revocation before promotion blocks publication; an edited caption requires reapproval; hiding a face does not silently claim guaranteed anonymity.

### Flow C: helper-assisted investigation

1. Prospective helper makes a role-specific offer; no direct contact or private evidence is exposed.
2. Contributor reviews the helper's stated and actually verified credentials, conflict disclosures, proposed scope, and expiration.
3. Contributor accepts only specified redacted evidence and an encrypted messaging channel; request for original unredacted footage remains unauthorized.
4. An assignment and time-limited grant are recorded; every helper file access is attributable and audited.
5. Contributor revokes grant. New requests are rejected, queued notifications fail closed, and the interface explains limitations concerning material previously copied/exported.

**Acceptance:** unapproved volunteer sees only authorized public story; shared-org membership does not grant case access; time expiry and revocation block API, storage and cache access; key changes surface visible recipient warnings.

### Flow D: allegation disputed or safety report

1. A named person, viewer or contributor submits a report without receiving nonpublic case data.
2. Staff classify safety/privacy/legal/policy concerns, temporarily limit visibility if justified, preserve auditable rationale, and notify the contributor where safe.
3. Contributor/subject can provide a correction or response subject to safety review. Decisions and appeals are recorded without publicly exposing confidential allegations.

**Acceptance:** urgent takedown invalidates signed public asset delivery and purges first-party caches/search within defined incident SLO; legal hold prevents deletion only when appropriately authorized; independent distributed copies are explicitly not represented as forcibly erased.

## 9. Measures of success and operating targets

Metrics: number of safely completed submissions (separate public/private); median submission completion time; unrecoverable anonymous-token loss reports where voluntarily reported; proportion of consent previews understood; publication turnaround by stage; privacy-safety review defect rate; verified helper offers approved/declined; offer-to-approved-helper time; accessible transcripts coverage; valid abuse-report closure; zero verified unauthorized C2/C3 disclosures. Avoid vanity metrics that pressure contributors to make private stories public.

**Planning targets, not achieved SLAs:** 99.9% monthly uptime after production hardening; P95 public page server response under 800 ms with warm service, full accessible largest-content paint at or under 2.5 seconds on defined mobile test; 100% of unauthorized-object-access negative tests passing; 100% documented media/publication consent; public takedown first-party purge within 15 minutes after approved urgent action; backup RPO ≤24 h during pilot, improvement toward ≤1 h at general availability; tested RTO ≤8 h at general availability. Document test network, sample size, cost and observed measurements before claims.

**Initial configurable limits for affordability:** up to one 15-minute/300 MB video and 10 documents of 25 MB each per draft by default; override for approved needs. Test resumable uploads and cost-based processing caps. Estimate B2 storage, CDN egress, CPU minutes for transcoding, database rows and email before launch; use budget and rate guards instead of silently incurring cost. These limits are engineering defaults for the pilot, not permanent editorial exclusions.

## 10. Repository structure and handoff

Suggested repository tree:

```text
HEARD/
  README.md
  docs/
    DEVELOPMENT_PLAN.md                 # this canonical full plan
    PRODUCT_REQUIREMENTS.md
    REQUIREMENTS_TRACEABILITY.md
    ARCHITECTURE.md
    DATA_MODEL.md
    API.md
    SECURITY_THREAT_MODEL.md
    E2EESA_FLOW_INVENTORY.md
    PRIVACY_AND_CONSENT.md
    MEDIA_PROCESSING.md
    MODERATION_AND_PUBLICATION.md
    LEGAL_RESPONSE_AND_RETENTION.md
    ACCESSIBILITY.md
    ROADMAP_REGISTER.csv
    DECISIONS.md
    OPERATIONS.md
    DEPLOYMENT_RENDER_NEON_B2.md
    DISASTER_RECOVERY.md
    PRODUCTION_ACCEPTANCE.md
    CROSS_ACCOUNT_HANDOFF.md
    adr/
  apps/web/
  packages/api-contracts/
  packages/domain/
  packages/security/
  packages/workflow-adapter/
  packages/ui/
  workers/media/
  workers/notifications/
  db/migrations/
  openapi/heard-v1.yaml
  infrastructure/
  scripts/
  tests/unit/
  tests/integration/
  tests/security/
  tests/e2e/
  .github/workflows/
  .env.example                         # placeholders only, NO secrets
```

`CROSS_ACCOUNT_HANDOFF.md` MUST give a new agent, with **no previous conversation history**: product purpose, approved vs proposed scope, unresolved material decisions, actual repo/branch/releases, dependencies/version pins, PR IDs mapped to real GitHub PRs, env variable names (never values), Render project/service IDs and Neon/B2 project identifiers once authorized and recorded, how to test locally, current open and blocked work, migrations, known failures, last successful deploy SHA, evidence links, security limitations and exact next safe task. `README.md` points to all authoritative documents. Never keep a critical requirement only in ChatGPT memory.

---

## 11. Ordered 48-PR implementation roadmap

**Interpretation:** Every `IP-XX` below is an ordered work package intended to become a reasonably bounded PR or a reviewed sequence of sub-PRs if implementation reveals a need to split it. Record real GitHub PR numbers in `ROADMAP_REGISTER.csv`. A package is **complete only when code, tests, relevant documentation, security review, and a merged PR are verified**. A deployed/operational gate is a separately recorded fact. Do not count a planning entry, open PR, passing unit test alone, or live-looking demo as production success.

### Phase A — charter, architecture, and deployable foundation

**HEARD-01 — Product charter and requirements ledger**  
Dependencies: none.  
Build: `PRODUCT_REQUIREMENTS.md`, user-role matrix, scope/non-goals, approved-vs-proposed requirements, source-of-truth hierarchy, ADR process and versioned roadmap register.  
Acceptance: every feature in this plan has a stable requirement ID, owner, initial test destination and status; no memory-only feature is required for handoff; editorial principles and organizational/political independence are explicit.

**HEARD-02 — Threat model, data map and privacy architecture**  
Dependencies: HEARD-01.  
Build: component/data-flow diagram, adversary model (harasser, malicious submitter, insider, hostile collaborator, compromised worker, provider, unauthorized requester), classification ledger, consent/publication trust boundaries, E2EESA inventory framework and risk register.  
Acceptance: negative test scenarios exist for anonymous reidentification, donor/political linkage, incorrect publication, sensitive metadata export, helper overreach and false E2EE claims; all intended recipients and decrypt-capable actors documented.

**HEARD-03 — Monorepo, type safety, development tooling and CI**  
Dependencies: HEARD-01.  
Build: Next.js/TypeScript app shell, lint/format/typecheck, pinned dependencies, reproducible local Postgres/test storage, unit/integration test runners, secret scanning, dependency audit, PR template and branch protections.  
Acceptance: fresh clone installs and tests from README; intentionally failing CI blocks merge; no secrets exist in repo/history; healthy baseline build produces an immutable artifact and build SHA.

**HEARD-04 — Versioned PostgreSQL schema and fixtures**  
Dependencies: HEARD-02, HEARD-03.  
Build: migrations for initial principal, case, evidence, consent, grants, audit, job and publication entities; scoped DB roles; factory-generated fictional data; schema lint and migration rollback strategy.  
Acceptance: migrate a blank DB and upgrade a prior fixture; no cross-user row reads; referential integrity and necessary constraints fail closed; fixtures contain no real complainants or allegations.

**HEARD-05 — Secure Intake engine adapter and compatibility contracts**  
Dependencies: HEARD-02, HEARD-04.  
Build: version-pinned adapter for `Secure-Intake-Case-Workflow-Engine`; map generic submissions, state transitions, tasks, notes and audit into Project domain without embedding Archive editorial policy upstream. Define compatibility/feature flags and dependency failure behavior.  
Acceptance: real adapter tests (not just mocked interfaces) demonstrate exact supported upstream capabilities; incompatible or not-yet-released features are recorded as blockers and do not silently trigger a second generic engine or false readiness.

**HEARD-06 — Environment configuration, readiness and operational skeleton**  
Dependencies: HEARD-03, HEARD-04.  
Build: documented environment variables, synthetic local/staging setup, health/readiness separation, structured redacted logs, migration preflight, minimal Render/Neon/B2 deployment templates, per-service IAM boundaries.  
Acceptance: startup fails safely with missing secrets/DB; liveness cannot be mistaken for readiness; no public admin endpoints; staging and production resources cannot accidentally cross-connect.

### Phase B — contributor identity, privacy and intake

**HEARD-07 — Accounts, pseudonyms and anonymous recovery**  
Dependencies: HEARD-04, HEARD-06.  
Build: account sessions, passkey-ready account policy, MFA for staff, anonymous principal and receipt/recovery-secret credential, private case status login, pseudonyms separate from legal identity.  
Acceptance: no email/phone required for anonymous submission; guessing tracking IDs grants nothing; replay/session fixation and lost-credential support-impersonation tests fail; privacy notice describes provider metadata limitations.

**HEARD-08 — Deny-by-default resource authorization**  
Dependencies: HEARD-05, HEARD-07.  
Build: central policy-as-code for roles, ABAC objects, restricted organizations, dual-control identity reveals, field/asset-granular grants and audited decisions.  
Acceptance: adversarial horizontal/vertical IDOR matrix is green; public helpers cannot see draft/private cases; administrator role alone does not decrypt sealed/identity compartments; all service jobs use scoped credentials.

**HEARD-09 — Privacy choice and versioned consent engine**  
Dependencies: HEARD-07, HEARD-08.  
Build: independent identity/publication/contact/processing/replication decisions, consent snapshots, disclosure preview, explicit recipient+asset scopes, withdrawal/new-asset rules.  
Acceptance: absence/staleness of any necessary consent blocks action; publication and sharing never inherit consent from unrelated toggles; change in privacy mode creates new version with audit; plain-language interface matches effective permissions.

**HEARD-10 — Accessible testimony intake wizard**  
Dependencies: HEARD-09.  
Build: narrative fields, incident/date/location precision options, categories, requested remedy/help, safety concerns, multimedia field placeholders, language labels, resumable steps and privacy explanation.  
Acceptance: anonymous and named users can complete the wizard using keyboard/screen reader; potentially identifying details are optional except where absolutely necessary; every field has classification and schema validation.

**HEARD-11 — Secure drafts, recovery and submit receipt**  
Dependencies: HEARD-07, HEARD-09, HEARD-10.  
Build: autosave/version conflicts, anonymous resume, contributor receipt, final submission checklist, draft expiry/deletion, unsubmitted restricted-data rules.  
Acceptance: conflicting revisions cannot silently erase content; draft never appears in public results; anonymous token authorizes only its cases; submit transaction cannot be double-executed by retries.

**HEARD-12 — Resumable private object uploads**  
Dependencies: HEARD-08, HEARD-11.  
Build: bounded direct-to-B2 multipart/chunk uploads via short-lived single-object grants, allowlisted formats, declared limits, incomplete upload cleanup, storage encryption and private-prefix policies.  
Acceptance: oversize/wrong-object/wrong-principal/expired upload requests are rejected; end-of-upload digest/size checks pass; no secret URLs in logs or public history; interrupted uploads resume safely.

**HEARD-13 — Malware quarantine and parser safety**  
Dependencies: HEARD-12.  
Build: actual MIME/content verification, scanner integration, disposable isolated parser containers, safe media/document conversion pipeline, resource quotas, CDR where appropriate, quarantine decisions and explicit scan-unavailable statuses.  
Acceptance: harmless fixtures pass, malicious EICAR-style test fixtures block, zip bombs/parser faults/timeouts remain quarantined, and the system cannot promote unchecked files if scanner/worker unavailable.

**HEARD-14 — Evidence integrity, provenance and handling ledger**  
Dependencies: HEARD-12, HEARD-13.  
Build: original object versioning, SHA-256 integrity, source assertions, chain-of-handling append-only event records, evidence reference permissions, tamper detection, private export manifest.  
Acceptance: any changed evidence bytes fail digest validation; reviewer actions are attributable; copies and derivatives remain linked to the correct immutable originals without suggesting external authenticity; sealed fields never enter public digests/indexes.

### Phase C — safe media processing

**HEARD-15 — Durable constrained media-job framework**  
Dependencies: HEARD-06, HEARD-13, HEARD-14.  
Build: durable outbox/jobs, leased workers, deduplication, retry/dead-letter controls, safe resource ceilings, isolated object credentials, cancellation, test fixtures and status UI.  
Acceptance: killed worker resumes or safely fails without data loss, duplicate jobs do not publish twice, poison files remain isolated and costs are bounded.

**HEARD-16 — Original-preserving media normalization**  
Dependencies: HEARD-15.  
Build: safe FFmpeg transcode to agreed web formats and thumbnails, source metadata removal on derivatives, exact parent-child hashes, independent private/public storage classifications.  
Acceptance: original bytes unchanged, unsupported codecs fail gracefully, no EXIF/geolocation leaks in generated public candidate, processing never creates an implicitly public URL.

**HEARD-17 — Anonymization and visual/audio redaction editor**  
Dependencies: HEARD-16.  
Build: blur/mask/manual overlay, voice pitch/timbre transform, audio muting, timing controls, document redaction, multi-person handling and user-facing preview; automated suggestions only, with manual confirmation.  
Acceptance: edited derivatives are nonreversible as exported files under documented threats; obvious metadata and transcript leaks are flagged; source remains private; UX explicitly does not guarantee anonymity.

**HEARD-18 — Editable transcripts and accessible captions**  
Dependencies: HEARD-15, HEARD-16.  
Build: captions/transcription (local or explicitly consented processor), VTT/SRT, multiple languages where available, accessible editor, transcript versioning and privacy linting.  
Acceptance: public captions appear only after consent and human approval; names removed from video but left in captions trigger a review block; third-party processing does not occur without recipient/vendor approval.

**HEARD-19 — Contributor/redaction-review approval gate**  
Dependencies: HEARD-09, HEARD-17, HEARD-18.  
Build: synchronized before/after previews, audio/caption/redaction checklist, source/derivative manifest, field-by-field release request and second-review queue.  
Acceptance: replacing media or transcript invalidates previous approval; withdrawn consent blocks promotion; unaudited/private media never reaches public CDN, share previews or publication manifests.

### Phase D — case handling, archive and disputes

**HEARD-20 — Complete case workflow state machine**  
Dependencies: HEARD-05, HEARD-11, HEARD-14.  
Build: submit/hold/needs-info/review/publication-ready/published/revised/withdrawn/archived transitions with policy guards, timestamps, reason codes and upstream case-engine integration.  
Acceptance: impossible state edges, unauthorized transitions and bypass of quarantine fail; every transition has actor and reason evidence; processing/media readiness is independent of case state.

**HEARD-21 — Restricted reviewer console and triage**  
Dependencies: HEARD-08, HEARD-20.  
Build: assignment queues, risk flags, reviewer access escalation, safety handling, case notes, conflicts and task delegation.  
Acceptance: unassigned reviewers have no accidental protected access; urgent flags are visible to staffed roles without making false 24/7 claims; dual-control protected reveals require independent authorization; cases never leak across organizations.

**HEARD-22 — Contributor status and follow-up inbox**  
Dependencies: HEARD-07, HEARD-20, HEARD-21.  
Build: restricted progress view, safe information requests, protected replies, additional evidence submissions, status explanation, contributor-initiated correction and release planning.  
Acceptance: anonymous user can reenter with recovery credential; generic emails do not contain allegation details; staff cannot send a message to a nonexistent external contact; status-only mode works with no email.

**HEARD-23 — Consent-bound publication projector**  
Dependencies: HEARD-09, HEARD-14, HEARD-20, HEARD-21, and HEARD-19 for any redacted-media publication.  
Build: allowlisted public publication schema, signed versioned manifest, private-to-approved-derivative promotion transaction, public asset IAM boundary and independently tested negative projections.  
Acceptance: C1/C2/C3 fields never appear in generated public tables/assets; each field/file was consented at the relevant version; stale approval, missing safe derivative or revoked permission aborts the whole publish operation.

**HEARD-24 — Public Archive pages and media player**  
Dependencies: HEARD-23.  
Build: accessible landing/browse, public case page, chronological update history, redacted video/audio player, captions, copy/share and safe source attribution.  
Acceptance: SSR, crawler, CDN and social metadata see only public projection; media has captions/transcript alternatives; public routes return appropriate not-found/taken-down states without leaking hidden cases.

**HEARD-25 — Public search, filtering and discovery**  
Dependencies: HEARD-23, HEARD-24.  
Build: Postgres text search of *public projection only*, safe facets, sort/filter, canonical URLs, sitemap, abuse-resistant crawl/rate limits and index-removal workflow.  
Acceptance: searching private keywords yields nothing; unpublishing removes first-party index hits and search previews within the defined incident SLO; sensitive geographic precision does not leak through aggregates.

**HEARD-26 — Evidentiary and source-status presentation**  
Dependencies: HEARD-14, HEARD-21, HEARD-24.  
Build: categories for personal narrative, submitted documents, externally checkable source, editorial corroboration, unresolved conflicts, correction and outcome with clear disclaimers and source references.  
Acceptance: uploaded file does not automatically become “verified”; absence of corroboration does not mechanically label a person dishonest; changed evidence labels and citations are versioned and reviewable.

**HEARD-27 — Amendments, corrections, withdrawal and public revisions**  
Dependencies: HEARD-23, HEARD-24, HEARD-25.  
Build: contributor-approved revisions, visible public update notes, temporary unpublication, safe takedown, first-party cache/CDN/index purge and restoration guards.  
Acceptance: original restricted assets remain nonpublic; public snapshots are immutable versions but active serving can be disabled; withdrawn public posts do not reappear after stale background retries; limitations of outside replicas are explained.

**HEARD-28 — Content disputes, abuse reports and legally reviewed release policy**  
Dependencies: HEARD-21, HEARD-26, HEARD-27.  
Build: report forms, moderation decisions, editorial correction/response workflow, appeals, urgent incident lane, qualified reviewers and legal process/retention procedures.  
Acceptance: reports do not expose complainant details to adverse parties; appeals can be separately reviewed; urgent unpublish is tested; evidence and private records are not erased in violation of documented valid holds; policy versions are recorded.

### Phase E — volunteer assistance and restricted collaboration

**HEARD-29 — Helper registry, categories and credential verification**  
Dependencies: HEARD-07, HEARD-08.  
Build: helper self-description, lawyer/researcher/investigator/advocate/journalist/artist/filmmaker/witness categories, optional vetted professional verification, affiliation and conflict-of-interest declarations.  
Acceptance: self-attestation is visually distinct from verified licensure; no unnecessary public helper personal information; organizational approval cannot grant case evidence access.

**HEARD-30 — Mediated “I can help” offers**  
Dependencies: HEARD-22, HEARD-29.  
Build: public/case-specific offers, safety review, contributor approve/decline/block controls, no direct email exposure, spam controls and offer history.  
Acceptance: anonymous visitors cannot obtain contributor contact details; declining an offer leaves private case inaccessible; contributor is never pressured into contact and can choose no-contact mode.

**HEARD-31 — Contributor-controlled fine-grained evidence grants**  
Dependencies: HEARD-08, HEARD-09, HEARD-30.  
Build: scoped grants by person/resource/action/purpose/expiry, just-in-time reviewer disclosures, access logs, revocation and cryptographic-key-change signaling.  
Acceptance: unauthorized originals/captions/notes fail at API **and storage** layers; future newly added records require their own grants; revocation blocks new access and the UI truthfully discloses limits on prior copies.

**HEARD-32 — Protected contributor-helper messaging**  
Dependencies: HEARD-02, HEARD-07, HEARD-31.  
Build: message transport and narrowly scoped E2EE endpoint experience using an independently reviewed, pinned profile **if available and actually implemented**; explicit key-change notice, participant recipient confirmation and metadata policy; otherwise keep this work gated or provide honestly labeled managed-confidential messaging with separate approval.  
Acceptance: negative tests for changed recipient keys, replay, unauthorized message reads, lost keys and exfiltration; E2EE not claimed for any server-readable workflow; message access is not granted merely by helper status.

**HEARD-33 — Restricted case collaboration, tasks and notes**  
Dependencies: HEARD-20, HEARD-30, HEARD-31.  
Build: tasks, case-specific note compartments, controlled attachments, handoffs, outcome tracking and links to associated testimony/source material.  
Acceptance: lawyer and journalist notes do not leak between roles; case handoff requires recipient approval and logs; collaborators cannot publish contributor information merely by marking a task complete.

**HEARD-34 — Minimal, reliable participant notifications**  
Dependencies: HEARD-22, HEARD-30, HEARD-32.  
Build: in-app notices, optional email, delivery failures, unsubscribe/prefs, batching and durable retries with template metadata minimized by sensitivity.  
Acceptance: no confidential story titles/files/body in subject lines or provider metadata; bounced/disabled contacts generate honest UI status; duplicate sends are idempotent.

**HEARD-35 — Partner organizations and scoped referrals**  
Dependencies: HEARD-29, HEARD-31, HEARD-33.  
Build: organization records, membership verification, referral requests, recipient acceptance, duty/scope limits, audit and safe disconnect/offboarding.  
Acceptance: an organization sees only cases granted to it; removing a staff member terminates their future access; no automatic blanket case forwarding.

### Phase F — integrations, portability and security evidence

**HEARD-36 — Justice For All core platform integration**  
Dependencies: HEARD-07, HEARD-24, HEARD-29.  
Build: shared site navigation, style, privacy-safe cross-app links, approved identity federation/OIDC and public participation counts; keep political campaign/party and case-service purposes separated.  
Acceptance: SSO never confers Archive access without Archive grants; no enrollment in party, campaign or marketing database without distinct voluntary consent; standalone app functions if core platform is unavailable.

**HEARD-37 — FOIA Aggregator citation and public-source bridge**  
Dependencies: HEARD-24, HEARD-26.  
Build: link records by external source/provenance IDs and authoritative URLs; fetch/validate public-record metadata without copying private evidence into the FOIA corpus.  
Acceptance: bad/deleted/unavailable citations are labeled; no cross-origin proxy SSRF; there are no write permissions from the Archive into public FOIA storage.

**HEARD-38 — Optional Liberty Nodes public dissemination export**  
Dependencies: HEARD-23, HEARD-27, HEARD-36.  
Build: explicit separate consent to distributed replication, signed allowlisted public asset manifests, exported version/revocation notices, deterministic verification and documentation of irrevocability limits.  
Acceptance: private fields/originals and identities withheld from publication cannot appear in node packages; replication off by default; the user is warned before consenting that replicas may persist after withdrawal.

**HEARD-39 — Typed public/partner API, signed events and SDK**  
Dependencies: HEARD-20, HEARD-23, HEARD-30, HEARD-35.  
Build: complete OpenAPI 3.1, external docs, scoped service tokens, partner event registry, signed webhooks, replay defense, outbox delivery, samples and contract tests for Witness Corps/Justice Teams/Justice Works.  
Acceptance: duplicate/out-of-order deliveries are harmless; secret data does not cross public/default webhook fields; integrations disable cleanly if downstream recipients fail.

**HEARD-40 — E2EESA evidence register and conformance remediation**  
Dependencies: HEARD-02, HEARD-08, HEARD-09, HEARD-23, HEARD-31, HEARD-32, HEARD-38, HEARD-39.  
Build: implementation-bound component inventory, flow/recipient matrix, cryptographic property evidence, upstream standard version pins, tests for unauthorized derived-content egress, audited gaps and independent reviewer queue.  
Acceptance: no E2EE/security property is marked passed by a schema fixture alone; remaining audit/remediation gaps block the corresponding production claims; passing source/test evidence is not misrepresented as deployment certification.

**HEARD-41 — Participant data export, retention and deletion requests**  
Dependencies: HEARD-14, HEARD-23, HEARD-27, HEARD-31.  
Build: export of authorized private materials with integrity manifest, verified deletion request tracking, limited/legal-hold handling, backup lifecycle, expired grant and account cleanup.  
Acceptance: request fulfillment cannot disclose other people’s data, private original versions are not in public archives, deletion jobs report exact completed/pending scopes and cannot claim remote replica erasure.

### Phase G — operations, assurance, launch

**HEARD-42 — Privacy-preserving analytics and administrator operations**  
Dependencies: HEARD-20, HEARD-24, HEARD-30, HEARD-41.  
Build: case/workflow funnel metrics, moderation queues, publication lead times, helper status, worker/storage quota utilization, review aging, abuse signals, limited export, admin audit dashboards.  
Acceptance: public counts cannot reidentify tiny private groups; no raw confidential content in telemetry; operational health reflects current sourced observations rather than inferred green status.

**HEARD-43 — Security hardening and adversarial test suite**  
Dependencies: HEARD-13, HEARD-21, HEARD-23, HEARD-31, HEARD-32, HEARD-39, HEARD-40.  
Build: ASVS 5.0.0 requirement mapping, authz/fuzz/property tests, file parser probes, SSRF/signed URL/CSP protections, key lifecycle checks, rate limits, dependency/SBOM and supply-chain review.  
Acceptance: high/critical findings closed or publicly documented hard gates preventing affected feature release; automated attempts at every restricted asset/field fail; independent tester can reproduce test matrix and evidence.

**HEARD-44 — WCAG 2.2 AA, usability and language review**  
Dependencies: HEARD-10, HEARD-17, HEARD-24, HEARD-30.  
Build: audit of entire journey, keyboard/screen-reader focus, mobile, contrast, reduced motion, video captions, plain-language trauma-aware help, comprehension testing of anonymity/replication/consent.  
Acceptance: automated and human accessibility checks record findings; blind/keyboard-only contributor can submit and manage a private case; usability tests demonstrate users understand what is made public.

**HEARD-45 — Reliability, recovery, capacity and cost safety**  
Dependencies: HEARD-06, HEARD-15, HEARD-23, HEARD-41, HEARD-42.  
Build: measured backup+restore, secret/key recovery controls, recovery runbook, load and resumable-upload tests, worker saturation and outage drills, storage quotas, CDN limits, cost alarms and deletion/retry tests.  
Acceptance: actual clean-environment restore reconstructs authorized case/evidence; recovery-time and recovery-point targets measured; no queue/media outage can create unintended publication; hard cost caps block runaway jobs without losing queued items.

**HEARD-46 — Production-ready Render/Neon/B2 deployment**  
Dependencies: HEARD-06, HEARD-23, HEARD-32 if protected messaging enabled, HEARD-43, HEARD-45.  
Build: CI/CD promotion with pinned images, SQL migration safeguards, protected staging and production, scoped environment credentials, readiness/probe checks, release SHA, preflight, rollback and change calendar.  
Acceptance: each service runs in the **authorized** Render project with correct Neon/B2 resources; health and full dependency readiness actually checked; failed migration/deploy rolls back; no plaintext production secret in source or logs.

**HEARD-47 — Engine Room integration and operating evidence**  
Dependencies: HEARD-39, HEARD-42, HEARD-46.  
Build: project registry entry, planned/merged/remaining PR mapping, observed CI status, source/version deployment identity, uptime/readiness, storage cost, backups, incidents, security blockers and freshness indicators.  
Acceptance: project appears with valid progress bar grounded in real GitHub facts; stale/unconfigured data labeled unknown; dashboard links to exact repository, actual live site and operating runbooks.

**HEARD-48 — Controlled beta, independent review and GA release gate**  
Dependencies: HEARD-28, HEARD-35, HEARD-38 if enabled, HEARD-40, HEARD-43, HEARD-44, HEARD-45, HEARD-46, HEARD-47.  
Build: scripted pilot with consenting synthetic/approved participants, staged safety monitoring, externally reviewed security/privacy/media risks, legal/editorial approvals, response rehearsal, launch docs, versioned release manifest and known-limitations page.  
Acceptance: complete participant journeys A-D pass on production-like services; no critical open privacy/security issues; staff roles and incident contacts assigned; production alerting and backups demonstrated; version/release/deploy SHA verified; independent reviewer findings resolved or blocked by disabled features; final Go/No-Go signed with evidence, not self-declared merely because 48 PRs merged.

### 11.1 Dependency and parallelism policy

- **Critical path:** HEARD-01/02/03/04/05 → HEARD-07/08/09/10/11 → HEARD-12/13/14/15/16/17/18/19 → HEARD-20/21/23 → HEARD-24/25/26/27/28 → HEARD-43/44/45/46/47/48.
- Helper work HEARD-29 can begin after identity/roles exist, in parallel with much of media and Archive UI. HEARD-30–35 depend on contributor contact/grant boundaries.
- FOIA linking HEARD-37 is safe to start once published-case citation UI exists; no need to postpone HEARD until FOIA Aggregator has finished its entire corpus-expansion roadmap.
- Liberty Nodes HEARD-38 is **optional for first release** and must not go live before a publication/retraction and irreversible-replication consent review.
- Sealed E2EE intake and encrypted messaging are **gated capabilities**, not license to falsely report readiness. The managed confidential workflow may be released first after its own authorization, security and privacy checks.
- Each PR should touch one bounded responsibility, contain tests and docs, and be merged only after required checks pass. Split a PR whose risks/diff size become too large; retain its parent milestone ID and map child PRs in the ledger.
- Permission, publication, crypto and evidence changes require security reviewer approval; do not auto-merge a failing test, material privacy design deviation or production legal-policy blocker. Routine implementation choices should be solved by engineering agents without user interruption.

## 12. Test and verification matrix

| Test layer | Required scenarios | Evidence |
|---|---|---|
| Unit/type | Consent predicate, authorization policy, field allowlist, state machine, version conversions, hashing, sanitization, retention constraints | CI report, coverage on critical modules |
| Database | Fresh and upgrade migrations, row/tenant isolation, failed transactions, concurrent grants, immutable snapshot semantics | DB integration job and migration record |
| Upload and parser | MIME spoof, path abuse, chunk replay, huge/bomb files, malware signature, unsupported codec, scanner outage, malformed PDFs/images | Quarantine fixture suite and sandbox logs (redacted) |
| Media privacy | EXIF/GPS/author stripping, faces/voices/bystanders, transcripts/alt text, failed blur, derivative/original separation, preview cache | Before/after synthetic fixture suite and manual review |
| Authorization | Guest/private case enumeration, cross-helper grant, expired proof, revoked grant, organization separation, forged staff token, legal/identity compartments | Negative authorization matrix with 100% pass |
| E2E/crypto | Correct and wrong recipients, key replacement, lost/rotated keys, server-readable vs sealed modes, message replay, metadata leakage, plaintext egress on error/retry | Profile-pinned interoperability and hostile tests; independent review |
| Publication | Field and asset allowlists, stale consent, partially failed promotion, search/cache/OG leak, CDN/object key exposure, unpublish retry, Liberty export opt-in | End-to-end public projection tests |
| Contributor UX | Anonymous submit/recover, account submit, mobile interrupted upload, correct privacy understanding, private status, edit/withdraw, accessibility | Browser tests plus human study |
| Helper UX | Offer/decline, vetting flag, approve minimal scope, communication, expiration/revocation, withdrawal | Browser and contract tests |
| External contracts | Secure Intake version pin, FOIA source reference, Justice For All SSO, signed event retries, Liberty manifest isolation | Stub+real compatible contract tests |
| Legal/moderation | False accusation, identity exposure, appeal, right of reply, harassment/threats, child safety, valid legal hold, urgent takedown | Fictional scenario playbooks and reviewer sign-off |
| Operations | Queue death/restart, storage outage, Neon failover, restore, config leak, cost saturation, dependency readiness, deploy rollback | Reproducible runbook recordings, alert receipts, measured RPO/RTO |
| Performance/accessibility | Mobile P95, upload throughput, indexing lag, screen-reader narration, keyboard-only completion, captions, contrast | Defined load data and WCAG audit |

**Prohibition:** synthetic checks cannot masquerade as live vendor integration evidence, a configuration conformance pass cannot masquerade as independent security certification, and successful production homepage loading cannot substitute for end-to-end protected case acceptance.

## 13. Data governance, policies and accountability

Before accepting real confidential accounts, adopt and publish: contributor terms; privacy notice; case visibility and replication consent language; copyright/licensing statement for testimony/evidence; legal response policy; content and moderation standards; appeals and dispute handling; retention/deletion/holds schedule; child-safety policy; platform contact and security disclosure routes; accessibility statement; and clearly scoped helper rules.

**Ownership and license:** the contributor retains their rights in original material. Obtain only the narrow licenses necessary to store, process, display and, if separately consented, replicate specified approved derivatives; no blanket unlimited sublicensing of confidential raw evidence. Volunteer-produced artwork and investigation materials require separate negotiated rights; do not imply artists acquire the source testimony.

**Truth and fairness:** label accounts as accounts; provide corroboration provenance without preemptively certifying truth or falsity; support correction and relevant responses; provide due process for disputed postings. Moderation should avoid diagnoses or psychological characterizations of contributors and should not automatically decide credibility from a sensational allegation.

**Minors/high-risk content:** do not deploy open self-service publication pathways for minors or specially protected categories before legal and specialist safeguarding design review. Use restricted intake/hold, and release only after applicable review.

**Documented responsible owners:** engineering/release, security, privacy/data protection, legal/editorial, safeguarding/moderation, media QA, support, accessibility and infrastructure. Multiple people can hold roles at pilot scale but conflicted access and dual-approval duties must be segregated.

## 14. Risks, mitigating controls and blockers

| Risk | Severity | Mandatory mitigation |
|---|---|---|
| Confidential identity/evidence exposed publicly | Critical | Two-stage projection, granular consent, storage IAM separation, negative exfiltration tests, incident takedown |
| Contributor believes face/voice transformation guarantees anonymity | Critical | Honest UI disclosure, transcript/background/metadata review, publication preview, contributor confirmation |
| Stalker/harasser registers as helper | Critical | Mediated offers, verified vs claimed role display, no direct contact, narrowly scoped grants and block/report |
| Harmful/defamatory accusation or private third-party information published | High | Human editorial safety review, redaction policy, appeal and subject response, prompt correction/takedown |
| Malware, exploit file, resource exhaustion | High | Quarantine, MIME inspection, parser isolation, job limits, scans fail closed, capacity budgets |
| E2EE claims contradicted by server-side processing | Critical | Explicit managed-vs-sealed modes, recipient inventory, cryptographic evidence and independent review |
| Unretractable public replicas | High | Liberty Nodes off by default, separate specific consent, immutable replication warning, signed correction/revocation notices |
| Identity or party/campaign linkage | High | Separate service-purpose consent, privacy-safe SSO, no default supporter enrollment, strict analytics/log partition |
| Unavailable/unreleased upstream engine feature | Medium/High | Pinned adapters, integration contracts, explicit capability flags and blocker ledger; no imaginary implementation |
| Slow expensive video workloads | Medium/High | User quotas, queued on-demand processing, public derivative quality tiers, concurrency and spend caps |
| Inability to honor deletion due to holds/backups/replicas | High | Versioned retention policy, scoped legal holds, backup expiry, realistic user disclosures and progress receipts |
| Low-quality evidence presented as proof | High | Separate testimony/source/reviewer labels; traceable provenance; non-judgmental neutrality |
| Unstaffed crisis intake construed as emergency response | High | Prominent non-emergency notice, optional resource links, staffed coverage rules and tested escalation |

A critical privacy or abuse issue is a release blocker for the affected functionality even if functional PRs are merged. Document any deviation in an ADR, risk register and Engine Room, rather than silently removing the control.

## 15. Deployment, operations, and incident response

### 15.1 Configuration register

Document **names but never values** for `DATABASE_URL`, `B2_*` restricted keys and buckets, `SESSION_SECRET`, authorized OIDC/JFA issuer and client IDs, email provider credentials, worker queue/lease settings, E2EESA profile/version pins, storage region, upload limits, legal hold settings, webhook signing keys and Render service URLs. Store real resource identifiers only after verifying them against the user's authorized workspace, not by reusing nearby projects' URLs or connection strings. Rotate any secret accidentally pasted into chat or source before relying on it in production.

### 15.2 Release pipeline

- PR checks → reviewed merge → reproducible build/pinned image → SBOM and provenance → staging migration+smoke → staging full flow tests → manual production gate for risky changes → backup/snapshot preflight → production deploy → real health+readiness+workflow probe → release identity confirmation → Engine Room update.
- Migration plan specifies expand/contract compatibility, lock timeouts, rollback or forward-fix, and data visibility invariants.
- Build, deploy and GitHub merge success are separate signals. Verify exact production SHA, active schema and functioning worker/storage before marking deployed.
- Avoid production users during initial beta until legal/privacy, safe intake and actual staff coverage exist.

### 15.3 Continuous operations

- Monitor database health, object storage and signed URL availability, queue lag, quarantined file counts, reviewer backlog, public projector mismatches, upload failures, pending takedowns, key rotation/revocation anomalies, email delivery, backup freshness and storage quotas.
- Define incident severity and on-call owner; preserve redacted forensic audit evidence, isolate publication on suspected leak, invalidate cache and credential grants, notify affected parties as required, and test restore or rollback.
- Conduct regular access reviews, staff offboarding, dependency updates, staging restore drills, red-team review of permission boundaries and follow-up of unresolved safety reports.
- Public availability metrics must not reveal the existence/location/characteristics of a specific private submission through sparse aggregates or timestamp correlations.

### 15.4 Cost-aware launch

The existing portfolio uses Render, Neon, and Backblaze B2; adopt these only where correct account permissions, separate resources, encryption policy and real budget capacity are verified. The initial beta may use small upload caps and on-demand transcoding; never promise unlimited archival or continuous high-definition processing on a free tier. No estimated vendor cost is a substitute for a live billing/usage check and configured limits.

## 16. Release gates and definition of complete

### 16.1 MVP (safe, contained pilot)

Must have HEARD-01–HEARD-16, HEARD-18, HEARD-20–HEARD-24, HEARD-26–HEARD-28, HEARD-41 and the applicable controls/acceptance from HEARD-40, HEARD-42–HEARD-48. HEARD-17/HEARD-19 are also required if redacted media publication is enabled; otherwise disable public videos requiring anonymization. Helpers/messaging (HEARD-29–35), public FOIA linking, Liberty replication and sealed E2EE can be deferred behind disabled feature flags. MVP accepts private testimony and, only where fully reviewed/consented, straightforward public derivatives.

### 16.2 Full product GA

All 48 PR packages either implemented and verified or documented as a **deliberately disabled optional feature**, with its contract and public interface honest about unavailability. No claiming project completion if a user-promised core function—anonymous submission, privacy-controlled story publication, evidence review, mediated help, safe public Archive, or basic accessible access—is absent.

### 16.3 Final go/no-go checklist

- [ ] Product requirements ledger traces every approved requirement to code, test, route/UI and owner.
- [ ] Existing Secure Intake functionality used only after actual version/contract verification.
- [ ] Anonymous, named, pseudonymous, transformed and restricted workflows all tested, with clear limitations.
- [ ] Original and derivative storage and search/public boundaries demonstrably separate.
- [ ] Granular consent, recipient decisions, safe grants and revocation pass adversarial negative tests.
- [ ] Malware scan and parser failures fail closed; handling proof and backups verified.
- [ ] Third-party, children, copyright, safety, disclosure and disputes policies reviewed and staffed.
- [ ] Cryptographic claims scoped to actual components/profile, with E2EESA assessment and independent review where applicable.
- [ ] Accessibility and usability of confidentiality decisions independently reviewed.
- [ ] All high/critical vulnerabilities resolved or affected functions disabled.
- [ ] Production restore drill, measured RPO/RTO, quotas, alerts and rollback verified.
- [ ] Public release never sends raw evidence to Liberty Nodes, FOIA Aggregator, logs or general analytics.
- [ ] All Render/Neon/B2 resource IDs, release SHA, health/readiness, and service identity confirmed live.
- [ ] Engine Room displays verified PR count and observed deployment state, not inferred success.
- [ ] `CROSS_ACCOUNT_HANDOFF.md` reflects actual project status, failures, next tasks, and no memory-only dependencies.
- [ ] Responsible engineering, security, privacy, legal/editorial and operations sign-offs recorded.

## 17. Instructions to an independent development agent

1. Read `README.md`, this full plan, `PRODUCT_REQUIREMENTS.md`, `REQUIREMENTS_TRACEABILITY.md`, `ARCHITECTURE.md`, E2EESA data-flow inventory, decisions, operations and cross-account handoff **before editing code**.
2. Inspect the actual repository, open/merged PRs, CI, migrations and live service state; map each `IP-XX` to exact real PR/commit/test/deploy evidence. The roadmap is a specification, not a historical completion claim.
3. Inspect the actual upstream `Secure-Intake-Case-Workflow-Engine` and E2EESA versions and pin compatible reviewed releases. Treat mock functionality and unstable security profiles as unavailable until tested.
4. Work in dependency order. Open a small PR, run required automated/security checks, review integration and user-data impact, and merge automatically **only if** permitted, tests are genuinely passing, and no material legal/product/security gate is bypassed. Chain subsequent available work without waiting for discretionary implementation decisions.
5. Record a blocker only when an actual missing secret/permission, unresolved consequential product policy choice, serious security finding, broken upstream dependency or other real constraint prevents safe continuation. Do not ask the user to choose routine libraries, code patterns, or test mechanisms that engineering can choose responsibly.
6. Update roadmap register, handoff, linked ADRs, OpenAPI schemas, tests and Engine Room with every completed PR. Do not mislabel planned PRs as merged, code as deployed, or website liveness as operational acceptance.
7. Do not access or introduce real contributor accounts, identities, or allegations in fixture data. Treat all unsanitized production testimony as sensitive. Minimize and redact any troubleshooting artifacts.
8. At a completed milestone, produce links to the exact merged PR, passing tests, release artifact, deployed SHA, operational probes, residual risk and next queued milestone. Stop only at a genuine blocking gate or explicit instruction.

## 18. References and source-of-truth links

- Source repo to create: `https://github.com/neophilism/HEARD` **(proposal only; verify existence before claiming it is live)**.
- Existing reusable case engine: https://github.com/neophilism/Secure-Intake-Case-Workflow-Engine ; starting plan in `docs/DEVELOPMENT_PLAN.md`.
- Existing E2EESA standard: https://github.com/neophilism/End-To-End-Everywhere-Security-Architecture-Standard ; review `docs/AUDIT_REMEDIATION_PLAN.md` and active version/registry before adopting a profile. Its status in October 2026 is audit remediation, not independent certification.
- Existing FOIA records corpus: https://github.com/neophilism/FOIA_Aggregator ; existing broader-corpus roadmap is separate.
- Existing project tracking: https://github.com/neophilism/Engine-Room ; completion and deployed state must be externally verifiable.
- OWASP ASVS 5.0.0: https://owasp.org/www-project-application-security-verification-standard/ and https://github.com/OWASP/ASVS/releases.
- OWASP File Upload Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html.
- W3C WCAG 2.2: https://www.w3.org/TR/WCAG22/.

---

**Planning conclusion:** Build HEARD as an independent, public-first storytelling and assistance application over reusable secure intake infrastructure. Keep confidential originals, identifying information, managed processing, optional sealed encryption, public publication and irreversible distributed archival as **different, explicitly authorized security domains**. Use the 48 IDs as the canonical engineering roadmap, with real merged-PR and production evidence continuously recorded for handoff to any development account.