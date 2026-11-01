-- Synthetic-only local fixture for an isolated HEARD database after migrations 1 and 2.
-- Never run against production. All records remain private or withdrawn.
BEGIN;
INSERT INTO heard_subjects(id, account_state)
VALUES ('00000000-0000-4000-8000-000000000001', 'active')
ON CONFLICT (id) DO NOTHING;
INSERT INTO heard_cases(id, subject_id, kind, status, visibility)
VALUES ('00000000-0000-4000-8000-000000000101', '00000000-0000-4000-8000-000000000001', 'question', 'draft', 'private')
ON CONFLICT (id) DO NOTHING;
INSERT INTO heard_case_events(id, case_id, actor_id, event_type, event_metadata)
VALUES ('00000000-0000-4000-8000-000000000201', '00000000-0000-4000-8000-000000000101', '00000000-0000-4000-8000-000000000001', 'fixture_created', '{}'::jsonb)
ON CONFLICT (id) DO NOTHING;
INSERT INTO heard_consent_records(id, case_id, actor_id, purpose, decision, policy_version)
VALUES ('00000000-0000-4000-8000-000000000301', '00000000-0000-4000-8000-000000000101', '00000000-0000-4000-8000-000000000001', 'contact', 'revoke', 'fixture-v1')
ON CONFLICT (id) DO NOTHING;
INSERT INTO heard_private_objects(id, case_id, storage_ref, checksum_sha256, quarantine_state)
VALUES ('00000000-0000-4000-8000-000000000401', '00000000-0000-4000-8000-000000000101', 'synthetic://fixture/empty', repeat('0',64), 'quarantined')
ON CONFLICT (id) DO NOTHING;
INSERT INTO heard_publications(id, case_id, derivative_ref, state, source_label)
VALUES ('00000000-0000-4000-8000-000000000501', '00000000-0000-4000-8000-000000000101', 'synthetic://fixture/withdrawn', 'withdrawn', 'personal_account')
ON CONFLICT (id) DO NOTHING;
COMMIT;
