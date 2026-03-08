/**
 * Format a number as USD currency
 */
export function formatCurrency(amount: number): string {
  return `$${amount.toFixed(2)}`;
}

/**
 * Parse price string to number
 */
export function parsePrice(priceString: string): number {
  return parseFloat(priceString.replace(/[^0-9.]/g, ""));
}

/**
 * Generate a random order number
 */
export function generateOrderNumber(): string {
  return `#${Math.floor(100000 + Math.random() * 900000)}`;
}
