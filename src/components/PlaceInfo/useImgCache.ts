import { useEffect } from 'react';

const globalCache = [];

export default function useImgCache(images: string[]) {
  useEffect(() => {
    preloadImages(images).catch(() => {
      // Just prevent unhandled exception
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    isCached(url: string): boolean {
      console.log({ isCached: globalCache.includes(url), url });
      return globalCache.includes(url);
    },
  };
}

async function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener('load', () => {
      globalCache.push(src);
      resolve();
    });
    img.addEventListener('error', (e) => reject(e));
    img.src = src;
  });
}

async function preloadImages(images: string[]): Promise<void> {
  for (const url of images) {
    if (!globalCache.includes(url)) {
      await preloadImage(url);
    }
  }
}
