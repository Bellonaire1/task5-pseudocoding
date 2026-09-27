FUNCTION calculateFinalPrice

INPUTS:
- price: number representing the original price
- couponCode: string representing the coupon supplied

OUTPUT:
- number representing the final price after applicable discount

SIDE EFFECTS:
- NONE

FAILS WHEN:
- NONE explicitly; prices less than or equal to zero return 0

NUMBERED STEPS:
1. Check whether price is less than or equal to zero.
2. IF price is less than or equal to zero
   RETURN 0.
3. Start discount at 0.
4. IF couponCode is "SAVE10"
   calculate discount as 10% of price.
5. OTHERWISE IF couponCode is "SAVE20"
   check whether original price is 100 or more.
6. IF original price is 100 or more
   calculate discount as 20% of price.
7. OTHERWISE
   leave discount at 0.
8. Calculate final price by subtracting discount from price.
9. IF final price is below zero
   change final price to 0.
10. Round final price to two decimal places.
11. RETURN final price.
