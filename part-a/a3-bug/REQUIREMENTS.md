# Intended Behaviour

# Rules Supplied by Reviewer/Partner

1. Takes price (number) and couponCode (string).
2. If price is <= 0, return 0.
3. If couponCode is "SAVE10", give 10% off.
4. If couponCode is "SAVE20", give 20% off but ONLY if original price is 100 or more.
5. If couponCode is anything else or empty, no discount.
6. Final price should never be negative.
7. Return final price rounded to 2 decimal places.
