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
            'Готовят 2 раза в день - в 11:30 и 18:00. Плов очень вкусный,' +
            'место уютное.',
        },
        {
          label: 'Polvonosh',
          location: [39.648722, 66.955921],
          yandexMap: 'https://yandex.uz/maps/org/polvonosh/9010273545',
          googleMap: 'https://maps.app.goo.gl/gJqmZT3NcDRY6LoUA',
          openHours: [{ daysOfWeek: '1-6', time: '8:00 - 15:00' }],
          description:
            'Плов на твердую пятерку. Помимо плова есть лагман, манты, ' +
            'шурпа, и что удивительно, пицца.',
        },
        {
          label: 'Ulfatlar',
          location: [39.649086, 66.935137],
          address: 'Гусейнова 46',
          yandexMap: 'https://yandex.uz/maps/org/204846027656/',
          twoGis: 'https://2gis.uz/samarkand/firm/70000001080620563',
          googleMap: 'https://maps.app.goo.gl/V4KjckYdadDxxi4k7',
          phones: ['+998 (93) 334‒07‒77', '+998 (66) 238‒83‒34'],
          description:
            'Один из номинантов на звание лучшего плова в городе. ' +
            'Заявлены также другие блюда, но все едут сюда за пловом.',
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
      label: 'Jasmin',
      location: [39.647945, 66.912815],
      yandexMap: 'https://yandex.uz/maps/org/9223113930/',
      twoGis: 'https://2gis.uz/samarkand/firm/70000001079719573',
      googleMap: 'https://maps.app.goo.gl/cgPBUDT6bUDbdSUW7',
      telegram: 'https://t.me/jasmindostavka_bot',
      instagram: 'https://www.instagram.com/jasminsamarkand',
      facebook: 'https://www.facebook.com/JasminSamarkand/',
      phones: ['+998 (97) 507‒90‒00'],
      openHours: [{ time: '9:00-23:00' }],
      description:
        'Примечателен там, что тут готовят редкие для Самарканда ' +
        'блюда, такие как норин, хоним, курутоб.',
      tags: ['beer'],
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
      label: 'Obid samsa',
      location: [39.662549, 66.914352],
      yandexMap: 'https://yandex.uz/maps/org/dilshod_samsa/151023893957/',
      openHours: [
        { daysOfWeek: '1-6', time: '8:30-15:00' },
        { daysOfWeek: '7', time: '8:30-15:00, 2 раза в месяц выходной' },
      ],
      phones: ['+998 (91) 527-41-11'],
      description:
        'Слоеная самса, в 2 раза крупнее обычной. Большой тандыр самсы ' +
        'расходится за 10-15 минут. Есть 2 вида: из баранины и говядины. ' +
        'Очень вкусно. За самсой приходится стоять в очереди. У заведения ' +
        'нет опознавательных знаков, просто дверь внутрь и много народу.',
    },
    {
      label: 'Qurutob.uz',
      location: [39.643171, 66.936155],
      yandexMap: 'https://yandex.uz/maps/org/207478437261/',
      twoGis: 'https://2gis.uz/samarkand/firm/70000001094648494',
      googleMap: 'https://maps.app.goo.gl/gryipAGdLEfx9urs5',
      instagram: 'https://www.instagram.com/aisha.ulmasova',
      phones: ['+998 (97) 396-86-61'],
      openHours: [{ time: '9:00-22:00' }],
      address: 'Фирдоуси, 94',
      description:
        'Курутоб — главное блюдо таджикской кухни, которое редко ' +
        'встретишь в Узбекистане. Готовят очень вкусно, качество не уступает ' +
        'лучшим курутобным Душанбе. Еще у них неплох холодец.',
    },
    {
      label: 'Un oshi ',
      location: [39.648905, 66.923632],
      yandexMap: 'https://yandex.uz/maps/org/140252258255/',
      twoGis: 'https://2gis.uz/samarkand/firm/70000001077391850',
      googleMap: 'https://maps.app.goo.gl/Ri5gTuPVSXsq93Mv9',
      instagram: 'https://www.instagram.com/un_oshi__restaurant',
      phones: ['+998 (66) 222‒24‒44'],
      openHours: [{ time: '10:00-23:00' }],
      description:
        'Хотя un oshi — это достаточно простой суп с тефтелями и ' +
        'домашней лапшой, здесь его делают изумительно. Также, здесь очень ' +
        'хороший шашлык. Летом работает терраса, есть даже разливное пиво.',
      tags: ['beer'],
    },
    {
      label: 'Розмарин',
      location: [39.675135, 66.928181],
      yandexMap: 'https://yandex.uz/maps/org/80972462029',
      twoGis: 'https://2gis.uz/samarkand/firm/70000001076931319/',
      googleMap: 'https://goo.gl/maps/4xND92kMDvFaFBcB8',
      telegram: 'https://t.me/rozmarin6888',
      instagram: 'https://www.instagram.com/rozmarin_samarkand',
      openHours: [
        { daysOfWeek: '1-6', time: '10:00-01:00' },
        { daysOfWeek: '7', time: '10:00-23:00' },
      ],
      phones: ['+998 (90) 101‒68‒88'],
      description:
        'Вкусно и недорого, чисто, аккуратно, неплохое обслуживание. ' +
        'В основном узбекская кухня и немного европейской, есть пиво. ' +
        'Плов — один из лучших в городе. Его готовят ' +
        'каждый день кроме воскресенья, к 13:30 уже может закончиться.',
      tags: ['osh', 'beer'],
    },
  ],
} satisfies MapCategory;
