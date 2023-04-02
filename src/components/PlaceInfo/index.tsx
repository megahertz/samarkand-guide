import { MapPlace } from '@site/map/lib/types';
import { PlaceBody } from '@site/src/components/PlaceInfo/PlaceBody';
import React from 'react';
import { getPlacesById } from '@site/map';
import Container from '@theme/CodeBlock/Container';

export default function PlaceInfo({ id }: { id: string }) {
  const places = getPlacesById(id);

  if (places.length === 0) {
    return <div>Объект `{id}` не найден</div>;
  }

  return places.map((place) => (
    <Place key={place.id || place.label} place={place} />
  ));
}

export function Place({ place }: { place: MapPlace }) {
  return (
    <Container as="div">
      <PlaceBody place={place} />
    </Container>
  );
}
