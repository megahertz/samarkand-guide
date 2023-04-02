/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */

import useSwipe from '@site/src/components/PlaceInfo/useSwipe';
import React, { useEffect, useState } from 'react';
import styles from './Gallery.module.css';

export default function Gallery({
  images,
  title = 'Фото места',
}: {
  images: { default?: string }[];
  title?: string;
}) {
  const imageUrls = images.map((img) => img.default);
  const [isOpened, setIsOpened] = React.useState(false);

  function showGallery() {
    setIsOpened(true);
  }

  function closeGallery() {
    setIsOpened(false);
  }

  return (
    <div className={styles.preview}>
      <img
        className="no-zoom"
        onClick={showGallery}
        src={imageUrls[0]}
        alt={`${title} Самарканд`}
      />
      {isOpened && (
        <Overlay images={imageUrls} onClose={closeGallery} title={title} />
      )}
    </div>
  );
}

function Overlay({
  images,
  onClose,
  title,
}: {
  images: string[];
  onClose: () => void;
  title: string;
}) {
  const [imageIndex, setImageIndex] = useState(0);

  const swipeHandlers = useSwipe({
    onSwipedLeft: showPrevImage,
    onSwipedRight: showNextImage,
  });

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown, false);
    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', onKeyDown, false);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function changeImage(diff: number) {
    setImageIndex((prevIndex) => {
      if (prevIndex + diff < 0) {
        return images.length - 1;
      }
      if (prevIndex + diff >= images.length) {
        return 0;
      }
      return prevIndex + diff;
    });
  }

  function showPrevImage(event?: React.MouseEvent<HTMLButtonElement>) {
    event?.stopPropagation();
    changeImage(-1);
  }

  function showNextImage(event?: React.MouseEvent<HTMLButtonElement>) {
    event?.stopPropagation();
    changeImage(1);
  }

  function onKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowLeft': {
        showPrevImage();
        break;
      }
      case 'ArrowRight': {
        showNextImage();
        break;
      }
      case 'Escape': {
        onClose();
        break;
      }
      default: {
        // Nothing else
      }
    }

    if (event.key === 'Escape') {
      onClose();
    }
  }

  return (
    <div
      role="dialog"
      className={styles.overlay}
      onClick={onClose}
      {...swipeHandlers}
    >
      <img
        alt={`${title} Самарканд`}
        className="no-zoom"
        src={images[imageIndex]}
      />
      {images.length > 1 && (
        <>
          <button className={styles.prev} onClick={showPrevImage} type="button">
            ‹
          </button>
          <button className={styles.next} onClick={showNextImage} type="button">
            ›
          </button>
        </>
      )}
      <button className={styles.close} onClick={onClose} type="button">
        ✕
      </button>
    </div>
  );
}
