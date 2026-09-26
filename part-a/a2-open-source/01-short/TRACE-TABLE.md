HUMAN PREDICTION — BEFORE EXECUTION

NORMAL INPUT
res.status(200)
Prediction:
- statusCode becomes 200
- response object is returned
Trace:

EDGE INPUT
res.status(999)
Prediction:
- statusCode becomes 999
- response object is returned
Trace:

INVALID INPUT
res.status(99)
Prediction:
- throws RangeError
- statusCode is not successfully set to 99
Trace:

REAL EXECUTION COMPARISON
Actual:
- NORMAL: statusCode = 200; returned same response object. MATCH
- EDGE: statusCode = 999; returned same response object. MATCH
- INVALID: threw RangeError with message "Invalid status code: 99. Status code must be greater than 99 and less than 1000."; statusCode remained 200 and was not set to 99. MATCH
Difference:
- NONE
Correction:
- NONE REQUIRED
