import { MapPlace } from '@site/map/lib/types';
import React, { ComponentType, Fragment } from 'react';
import { renderToString } from 'react-dom/server';
import { IconName } from '../Icon';
import IconLink from '../IconLink';
import Gallery from './Gallery';
import Price from '../Price';
import Phone from '../Phone';
import styles from './PlaceBody.module.css';

export function renderPlace(place: MapPlace, noPadding = true): string {
  return renderToString(<PlaceBody place={place} noPadding={noPadding} />);
}

export function PlaceBody({
  place,
  noPadding = false,
  titleComponent = 'h3',
}: {
  place: MapPlace;
  noPadding?: boolean;
  titleComponent?: ComponentType | keyof JSX.IntrinsicElements;
}) {
  const TitleComponent = titleComponent;

  return (
    <div className={styles.container}>
      {place.images?.length && place.images.length > 0 && (
        <Gallery images={place.images} title={place.label} />
      )}
      <div className={noPadding ? styles.contentNoPadding : styles.content}>
        <TitleComponent className={styles.title}>{place.label}</TitleComponent>
        <div>{place.description}</div>
        <PlaceAddress place={place} />
        <PlaceHours place={place} />
        <PlacePrices place={place} />
        <PlacePhones place={place} />
        <PlaceLinks place={place} />
      </div>
    </div>
  );
}

export function PlaceAddress({ place }: { place: MapPlace }) {
  const address = place.address;
  if (!address) {
    return null;
  }

  return <div>Адрес: {address}</div>;
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

  const phones = place.phones as string[];

  return (
    <div>
      {phones.map((phone, index) => (
        <Fragment key={phone}>
          <Phone number={phone} />
          {index < phones.length - 1 && ', '}
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

function PlaceHours({ place }: { place: MapPlace }) {
  const DAYS = ['', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  if (!Array.isArray(place.openHours) || place.openHours.length === 0) {
    return null;
  }

  const hours = place.openHours.map((period) => {
    let daysOfWeek = period.daysOfWeek || '1-7';
    DAYS.forEach(
      (day, index) => (daysOfWeek = daysOfWeek.replace(index.toString(), day)),
    );

    return `${daysOfWeek}: ${period.time}`;
  });

  if (hours.length === 1) {
    return <div>Режим работы: {hours[0]}</div>;
  }

  return (
    <div>
      Режим работы:{' '}
      <ul>
        {hours.map((hour) => (
          <li>{hour}</li>
        ))}
      </ul>
    </div>
  );
}

function getMapPlaceLinks(place: MapPlace): IconLinkData[] {
  return [
    place.yandexMap && { href: place.yandexMap, icon: 'yandex-maps' as any },
    place.googleMap && { href: place.googleMap, icon: 'google-maps' },
    place.twoGis && { href: place.twoGis, icon: 'two-gis' },
    place.web && { href: place.web, icon: 'web' },
    place.telegram && { href: place.telegram, icon: 'telegram' },
    place.telegram2 && { href: place.telegram2, icon: 'telegram' },
    place.instagram && { href: place.instagram, icon: 'instagram' },
    place.facebook && { href: place.facebook, icon: 'facebook' },
    place.youtube && { href: place.youtube, icon: 'youtube' },
    place.vkontakte && { href: place.vkontakte, icon: 'vkontakte' },
  ].filter(Boolean) as IconLinkData[];
}

export interface PlaceViewOptions {
  findNested?: boolean;
  view?: 'card' | 'paragraph';
}

type IconLinkData = { href: string; icon: IconName };
