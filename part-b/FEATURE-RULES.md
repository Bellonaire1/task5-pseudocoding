Feature:
Delivery Fee Calculator

Rules:
1. distanceKm must be greater than 0.
2. orderSubtotalMinor must be an integer >= 0.
3. hour must be an integer from 0 through 23.
4. Free delivery if subtotal >= 3000000 minor units AND distance <= 5 km.
5. Free delivery overrides surcharges.
6. Base fee = 100000 minor units for first 3 km.
7. Beyond 3 km, add 25000 for every started kilometre.
8. If subtotal < 500000, add 50000.
9. From hour 17 through 20 inclusive, add 25%.
10. Return integer minor units.
