/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */

import Loader from '@site/src/components/PlaceInfo/Loader';
import useImgCache from '@site/src/components/PlaceInfo/useImgCache';
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
  const [isOpened, setIsOpened] = useState(false);

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
  const [isLoading, setIsLoading] = useState(true);

  const swipeHandlers = useSwipe({
    onSwipedLeft: showPrevImage,
    onSwipedRight: showNextImage,
  });

  const { isCached } = useImgCache(images);

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
      let newIndex = prevIndex + diff;

      if (newIndex < 0) {
        newIndex = images.length - 1;
      } else if (newIndex >= images.length) {
        newIndex = 0;
      }

      if (!isCached(images[newIndex])) {
        setIsLoading(true);
      }

      return newIndex;
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
      {isLoading && <Loader className={styles.loader} />}

      <img
        alt={`${title} Самарканд`}
        className="no-zoom"
        src={images[imageIndex]}
        onLoad={() => setIsLoading(false)}
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
