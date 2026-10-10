# HEARD — Content strategy and interface voice

**Status:** Editorial specification and implementation-ready copy deck. The application is not yet live.  
**Canonical UI strings:** [`content/site-copy.json`](../content/site-copy.json).  
**Product:** HEARD, an initiative of Justice For All.  
**Approved positioning line:** **Your rights. Your voice. Your next step.**

## 1. The story HEARD should tell

Government decisions and actions shape people's lives. Everyone deserves to understand their rights, recognize when a process may have gone wrong, know where to look for answers, and find ways to respond. HEARD will bring practical rights education, resources for assistance, optional accounts of lived experiences, and evidence-minded public documentation into one place.

HEARD's identity is not a legal firm, a complaint office, a therapy service, a protest recruitment page, or a journalism-only outlet. It is a useful public-interest starting point that can connect learning, questions, support, records and stories. Accountability is a meaningful outcome, not a conclusion that HEARD announces before investigating the facts.

### Primary public description (short)

> HEARD brings rights information, practical support, and personal stories together in one place.

### Primary public description (standard)

> HEARD helps people understand their rights, make sense of government actions that affect their lives, and find paths to answers and accountability.

### Primary public description (expanded)

> Government decisions affect us all. Understanding your rights, finding reliable information, and knowing what to do when something goes wrong can be difficult. HEARD is being built to bring plain-language guides, practical support, firsthand experiences and supporting records together in one accessible place. Ask a question, explore your options, share what happened, or help someone else move forward.

Use the present tense for the mission and established features *only after they exist*. Before public launch, explicitly label pending features as planned and avoid inviting anyone to submit sensitive material to unready infrastructure.

## 2. Voice and tone

HEARD sounds like a thoughtful, capable person who respects the reader. It should feel confident without declaring every account proven, warm without sounding therapeutic, and determined without pressuring visitors into activism.

- **Direct:** “Find help” rather than “Access our multi-sector assistance ecosystem.”
- **Concrete:** “Explore your rights when stopped by police” rather than “Learn about complex state interactions.”
- **Respectful:** “Tell us what you'd like to understand” rather than “Prove you were a victim.”
- **Inviting:** “Start with a question” rather than “Submit your formal allegation.”
- **Credible:** “A personal account” and “Supporting documents” rather than “Verified government crime” where evidence does not justify the label.
- **Useful:** “Rights guide last reviewed October 2026” rather than an undated claim of universal legal correctness.

Keep the copy focused on why the product is valuable; do not define it through long lists of things a visitor does not need to be. Technical exclusions, safeguards and negative tests belong in engineering specifications, not in the hero, opening paragraph, or FAQ introduction.

### The emotional balance

The platform may discuss grave mistreatment, coercion, administrative mistakes, procedural rights, inaccurate information, discrimination and other difficult situations. Its overall tone should not assume a visitor has suffered any one of these. A welcome message offers information and agency rather than applying a label or diagnosing an emotional state.

The design should be reassuring through useful choices, transparent explanations, good writing, and reliable operations—not by repeating reassurances.

## 3. Information architecture and names

**Public-facing navigation**

- Know your rights
- Find support
- Explore stories
- Share an experience
- Get involved

**Within pages**, make “Ask a question” and “Help someone else” easy to find. Use “Explore stories” as the preferred plain-language name of the archive for general navigation; **HEARD Archive** can be the formal name of the collection.

Use terms consistently:

| Concept | Public-facing term | Engineering / legal term |
|---|---|---|
| Educational information | Rights guide | Versioned legal content |
| A visitor's inquiry | Question | Private inquiry |
| A request for assistance | Help request | Intake case |
| A personal narrative | Experience / story | Testimony / narrative |
| Supporting material | Documents / files | Evidence objects |
| Sharing a story publicly | Publish a story | Publication derivative |
| Correcting an entry | Correction / update | Editorial revision |
| Private visibility | Private | Restricted processing compartment |
| Professional/volunteer assistance | Support | Scoped helper grant |

Prefer familiar language, but maintain precision when the actual legal meaning matters.

## 4. Homepage: recommended structure

The exact interface strings are versioned in `content/site-copy.json`. Designers and implementers should not make up new hero copy in code.

**Eyebrow:** An initiative of Justice For All

**Hero heading:** Your rights. Your voice. Your next step.

**Hero text:** Find clear information about your rights, explore real experiences, and discover where to turn for support. Whether you have a question, something to share, or a way to help, HEARD is a place to begin.

**Primary action:** Know your rights

**Secondary action:** Find support

**Primary content heading:** What brings you here?

The homepage should present six equally discoverable choices: rights, questions, support, sharing an experience, helping someone else, and reading stories. Avoid visual hierarchy that implies every visitor should file a case. Each card answers a concrete user need in one or two short sentences.

**Purpose section:** Understanding is a first step toward accountability.

**Purpose text:** Questions deserve careful answers. Experiences deserve to be taken seriously. And when government institutions make mistakes or misuse their power, people need practical ways to seek review and redress.

**Privacy section:** Your information deserves care.

Explain what is stored and who can see it at the point where someone may provide personal information. Do not insert a lengthy legal warning at the top of the public informational homepage.

## 5. Page leads and actions

### Rights library

**Know your rights.**

Find plain-language explanations of your rights in everyday situations, with sources and guidance on how the rules can differ by location.

Use accessible categories and real-language searches. Include “Where this guidance applies,” “Last reviewed,” and “Sources and references.” Don't turn a guide into a legal conclusion about an individual's case.

### Questions

**Start with a question.**

If a government action, instruction, or decision has left you uncertain, you can begin by explaining what you'd like to understand.

