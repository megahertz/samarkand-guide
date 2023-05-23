import type { MapCategory } from '@site/map/lib/types';

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
      googleMap:
        'https://www.google.com/maps/place/Post+Office/@39.6546787,66.9573393,18z/data=!3m1!4b1!4m5!3m4!1s0x3f4d18da44ad43fd:0x1d0007e17ba9d0a3!8m2!3d39.6546787!4d66.9594529',
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
