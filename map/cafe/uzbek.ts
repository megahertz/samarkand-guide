import { MapCategory } from '@site/map/lib/types';

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
          phones: ['+998 91 536 99 39'],
          yandexMap:
            'https://yandex.uz/maps/org/axmadjon_lux_osh/191720320054/',
          description:
            'Наверное, лучший плов в Самарканде. Люкс-плов с фирменной подачей',
        },
        {
          label: 'Mahallaosh',
          location: [39.666694, 66.945986],
          yandexMap: 'https://yandex.uz/maps/org/mahallaosh/69305080656',
          description:
            'Одно из немногих мест где плов можно поесть вечером. Готовят 2 раза в день - в 11:30 и 18:00',
        },
      ],
    },
    {
      label: 'Ismail Sofrasi',
      location: [39.682183, 66.924769],
      yandexMap: 'https://yandex.uz/maps/org/26116258263',
      description:
        'Лучшее сочетание цены/качества вокруг, все по домашнему. Всегда отличный плов. Самса трех видов.',
      tags: ['osh'],
    },
    {
      label: 'Karimbek',
      location: [39.64718, 66.936771],
      yandexMap: 'https://yandex.uz/maps/org/234049585658',
      description: 'Вкусно, хорошее обслуживание, уютная веранда',
      phones: ['+998 66 237 77 39'],
      tags: ['beer'],
    },
    {
      label: 'Ошхона возле ЖД больницы',
      location: [39.681562, 66.927972],
      yandexMap: 'https://yandex.uz/maps/org/27190141977',
      description:
        'Самый дешевый (40,000 порция) плов в Самарканде, при этом очень вкусный. Плов готовят только по будням. В воскресенье выходной.',
      tags: ['osh'],
    },
    {
      label: 'Розмарин',
      location: [39.675135, 66.928181],
      yandexMap: 'https://yandex.uz/maps/org/80972462029',
      description: 'Вкусно и недорого, плов только по будням',
      tags: ['osh', 'beer'],
    },
  ],
} as MapCategory;
