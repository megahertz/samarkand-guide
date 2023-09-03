import type { MapCategory } from '@site/map/lib/types';

export default {
  id: 'desserts',
  label: 'Десерты',
  type: 'category',
  items: [
    {
      label: 'Chocolate',
      location: [39.680329, 66.928444],
      yandexMap: 'https://yandex.uz/maps/org/154795109887/',
      googleMap: 'https://goo.gl/maps/9qapcRghkpoVqSRj8',
      instagram: 'https://instagram.com/chocolate_sweethome',
      phones: ['+998 (78) 210-00-80'],
      description:
        'Среднее качество блюд, хорошее обслуживание, можно поработать ' +
        'с ноутбуком',
      tags: ['euro', 'coffee', 'work'],
    },
  ],
} satisfies MapCategory;
