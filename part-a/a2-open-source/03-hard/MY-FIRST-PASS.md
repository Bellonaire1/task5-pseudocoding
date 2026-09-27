FUNCTION:
app.use

INPUTS:
- middleware and optionally a path first

OUTPUT:
- Initially understood as the middleware being returned

SIDE EFFECTS:
- middleware is registered with router.use

FAILS WHEN:
- no middleware causes a TypeError

NUMBERED STEPS:
- Human first-pass understanding:
  - app.use accepts middleware and may accept a path first.
  - The default path is "/".
  - Nested arrays are unwrapped/flattened.
  - The first non-function argument may be treated as a path.
  - Middleware is registered with router.use.
  - No middleware causes a TypeError.

- Human misunderstandings / uncertainty:
  - Initially misunderstood what changes when the first argument is a path.
  - Initially thought return this returned middleware rather than the application object.
  - Did not understand the Express sub-app mounting section.

## CLEANED PSEUDOCODE AFTER AI COMPARISON

FUNCTION app.use

INPUTS:
- optional path
- one or more middleware functions or Express sub-apps

OUTPUT:
- the same application object

SIDE EFFECTS:
- registers middleware with the router
- may mount an Express sub-app
- may set sub-app mountpath and parent
- may emit a mount event

FAILS WHEN:
- no middleware function remains after parsing arguments

STEPS:
1. Start with offset 0 and default path "/".
2. Inspect the first argument.
3. If it is not a function, inspect nested arrays to determine whether it represents middleware.
4. If it is not middleware, treat it as the path and move the middleware starting position forward by one.
5. Collect and flatten the remaining middleware arguments.
6. If no middleware remains, throw a TypeError.
7. Get the application router.
8. For each middleware item:
   a. If it is ordinary middleware/non-Express app, register it at the path.
   b. Otherwise treat it as an Express sub-app.
   c. Set its mountpath and parent.
   d. Register a wrapper that forwards requests into the sub-app.
   e. Restore the parent request and response prototypes afterward.
   f. Continue with next(err).
   g. Emit the mount event.
9. Return the application object.
