import type { MapCategory } from '../lib/types';

export default {
  id: 'other',
  label: 'Другое',
  type: 'category',
  items: [
    {
      id: 'pork',
      label: 'Свинина',
      type: 'category',
      items: [
        {
          label: 'Дары Кавказа',
          location: [39.646601, 66.956315],
          yandexMap: 'https://yandex.uz/maps/org/91092407307/',
          googleMap:
            'https://www.google.com/maps/place/Kafe+%22Dary+Kavkaza%22/@39.6465584,66.9512931,17z/data=!3m1!4b1!4m6!3m5!1s0x3f4d190938606787:0xc093371d7eccc56e!8m2!3d39.6465544!4d66.956164!16s%2Fg%2F11s9jbr4k3?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D',
          twoGis: 'https://2gis.uz/samarkand/firm/70000001079695420/',
          facebook:
            'https://www.facebook.com/pages/%D0%94%D0%B0%D1%80%D1%8B-%D0%9A%D0%B0%D0%B2%D0%BA%D0%B0%D0%B7%D0%B0-%D0%A1%D0%B0%D0%BC%D0%B0%D1%80%D0%BA%D0%B0%D0%BD%D0%B4/273570699691219',
          openHours: [{ time: '10:00 - 23:00' }],
          phones: ['+998 (91) 530-35-80'],
          description: 'Рекомендуют попробовать коньяк.',
        },
        {
          label: 'Место встречи',
          location: [39.679453, 66.935349],
          yandexMap: 'https://yandex.uz/maps/org/mesto_vstrechi/56023111822/',
          twoGis: 'https://2gis.uz/samarkand/firm/70000001093071086',
          googleMap:
            'https://www.google.com/maps/place/Vstrecha+Krolikov/@39.6801875,66.9352515,18z/data=!4m14!1m7!3m6!1s0x3f4d19006d4c757b:0xf0ed8f4cb81b32ad!2sShashlychnaya+Tikhiy+Dvorik!8m2!3d39.6803625!4d66.9371094!16s%2Fg%2F11w3t51ssc!3m5!1s0x3f4d1958a3be25ad:0x8ac5439bd8a6f497!8m2!3d39.679386!4d66.935285!16s%2Fg%2F11q41l93dz?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D',
          openHours: [{ daysOfWeek: '1-6', time: '11:00 - 23:00' }],
          address: 'Рудаки 100',
          phones: ['+998 (90) 251‒79‒11'],
          description: 'Оно же просто Встреча, Встреча кроликов.',
        },
        {
          label: 'Старые друзья',
          location: [39.679879, 66.928605],
          yandexMap: 'https://yandex.uz/maps/org/172931374377/',
          googleMap:
            "https://www.google.com/maps/place/Shashlychnaya+%22Staryye+Druz'ya%22/@39.6799262,66.9258077,17z/data=!4m16!1m9!3m8!1s0x3f4d19e02da3815b:0x9c51f14789677493!2sShashlychnaya+%22Staryye+Druz'ya%22!8m2!3d39.6799221!4d66.9283826!9m1!1b1!16s%2Fg%2F11y1clxrxw!3m5!1s0x3f4d19e02da3815b:0x9c51f14789677493!8m2!3d39.6799221!4d66.9283826!16s%2Fg%2F11y1clxrxw?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D",
          twoGis: 'https://2gis.uz/samarkand/firm/70000001093099523/',
          openHours: [{ daysOfWeek: '1-6', time: '11:00 - 23:00' }],
          phones: ['+998 (90) 270-42-93'],
          address: 'Беруни 31',
          description: 'Шашлычная, хвалят домашнее вино.',
        },
        {
          label: 'Тихий дворик',
          location: [39.680678, 66.937687],
          yandexMap: 'https://yandex.uz/maps/org/204231749774/',
          twoGis: 'https://2gis.uz/samarkand/firm/70000001077209645/',
          googleMap:
            'https://www.google.com/maps/place/Shashlychnaya+Tikhiy+Dvorik/@39.6803625,66.9371094,3522m/data=!3m1!1e3!4m6!3m5!1s0x3f4d19006d4c757b:0xf0ed8f4cb81b32ad!8m2!3d39.6803625!4d66.9371094!16s%2Fg%2F11w3t51ssc?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D',
          instagram: 'https://www.instagram.com/shashliki_u_ashota',
          address: 'Ислохат 36',
          openHours: [{ time: '10:00 – 23:00' }],
          phones: ['+998 (98) 273-27-02', '+998 (91) 555‒47‒94'],
          description: 'Шашлычная, рекомендуют попробовать чалагач.',
        },
      ],
    },
  ],
} satisfies MapCategory;
