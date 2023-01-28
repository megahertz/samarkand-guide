import React from 'react';
import styles from './styles.module.css';

export default function Icon({
  name,
  size = 16,
}: {
  name: IconName;
  size?: number;
}) {
  const proportion = proportions[name] || 1;
  const height = Math.round(size / proportion);
  return (
    <img
      className={styles.root}
      alt={name}
      height={height}
      src={`/img/icons/${name}.svg`}
      width={size}
    />
  );
}

const proportions = {
  youtube: 159 / 110,
};

export type IconName =
  | 'facebook'
  | 'google-maps'
  | 'instagram'
  | 'telegram'
  | 'vkontakte'
  | 'web'
  | 'yandex-maps'
  | 'youtube';
