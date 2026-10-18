-- Execute with psql -v ON_ERROR_STOP=1 -f db/tests/rls-invariants.sql
-- after both migrations in a disposable Postgres 17 database.
DO $$
DECLARE table_name text;
DECLARE enabled boolean;
DECLARE forced boolean;
BEGIN
 FOREACH table_name IN ARRAY ARRAY[
   'heard_subjects', 'heard_cases', 'heard_case_events',
   'heard_consent_records', 'heard_private_objects', 'heard_publications'
 ] LOOP
   SELECT c.relrowsecurity, c.relforcerowsecurity INTO enabled, forced
   FROM pg_class c JOIN pg_namespace n ON n.oid = c.relnamespace
   WHERE c.relname = table_name AND n.nspname = current_schema();
   IF enabled IS DISTINCT FROM TRUE OR forced IS DISTINCT FROM TRUE THEN
     RAISE EXCEPTION 'Sensitive table % must force row security', table_name;
   END IF;
   IF has_table_privilege('public', format('%I', table_name), 'SELECT') THEN
     RAISE EXCEPTION 'Unexpected PUBLIC SELECT privilege on %', table_name;
   END IF;
 END LOOP;
 IF NOT EXISTS (SELECT 1 FROM heard_schema_migrations WHERE version = 2) THEN
   RAISE EXCEPTION 'Migration version 2 not recorded';
 END IF;
END $$;
