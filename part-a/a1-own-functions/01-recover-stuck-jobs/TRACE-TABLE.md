# Trace Table

## NORMAL CASE

Starting state:
status = PROCESSING
startedAt = 10 minutes ago
timeout = 5 minutes
attempts = 1
maxAttempts = 3

HUMAN PREDICTION — BEFORE EXECUTION

- qualifies as stuck
- attempts becomes 2
- status becomes PENDING
- runAt becomes current time
- startedAt becomes NULL
- finishedAt becomes current time
- lastError records timeout/recovery
- updatedAt becomes current time
- returned fields are id, attempts, maxAttempts, status

## EDGE CASE

Starting state:
status = PROCESSING
startedAt = 10 minutes ago
timeout = 5 minutes
attempts = 2
maxAttempts = 3

HUMAN PREDICTION — BEFORE EXECUTION

- qualifies as stuck
- attempts becomes 3
- status becomes DEAD
- runAt remains unchanged because no automatic retry remains
- startedAt becomes NULL
- finishedAt becomes current time
- lastError records timeout/recovery
- updatedAt becomes current time
- returned fields are id, attempts, maxAttempts, status

## INVALID CASE

Starting state:
status = PROCESSING
startedAt = NULL
attempts = 1
maxAttempts = 3

HUMAN PREDICTION — BEFORE EXECUTION

- does not qualify as stuck
- job remains unchanged
- function returns no recovered row for this job

## REAL EXECUTION COMPARISON

### NORMAL CASE

Predicted result:
- Returned row has attempts 2, maxAttempts 3, and status PENDING.
- Persisted job has status PENDING, attempts 2, startedAt NULL, current finishedAt, timeout/recovery lastError, and current updatedAt.

Actual result:
- Returned row had attempts 2, maxAttempts 3, and status PENDING.
- Persisted job had status PENDING, attempts 2, startedAt NULL, populated finishedAt and updatedAt, and lastError `Worker execution timed out and was recovered`.

MATCH

### EDGE CASE

Predicted result:
- Returned row has attempts 3, maxAttempts 3, and status DEAD.
- Persisted job has status DEAD, attempts 3, unchanged runAt, startedAt NULL, current finishedAt, timeout/recovery lastError, and current updatedAt.

Actual result:
- Returned row had attempts 3, maxAttempts 3, and status DEAD.
- Persisted job had status DEAD, attempts 3, runAt unchanged, startedAt NULL, populated finishedAt and updatedAt, and lastError `Worker execution timed out and was recovered`.

MATCH

### INVALID CASE

Predicted result:
- Job does not qualify as stuck, remains unchanged, and has no returned row.

Actual result:
- Job remained PROCESSING with attempts 1, maxAttempts 3, startedAt NULL, no finishedAt, no lastError, and no returned row.

MATCH

Discrepancies:
- NONE

Corrections:
- NONE
