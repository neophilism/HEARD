# HEARD

**Your rights matter. Start wherever you are.**

HEARD is a Justice For All platform for learning about rights, asking questions about potentially wrongful government conduct, obtaining assistance privately, preserving evidence, and—only when chosen—sharing experiences publicly. Visitors do **not** need to consider themselves victims, have been accused of wrongdoing, identify a legal violation, or commit to publishing a testimony.

## Paths into HEARD

- **Understand my rights:** explore jurisdiction-sensitive educational information with sources, update dates, and uncertainty.
- **Ask about something that happened:** describe a situation without making a formal accusation or creating a public record.
- **Get help privately:** seek confidential or anonymity-preserving assistance with clear security limitations and consent.
- **Share an experience:** control what is documented and whether anything is published.
- **Help someone else:** learn, refer, contribute corroboration, or offer vetted professional/volunteer assistance.
- **Explore stories and public records:** read consented, reviewed accounts and supporting material without logging in.

**Publication, identity disclosure, and referral to another organization are separate affirmative choices, never default consequences of seeking help.**

## Development

- [Canonical development plan](docs/DEVELOPMENT_PLAN.md) — requirements, architecture, policies, roadmap, acceptance tests, and cross-account handoff.
- [Architecture decisions](docs/DECISIONS.md) — approved decisions and unresolved choices.
- [Implementation status and handoff](docs/CROSS_ACCOUNT_HANDOFF.md) — verifiable repository progress and next safe steps.

Initial project status: **foundation in progress; not deployed or ready to accept sensitive reports.** Do not send private case content to GitHub issues, pull requests, logs, or demo forms.

## Existing infrastructure and boundaries

- [Justice For All](https://github.com/neophilism/Justic-For-All) — planned parent platform integration; check repository and interface availability before coupling.
- [Secure Intake & Case Workflow Engine](https://github.com/neophilism/Secure-Intake-Case-Workflow-Engine) — reusable case/consent/workflow features where independently verified.
- [End-To-End-Everywhere Security Architecture Standard](https://github.com/neophilism/End-To-End-Everywhere-Security-Architecture-Standard) — applicable per-component/flow controls; no unsupported E2EE or certification claims.
- [FOIA Aggregator](https://github.com/neophilism/FOIA_Aggregator) — optional, provenance-preserving public-record linkage.

This repository contains **no production intake service** yet. Public demonstration content must be fictional, and protected material must never be uploaded until the reviewed privacy, security, and operational release gates are met.

## Development policy

Security-sensitive changes require tests, migration/rollback notes where relevant, and documented evidence. A PR milestone label is not a claim of implementation. Verified code/CI status and live deployment status are separate. Follow the release gates in the development plan.
