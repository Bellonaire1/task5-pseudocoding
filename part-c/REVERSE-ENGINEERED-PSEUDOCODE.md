FUNCTION calculateDeliveryFee

INPUTS:
- distanceKm: number representing delivery distance
- orderSubtotalMinor: number representing order subtotal in minor units
- hour: number representing hour of day

OUTPUT:
- number representing the rounded delivery fee

SIDE EFFECTS:
- NONE

FAILS WHEN:
- distanceKm is less than or equal to 0
- orderSubtotalMinor is negative
- orderSubtotalMinor is not an integer
- hour is not an integer
- hour is below 0
- hour is above 23

NUMBERED STEPS:
1. Check whether distanceKm is less than or equal to 0.
2. IF distanceKm is less than or equal to 0
   RETURN error: invalid distance.
3. Check whether orderSubtotalMinor is negative or not an integer.
4. IF either condition is true
   RETURN error: invalid subtotal.
5. Check whether hour is an integer between 0 and 23.
6. IF hour is invalid
   RETURN error: invalid hour.
7. Check whether orderSubtotalMinor is at least 3000000
   AND distanceKm is at most 5.
8. IF both conditions are true
   RETURN 0.
9. Start fee at 100000.
10. IF distanceKm is greater than 3
    calculate the number of started kilometres beyond 3.
11. Add 25000 for each started extra kilometre.
12. IF orderSubtotalMinor is below 500000
    add 50000 to fee.
13. IF hour is from 17 through 20 inclusive
    increase fee by 25 percent.
14. Round fee to the nearest integer.
15. RETURN fee.
