import type { MapCategory } from '@site/map/lib/types';

export default {
  id: 'mall',
  label: 'Торговые центры',
  type: 'category',
  items: [
    {
      label: 'Family Park',
      location: [39.663462, 66.907895],
      yandexMap: 'https://yandex.uz/maps/org/104778732221/',
      googleMap:
        'https://www.google.com/maps/place/FAMILY+PARK/@39.6636748,66.9055996,17z/data=!3m1!4b1!4m5!3m4!1s0x3f4d190de18fc085:0xd85ce9a14443d55f!8m2!3d39.6636748!4d66.9077883',
      phones: ['+998 97 928 29 99', '+998 93 664 07 30', '+998 91 531 62 70'],
      telegram: 'https://t.me/familyparkbymirankulgroup',
      facebook: 'https://www.facebook.com/familyparkuz/',
      instagram: 'https://www.instagram.com/family_park.uz/',
      youtube: 'https://www.youtube.com/channel/UCyh_xqaAIKjZ_0Qk7P8YKSg',
    },
    {
      label: 'Makon Mall (ГУМ)',
      location: [39.65523, 66.956999],
      yandexMap: 'https://yandex.uz/maps/org/50823680342/',
      googleMap:
        'https://www.google.com/maps/place/Makon+Mall/@39.6552012,66.9548162,17z/data=!3m1!4b1!4m5!3m4!1s0x3f4d195bff7fc6ad:0xa33efee544c433f0!8m2!3d39.6552438!4d66.9570682',
      instagram: 'https://www.instagram.com/makonmall',
      facebook: 'https://www.facebook.com/makonmall',
      phones: ['+998 90 285 55 55'],
    },
    {
      label: 'M.Baraka (Корзинка)',
      location: [39.658147, 66.944444],
      yandexMap: 'https://yandex.uz/maps/org/101179618695/',
      googleMap:
        'https://www.google.com/maps/place/M.BARAKA/@39.6579828,66.9419765,17z/data=!3m1!4b1!4m5!3m4!1s0x3f4d197025fcb8ff:0x198897c7d98906c2!8m2!3d39.6579517!4d66.944275',
      instagram: 'https://www.instagram.com/mbaraka.uz/',
      phones: ['+998 93 330 14 13', '+998 94 478 14 14', '+998 782 10 14 14'],
    },
  ],
} satisfies MapCategory;
