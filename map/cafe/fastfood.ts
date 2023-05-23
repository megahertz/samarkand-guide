import type { MapCategory } from '@site/map/lib/types';

export default {
  id: 'fastfood',
  label: 'Fastfood',
  type: 'category',
  items: [
    {
      label: 'HAMD шаурма',
      location: [39.64527, 66.954753],
      yandexMap: 'https://yandex.uz/maps/org/13924186850/',
      googleMap:
        'https://www.google.com/maps/place/SHAURMA+HAMD+sns/@39.6451693,66.954635,17z/data=!4m5!3m4!1s0x3f4d1965f24296d5:0xa4bfc8a5849d13bf!8m2!3d39.6451693!4d66.954635',
      phones: ['+998 557 01 09 09'],
    },
  ],
} satisfies MapCategory;
