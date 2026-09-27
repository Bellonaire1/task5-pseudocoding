# B2 Comparison

## AI-Assisted Disclosure

B2 implementation was AI-assisted.

## B1 Prediction vs Actual Execution

### Case 1

B1 prediction: `(2, 1000000, 14) => 100000`

Actual execution: `100000`

Result: MATCH

### Case 2

B1 prediction: `(3, 500000, 17) => 125000`

Actual execution: `125000`

Result: MATCH

### Case 3

B1 prediction: `(4.2, 400000, 18) => 250000`

Actual execution: `250000`

Result: MATCH

### Case 4

B1 prediction: `(5, 3000000, 20) => 0`

Actual execution: `0`

Result: MATCH

### Case 5

B1 prediction: `(-1, 800000, 12) => throws Invalid distance`

Actual execution: throws `Invalid distance`

Result: MATCH

## B1 Pseudocode Step Mapping

- Steps 1-2: `if (distanceKm <= 0)` validates distance and throws `Invalid distance`.
- Steps 3-4: the order subtotal condition validates negativity and integer status, then throws `Invalid order subtotal`.
- Steps 5-6: the hour condition validates integer status and the 0 through 23 range, then throws `Invalid hour`.
- Step 7: the free-delivery condition returns `0` when subtotal is at least `3_000_000` and distance is at most 5.
- Step 8: `let fee = 100_000` starts the base fee.
- Steps 9-10: the distance condition uses `Math.ceil(distanceKm - 3)` and adds `25_000` per started extra kilometre.
- Step 11: the subtotal condition adds `50_000` for small orders.
- Step 12: the hour condition multiplies the fee by `1.25` during hours 17 through 20.
- Step 13: `Math.round(fee)` rounds to the nearest integer minor unit.
- Step 14: the rounded fee is returned.

All B1 pseudocode steps represented: YES
Additional behaviour added: NO
B2 AI-assisted recorded honestly: YES
