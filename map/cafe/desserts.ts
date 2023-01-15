import { MapCategory } from '@site/src/pages/map/lib/types';

export default {
  id: 'desserts',
  label: 'Десерты',
  type: 'category',
  items: [
    {
      label: 'Chocolate',
      location: [39.680329, 66.928444],
      yandexMap: 'https://yandex.uz/maps/org/154795109887',
      instagram: 'https://instagram.com/chocolate_sweethome',
      phones: ['+998 78 210 00 80'],
      description:
        'Среднее качество блюд, хорошее обслуживание, можно поработать с ноутбуком',
      tags: ['euro', 'coffee', 'work'],
    },
  ],
} as MapCategory;
