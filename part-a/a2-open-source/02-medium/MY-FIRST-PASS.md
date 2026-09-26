FUNCTION:
req.get / req.header

INPUTS:
- name: the header name to look up

OUTPUT:
- the matching request header value

SIDE EFFECTS:
- NONE

FAILS WHEN:
- name is missing, empty, or falsy
- name is not a string

NUMBERED STEPS:
1. Check whether name was provided.
2. If name is missing or falsy, throw a TypeError.
3. Check whether name is a string.
4. If name is not a string, throw a TypeError.
5. Convert name to lowercase.
6. If the name is "referer" or "referrer", return either the referrer or referer header value.
7. Otherwise, return the header value stored under the lowercase name.
