| Case | Input | B1 Expected | B2 Result | AI Result | Same Behaviour? | Exact Difference |
|---|---|---|---|---|---|---|
| 1 | `distanceKm=2, orderSubtotalMinor=1000000, hour=14` | `100000` | `100000` | `100000` | YES | None |
| 2 | `distanceKm=3, orderSubtotalMinor=500000, hour=17` | `125000` | `125000` | `125000` | YES | None |
| 3 | `distanceKm=4.2, orderSubtotalMinor=400000, hour=18` | `250000` | `250000` | `250000` | YES | None |
| 4 | `distanceKm=5, orderSubtotalMinor=3000000, hour=20` | `0` | `0` | `0` | YES | None |
| 5 | `distanceKm=-1, orderSubtotalMinor=800000, hour=12` | Invalid-distance error | Throws `Invalid distance` | Throws `invalid distance` | YES | B2 message is `Invalid distance`; AI message is `invalid distance`. |
| 6 | `distanceKm=3.1, orderSubtotalMinor=500000, hour=16` | `125000` | `125000` | `125000` | YES | None |
| 7 | `distanceKm=6, orderSubtotalMinor=3000000, hour=18` | `218750` | `218750` | `218750` | YES | None |
| 8 | `distanceKm=1, orderSubtotalMinor=499999, hour=21` | `150000` | `150000` | `150000` | YES | None |
| 9 | `distanceKm=2, orderSubtotalMinor=500000.5, hour=12` | Invalid-subtotal error | Throws `Invalid order subtotal` | Throws `invalid subtotal` | YES | B2 message is `Invalid order subtotal`; AI message is `invalid subtotal`. |
| 10 | `distanceKm=2, orderSubtotalMinor=500000, hour=24` | Invalid-hour error | Throws `Invalid hour` | Throws `invalid hour` | YES | B2 message is `Invalid hour`; AI message is `invalid hour`. |

## Disagreement Analysis

### Case 5

1. The implementations both reject the invalid distance, but B2 throws `Invalid distance` and AI throws `invalid distance`.
2. B1 requires failure when `distanceKm <= 0` and specifies an invalid-distance error.
3. BOTH satisfy the specified behaviour but wording differs because exact error-message text was not constrained.
4. The failure condition and error category are the same; only capitalization differs.

### Case 9

1. The implementations both reject the non-integer subtotal, but B2 throws `Invalid order subtotal` and AI throws `invalid subtotal`.
2. B1 requires failure when `orderSubtotalMinor` is not an integer and specifies an invalid-subtotal error.
3. BOTH satisfy the specified behaviour but wording differs because exact error-message text was not constrained.
4. The failure condition and error category are the same; B2 uses a more specific phrase and different capitalization.

### Case 10

1. The implementations both reject the invalid hour, but B2 throws `Invalid hour` and AI throws `invalid hour`.
2. B1 requires failure when `hour` is outside 0 through 23 and specifies an invalid-hour error.
3. BOTH satisfy the specified behaviour but wording differs because exact error-message text was not constrained.
4. The failure condition and error category are the same; only capitalization differs.

No other exact differences were found. All successful numeric results and all remaining error outcomes match.

## C3 Conclusion

- Number of cases with same behavioural outcome: 10/10
- Number with different behavioural outcome: 0/10
- Number with exact output/message differences: 3/10
- Neither implementation violates B1 logic.
- Specification ambiguity exposed: exact error-message wording is not constrained by B1, so capitalization and the wording of the subtotal error may differ without changing the specified behavior. No behavioral ambiguity was exposed.
