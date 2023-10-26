import type { MapCategory } from './lib/types';

export default {
  id: 'other',
  label: 'Другое',
  type: 'category',
  items: [
    {
      id: 'coworking',
      label: 'Коворкинг',
      icon: 'islands#grayPocketIcon',
      type: 'category',
      items: [
        {
          label: 'IT-Park',
          location: [39.64646, 66.923615],
          address: 'Амира Тимура 224',
          yandexMap: 'https://yandex.com/web-maps/org/it_park/167798656529/',
          twoGis: 'https://2gis.uz/samarkand/firm/70000001080015629',
          instagram: 'https://www.instagram.com/itpark_samarkand/',
          web: 'https://it-park.uz/ru/itpark',
          facebook: 'https://www.facebook.com/itparksamarkand/',
          phones: ['+998 (66) 222-0-333'],
          description:
            'Помимо прочего, самый бюджетный коворкинг в городе, 20,000 сум/день',
        },
        {
          label: 'BM Coworking',
          location: [39.681868, 66.933705],
          address: 'Рудаки 77',
          yandexMap: 'https://yandex.uz/maps/org/bm/178164911935/',
          twoGis: 'https://2gis.uz/samarkand/firm/70000001077209731',
          telegram: 'https://t.me/bmarketing2023',
          instagram: 'https://www.instagram.com/bm_coworking/',
          web: 'http://bmcoworking.uz/',
          phones: ['+998 (90) 198‒55‒00'],
          description: 'Первый частный коворкинг в Самарканде',
        },
        {
          label: 'Chill zone',
          location: [39.647076, 66.936083],
          address: 'Амира Тимура 103б',
          yandexMap: 'https://yandex.uz/maps/org/chill_zone/80630583977/',
          twoGis: 'https://2gis.uz/samarkand/firm/70000001079688154/',
          telegram: 'https://t.me/chillzone_sam',
          phones: ['+998 (99) 367-87-77'],
        },
      ],
    },
  ],
} satisfies MapCategory;
