import { MapPlace } from '@site/map/lib/types';
import { IconName } from '@site/src/components/Icon';
import IconLink from '@site/src/components/IconLink';
import Phone from '@site/src/components/Phone';
import Gallery from '@site/src/components/PlaceInfo/Gallery';
import Price from '@site/src/components/Price';
import React, { Fragment } from 'react';
import { renderToString } from 'react-dom/server';
import styles from './PlaceBody.module.css';

export function renderPlace(place: MapPlace, noPadding = true): string {
  return renderToString(<PlaceBody place={place} noPadding={noPadding} />);
}

export function PlaceBody({
  place,
  noPadding = false,
}: {
  place: MapPlace;
  noPadding?: boolean;
}) {
  return (
    <div className={styles.container}>
      {place.images?.length > 0 && (
        <Gallery images={place.images} title={place.label} />
      )}
      <div className={noPadding ? styles.contentNoPadding : styles.content}>
        <h3 className={styles.title}>{place.label}</h3>
        <div>{place.description}</div>
        <PlacePrices place={place} />
        <PlacePhones place={place} />
        <PlaceLinks place={place} />
      </div>
    </div>
  );
}

export function PlaceLinks({ place }: { place: MapPlace }) {
  return (
    <div className={styles.links}>
      {getMapPlaceLinks(place).map((link) => (
        <IconLink href={link.href} key={link.icon} name={link.icon} />
      ))}
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
        <Fragment key={phone}>
          <Phone number={phone} />
          {index < place.phones.length - 1 && ', '}
        </Fragment>
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

function getMapPlaceLinks(place: MapPlace): IconLinkData[] {
  return [
    place.yandexMap && { href: place.yandexMap, icon: 'yandex-maps' as any },
    place.googleMap && { href: place.googleMap, icon: 'google-maps' },
    place.web && { href: place.web, icon: 'web' },
    place.telegram && { href: place.telegram, icon: 'telegram' },
    place.instagram && { href: place.instagram, icon: 'instagram' },
    place.facebook && { href: place.facebook, icon: 'facebook' },
    place.youtube && { href: place.youtube, icon: 'youtube' },
    place.vkontakte && { href: place.vkontakte, icon: 'vkontakte' },
  ].filter(Boolean);
}

type IconLinkData = { href: string; icon: IconName };
