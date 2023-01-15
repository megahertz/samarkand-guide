import { MapCategory } from '@site/src/pages/map/lib/types';

export default {
  id: 'euro',
  label: 'Европейская кухня',
  type: 'category',
  items: [
    {
      label: 'T-Bone',
      location: [39.680329, 66.928444],
      yandexMap: 'https://yandex.uz/maps/org/142399652641',
      facebook: 'https://facebook.com/tbonesamarkand',
      phones: ['+998 90 451 05 67'],
    },
    {
      label: 'La Esmeralda',
      location: [39.644626, 66.955554],
      yandexMap: 'https://yandex.uz/maps/org/115557029636',
      instagram: 'https://www.instagram.com/laesmeralda.uz/',
      phones: ['+998 33 235 00 20'],
    },
    {
      label: 'Mozzarella',
      yandexMap: 'https://yandex.uz/maps/org/mozzarella/196027580034',
      location: [39.680636, 66.93079],
      phones: ['+998 66 229 22 76'],
      telegram: 'https://t.me/mozzarellaclub',
      description: 'Крафт, постоянное место мероприятий релокантов',
      tags: ['bar', 'beer'],
    },
  ],
} as MapCategory;
