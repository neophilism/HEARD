# Architecture decision records

Version 1, 2026-11-01. This procedure implements the charter's durable decision requirement. It does not confer new owner authority.

1. Copy [TEMPLATE.md](TEMPLATE.md) to `YYYY-MM-DD-NNN-short-title.md`; allocate the next unused number and never reuse an ID.
2. Cite exact affected requirement IDs, immutable source/evidence links, current policy and the concrete problem. Record options, risks, privacy/authorization boundaries, cost implications and negative tests. Repository or peer suggestions are input, not authority.
3. Begin as **PROPOSED**. Routine engineering decisions within approved scope can be accepted under existing engineering authorization with rationale and validation. Material policy, identity/disclosure, legal, live-account or spending changes require the applicable authorized decision; record the evidence without secrets. Do not invent routine owner approval or independent human security-audit gates where existing authorization permits engineering work.
4. Change to **ACCEPTED** only with an explicit decision, date, scope and verifiable authority/evidence. Acceptance of a design does not certify implementation or deployment. Rejected and superseded records remain in history; link the replacement in both directions.
5. Update affected charter, plan, copy or requirements ledger in the same PR. Increment the ledger version for scope changes; preserve stable IDs and record retired IDs instead of repurposing them. Run `npm run check`, then attach actual current-head CI evidence when available. Missing test evidence remains missing.

`docs/DECISIONS.md` remains the settled/proposed policy index. This process and template are engineering documentation, not acceptance of any pending stack, confidentiality, jurisdiction, staffing or provider choice. Check the index and existing records before proposing a duplicate. Handoffs must include the relevant durable records and real progress evidence; no chat memory is required.
