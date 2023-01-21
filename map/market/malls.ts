import { MapCategory } from '@site/map/lib/types';

export default {
  id: 'malls',
  label: 'Торговые центры',
  type: 'category',
  items: [
    {
      label: 'Family Park',
      location: [39.663462, 66.907895],
      yandexMap: 'https://yandex.uz/maps/org/104778732221/',
      phones: ['+998 97 928 29 99', '+998 93 664 07 30', '+998 91 531 62 70'],
      telegram: 'https://t.me/familyparkbymirankulgroup',
      facebook: 'https://www.facebook.com/familyparkuz/',
      instagram: 'https://www.instagram.com/family_park.uz/',
      youtube: 'https://www.youtube.com/channel/UCyh_xqaAIKjZ_0Qk7P8YKSg',
    },
    {
      label: 'Makon Mall',
      location: [39.65523, 66.956999],
      yandexMap: 'https://yandex.uz/maps/org/50823680342/',
      instagram: 'https://www.instagram.com/makonmall',
      facebook: 'https://www.facebook.com/makonmall',
      phones: ['+998 90 285 55 55'],
    },
    {
      label: 'M.Baraka (Корзинка)',
      location: [39.658147, 66.944444],
      yandexMap: 'https://yandex.uz/maps/org/101179618695/',
      instagram: 'https://www.instagram.com/mbaraka.uz/',
      phones: ['+998 93 330 14 13', '+998 94 478 14 14', '+998 782 10 14 14'],
    },
  ],
} as MapCategory;
