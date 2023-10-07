import type { MapCategory } from '../lib/types';

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
          googleMap: 'https://goo.gl/maps/aQLfnJ3VZkEi7kJaA',
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
          googleMap: 'https://goo.gl/maps/V18pY2m2Z7cwfyDx7',
          description:
            'Одно из немногих мест где плов можно поесть вечером. ' +
            'Готовят 2 раза в день - в 11:30 и 18:00',
        },
        {
          label: 'Центр Плова №1',
          location: [39.681415, 66.984976],
          yandexMap: 'https://yandex.uz/maps/org/77650409051/',
          googleMap: 'https://goo.gl/maps/rCvhmt3YQEue8zgh9',
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
      googleMap: 'https://goo.gl/maps/1oqwmjq1AJCEv8X8A',
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
      googleMap: 'https://goo.gl/maps/gCdVX9ya88kw14j48',
      description: 'Вкусно, хорошее обслуживание, уютная веранда',
      phones: ['+998 (66) 237-77-39'],
      tags: ['beer'],
    },
    {
      label: 'Розмарин',
      location: [39.675135, 66.928181],
      yandexMap: 'https://yandex.uz/maps/org/80972462029',
      googleMap: 'https://goo.gl/maps/4xND92kMDvFaFBcB8',
      description:
        'Вкусно и недорого, плов только по будням. Немного европейской ' +
        'кухни, есть пиво.',
      tags: ['osh', 'beer'],
    },
  ],
} satisfies MapCategory;
