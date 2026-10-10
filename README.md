# HEARD

**Your rights. Your voice. Your next step.**

HEARD is a public-interest project being built to help people understand their rights, make sense of government actions that affect their lives, and find paths to answers and accountability. It brings clear information, practical support, and firsthand stories together in one place.

Questions about your rights deserve careful answers. Experiences deserve to be taken seriously. And when public institutions make mistakes or misuse their power, people need ways to document what happened and seek review or redress.

## What HEARD will offer

- **Know your rights.** Plain-language guides explaining legal protections, government powers, and the procedures that matter, with sources and jurisdiction-specific context.
- **Ask a question.** A simple place to explore concerns about something that happened or a government decision you want to understand.
- **Find support.** Resources and carefully managed connections to people who may be able to help, including legal professionals, researchers, and advocates.
- **Share an experience.** A way to preserve an account, organize evidence, and choose whether to share a story more widely.
- **Help someone else.** Opportunities to contribute relevant information, time, or professional expertise.
- **Explore stories.** Firsthand accounts presented with available documents, updates, and clear distinctions between reported experiences and independently verified findings.

**The platform's central promise is clarity and choice:** useful information, respectful treatment, and control over what is shared and with whom. Those promises must be supported by tested product behavior, not merely words.

## Content and editorial direction

Public copy is maintained in [content/site-copy.json](content/site-copy.json), with its editorial standards in [docs/CONTENT_STRATEGY.md](docs/CONTENT_STRATEGY.md). The site should feel welcoming and serious, not like a law office, court filing, political solicitation, or sensationalized exposé.

Rights guides must identify their sources, relevant jurisdiction, and review date. Published accounts must distinguish a contributor's experience from documentary evidence, corrections, and independently confirmed findings. Communications about privacy must describe actual protections and meaningful limitations.

## Development documentation

- [Complete development plan](docs/DEVELOPMENT_PLAN.md) — architecture, security, data model, user workflows, phased work packages, acceptance and release gates.
- [Product decisions](docs/DECISIONS.md) — settled product boundaries and unresolved material decisions.
- [Independent-account handoff](docs/CROSS_ACCOUNT_HANDOFF.md) — implementation status, dependency tracking, and next steps.
- [Content strategy](docs/CONTENT_STRATEGY.md) — brand voice, interface wording, sensitive copy rules, and review process.
- [Canonical interface copy](content/site-copy.json) — strings and screen-level copy for the eventual application.

## Related projects

- [Justice For All](https://github.com/neophilism/Justic-For-All) — the broader initiative; any technical integration must be checked before implementation.
- [Secure Intake & Case Workflow Engine](https://github.com/neophilism/Secure-Intake-Case-Workflow-Engine) — reusable private intake and case workflow capabilities, subject to compatibility tests.
- [End-To-End-Everywhere Security Architecture Standard](https://github.com/neophilism/End-To-End-Everywhere-Security-Architecture-Standard) — applicable security requirements, evaluated per component and data flow.
- [FOIA Aggregator](https://github.com/neophilism/FOIA_Aggregator) — potential source of verifiable public-record references.

## Current project status

HEARD is in early development. **There is no live HEARD service accepting private questions, testimony, or evidence.** Do not submit sensitive information through GitHub issues, pull requests, demonstration forms, or repository discussions.

The repository currently contains the product specification, content system, foundational tests, and initial CI setup. A functioning application, secure intake, rights-review operation, and production deployment remain to be implemented and verified.

To run the existing foundation checks with Node.js 22 or later:

```sh
npm run check
```

Development progress and live readiness are tracked separately. A completed roadmap entry is not evidence that the corresponding service is deployed or safe for sensitive use.
