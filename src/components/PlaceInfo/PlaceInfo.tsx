import map from '@site/map';
import React from 'react';
import Place from './Place';
import { PlaceViewOptions } from './PlaceBody';

export default function PlaceInfo({
  id,
  options,
}: {
  id: string;
  options?: string;
}) {
  const places = map.getPlacesById(id);

  if (places.length === 0) {
    return <div>Объект `{id}` не найден</div>;
  }

  return places.map((place) => (
    <Place
      key={place.id || place.label}
      place={place}
      options={decodeOptions(options)}
    />
  ));
}

function decodeOptions(options?: string): PlaceViewOptions {
  if (typeof options === 'string' && options.startsWith('?')) {
    try {
      return Object.fromEntries(new URLSearchParams(options));
    } catch {
      return {};
    }
  }

  return {};
}
