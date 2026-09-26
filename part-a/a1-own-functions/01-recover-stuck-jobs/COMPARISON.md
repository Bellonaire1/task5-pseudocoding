# Comparison

## What I originally understood

A stuck PROCESSING job should either return to PENDING or become DEAD depending on its new attempt count.

## What real execution showed

The normal temporary job was returned with attempts 2 and status PENDING. The edge temporary job was returned with attempts 3 and status DEAD. The invalid temporary job was not returned and remained unchanged because its startedAt value was NULL.

## Discrepancy

NONE

## Correction

NONE REQUIRED
