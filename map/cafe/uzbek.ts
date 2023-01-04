import { MapCategory } from '@site/src/pages/map/lib/types';

export default {
  id: 'uzbek',
  label: 'Узбекская кухня',
  type: 'category',
  items: [
    {
      id: 'osh',
      label: 'Плов',
      type: 'category',
      items: [
        {
          label: 'Axmadjon Lux Osh',
          location: [39.643081, 66.928084],
          description: 'Наверное, лучший плов в Самарканде',
        },
      ],
    },
    {
      label: 'Ismail Sofrasi',
      location: [39.682183, 66.924769],
      description:
        'Лучшее сочетание цены/качества вокруг, все по домашнему. Всегда отличный плов. Самса трех видов.',
      tags: ['osh'],
    },
  ],
} as MapCategory;
