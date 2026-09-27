CASE 1 — NORMAL
distance = 2
subtotal = 1000000
hour = 14
Expected = 100000 minor units / ₦1,000

CASE 2 — BOUNDARY
distance = 3
subtotal = 500000
hour = 17
Base = 100000
Peak 25% = 25000
Expected = 125000 / ₦1,250

CASE 3 — COMBINED
distance = 4.2
subtotal = 400000
hour = 18
Base = 100000
Started extra km = 2
Distance charge = 50000
Small-order charge = 50000
Before peak = 200000
Peak = 50000
Expected = 250000 / ₦2,500

CASE 4 — FREE DELIVERY BOUNDARY
distance = 5
subtotal = 3000000
hour = 20
Free-delivery rule applies before peak surcharge
Expected = 0

CASE 5 — INVALID
distance = -1
subtotal = 800000
hour = 12
Expected = invalid-distance error
