import { MapCategory } from '@site/map/lib/types';

export default {
  id: 'communication',
  items: [
    {
      label: 'Главпочтамт',
      location: [39.654729, 66.959505],
      yandexMap: 'https://yandex.uz/maps/org/9410107127',
      web: 'https://pochta.uz/ru/',
    },
    {
      label: 'Билайн Makon Mall',
      location: [39.655434, 66.957364],
      icon: 'islands#redDotIcon',
      yandexMap: 'https://yandex.uz/maps/org/69286235146/',
      web: 'https://beeline.uz/ru',
      description: 'Центральный офис, симку лучше делать здесь.',
    },
  ],
  icon: 'islands#redPostIcon',
  label: 'Связь',
  type: 'category',
} as MapCategory;
