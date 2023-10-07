import type { MapCategory } from '../lib/types';

export default {
  id: 'fastfood',
  label: 'Фастфуд',
  type: 'category',
  items: [
    {
      label: 'HAMD шаурма',
      location: [39.64527, 66.954753],
      yandexMap: 'https://yandex.uz/maps/org/13924186850/',
      googleMap: 'https://goo.gl/maps/VRxg2qPxfpk5vvzo7',
      phones: ['+998 (55) 701-09-09'],
    },
  ],
} satisfies MapCategory;
