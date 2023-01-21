import IconLink from '@site/src/components/IconLink';
import Phone from '@site/src/components/Phone';
import { MapPlace } from '@site/map/lib/types';
import Price from '@site/src/components/Price';
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
      <h3 className={styles.title}>{place.label}</h3>
      <div>{place.description}</div>
      <PlacePrices place={place} />
      <PlacePhones place={place} />
      <PlaceLinks place={place} />
    </Container>
  );
}

export function PlaceLinks({ place }: { place: MapPlace }) {
  return (
    <div className={styles.links}>
      <IconLink name="yandex-maps" href={place.yandexMap} />
      <IconLink name="google-maps" href={place.googleMap} />
      <IconLink name="web" href={place.web} />
      <IconLink name="telegram" href={place.telegram} />
      <IconLink name="instagram" href={place.instagram} />
      <IconLink name="youtube" href={place.youtube} />
      <IconLink name="vkontakte" href={place.vkontakte} />
    </div>
  );
}

function PlacePhones({ place }: { place: MapPlace }) {
  if (!Array.isArray(place.phones) || place.phones.length === 0) {
    return null;
  }

  return (
    <div>
      {place.phones.map((phone, index) => (
        <>
          <Phone key={phone} number={phone} />
          {index < place.phones.length - 1 && ', '}
        </>
      ))}
    </div>
  );
}

function PlacePrices({ place }: { place: MapPlace }) {
  if (!Array.isArray(place.price) || place.price.length === 0) {
    return null;
  }

  if (place.price.length === 1) {
    return (
      <div className={styles.price}>
        <Price>{place.price[0].toString()}</Price>{' '}
      </div>
    );
  }

  return (
    <div className={styles.price}>
      <Price>{place.price[0].toString()}</Price> —&nbsp;
      <Price>{place.price[1].toString()}</Price>
    </div>
  );
}
