export function formatCurrencyWithCommas(price: number): string {
  if (!price) {
    return "₦0";
  }

  return price.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  });
}
