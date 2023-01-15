import { MapCategory } from '@site/src/pages/map/lib/types';

export default {
  id: 'kindergarten',
  label: 'Частные детские сады',
  type: 'category',
  items: [
    {
      label: 'Golden Kids',
      location: [39.657199, 66.933438],
      yandexMap: 'https://yandex.uz/maps/org/sam_golden_kids/',
      instagram: 'https://www.instagram.com/golden_kids_samarkand/',
    },
    {
      label: 'Golden Kids Sattepo',
      location: [39.642423, 66.915968],
      yandexMap: 'https://yandex.uz/maps/org/golden_kids_sattepo/',
      instagram: 'https://www.instagram.com/golden_kids_sattepo/',
    },
    {
      label: 'GLC',
      location: [39.670303, 66.929526],
      phones: ['+998 (90) 466-66-63'],
    },
  ],
} as MapCategory;
