import { MapCategory } from '@site/map/lib/types';

// eslint-disable-next-line import/prefer-default-export
export const rootItem: MapCategory = {
  id: '',
  label: 'Карта Самарканда',
  type: 'category',
  items: [
    {
      id: 'cafe',
      items: [
        {
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
                  id: 'axmadjon',
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
                  yandexMap:
                    'https://yandex.uz/maps/org/mahallaosh/69305080656',
                  description:
                    'Одно из немногих мест где плов можно поесть вечером. Готовят 2 раза в день - в 11:30 и 18:00',
                },
              ],
            },
            {
              id: 'ismail',
              label: 'Ismail Sofrasi',
              location: [39.682183, 66.924769],
              yandexMap: 'https://yandex.uz/maps/org/26116258263',
              description:
                'Лучшее сочетание цены/качества вокруг, все по домашнему. Всегда отличный плов. Самса трех видов.',
              tags: ['osh'],
            },
          ],
        },
      ],
      icon: 'islands#orangeFoodIcon',
      label: 'Кафе и рестораны',
      type: 'category',
    },
    {
      id: 'children',
      items: [
        {
          label: 'Golden Kids Sattepo',
          location: [39.642423, 66.915968],
          price: [2000000],
          phones: ['+998915510505', '+998979142444'],
          description:
            'Основной филиал переполнен, поэтому новых детей берут во ' +
            'второй в Саттепо. С охраной, внутренним закрытым двором и бассейном ' +
            'на летнее время. Пятиразовое питание, 10 кружков: гимнастика ' +
            '(карате для мальчиков), ментальная математика, английский, ' +
            'шахматы/шашки, логопед, дефектолог, химическая лаборатория.',
          yandexMap: 'https://yandex.uz/maps/org/golden_kids_sattepo/',
          instagram: 'https://www.instagram.com/golden_kids_sattepo/',
        },
        {
          label: 'Wunderkind',
          price: [1800800],
          description: 'Большая территория, хорошее питание, логопед.',
          instagram: 'https://www.instagram.com/wunderkind_samarkand/',
        },
      ],
      icon: 'islands#darkBlueFamilyIcon',
      label: 'Дети',
      type: 'category',
    },
    {
      id: 'market',
      icon: 'islands#blueShoppingIcon',
      label: 'Торговля',
      type: 'category',
      items: [
        {
          id: 'grocery',
          label: 'Продукты',
          type: 'category',
          icon: 'islands#orangeShoppingIcon',
          items: [
            {
              id: 'korzinka',
              label: 'Korzinka',
              type: 'category',
              items: [
                {
                  id: 'korzinka-motrid',
                  label: 'Корзинка — Мотрид',
                  location: [39.717617, 66.932119],
                  yandexMap: 'https://yandex.uz/maps/org/123704214724/',
                  openHours: [{ time: '8:00 - 00:00' }],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
