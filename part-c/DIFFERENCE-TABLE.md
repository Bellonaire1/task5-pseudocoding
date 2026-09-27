| Area | Original B1 specification | Reverse-engineered C2 | Classification | Decision |
|---|---|---|---|---|
| Inputs | `distanceKm: number`; `orderSubtotalMinor: integer in minor currency units`; `hour: integer from 0 to 23` | `distanceKm: number representing delivery distance`; `orderSubtotalMinor: number representing order subtotal in minor units`; `hour: number representing hour of day` | WORDING ONLY / NO BEHAVIOURAL DIFFERENCE | The descriptions are more explanatory in C2, but the required values and roles are unchanged. |
| Validation failures | Distance must be greater than 0; subtotal must be non-negative and an integer; hour must be an integer from 0 through 23 | The same distance, subtotal, and hour conditions are listed | WORDING ONLY / NO BEHAVIOURAL DIFFERENCE | C2 preserves every failure condition from B1. |
| Free-delivery branch | If subtotal is at least 3000000 and distance is at most 5, return 0 | The same two conditions return 0 | WORDING ONLY / NO BEHAVIOURAL DIFFERENCE | The branch condition and result are unchanged. |
| Base fee | Start fee at 100000 | Start fee at 100000 | WORDING ONLY / NO BEHAVIOURAL DIFFERENCE | No behavioral difference. |
| Started extra kilometres | If distance is greater than 3, calculate started kilometres beyond 3 | If distance is greater than 3, calculate the number of started kilometres beyond 3 | WORDING ONLY / NO BEHAVIOURAL DIFFERENCE | The instruction is restated without changing its meaning. |
| Distance charge | Add 25000 for each started extra kilometre | Add 25000 for each started extra kilometre | WORDING ONLY / NO BEHAVIOURAL DIFFERENCE | Amount and charging basis are unchanged. |
| Small-order surcharge | If subtotal is below 500000, add 50000 | If subtotal is below 500000, add 50000 to fee | WORDING ONLY / NO BEHAVIOURAL DIFFERENCE | The target of the addition is made explicit, with no behavior change. |
| Peak-hour boundaries | If hour is from 17 through 20 inclusive, increase current fee by 25% | If hour is from 17 through 20 inclusive, increase fee by 25 percent | WORDING ONLY / NO BEHAVIOURAL DIFFERENCE | Boundaries and percentage are unchanged. |
| Rounding | Round to nearest integer minor unit | Round fee to the nearest integer | WORDING ONLY / NO BEHAVIOURAL DIFFERENCE | C2 omits the currency-unit wording but retains the same rounding result. |
| Return value | Return fee, with the free-delivery branch returning 0 | Return fee, with the free-delivery branch returning 0 | WORDING ONLY / NO BEHAVIOURAL DIFFERENCE | The returned result is unchanged. |
| Side effects | NONE | NONE | WORDING ONLY / NO BEHAVIOURAL DIFFERENCE | Both specify no side effects. |

## C2 Conclusion

1. Did the AI add behaviour not requested? No.
2. Did the AI omit requested behaviour? No.
3. Did the AI interpret any instruction differently? No.
4. Was any original pseudocode genuinely ambiguous? No. No genuine behavioural ambiguity was found in this comparison.
5. Does the AI implementation preserve the intended B1 behaviour? Yes.
