import React from 'react';
import styles from './styles.module.css';

export default function Phone({ number }: { number: string }) {
  const digits = number.replace(/[^\d+]/g, '');

  const formatted = digits.replace(
    /(\+998)(\d{2})(\d{3})(\d{2})(\d{2})/,
    '$1 ($2) $3-$4-$5',
  );

  return (
    <a className={styles.link} href={`tel:${digits}`}>
      {formatted}
    </a>
  );
}
