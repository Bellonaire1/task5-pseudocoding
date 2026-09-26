// Original repository: https://github.com/Bellonaire1/calmness-payment-subscription
// Original source path: lib/proration/index.ts
export interface ProrationInput {
  monthlyPriceMinor: number;
  yearlyPriceMinor: number;
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  upgradeDate: Date;
}

export interface ProrationResult {
  unusedCreditMinor: number;
  upgradeDueMinor: number;
  consumedDays: number;
  remainingDays: number;
  totalDays: number;
}

/**
 * Calculates day-based integer-minor-unit proration for upgrading from Monthly to Yearly.
 * 
 * Rounding Rule:
 * The daily rate is not rounded prematurely. We multiply remaining days by the full monthly 
 * price, then perform integer division (Math.floor) by total days in the cycle.
 * This guarantees we never use floating-point money for the authoritative result.
 */
export function calculateUpgradeProration(input: ProrationInput): ProrationResult {
  const {
    monthlyPriceMinor,
    yearlyPriceMinor,
    currentPeriodStart,
    currentPeriodEnd,
    upgradeDate,
  } = input;

  // Defensive bounds checking
  if (upgradeDate > currentPeriodEnd) {
    // Expired subscription – cannot perform upgrade proration. Throw error to reject.
    throw new Error('Expired subscription period: cannot upgrade');
  }

  if (upgradeDate < currentPeriodStart) {
    throw new Error('Upgrade date cannot be before current period start.');
  }

  // Calculate days (rounding difference to nearest whole day assuming standard dates)
  const MS_PER_DAY = 1000 * 60 * 60 * 24;
  
  // We use Math.round to account for daylight savings time shifts if any
  const totalDays = Math.round((currentPeriodEnd.getTime() - currentPeriodStart.getTime()) / MS_PER_DAY);
  const consumedDays = Math.floor((upgradeDate.getTime() - currentPeriodStart.getTime()) / MS_PER_DAY);
  
  // Ensure we don't have negative remaining days
  const remainingDays = Math.max(0, totalDays - consumedDays);

  if (totalDays <= 0) {
    throw new Error('Invalid subscription period: total days <= 0');
  }

  // Integer arithmetic: (remainingDays * monthlyPrice) / totalDays
  // Math.floor ensures we round down to the nearest kobo, favoring the business,
  // or we can use Math.round if we want nearest. Let's use Math.floor for strict integer division.
  const unusedCreditMinor = Math.floor((remainingDays * monthlyPriceMinor) / totalDays);
  
  const upgradeDueMinor = Math.max(0, yearlyPriceMinor - unusedCreditMinor);

  return {
    unusedCreditMinor,
    upgradeDueMinor,
    consumedDays,
    remainingDays,
    totalDays,
  };
}
