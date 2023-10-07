import type { MapCategory } from '../lib/types';

export default {
  id: 'communication',
  icon: 'islands#redPostIcon',
  label: 'Связь',
  type: 'category',
  items: [
    {
      label: 'Главпочтамт',
      location: [39.654729, 66.959505],
      yandexMap: 'https://yandex.uz/maps/org/9410107127',
      googleMap: 'https://goo.gl/maps/gQYSxpVn4Pj4tNWe8',
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
} satisfies MapCategory;
