import { useEffect, useState } from 'react';

export default function createUseRequest<
  Result extends object,
  Args extends any[],
>({
  cacheName,
  cacheLifeTime = 60 * 60 * 24,
  factory,
}: {
  cacheName: string;
  cacheLifeTime?: number;
  factory: (...args: Args) => Promise<Result>;
}): (...args: Args) => Result | null {
  let promise: Promise<Result> | null = null;

  return (...args: Args): Result => {
    const [cache, setCache] = useCache(cacheName, cacheLifeTime);
    const [response, setResponse] = useState(cache);

    useEffect(() => {
      if (response) {
        return;
      }

      promise = promise || factory(...args);
      promise
        .then((resp) => {
          setCache(resp);
          setResponse(resp);
        })
        .catch((e) => console.debug(e));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return response;
  };
}

function useCache(
  name: string,
  lifeTimeSec = 60 * 60 * 24,
  defaultValue = null,
) {
  const storage = useLocalStorage();
  let cachedData;

  if (storage) {
    const cachedString = storage.getItem(name);
    const cache = cachedString ? JSON.parse(cachedString) : {};
    cachedData = cache.expires * 1000 > Date.now() && cache.data;
  }

  return [
    cachedData || defaultValue,
    (updatedData: object) => {
      if (storage) {
        storage.setItem(
          name,
          JSON.stringify({
            expires: Math.round(Date.now() / 1000 + lifeTimeSec),
            data: updatedData,
          }),
        );
      }
    },
  ];
}

function useLocalStorage(): Storage | null {
  const storage = (typeof window === 'object' &&
    window?.localStorage) as Storage | null;
  return storage?.getItem && (storage as any);
}
