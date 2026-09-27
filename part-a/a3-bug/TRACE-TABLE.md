NORMAL INPUT
price = 200
couponCode = "SAVE20"
Prediction from actual pseudocode:
- 20% discount = 40
- final price = 160
Actual execution:
- 160

EDGE INPUT
price = 50
couponCode = "SAVE10"
Prediction from actual pseudocode:
- 10% discount = 5
- final price = 45
Actual execution:
- 45

BUG-REVEALING INPUT
price = 100
couponCode = "SAVE20"
Actual-code prediction:
- price > 100 is false
- discount remains 0
- final price = 100

Intended-rule prediction:
- price is 100 or more
- 20% discount = 20
- expected final price = 80

Actual execution:
- 100
