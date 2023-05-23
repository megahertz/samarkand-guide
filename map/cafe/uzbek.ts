import type { MapCategory } from '@site/map/lib/types';

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
          label: 'Mahallaosh',
          location: [39.666694, 66.945986],
          yandexMap: 'https://yandex.uz/maps/org/mahallaosh/69305080656',
          googleMap:
            'https://www.google.com/maps/place/Mahallaosh/@39.6664377,66.944956,16.76z/data=!4m5!3m4!1s0x3f4d1949a577bc53:0x670ce4c5f311e86a!8m2!3d39.666687!4d66.9457258',
          description:
            'Одно из немногих мест где плов можно поесть вечером. Готовят 2 раза в день - в 11:30 и 18:00',
        },
      ],
    },
    {
      label: 'Ismail Sofrasi',
      location: [39.682183, 66.924769],
      yandexMap: 'https://yandex.uz/maps/org/26116258263',
      googleMap:
        'https://www.google.com/maps/place/%D0%9A%D0%B0%D1%84%D0%B5+-+Ismail+Sofrasi/@39.6820783,66.9225131,17z/data=!3m1!4b1!4m5!3m4!1s0x3f4d193b98cc0511:0x60bf7cc4bf51213f!8m2!3d39.6820799!4d66.924753',
      description:
        'Лучшее сочетание цены/качества вокруг, все по домашнему. Всегда отличный плов. C 12 до 13 бывает нужно подождать свободный столик, но не долго.',
      tags: ['osh'],
    },
    {
      label: 'Karimbek',
      location: [39.64718, 66.936771],
      yandexMap: 'https://yandex.uz/maps/org/234049585658',
      googleMap:
        'https://www.google.com/maps/place/Restaurant+%22KARIMBEK%22/@39.6470808,66.9359243,18.19z/data=!4m5!3m4!1s0x3f4d19305dfeb121:0x61ccc6c919db3bce!8m2!3d39.6471829!4d66.9367347',
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
      googleMap:
        'https://www.google.com/maps/place/Rozmarin/@39.6749983,66.9260022,17z/data=!3m1!4b1!4m5!3m4!1s0x3f4d1907425399f5:0x6dd77cfd5b0e84c!8m2!3d39.6749983!4d66.9281909',
      description: 'Вкусно и недорого, плов только по будням',
      tags: ['osh', 'beer'],
    },
  ],
} satisfies MapCategory;
