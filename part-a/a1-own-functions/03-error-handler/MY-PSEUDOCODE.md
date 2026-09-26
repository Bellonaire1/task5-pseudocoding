# My Pseudocode

FUNCTION errorHandler

INPUTS:
- error: the error being handled
- request: the current HTTP request
- response: the HTTP response object
- next: the next Express handler

OUTPUT:
- No useful returned application value

SIDE EFFECTS:
- Sends an HTTP error response
- Logs unexpected errors

FAILS WHEN:
- The handler itself encounters an unexpected runtime failure while handling the error

1. IF the error is a Zod validation error
   send HTTP 400 with VALIDATION_ERROR details
   stop processing.

2. IF the error is a known Prisma error with code P2002
   send HTTP 409 with CONFLICT
   stop processing.

3. Log the unexpected error.

4. Send HTTP 500 with INTERNAL_ERROR.
