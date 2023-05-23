import type { MapCategory } from '@site/map/lib/types';

export default {
  id: 'desserts',
  label: 'Десерты',
  type: 'category',
  items: [
    {
      label: 'Chocolate',
      location: [39.680329, 66.928444],
      yandexMap: 'https://yandex.uz/maps/org/154795109887',
      googleMap:
        'https://www.google.com/maps/place/Cafe+Chocolate/@39.6802144,66.9261972,17z/data=!3m1!4b1!4m5!3m4!1s0x3f4d19a1ee2ed0d5:0xae93dc2f5143a8ba!8m2!3d39.6802144!4d66.9283859',
      instagram: 'https://instagram.com/chocolate_sweethome',
      phones: ['+998 78 210 00 80'],
      description:
        'Среднее качество блюд, хорошее обслуживание, можно поработать с ноутбуком',
      tags: ['euro', 'coffee', 'work'],
    },
  ],
} satisfies MapCategory;
