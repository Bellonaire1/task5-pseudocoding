# Difference Between Actual and Intended Behaviour

Actual code requires price > 100 for SAVE20.
Intended behaviour requires price >= 100.

# Bug Identified

Boundary-condition bug in SAVE20 eligibility.

# Why It Happens

The comparison excludes exactly 100.

Actual condition:
price > 100

Required condition:
price >= 100

# Correct Behaviour

price = 100 with SAVE20 must receive 20% discount.
