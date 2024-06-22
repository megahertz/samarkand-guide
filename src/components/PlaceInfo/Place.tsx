import { MapPlace } from '@site/map/lib/types';
import Container from '@theme/CodeBlock/Container';
import React from 'react';
import { PlaceBody, PlaceViewOptions } from './PlaceBody';
import styles from './Place.module.css';

export default function Place({
  place,
  options,
}: {
  place: MapPlace;
  options: PlaceViewOptions;
}) {
  switch (options.view) {
    case 'paragraph':
      return (
        <ViewParagraph>
          <PlaceBody place={place} noPadding />
        </ViewParagraph>
      );
    default:
      return (
        <ViewCard>
          <PlaceBody place={place} />
        </ViewCard>
      );
  }
}

function ViewCard({ children }: { children: React.ReactNode }) {
  return (
    <Container className={styles.container} as="div">
      {children}
    </Container>
  );
}

function ViewParagraph({ children }: { children: React.ReactNode }) {
  return <div className={styles.viewParagraph}>{children}</div>;
}
