-- HEARD-04: deny access to sensitive records until scoped authorization policies exist.
-- This migration is idempotent and does not grant any application credentials.
BEGIN;
ALTER TABLE heard_subjects ENABLE ROW LEVEL SECURITY;
ALTER TABLE heard_subjects FORCE ROW LEVEL SECURITY;
ALTER TABLE heard_cases ENABLE ROW LEVEL SECURITY;
ALTER TABLE heard_cases FORCE ROW LEVEL SECURITY;
ALTER TABLE heard_case_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE heard_case_events FORCE ROW LEVEL SECURITY;
ALTER TABLE heard_consent_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE heard_consent_records FORCE ROW LEVEL SECURITY;
ALTER TABLE heard_private_objects ENABLE ROW LEVEL SECURITY;
ALTER TABLE heard_private_objects FORCE ROW LEVEL SECURITY;
ALTER TABLE heard_publications ENABLE ROW LEVEL SECURITY;
ALTER TABLE heard_publications FORCE ROW LEVEL SECURITY;
REVOKE ALL ON heard_subjects, heard_cases, heard_case_events,
  heard_consent_records, heard_private_objects, heard_publications FROM PUBLIC;
-- No permissive RLS policies are created: ordinary roles cannot read or write.
INSERT INTO heard_schema_migrations(version) VALUES(2) ON CONFLICT DO NOTHING;
COMMIT;
