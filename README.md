# Task 5 — Pseudocoding

## What This Repository Demonstrates

This repository demonstrates reading existing code into pseudocode, tracing predictions against real execution, and reading open-source code independently. It also demonstrates finding a planted bug by comparing actual behavior with intended pseudocode, specifying a feature before implementation, directing AI using pseudocode, reverse-engineering AI output, and comparing two implementations.

## Pseudocode Standard

The standard used throughout the repository is documented in [`PSEUDOCODE-STANDARD.md`](PSEUDOCODE-STANDARD.md):

```text
FUNCTION name

INPUTS:
each input, type, and meaning

OUTPUT:
returned value and meaning

SIDE EFFECTS:
external writes/sends/changes, or NONE

FAILS WHEN:
every failure condition
```

Pseudocode then uses numbered steps, one action per step, explicit IF/OTHERWISE branches, explicit loops, named early exits, external calls marked, and state changes marked.

## Repository Structure

- `part-a/`
  - `a1-own-functions/`
  - `a2-open-source/`
  - `a3-bug/`
- `part-b/`
  - feature rules
  - original pseudocode
  - hand traces
  - delivery-fee implementation
  - trace/test comparison
- `part-c/`
  - AI implementation
  - reverse-engineered pseudocode
  - C2 difference table
  - C3 ten-input comparison
  - C4 explanation evidence

## Part A — Reading Code

### A1 — Own Functions

The three functions analyzed were `recoverStuckJobs`, `calculateUpgradeProration`, and `errorHandler`. Their pseudocode, trace tables, and actual-versus-understood comparisons are linked in the [A1 evidence](#evidence).

### A2 — Express 5.2.1

The three open-source functions analyzed were `res.status`, `req.get` / `req.header`, and `app.use`. The A2 first passes were completed before AI explanation. `app.use` contained the largest understanding gap, particularly around path offsets, returning `this`, and Express sub-application mounting.

### A3 — Planted Bug

The function analyzed was `calculateFinalPrice`. The bug was that `SAVE20` used `price > 100` instead of `price >= 100`. At `price = 100`, actual behavior produced `100`, while intended behavior produced `80`.

## Part B — Specification Into Code

### Delivery Fee Calculator

The feature rules cover validation, free delivery, the base fee, started extra kilometres, the small-order surcharge, the peak surcharge, and rounding.

B1 was specified and hand-traced on five cases before implementation. All five implementation tests matched B1.

The final B2 implementation was AI-assisted due deadline pressure. Therefore, this repository does not claim compliance with the brief's “B2 without AI” condition. This is recorded honestly in the [B2 comparison](part-b/B2-COMPARISON.md).

## Part C — Directing and Verifying AI

### C1

The AI received only the B1 pseudocode in an isolated directory. The recorded implementation is [`part-c/ai-delivery-fee.ts`](part-c/ai-delivery-fee.ts).

### C2

The AI implementation was reverse-engineered without consulting the original pseudocode first. The comparison found:

- AI added behaviour: NO
- AI omitted behaviour: NO
- Different behavioural interpretation: NO
- Implementations: behaviourally equivalent

See the [C2 reverse-engineered pseudocode](part-c/REVERSE-ENGINEERED-PSEUDOCODE.md) and [C2 difference table](part-c/DIFFERENCE-TABLE.md).

### C3

The ten identical test inputs produced 10/10 behavioural matches and 0/10 behavioural mismatches. There were exact message differences in 3/10 cases. The three differences were exact error-message wording or capitalisation. The original pseudocode required an error but did not constrain exact message strings, exposing a specification ambiguity about error-message text.

See the [C3 comparison](part-c/C3-COMPARISON.md).

### C4

Status: COMPLETE. A spoken explanation of approximately 3 minutes 22 seconds was recorded using the pseudocode as notes and sent to a non-technical listener. The [C4 explanation evidence](part-c/C4-EXPLANATION-TEST.md) records the listener's successful explanation back.

## What I Learned

- Pseudocode exposes misunderstandings before code is written.
- Boundary conditions matter.
- Reading unfamiliar source is different from recognising syntax.
- Exact error contracts must be specified if text matters.
- AI can preserve a precise specification well, but verification is still required.
- Reverse-engineering code is useful for checking whether implementation matches intent.

## Evidence

### A1 Traces

- [`recoverStuckJobs` trace](part-a/a1-own-functions/01-recover-stuck-jobs/TRACE-TABLE.md)
- [`calculateUpgradeProration` trace](part-a/a1-own-functions/02-upgrade-proration/TRACE-TABLE.md)
- [`errorHandler` trace](part-a/a1-own-functions/03-error-handler/TRACE-TABLE.md)

### A2 AI Comparisons

- [`res.status` comparison](part-a/a2-open-source/01-short/AI-COMPARISON.md)
- [`req.get` / `req.header` comparison](part-a/a2-open-source/02-medium/AI-COMPARISON.md)
- [`app.use` comparison](part-a/a2-open-source/03-hard/AI-COMPARISON.md)

### A3 Bug Identification

- [`calculateFinalPrice` bug identification](part-a/a3-bug/BUG-IDENTIFICATION.md)

### B1 and B2

- [B1 hand traces](part-b/HAND-TRACES.md)
- [B2 trace comparison](part-b/B2-COMPARISON.md)

### Part C

- [C2 difference table](part-c/DIFFERENCE-TABLE.md)
- [C3 ten-input comparison](part-c/C3-COMPARISON.md)
- [C4 explanation evidence](part-c/C4-EXPLANATION-TEST.md)

## Current Completion Status

- Part A: COMPLETE
- B1: COMPLETE
- B2 implementation/tests: COMPLETE — AI-assisted, so no claim of no-AI compliance
- C1: COMPLETE
- C2: COMPLETE
- C3: COMPLETE
- C4 recording/listener test: COMPLETE