Use “What would you like to understand?” as the main prompt. Ask about location only to the extent needed for an accurate answer. Avoid bureaucratic labels like “incident complaint class.” Information about submitting, response availability and personal-data handling belongs adjacent to the form.

### Support

**Find a way forward.**

Explore options for legal help, research, documentation, advocacy, and other practical support. The right next step depends on your situation.

Avoid promising legal representation, a specific volunteer, or a result. Give tangible next steps, availability and scope before someone submits contact information.

### Experiences

**Share your experience.**

Your account can help others understand what happened and why it matters. HEARD is designed to give you clear choices about what to keep private and what, if anything, to publish.

“Begin an account” can be used as an action within this journey but not as the primary site-wide invitation. Before upload or publication, explain the exact recipients and visibility of each file and field. Do not imply voice or face obscuring guarantees anonymity.

### Stories

**Stories worth hearing.**

Explore firsthand accounts, records, and updates. Each story makes clear what has been reported, what documents are available, and what has been independently verified.

Label content with visible distinctions such as “Personal account,” “Supporting records,” “Verification and context,” and “Updates and corrections.” Avoid “truth scores,” unexplained credibility badges, or exaggerated editorial claims.

### Participation

**Help make a difference.**

A careful review, a useful document, a professional skill, or a listening ear can make the next step easier for someone else.

Explain role vetting, whether someone will see sensitive information, and the contributor's control over collaboration. Public volunteer listings must not disclose confidential cases.

### Privacy

**Know your choices before you share.**

Privacy matters most when the information is personal. HEARD explains what is collected, who may see it, how it is handled, and the limits of the protections available.

Detailed limitations are important here: pseudonyms may not prevent re-identification, digital copies can be retained by third parties, confidential server processing is not identical to end-to-end encryption, and lawful process or device/network compromise may limit secrecy. Be truthful about the protection actually implemented.

## 6. Interface microcopy

Write a specific action on buttons. Prefer “Review my question,” “Explore rights guides,” “Ask for assistance,” “Save a draft,” “Review what others could see,” “Send my submission.” Avoid ambiguous actions such as “Continue” where sensitive consent is at stake.

Treat disclosures as decisions, not marketing:

- **Who can see this?** Check the information and recipients below before you submit.
- **Keep this private.** HEARD processes this information within the restricted service described in the privacy notice.
- **Share with people I approve.** You choose the recipients and material they may access.
- **Request public publication.** Public release requires an additional review and approval process.
- **Publication warning:** If you decide to publish, copies may be saved or shared outside HEARD. Removing a page later may not remove every copy.

Show exact recipients, services, applicable privacy limitations and consequence of each selection. Never use an unchecked sentence such as “100% anonymous,” “completely confidential,” “fully secure,” “definitely illegal,” or “guaranteed legal help.”

For errors, use calm language and tell people what happened and what they can do next. Avoid claiming data was saved, sent or deleted unless the system has confirmed that state.

## 7. Rights education standards

Each rights guide needs:

- A specific question or situation the guide helps with
- Applicable jurisdiction(s), effective dates, and limits
- Sources with primary-law citations where feasible
- Independent legal review status and last checked date
- An understandable explanation of common rules and important exceptions
- Practical next steps, deadlines to investigate and ways to find qualified help
- A correction and stale-content workflow

A rights guide should distinguish a visitor's description from facts proven in a proceeding and distinguish general information from individualized legal advice. Avoid treating every questionable instruction as unlawful, or assuming a prior government decision is correct because an official made it. Preserve uncertainty instead of flattening it.

## 8. Reporting and archive standards

A personal account should be allowed to stand as an account, but it must not be represented as a judicial finding. Supporting documents, disputed facts, response statements, later corrections, and editorial verification have visible, separate status.

Headlines should be accurate and specific, not sensational. Do not publish unnecessary private details of contributors, relatives, witnesses, children, bystanders, or named subjects. Reviews and disputes must be accessible, consistent and documented.

## 9. Accessibility and localization

- Write at an accessible reading level without talking down to readers.
- Use headings and links that make sense when read alone.
- Keep labels visible; do not rely on placeholder text as the only form label.
- Make error messages actionable and understandable.
- Do not assume ability to record video, speak English, own a printer, or use a high-speed connection.
- Provide translated materials with verified legal terminology and jurisdiction context; do not treat automatic translation as independent legal review.
- Put privacy and legal caveats next to the decision they affect, not in a remote footer alone.

## 10. Review process and acceptance

1. Product and editorial review check every user-facing string against the mission, navigation labels and approved content deck.
2. Counsel or qualified legal editors verify rights-specific claims and critical disclaimers for the jurisdiction.
3. Privacy/security reviewers approve statements about anonymity, recipient visibility, deletion, evidence, storage and E2EE against tested implementation.
4. Accessibility review examines controls, reading order, button labels, contrast, forms, language and mobile presentation.
5. Diverse scenario testing checks whether each visitor can reach an appropriate path without an unrelated questionnaire or forced identity label.
6. Release checks scan for outdated copy, broken source links, placeholder statuses, unsupported claims and mismatches against `content/site-copy.json`.

### Copy change policy

`content/site-copy.json` is the canonical string source for the first application implementation. If any text is materially changed, update this guide, associated user flow, language variants and tests in the same PR. Privacy notices, informed consent text, terms and legally significant language require separately versioned policy approval. Do not substitute creative copy for binding legal terms.

**Summary:** HEARD should sound like a place people would actually want to visit: clear about what it offers, serious about evidence, respectful of readers, and useful from the first click.
