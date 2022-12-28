import { useEffect, useState } from 'react';

export default function createUseRequest<T extends (...args: any[]) => any>({
  cacheName,
  cacheLifeTime = 60 * 60 * 24,
  factory,
}: {
  cacheName: string;
  cacheLifeTime?: number;
  factory: T,
}): (...args: Parameters<T>) => ReturnType<T> {
  let promise;

  return (...args: Parameters<T>): ReturnType<T> => {
    const [cache, setCache] = useCache(cacheName, cacheLifeTime);
    const [response, setResponse] = useState(cache);

    useEffect(() => {
      if (response) {
        return;
      }

      promise = promise || factory(...args);
      promise
        .then((res) => {
          setCache(res);
          setResponse(res);
        })
        .catch((e) => console.debug(e))
    }, []);

    return response;
  };
}

function useCache(name, lifeTimeSec = 60 * 60 * 24, defaultValue = null) {
  const storage = useLocalStorage();
  let cachedData;

  if (storage) {
    const cachedString = storage.getItem(name);
    const cache = cachedString ? JSON.parse(cachedString) : {};
    cachedData = cache.expires * 1000 > Date.now() && cache.data;
  }

  return [cachedData || defaultValue, (updatedData) => {
    if (storage) {
      storage.setItem(name, JSON.stringify({
        expires: Math.round((Date.now() / 1000) + lifeTimeSec),
        data: updatedData,
      }));
    }
  }];
}

function useLocalStorage(): Storage | null {
  const storage = typeof window === 'object' && window && window.localStorage;
  return storage.getItem ? storage as any : null;
}
