-- HEARD-04 initial relational baseline. Apply only to isolated HEARD database.
BEGIN;
CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE IF NOT EXISTS heard_schema_migrations (
 version integer PRIMARY KEY CHECK(version>0),
 applied_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE IF NOT EXISTS heard_subjects (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 created_at timestamptz NOT NULL DEFAULT now(),
 account_state text NOT NULL DEFAULT 'active' CHECK(account_state IN ('active','locked','deleted'))
);
CREATE TABLE IF NOT EXISTS heard_cases (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 subject_id uuid NOT NULL REFERENCES heard_subjects(id),
 kind text NOT NULL CHECK(kind IN ('question','experience','support')),
 status text NOT NULL DEFAULT 'draft' CHECK(status IN ('draft','submitted','review','closed','withdrawn')),
 visibility text NOT NULL DEFAULT 'private' CHECK(visibility='private'),
 created_at timestamptz NOT NULL DEFAULT now(),
 updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_heard_cases_subject ON heard_cases(subject_id,created_at DESC);
CREATE TABLE IF NOT EXISTS heard_case_events (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 case_id uuid NOT NULL REFERENCES heard_cases(id),
 actor_id uuid REFERENCES heard_subjects(id),
 event_type text NOT NULL CHECK(length(event_type) BETWEEN 1 AND 64),
 event_metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
 recorded_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_heard_case_events_case ON heard_case_events(case_id,recorded_at);
CREATE TABLE IF NOT EXISTS heard_consent_records (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 case_id uuid NOT NULL REFERENCES heard_cases(id),
 actor_id uuid NOT NULL REFERENCES heard_subjects(id),
 purpose text NOT NULL CHECK(purpose IN ('helper_access','publication','archive_replication','contact')),
 decision text NOT NULL CHECK(decision IN ('grant','revoke')),
 policy_version text NOT NULL CHECK(length(policy_version) BETWEEN 1 AND 100),
 recorded_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_heard_consents_case ON heard_consent_records(case_id,purpose,recorded_at DESC);
CREATE TABLE IF NOT EXISTS heard_private_objects (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 case_id uuid NOT NULL REFERENCES heard_cases(id),
 storage_ref text NOT NULL UNIQUE,
 checksum_sha256 text NOT NULL CHECK(checksum_sha256 ~ '^[a-f0-9]{64}$'),
 quarantine_state text NOT NULL DEFAULT 'quarantined' CHECK(quarantine_state IN ('quarantined','cleared','rejected')),
 created_at timestamptz NOT NULL DEFAULT now()
);
-- The public projection contains a released derivative reference only, never private originals.
CREATE TABLE IF NOT EXISTS heard_publications (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 case_id uuid NOT NULL REFERENCES heard_cases(id),
 derivative_ref text NOT NULL,
 state text NOT NULL DEFAULT 'withdrawn' CHECK(state IN ('published','withdrawn')),
 source_label text NOT NULL CHECK(source_label IN ('personal_account','submitted_record','independent_finding')),
 approved_at timestamptz,
 CHECK(state<>'published' OR approved_at IS NOT NULL)
);
INSERT INTO heard_schema_migrations(version) VALUES(1) ON CONFLICT DO NOTHING;
COMMIT;
