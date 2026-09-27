export function calculateDeliveryFee(
  distanceKm: number,
  orderSubtotalMinor: number,
  hour: number
): number {
  if (distanceKm <= 0) {
    throw new Error("Invalid distance");
  }

  if (
    orderSubtotalMinor < 0 ||
    !Number.isInteger(orderSubtotalMinor)
  ) {
    throw new Error("Invalid order subtotal");
  }

  if (
    !Number.isInteger(hour) ||
    hour < 0 ||
    hour > 23
  ) {
    throw new Error("Invalid hour");
  }

  if (
    orderSubtotalMinor >= 3_000_000 &&
    distanceKm <= 5
  ) {
    return 0;
  }

  let fee = 100_000;

  if (distanceKm > 3) {
    const extraKilometres = Math.ceil(distanceKm - 3);
    fee += extraKilometres * 25_000;
  }

  if (orderSubtotalMinor < 500_000) {
    fee += 50_000;
  }

  if (hour >= 17 && hour <= 20) {
    fee *= 1.25;
  }

  return Math.round(fee);
}
