import type { MapCategory } from '../lib/types';

export default {
  id: 'uzbek-food',
  label: 'Узбекская кухня',
  type: 'category',
  items: [
    {
      id: 'osh',
      label: 'Плов',
      type: 'category',
      items: [
        {
          label: 'Davlatjon osh',
          location: [39.667435, 66.943882],
          yandexMap: 'https://yandex.uz/maps/-/CDasuN0k',
          googleMap: 'https://maps.app.goo.gl/eh1xeNM9wV25awet7',
          description: 'Просто хороший плов. Работает без выходных',
        },
        {
          label: 'Joni Osh',
          location: [39.684263, 66.985654],
          yandexMap: 'https://yandex.uz/maps/org/200843248583/',
          twoGis: 'https://2gis.uz/samarkand/firm/70000001080309815',
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
          twoGis: 'https://2gis.uz/samarkand/firm/70000001080358787/',
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
      label: 'Gilos',
      location: [39.682526, 66.924402],
      yandexMap: 'https://yandex.uz/maps/org/101576968527',
      twoGis: 'https://2gis.uz/samarkand/firm/70000001080236399/',
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
      twoGis: 'https://2gis.uz/samarkand/firm/70000001080236290/',
      googleMap: 'https://goo.gl/maps/1oqwmjq1AJCEv8X8A',
      description:
        'Лучшее сочетание цены/качества вокруг, все по домашнему. ' +
        'C 12 до 13 бывает нужно подождать ' +
        'свободный столик, но не долго.',
    },
    {
      label: 'Karimbek',
      location: [39.64718, 66.936771],
      yandexMap: 'https://yandex.uz/maps/org/234049585658',
      twoGis: 'https://2gis.uz/samarkand/firm/70000001079904061/',
      googleMap: 'https://goo.gl/maps/gCdVX9ya88kw14j48',
      description: 'Вкусно, хорошее обслуживание, уютная веранда',
      phones: ['+998 (66) 237-77-39'],
      tags: ['beer'],
    },
    {
      label: 'Зебо-бахт',
      location: [39.681562, 66.927972],
      yandexMap: 'https://yandex.uz/maps/org/27190141977',
      twoGis: 'https://2gis.uz/samarkand/firm/70000001080228689/',
      description:
        'Самый дешевый (40,000 порция) плов в Самарканде, при этом очень ' +
        'вкусный. Плов готовят только по будням. В воскресенье выходной.',
      tags: ['osh'],
    },
    {
      label: 'Розмарин',
      location: [39.675135, 66.928181],
      yandexMap: 'https://yandex.uz/maps/org/80972462029',
      twoGis: 'https://2gis.uz/samarkand/firm/70000001076931319/',
      googleMap: 'https://goo.gl/maps/4xND92kMDvFaFBcB8',
      description:
        'Вкусно и недорого, плов только по будням. Немного европейской ' +
        'кухни, есть пиво.',
      tags: ['osh', 'beer'],
    },
  ],
} satisfies MapCategory;
