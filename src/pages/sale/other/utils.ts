// eslint-disable-next-line import/prefer-default-export
export function formatUzsPrice(price: number, suffix = ' UZS'): string {
  let stringPrice = price.toLocaleString('uz-UZ', {
    style: 'currency',
    currency: 'UZS',
    minimumFractionDigits: 0,
  });

  if (suffix) {
    stringPrice = stringPrice.replace(/UZS\s/, '') + suffix;
  }

  return stringPrice;
}
