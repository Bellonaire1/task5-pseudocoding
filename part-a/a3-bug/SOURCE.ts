function calculateFinalPrice(price: number, couponCode: string): number {
  if (price <= 0) {
    return 0;
  }

  let discount = 0;

  if (couponCode === "SAVE10") {
    discount = price * 0.10;
  } else if (couponCode === "SAVE20") {
    if (price > 100) {
      discount = price * 0.20;
    }
  }

  let finalPrice = price - discount;

  if (finalPrice < 0) {
    finalPrice = 0;
  }

  return Math.round(finalPrice * 100) / 100;
}
