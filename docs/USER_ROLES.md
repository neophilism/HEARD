# User-role matrix

Status: approved product intent from the development plan, not implemented permissions. Version 1, 2026-11-01. Role labels describe capabilities to be implemented and tested in HEARD-07/08 and downstream units; membership alone never grants protected data access. No staff assignments or service response hours are established here.

| Actor | Intended activities | Protected data boundary | Initial requirement / test destination |
|---|---|---|---|
| Public visitor | Read rights guidance and approved public stories; discover support | No account required to read; no private drafts, originals, identity fields or private search results | R-HEARD-24/25; tests/integration/publication/ |
| Anonymous contributor | Create a private case, retain a recovery credential, resume and check status | No mandatory email/phone; receipt IDs alone confer nothing; lost credentials do not permit staff impersonation | R-HEARD-07/11/22; tests/security/intake/ |
| Account contributor | Manage own cases, evidence, consent, publication requests, scoped grants and corrections | Own resources only; independent contact, helper disclosure, publication and replication decisions; no blanket consent | R-HEARD-09/19/31/41; tests/security/consent/ |
| Helper / professional | Declare qualifications and conflicts; offer assistance | Self-attestation differs from verified credentials; helper status and offers grant no case/contact/evidence access | R-HEARD-29/30/31; tests/integration/collaboration/ |
| Assigned reviewer / triage staff | Review assigned cases, request information, record handling and escalate risk | Assignment, field/asset scope and audited authorization required; protected identity reveals require independent authorization | R-HEARD-08/21; tests/security/intake/ |
| Editorial / release reviewer | Assess provenance, disputes, corrections and contributor-approved public derivatives | Reviewer status does not confer unrestricted originals; publication requires current consent, safe derivatives and release guards | R-HEARD-19/23/26/28; tests/integration/publication/ |
| Partner organization / member | Accept narrowly scoped referrals and approved collaboration | Organization approval confers no blanket case access; offboarding terminates future access | R-HEARD-33/35; tests/integration/collaboration/ |
| Administrator / operator | Operate accounts, quotas, incidents and service health | Administrator role alone cannot decrypt sealed or identity compartments; telemetry excludes confidential content | R-HEARD-08/42; tests/security/intake/ |
| Service job / integration | Process explicitly scoped objects or approved partner events | Scoped credentials, bounded resources, recipient approval and public allowlists; no inherited human privileges | R-HEARD-15/38/39; tests/integration/adapters/ |
| Justice For All core identity / political actor | Provide approved navigation or identity federation; political participation remains separate | SSO gives no case grants; no donor, campaign or party enrollment/linkage without distinct voluntary consent | R-HEARD-36; tests/integration/adapters/ |

Legal, editorial and independent review are responsibilities requiring documented competence and conflicts handling, not a universal system superuser. Detailed permission/action matrices and negative API/storage tests belong to HEARD-08 and each implementing unit. This matrix must be reconciled with those policies before release. No direct outside contact is implied when a contributor selects no-contact mode.
