import {
  Map as YandexMap,
  Placemark,
  TypeSelector,
} from '@pbe/react-yandex-maps';
import { PlacemarkItem } from '@site/map/lib/types';
import React from 'react';
import styles from './styles.module.css';

export default function Map({
  location = [39.668154, 66.949749],
  placemarks,
  showLabels = false,
  zoom = 13,
}: {
  location?: [number, number];
  placemarks: PlacemarkItem[];
  showLabels?: boolean;
  zoom?: number;
}) {
  const renderedPlacemarks = [...placemarks].reverse();

  return (
    <YandexMap
      className={styles.mapBody}
      defaultState={{
        center: location,
        zoom,
        controls: ['zoomControl'],
      }}
      options={
        {
          balloonPanelMaxMapArea: Number.POSITIVE_INFINITY,
        } as unknown
      }
    >
      {renderedPlacemarks.map((item) => (
        <Placemark
          defaultGeometry={item.location}
          key={item.id}
          modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
          options={{ preset: item.icon, iconCaptionMaxWidth: 120 } as unknown}
          properties={{
            balloonContentBody: item.body,
            iconCaption: item.showLabel || showLabels ? item.label : null,
            hintContent: item.label,
          }}
        />
      ))}
      {/* <GeolocationControl options={{ float: 'left' }} /> */}
      <TypeSelector options={{ float: 'right' } as any} />
    </YandexMap>
  );
}
