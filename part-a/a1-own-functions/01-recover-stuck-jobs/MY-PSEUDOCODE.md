FUNCTION recoverStuckJobs

INPUTS:
- NONE

OUTPUT:
- A list of recovered jobs containing id, attempts, maxAttempts, and status

SIDE EFFECTS:
- Updates stuck job records in the database

FAILS WHEN:
- The database query cannot be completed

1. Find jobs that are currently PROCESSING and have been running longer than the configured timeout.

2. Lock the stuck jobs being selected and skip any that another worker has already locked.

3. Increase each recovered job's attempt count by 1.

4. IF the new attempt count has reached or exceeded maxAttempts
     mark the job as DEAD.
   OTHERWISE
     mark the job as PENDING.

5. IF the job still has attempts remaining
     make it eligible to run again immediately.
   OTHERWISE
     leave its existing run time unchanged.

6. Clear the old processing start time and record when that processing attempt finished.

7. Record that the worker execution timed out and the job was recovered.

8. Update the job's last-modified time.

9. Return the recovered jobs with their id, attempts, maxAttempts, and status.