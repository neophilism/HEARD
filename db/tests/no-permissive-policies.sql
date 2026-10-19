-- Run in a disposable PostgreSQL 17 database after migrations 0001 and 0002.
-- Assert private tables remain default-deny until scoped service policies are reviewed.
DO $$
DECLARE relation_name text;
DECLARE policy_count integer;
BEGIN
 FOREACH relation_name IN ARRAY ARRAY[
   'heard_subjects','heard_cases','heard_case_events',
   'heard_consent_records','heard_private_objects','heard_publications'
 ] LOOP
   SELECT count(*) INTO policy_count
   FROM pg_policy p
   JOIN pg_class c ON c.oid=p.polrelid
   JOIN pg_namespace n ON n.oid=c.relnamespace
   WHERE n.nspname=current_schema() AND c.relname=relation_name;
   IF policy_count <> 0 THEN
     RAISE EXCEPTION 'Unexpected RLS policy on sensitive table %', relation_name;
   END IF;
 END LOOP;
END $$;
