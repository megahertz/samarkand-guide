import {
  GeolocationControl,
  Map,
  Placemark,
  TypeSelector,
} from '@pbe/react-yandex-maps';
import { PlacemarkItem } from '@site/map/lib/types';
import React from 'react';
import styles from './styles.module.css';

export default function FullMap({
  placemarks,
}: {
  placemarks: PlacemarkItem[];
}) {
  return (
    <Map
      className={styles.mapBody}
      defaultState={{
        center: [39.64, 66.97],
        zoom: 11,
        controls: ['zoomControl'],
      }}
    >
      {placemarks.map((item) => (
        <Placemark
          defaultGeometry={item.location}
          key={item.id}
          modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
          options={{ preset: item.icon }}
          properties={{
            balloonContentBody: `<b>${item.label}</b><br>${
              item.description || ''
            }`,
            hintContent: `${item.label}`,
          }}
        />
      ))}
      <GeolocationControl options={{ float: 'left' }} />
      <TypeSelector options={{ float: 'right' } as any} />
    </Map>
  );
}
