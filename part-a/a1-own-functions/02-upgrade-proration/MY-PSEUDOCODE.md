# My Pseudocode

FUNCTION calculateUpgradeProration

INPUTS:
- One input object containing:
  - monthlyPriceMinor
  - yearlyPriceMinor
  - currentPeriodStart
  - currentPeriodEnd
  - upgradeDate

OUTPUT:
- A result containing:
  - unusedCreditMinor
  - upgradeDueMinor
  - consumedDays
  - remainingDays
  - totalDays

SIDE EFFECTS:
- NONE

FAILS WHEN:
- The upgrade date is after the subscription period ends
- The upgrade date is before the subscription period starts
- The subscription period has zero or negative length

1. IF the upgrade date is after the subscription end date
   stop with an expired-subscription error.

2. IF the upgrade date is before the subscription start date
   stop with an error.

3. Calculate the total number of days in the current subscription period.

4. Calculate how many days of the current subscription period have already been used before the upgrade date.

5. Calculate how many days remain unused in the current subscription period, but never allow the result to go below zero.

6. IF the total subscription period is zero days or negative
   stop with an invalid-period error.

7. Calculate the money value of the unused part of the monthly subscription, rounding down to a whole minor unit.

8. Subtract the unused monthly credit from the yearly price, but never allow the amount due to go below zero.

9. Return the unused credit, upgrade amount due, consumed days, remaining days, and total days.
