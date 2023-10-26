import type { MapCategory } from '../lib/types';

export default {
  id: 'mall',
  label: 'Торговые центры',
  type: 'category',
  items: [
    {
      label: 'Family Park',
      location: [39.663462, 66.907895],
      yandexMap: 'https://yandex.uz/maps/org/104778732221/',
      twoGis: 'https://2gis.uz/samarkand/firm/70000001077221362',
      googleMap: 'https://goo.gl/maps/SsY9YpPyNEneRBcu5',
      telegram: 'https://t.me/familyparkbymirankulgroup',
      facebook: 'https://www.facebook.com/familyparkuz/',
      instagram: 'https://www.instagram.com/family_park.uz/',
      youtube: 'https://www.youtube.com/channel/UCyh_xqaAIKjZ_0Qk7P8YKSg',
      phones: [
        '+998 (97) 928-29-99',
        '+998 (93) 664-07-30',
        '+998 (91) 531-62-70',
      ],
    },
    {
      label: 'Makon Mall (ГУМ)',
      location: [39.65523, 66.956999],
      yandexMap: 'https://yandex.uz/maps/org/50823680342/',
      twoGis: 'https://2gis.uz/samarkand/firm/70000001077785438',
      googleMap: 'https://goo.gl/maps/tFAMeLnWpefkcEv27',
      instagram: 'https://www.instagram.com/makonmall',
      facebook: 'https://www.facebook.com/makonmall',
      phones: ['+998 (90) 285-55-55'],
    },
    {
      label: 'M.Baraka (Корзинка)',
      location: [39.658147, 66.944444],
      yandexMap: 'https://yandex.uz/maps/org/101179618695/',
      twoGis: 'https://2gis.uz/samarkand/firm/70000001078338275',
      googleMap: 'https://goo.gl/maps/G4qpwrmZAj4LGZE37',
      instagram: 'https://www.instagram.com/mbaraka.uz/',
      phones: [
        '+998 (93) 330-14-13',
        '+998 (94) 478-14-14',
        '+998 (78) 210-14-14',
      ],
    },
    {
      label: 'Atlas',
      location: [39.64598, 66.924246],
      yandexMap:
        'https://yandex.uz/maps/10334/samarkand/house/Yk8YfwVkS0EBQF1jfXp1dHVrZA==',
      twoGis: 'https://2gis.uz/samarkand/firm/70000001079116021',
      phones: ['+998 (95) 611‒66‒66'],
    },
  ],
} satisfies MapCategory;
