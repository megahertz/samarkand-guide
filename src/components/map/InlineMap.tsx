import { getItemById } from '@site/map';
import { mapItemToPlacemarkItems } from '@site/map/lib/helpers';
import React from 'react';
import Map from './Map';
import styles from './InlineMap.module.css';

export default function InlineMap({
  itemId,
  location = [39.683059, 66.949177],
  showLabels = true,
  zoom = 12,
}: {
  itemId: string;
  location?: [number, number];
  showLabels?: boolean;
  zoom?: number;
}) {
  const item = getItemById(itemId);

  if (item === null) {
    return <div>Map item not found</div>;
  }

  const placemarks = mapItemToPlacemarkItems(item);

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
