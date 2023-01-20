import React from 'react';
import styles from './styles.module.css';

export default function Icon({
  name,
  size = 16,
}: {
  name: IconName;
  size?: number;
}) {
  return (
    <img
      className={styles.root}
      alt={name}
      height={size}
      src={`/img/icons/${name}.svg`}
      width={size}
    />
  );
}

export type IconName = 'instagram' | 'telegram' | 'web' | 'yandex-maps';
