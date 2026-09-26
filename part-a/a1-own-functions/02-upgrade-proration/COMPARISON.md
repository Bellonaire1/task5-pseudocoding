# Comparison

## What I originally understood

For the normal case, I predicted totalDays 30, consumedDays 10, remainingDays 20, unusedCreditMinor 2000, and upgradeDueMinor 22000. For the edge case, I predicted totalDays 30, consumedDays 30, remainingDays 0, unusedCreditMinor 0, and upgradeDueMinor 24000. For the invalid case, I predicted an error with the message "Expired subscription period: cannot upgrade".

## What real execution showed

The normal controlled input returned unusedCreditMinor 2000, upgradeDueMinor 22000, consumedDays 10, remainingDays 20, and totalDays 30. The edge controlled input returned unusedCreditMinor 0, upgradeDueMinor 24000, consumedDays 30, remainingDays 0, and totalDays 30. The invalid controlled input threw "Expired subscription period: cannot upgrade".

## Discrepancy

NONE

## Correction

NONE REQUIRED
