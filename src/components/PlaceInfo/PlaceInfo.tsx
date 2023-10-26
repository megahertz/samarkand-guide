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
  const placeViewOptions = decodeOptions(options);
  const places = map.getPlacesById(id, placeViewOptions);

  if (places.length === 0) {
    return <div>Объект `{id}` не найден</div>;
  }

  return places.map((place) => (
    <Place
      key={place.id || place.label}
      place={place}
      options={placeViewOptions}
    />
  ));
}

function decodeOptions(stringOptions?: string): PlaceViewOptions {
  const defaultOptions: PlaceViewOptions = {
    findBy: 'idOrTag',
    findNested: true,
    view: 'card',
  };

  if (typeof stringOptions === 'string' && stringOptions.startsWith('?')) {
    try {
      const options = Object.fromEntries(new URLSearchParams(stringOptions));
      return {
        ...defaultOptions,
        ...options,
        findNested: options.findNested !== 'false',
      };
    } catch {
      return defaultOptions;
    }
  }

  return defaultOptions;
}
