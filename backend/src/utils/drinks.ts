export const calculateBundlePrice = (
  bundleSize: number,
  discounts: { [key: string]: number },
): number => {
  const price = bundleSize;
  const discount = discounts[bundleSize] || 0;
  return price * (1 - discount);
};
