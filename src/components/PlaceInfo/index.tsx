import IconLink from '@site/src/components/IconLink';
import Phone from '@site/src/components/Phone';
import { MapPlace } from '@site/map/lib/types';
import React from 'react';
import { getPlacesById } from '@site/map';
import Container from '@theme/CodeBlock/Container';
import styles from './styles.module.css';

export default function PlaceInfo({ id }: { id: string }) {
  const places = getPlacesById(id);

  if (places.length === 0) {
    return <div>Объект `{id}` не найден</div>;
  }

  return places.map((place) => <Place place={place} />);
}

function Place({ place }: { place: MapPlace }) {
  return (
    <Container as="div" className={styles.container}>
      <div className={styles.title}>{place.label}</div>
      <div>{place.description}</div>
      <div>
        <IconLink name="yandex-maps" href={place.yandexMap} />
        <IconLink name="web" href={place.web} />
        <IconLink name="telegram" href={place.telegram} />
        <IconLink name="instagram" href={place.instagram} />
      </div>
      {place.phones?.length > 0 && (
        <div>
          {place.phones.map((phone, index) => (
            <>
              <Phone key={phone} number={phone} />
              {index < place.phones.length - 1 && ', '}
            </>
          ))}
        </div>
      )}
    </Container>
  );
}
