export function calculateDeliveryFee(
  distanceKm: number,
  orderSubtotalMinor: number,
  hour: number,
): number {
  if (distanceKm <= 0) {
    throw new Error("invalid distance");
  }

  if (orderSubtotalMinor < 0 || !Number.isInteger(orderSubtotalMinor)) {
    throw new Error("invalid subtotal");
  }

  if (!Number.isInteger(hour) || hour < 0 || hour > 23) {
    throw new Error("invalid hour");
  }

  if (orderSubtotalMinor >= 3000000 && distanceKm <= 5) {
    return 0;
  }

  let fee = 100000;

  if (distanceKm > 3) {
    fee += Math.ceil(distanceKm - 3) * 25000;
  }

  if (orderSubtotalMinor < 500000) {
    fee += 50000;
  }

  if (hour >= 17 && hour <= 20) {
    fee *= 1.25;
  }

  return Math.round(fee);
}
