# Trace Table

## NORMAL INPUT

Inputs:
- monthlyPriceMinor = 3000
- yearlyPriceMinor = 24000
- start = January 1
- end = January 31
- upgrade = January 11

My predicted result:
- totalDays = 30
- consumedDays = 10
- remainingDays = 20
- unusedCreditMinor = 2000
- upgradeDueMinor = 22000

Step trace:

## EDGE INPUT

Inputs:
- monthlyPriceMinor = 3000
- yearlyPriceMinor = 24000
- start = January 1
- end = January 31
- upgrade = January 31

My predicted result:
- totalDays = 30
- consumedDays = 30
- remainingDays = 0
- unusedCreditMinor = 0
- upgradeDueMinor = 24000

Step trace:

## INVALID INPUT

Inputs:
- end = January 31
- upgrade = February 2

My predicted result:
- throws: "Expired subscription period: cannot upgrade"

Step trace:

## REAL EXECUTION COMPARISON

Actual normal result:
- { unusedCreditMinor: 2000, upgradeDueMinor: 22000, consumedDays: 10, remainingDays: 20, totalDays: 30 }

Actual edge result:
- { unusedCreditMinor: 0, upgradeDueMinor: 24000, consumedDays: 30, remainingDays: 0, totalDays: 30 }

Actual invalid result:
- throws: "Expired subscription period: cannot upgrade"

Discrepancies:
- NONE

Corrections:
- NONE REQUIRED
