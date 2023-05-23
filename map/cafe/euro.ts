import type { MapCategory } from '@site/map/lib/types';

export default {
  id: 'euro',
  label: 'Европейская кухня',
  type: 'category',
  items: [
    {
      label: 'T-Bone',
      location: [39.680329, 66.928444],
      yandexMap: 'https://yandex.uz/maps/org/142399652641',
      googleMap:
        'https://www.google.com/maps/place/T%C2%B7Bone+Cafe%26Bar/@39.66061,66.9377889,17z/data=!3m1!4b1!4m5!3m4!1s0x3f4d19183acab51b:0x7ca84b0cdee972b4!8m2!3d39.66061!4d66.9399776',
      facebook: 'https://facebook.com/tbonesamarkand',
      phones: ['+998 90 451 05 67'],
    },
    {
      label: 'La Esmeralda',
      location: [39.644626, 66.955554],
      yandexMap: 'https://yandex.uz/maps/org/115557029636',
      googleMap:
        'https://www.google.com/maps/place/LA+ESMERALDA/@39.6445986,66.9533017,17z/data=!3m1!4b1!4m5!3m4!1s0x3f4d19b8678dd817:0x6a963277b930c493!8m2!3d39.6445986!4d66.9554904',
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
} satisfies MapCategory;
