// Library: Express
// Version: 5.2.1
// Original file path: lib/response.js
// Function name: res.status

res.status = function status(code) {
  if (!Number.isInteger(code)) {
    throw new TypeError(`Invalid status code: ${JSON.stringify(code)}. Status code must be an integer.`);
  }
  if (code < 100 || code > 999) {
    throw new RangeError(`Invalid status code: ${JSON.stringify(code)}. Status code must be greater than 99 and less than 1000.`);
  }

  this.statusCode = code;
  return this;
};
