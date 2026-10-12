# CI operations and verification

HEARD's full source CI is defined at `.circleci/config.yml` and is hosted in the user-approved CircleCI organization. The two mandatory jobs are:

- `full-verification`: `npm run check`, which includes foundation checks and regression tests.
- `security-status-record`: Python verification of the E2EESA evidence-status record. This is evidence integrity, **not** a security audit or product certification.

The former GitHub-hosted Actions workflows may fail without starting a runner when the account has exhausted its private Actions allowance. Never interpret that infrastructure failure as evidence that tests ran.

## Release acceptance

Require **both** passing GitHub commit status contexts `ci/circleci: full-verification` and `ci/circleci: security-status-record` for the exact reviewed commit. A successful pipeline on a different commit is insufficient. Maintain automatic PR push triggers and a separate default-branch push trigger in CircleCI. Do not bypass required checks, manufacture statuses, or spend beyond the Free plan.

## Automatic trigger acceptance test

This documentation PR exists to demonstrate real GitHub-initiated CI execution after pushing changes to an open non-draft PR. Inspect the CircleCI run and the matching GitHub commit statuses before declaring automatic triggering operational.

This follow-up commit was pushed **after** this PR was opened specifically to test the configured GitHub event trigger; it is not a substitute for inspecting the resulting real CI status.
