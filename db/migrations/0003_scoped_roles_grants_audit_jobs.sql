-- HEARD-04 relational scope only. No application login or permissive RLS policy.
BEGIN;
DO $$
DECLARE role_name text;
BEGIN
 FOREACH role_name IN ARRAY ARRAY['heard_api','heard_job_worker','heard_public_projector'] LOOP
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname=role_name) THEN
   EXECUTE format('CREATE ROLE %I NOLOGIN NOSUPERUSER NOCREATEDB NOCREATEROLE NOREPLICATION NOINHERIT NOBYPASSRLS', role_name);
  END IF;
  IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname=role_name AND (rolsuper OR rolbypassrls OR rolcreaterole OR rolcreatedb OR rolcanlogin OR rolreplication OR rolinherit)) THEN
   RAISE EXCEPTION 'Unsafe preexisting role attributes for %', role_name;
  END IF;
  IF EXISTS (SELECT 1 FROM pg_class WHERE relowner=(SELECT oid FROM pg_roles WHERE rolname=role_name) AND relnamespace=current_schema()::regnamespace) THEN
   RAISE EXCEPTION 'Scoped role must not own schema relations: %', role_name;
  END IF;
  IF EXISTS (SELECT 1 FROM pg_auth_members WHERE member=(SELECT oid FROM pg_roles WHERE rolname=role_name)) THEN
   RAISE EXCEPTION 'Unexpected inherited membership for scoped role %', role_name;
  END IF;
 END LOOP;
END $$;
CREATE UNIQUE INDEX IF NOT EXISTS idx_heard_cases_owner ON heard_cases(id,subject_id);
CREATE UNIQUE INDEX IF NOT EXISTS idx_heard_private_object_case ON heard_private_objects(id,case_id);
CREATE TABLE IF NOT EXISTS heard_resource_grants (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 case_id uuid NOT NULL,
 object_id uuid NOT NULL,
 grantor_id uuid NOT NULL,
 recipient_id uuid NOT NULL REFERENCES heard_subjects(id),
 action text NOT NULL CHECK(action IN ('read','download')),
 purpose text NOT NULL CHECK(length(trim(purpose)) BETWEEN 1 AND 200),
 created_at timestamptz NOT NULL DEFAULT now(),
 expires_at timestamptz NOT NULL,
 revoked_at timestamptz,
 FOREIGN KEY(case_id,grantor_id) REFERENCES heard_cases(id,subject_id),
 FOREIGN KEY(object_id,case_id) REFERENCES heard_private_objects(id,case_id),
 CHECK(expires_at>created_at),
 CHECK(revoked_at IS NULL OR revoked_at>=created_at)
);
CREATE TABLE IF NOT EXISTS heard_audit_events (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 actor_id uuid REFERENCES heard_subjects(id),
 case_id uuid REFERENCES heard_cases(id),
 action text NOT NULL CHECK(length(trim(action)) BETWEEN 1 AND 100),
 outcome text NOT NULL CHECK(outcome IN ('allow','deny')),
 recorded_at timestamptz NOT NULL DEFAULT now(),
 metadata jsonb NOT NULL DEFAULT '{}'::jsonb CHECK(jsonb_typeof(metadata)='object')
);
CREATE TABLE IF NOT EXISTS heard_jobs (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 case_id uuid NOT NULL REFERENCES heard_cases(id),
 kind text NOT NULL CHECK(length(trim(kind)) BETWEEN 1 AND 64),
 dedupe_key text NOT NULL UNIQUE CHECK(length(dedupe_key) BETWEEN 1 AND 200),
 state text NOT NULL DEFAULT 'queued' CHECK(state IN ('queued','leased','succeeded','failed','cancelled')),
 attempts integer NOT NULL DEFAULT 0 CHECK(attempts>=0),
 max_attempts integer NOT NULL DEFAULT 3 CHECK(max_attempts BETWEEN 1 AND 100),
 lease_owner uuid,
 lease_until timestamptz,
 created_at timestamptz NOT NULL DEFAULT now(),
 CHECK(attempts<=max_attempts),
 CHECK((state='leased' AND lease_owner IS NOT NULL AND lease_until IS NOT NULL) OR (state<>'leased' AND lease_owner IS NULL AND lease_until IS NULL))
);
CREATE OR REPLACE FUNCTION heard_reject_audit_mutation() RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN RAISE EXCEPTION 'Audit records are append-only'; END $$;
DROP TRIGGER IF EXISTS heard_audit_append_only ON heard_audit_events;
CREATE TRIGGER heard_audit_append_only BEFORE UPDATE OR DELETE ON heard_audit_events FOR EACH ROW EXECUTE FUNCTION heard_reject_audit_mutation();
ALTER TABLE heard_resource_grants ENABLE ROW LEVEL SECURITY;
ALTER TABLE heard_resource_grants FORCE ROW LEVEL SECURITY;
ALTER TABLE heard_audit_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE heard_audit_events FORCE ROW LEVEL SECURITY;
ALTER TABLE heard_jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE heard_jobs FORCE ROW LEVEL SECURITY;
REVOKE ALL ON heard_resource_grants, heard_audit_events, heard_jobs FROM PUBLIC;
REVOKE CREATE ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON heard_subjects, heard_cases, heard_case_events, heard_consent_records, heard_private_objects, heard_publications, heard_resource_grants, heard_audit_events, heard_jobs FROM heard_api, heard_job_worker, heard_public_projector;
GRANT USAGE ON SCHEMA public TO heard_api, heard_job_worker, heard_public_projector;
GRANT SELECT, INSERT ON heard_subjects, heard_cases, heard_case_events, heard_consent_records, heard_private_objects, heard_resource_grants TO heard_api;
GRANT SELECT, UPDATE ON heard_jobs TO heard_job_worker;
GRANT SELECT, INSERT, UPDATE ON heard_publications TO heard_public_projector;
-- Table privileges do not bypass FORCE RLS. No role has a permissive policy.
INSERT INTO heard_schema_migrations(version) VALUES(3) ON CONFLICT DO NOTHING;
COMMIT;
