/* eslint-disable jsx-a11y/no-noninteractive-tabindex */

import createUseRequest from '@site/src/components/Price/createUseRequest';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

const CURRENCIES = ['usd', 'rub', 'uah', 'byn'];
const FORMATS = {
  byn: '{value} б.р.',
  rub: '{value} ₽',
  uah: '{value} ₴',
  usd: '${value}', // eslint-disable-line no-template-curly-in-string
  default: '{value} {code}',
};

export default function Price({ children }: { children: string }) {
  const price = Number.parseInt(children.replace(/\W+/g, ''), 10);

  // Need to use effect, otherwise dom attribute won't be updated
  const currenciesTemporary = useCurrencies({ price });
  const [currencies, setCurrencies] = useState('');
  useEffect(
    () => setCurrencies(currenciesTemporary),
    [currenciesTemporary, setCurrencies],
  );

  return (
    <span
      aria-label="Price"
      role="tooltip"
      className={styles.price}
      data-title={currencies}
      tabIndex={0}
    >
      {formatMoney(price)} сумов
    </span>
  );
}

const useCurrencyRequest = createUseRequest({
  cacheName: 'currency',
  factory({ selectedCurrencies = CURRENCIES } = {}) {
    return fetch('https://www.floatrates.com/daily/uzs.json')
      .then((response) => response.json())
      .then((currencies: Record<string, { rate?: number }>) =>
        Object.fromEntries(
          Object.entries(currencies)
            .map(([code, currency]): [string, number] => [code, currency?.rate])
            .filter(
              ([code, rate]) => rate && selectedCurrencies.includes(code),
            ),
        ),
      );
  },
});

function useCurrencies({ price = 0, selectedCurrencies = CURRENCIES } = {}) {
  const rates = useCurrencyRequest({ selectedCurrencies }) || {};
  return selectedCurrencies
    .map((currencyCode) => {
      const rate = rates[currencyCode];
      if (!rate || !price) {
        return '';
      }

      const format = FORMATS[currencyCode] || FORMATS.default;
      return format
        .replace('{value}', formatMoney(price * rate))
        .replace('{code}', currencyCode.toUpperCase());
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
