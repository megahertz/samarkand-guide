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
          label: 'Joni Osh',
          location: [39.684263, 66.985654],
          yandexMap: 'https://yandex.uz/maps/org/200843248583/',
          googleMap:
            'https://www.google.com/maps/place/Joni+Osh/@39.6206047,66.9547358,18z/data=!4m10!1m2!2m1!1sjoni+osh!3m6!1s0x3f4d1f030d7ef551:0x7b15e7231824c6d5!8m2!3d39.6206047!4d66.9560302!15sCghqb25pIG9zaFoKIghqb25pIG9zaJIBEHV6YmVrX3Jlc3RhdXJhbnSaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUjRaM1kzVkdoM1JSQULgAQA!16s%2Fg%2F11txdznf41?entry=ttu',
          instagram: 'https://www.instagram.com/joniosh_2/',
          description:
            'Одно из лучших мест в городе. Плов действительно ' +
            'хорош, но мне кажется, что не стоит того чтобы через весь город ' +
            'специально ехать. За пловом нужно стоять самому в очереди к ' +
            'ошпазу. Для кого-то это плюс, для кого-то минус. Работает без ' +
            'выходных',
        },
        {
          label: 'Mahallaosh',
          location: [39.666694, 66.945986],
          yandexMap: 'https://yandex.uz/maps/org/mahallaosh/69305080656',
          googleMap:
            'https://www.google.com/maps/place/Mahallaosh/@39.6664377,66.944956,16.76z/data=!4m5!3m4!1s0x3f4d1949a577bc53:0x670ce4c5f311e86a!8m2!3d39.666687!4d66.9457258',
          description:
            'Одно из немногих мест где плов можно поесть вечером. ' +
            'Готовят 2 раза в день - в 11:30 и 18:00',
        },
        {
          label: 'Центр Плова №1',
          location: [39.681415, 66.984976],
          yandexMap: 'https://yandex.uz/maps/org/77650409051/',
          googleMap:
            'https://www.google.com/maps/place/SAMARQAND+OSH+MARKAZI+N1+(%D0%A6%D0%B5%D0%BD%D1%82%D1%80+%D0%9F%D0%BB%D0%BE%D0%B2%D0%B0+N1)/@39.6810887,66.9845376,17.6z/data=!4m6!3m5!1s0x3f4d22774f114e6b:0xc60292275d360cc9!8m2!3d39.6816138!4d66.9846474!16s%2Fg%2F11c2q3q87p?entry=ttu',
          phones: ['+998 (93) 348-00-21'],
          description:
            'Одно из лучших мест в городе. На выбор плов из ' +
            'баранины и говядины. Работает без выходных. Просторный светлый ' +
            'зал, много народу, очень чисто, хорошее обслуживание.',
        },
      ],
    },
    {
      label: "Do'stlik",
      location: [39.674774, 66.928505],
      yandexMap: 'https://yandex.uz/maps/org/117662060564/',
      description:
        'Уютный внутренний дворик, вкусный плов, манты, шашлык. ' +
        'Есть пиво. По воскресеньям плова нет.',
    },
    {
      label: 'Gilos',
      location: [39.682526, 66.924402],
      yandexMap: 'https://yandex.uz/maps/org/101576968527',
      description:
        'Неплохая столовая, плов хорош, причем его готовят ' +
        'и по воскресеньям. В будни в обед довольно много народу, можно долго' +
        'ждать официанта. Специально сюда ехать не стоит, но если живете ' +
        'поблизости, то можно и сходить.',
    },
    {
      label: 'Ismail Sofrasi',
      location: [39.682183, 66.924769],
      yandexMap: 'https://yandex.uz/maps/org/26116258263',
      googleMap:
        'https://www.google.com/maps/place/%D0%9A%D0%B0%D1%84%D0%B5+-+Ismail+Sofrasi/@39.6820783,66.9225131,17z/data=!3m1!4b1!4m5!3m4!1s0x3f4d193b98cc0511:0x60bf7cc4bf51213f!8m2!3d39.6820799!4d66.924753',
      description:
        'Лучшее сочетание цены/качества вокруг, все по домашнему. ' +
        'Всегда отличный плов. C 12 до 13 бывает нужно подождать ' +
        'свободный столик, но не долго.',
      tags: ['osh'],
    },
    {
      label: 'Karimbek',
      location: [39.64718, 66.936771],
      yandexMap: 'https://yandex.uz/maps/org/234049585658',
      googleMap:
        'https://www.google.com/maps/place/Restaurant+%22KARIMBEK%22/@39.6470808,66.9359243,18.19z/data=!4m5!3m4!1s0x3f4d19305dfeb121:0x61ccc6c919db3bce!8m2!3d39.6471829!4d66.9367347',
      description: 'Вкусно, хорошее обслуживание, уютная веранда',
      phones: ['+998 (66) 237-77-39'],
      tags: ['beer'],
    },
    {
      label: 'Розмарин',
      location: [39.675135, 66.928181],
      yandexMap: 'https://yandex.uz/maps/org/80972462029',
      googleMap:
        'https://www.google.com/maps/place/Rozmarin/@39.6749983,66.9260022,17z/data=!3m1!4b1!4m5!3m4!1s0x3f4d1907425399f5:0x6dd77cfd5b0e84c!8m2!3d39.6749983!4d66.9281909',
      description:
        'Вкусно и недорого, плов только по будням. Немного европейской ' +
        'кухни, есть пиво.',
      tags: ['osh', 'beer'],
    },
  ],
} satisfies MapCategory;
