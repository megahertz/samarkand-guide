import { getPlacemarksByIdOrTag } from '@site/map';
import React from 'react';
import Map from './Map';
import styles from './InlineMap.module.css';

export default function InlineMap({
  itemId,
  location,
  showLabels = true,
  zoom,
}: {
  itemId: string;
  location?: [number, number];
  showLabels?: boolean;
  zoom?: number;
}) {
  const placemarks = getPlacemarksByIdOrTag(itemId);

  if (placemarks.length < 1) {
    return <div>Map item not found</div>;
  }

  return (
    <div className={styles.container}>
      <Map
        location={location}
        placemarks={placemarks}
        showLabels={showLabels}
        zoom={zoom}
      />
    </div>
  );
}
