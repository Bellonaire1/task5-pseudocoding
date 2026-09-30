# C4 — Explanation Test

## Recording

The user recorded a spoken explanation of the delivery-fee feature.

The recording is approximately 3 minutes 22 seconds long.

The explanation used the pseudocode as notes and did not require showing implementation code.

The recording was sent to a non-technical listener.

Requirements:
- Maximum duration: 5 minutes
- No source code used on screen during explanation
- Explanation covers:
  - inputs
  - validation failures
  - free delivery
  - base fee
  - extra-distance charge
  - small-order surcharge
  - peak surcharge
  - rounding and return value
  - C3 finding about unspecified exact error-message wording

Recording status:
COMPLETE

Recording duration:
Approximately 3 minutes 22 seconds

## Non-Technical Listener Test

A non-technical listener will be asked to explain back:
- what the feature does
- when delivery is free
- what increases the delivery fee
- what happens with invalid input

Listener:
Non-technical listener

Listener response:
"What the feature does:
It calculates how much a customer should pay for delivery. It uses the delivery distance, the order amount, and the time of day to work out the final fee.

When delivery is free:
Delivery is free when the order is at least 30,000 naira AND the delivery distance is 5 kilometres or less. If both are true, the fee is zero.

What can make the delivery fee increase:
The fee starts at 1,000 naira for the first 3 kilometres.
It can increase if:
- The distance is more than 3km — 250 naira is added for every extra kilometre started.
- The order is below 5,000 naira — another 500 naira is added.
- It is peak time between 5pm and 8:59pm — the fee increases by 25%.

What happens when an invalid input is given:
The calculator validates the inputs first.
- Distance zero or below gives an invalid-distance error.
- A negative or non-whole-number subtotal gives an invalid-subtotal error.
- An invalid hour outside the required whole-number range of 0–23 gives an invalid-hour error."

What they understood correctly:
The listener successfully explained what the feature does, when delivery is free, what increases the fee, and what happens for invalid input.

Anything misunderstood:
NONE

Result:
PASS — the listener successfully explained the feature back.
