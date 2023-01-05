import { YMaps } from '@pbe/react-yandex-maps';
import React, { ReactNode } from 'react';

export default function Root({ children }: { children: ReactNode }) {
  return (
    <YMaps
      query={{
        ns: 'use-load-option',
        load: [
          'Map',
          'Placemark',
          'control.GeolocationControl',
          'control.TypeSelector',
          'control.ZoomControl',
          'geoObject.addon.balloon',
          'geoObject.addon.hint',
        ].join(','),
      }}
    >
      {children}
    </YMaps>
  );
}
