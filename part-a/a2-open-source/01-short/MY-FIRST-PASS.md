FUNCTION:
res.status

INPUTS:
- code: an integer/number representing an HTTP status code

OUTPUT:
- the response object itself

SIDE EFFECTS:
- changes response.statusCode

FAILS WHEN:
- code is not an integer
- code is less than 100
- code is greater than 999

NUMBERED STEPS:
1. Check whether code is an integer.
2. If code is not an integer, throw a TypeError.
3. Check whether code is outside the range 100 to 999.
4. If code is outside that range, throw a RangeError.
5. Set response.statusCode to code.
6. Return the response object.
