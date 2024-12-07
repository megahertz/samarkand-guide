/* eslint-disable jsx-a11y/no-noninteractive-tabindex */

import React, { useEffect, useState } from 'react';
import createUseRequest from './createUseRequest';
import styles from './styles.module.css';

const CURRENCIES = ['uzs', 'usd', 'rub', 'uah', 'byn'] as const;
const FORMATS = {
  brv: '{value} БРВ',
  byn: '{value} б.р.',
  rub: '{value} ₽',
  uah: '{value} ₴',
  usd: '${value}', // eslint-disable-line no-template-curly-in-string
  uzs: '{value} сумов',
  default: '{value} {code}',
} as const;
const BRV = 375_000;

export default function Price({
  children,
  currency = 'uzs',
}: {
  children: string;
  currency?: Currency;
}) {
  const price = Number.parseFloat(children.replace(/[^\d.]+/g, ''));

  // Need to use effect, otherwise dom attribute won't be updated
  const tempExchangeRates = useExchangeRates({ currency, price });
  const [exchangeRates, setExchangeRates] = useState('');
  useEffect(
    () => setExchangeRates(tempExchangeRates),
    [tempExchangeRates, setExchangeRates],
  );

  return (
    <span
      aria-label="Price"
      role="tooltip"
      className={styles.price}
      data-title={exchangeRates}
      tabIndex={0}
    >
      {formatCurrency(price, currency)}
    </span>
  );
}

const useCurrencyRequest = createUseRequest({
  cacheName: 'currency',
  factory({ selectedCurrencies = CURRENCIES } = {}): Promise<
    Record<string, number>
  > {
    return fetch('https://www.floatrates.com/daily/uzs.json')
      .then((response) => response.json())
      .then((currencies: Record<string, { rate?: number }>) => {
        return Object.fromEntries(
          Object.entries(currencies)
            .map(([code, currency]): [string, number] => [
              code,
              currency?.rate ?? 0,
            ])
            .filter(
              ([code, rate]) => rate && selectedCurrencies.includes(code),
            ),
        );
      });
  },
});

function useExchangeRates({
  currency = 'uzs',
  price = 0,
  selectedCurrencies = CURRENCIES,
}: {
  currency?: Currency;
  price?: number;
  selectedCurrencies?: Readonly<Currency[]>;
} = {}) {
  const rates: Record<Currency, number> = {
    ...(useCurrencyRequest({ selectedCurrencies }) as Record<Currency, number>),
    brv: 1 / BRV,
    uzs: 1,
  };

  const uzsPrice = currency === 'uzs' ? price : price / rates[currency];

  return selectedCurrencies
    .filter((currencyCode) => currencyCode !== currency)
    .map((currencyCode: Currency) => {
      const rate = rates[currencyCode];
      return uzsPrice && rate
        ? formatCurrency(uzsPrice * rate, currencyCode)
        : '';
    })
    .filter(Boolean)
    .join('\n');
}

function formatMoney(amount: number) {
  return amount
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$&,')
    .replace(/\.00$/, '');
}

function formatCurrency(amount: number, currency: Currency): string {
  const format = FORMATS[currency] || FORMATS.default;
  return format
    .replace('{value}', formatMoney(amount))
    .replace('{code}', currency.toUpperCase());
}

type Currency = Exclude<keyof typeof FORMATS, 'default'>;
