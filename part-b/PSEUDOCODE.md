FUNCTION calculateDeliveryFee

INPUTS:
- distanceKm: number
- orderSubtotalMinor: integer in minor currency units
- hour: integer from 0 to 23

OUTPUT:
- integer delivery fee in minor currency units

SIDE EFFECTS:
- NONE

FAILS WHEN:
- distanceKm <= 0
- orderSubtotalMinor < 0
- orderSubtotalMinor is not an integer
- hour is not an integer
- hour < 0 or hour > 23

1. Validate distance.
2. IF distance <= 0
   RETURN error: invalid distance.
3. Validate subtotal.
4. IF subtotal is negative or not an integer
   RETURN error: invalid subtotal.
5. Validate hour.
6. IF hour is not an integer or outside 0 to 23
   RETURN error: invalid hour.
7. IF subtotal >= 3000000 AND distance <= 5
   RETURN 0.
8. Start fee at 100000.
9. IF distance > 3
   calculate started kilometres beyond 3.
10. Add 25000 for each started extra kilometre.
11. IF subtotal < 500000
    add 50000.
12. IF hour is from 17 through 20 inclusive
    increase current fee by 25%.
13. Round to nearest integer minor unit.
14. RETURN fee.
