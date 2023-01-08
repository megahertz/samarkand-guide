/* eslint-disable global-require */

import React from 'react';

export default function Icon({
  name,
  size = 16,
}: {
  name: IconName;
  size?: number;
}) {
  return (
    <img alt={name} height={size} src={`/img/icons/${name}.svg`} width={size} />
  );
}

type IconName = 'instagram' | 'telegram' | 'web' | 'yandex-maps';
