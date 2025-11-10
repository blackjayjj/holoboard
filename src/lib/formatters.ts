export const yenFormatter = new Intl.NumberFormat("ja-JP", {
  style: "currency",
  currency: "JPY",
  minimumFractionDigits: 0,
});

export function formatNumberCompact(num:number): string {
  if (Math.abs(num) < 1000) {
    return num.toLocaleString();
  }

  const tiers = [
    { value: 1e12, symbol: "T" },
    { value: 1e9, symbol: "B" },
    { value: 1e6, symbol: "M" },
    { value: 1e3, symbol: "K" },
  ];
  const tier = tiers.find((t) => Math.abs(num) >= t.value);
  if (tier) {
    const scaled = num / tier.value;
    const formatted = scaled.toFixed(1);
    return `¥${formatted + tier.symbol}`;
  }
  return `¥${num.toLocaleString()}`;
}
