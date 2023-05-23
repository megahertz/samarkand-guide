import type { MapCategory } from '@site/map/lib/types';

export default {
  id: 'utilities',
  icon: 'islands#blueHydroIcon',
  label: 'Коммунальные службы',
  type: 'category',
  items: [
    {
      id: 'sam-electricity',
      label: 'Самаркандская городская электросеть',
      location: [39.652036, 66.95151],
      yandexMap: 'https://yandex.uz/maps/org/224799588118/',
      googleMap:
        'https://www.google.com/maps/place/Samarqand+Shaxar+Elektroset/@39.6515348,66.9518127,18.16z/data=!4m6!3m5!1s0x3f4d19723f6eb367:0xfb74454ee208261f!8m2!3d39.6521422!4d66.9515466!16s%2Fg%2F11h6ptdkp5',
      web: 'https://het.uz/ru',
      telegram: 'https://t.me/HET_admin',
      phones: [
        '1154',
        '+998 (66) 233-12-12',
        '+998 (66) 233-12-15',
        '+998 (66) 233-41-79',
        '+998 (66) 233-12-15',
      ],
    },
    {
      id: 'sam-suv',
      label: 'Самарканд сув таъминоти / Водоканал',
      location: [39.639532, 66.940373],
      yandexMap: 'https://yandex.uz/maps/org/uzvodsnab/142337542459/',
      googleMap:
        'https://www.google.com/maps/place/Water+supply+management+of+the+city+of+Samarkand/@39.639147,66.9401662,18.67z/data=!4m14!1m7!3m6!1s0x3f4d1fd2c46798ad:0x8114222218761f0c!2sSamarkand+shahar+suv+ta%E2%80%99minoti+filiali!8m2!3d39.6412476!4d66.9545692!16s%2Fg%2F11sq82nnp7!3m5!1s0x3f4d198a75bba135:0x2d7b5b80ff265c6b!8m2!3d39.6395569!4d66.9403219!16s%2Fg%2F11j_1m07xp',
      web: 'https://uzsuv.uz/ru',
      telegram: 'https://t.me/samsuvhelp',
      instagram: 'https://instagram.com/UzSuvTaminot',
      facebook: 'https://facebook.com/UzSuvTaminot',
      youtube: 'https://www.youtube.com/channel/UCtXL7oflj4gKjfaLlsEFU_w',
      phones: [
        '+998 (66) 233-18-21',
        '+998 (95) 411-18-21',
        '+998 (66) 237-09-03',
      ],
      description: 'По поводу оплаты/лицевого счета https://t.me/samsuvpayme',
    },
    {
      id: 'sam-gaz',
      label: 'Горгаз / Uztransgaz',
      location: [39.666042, 66.924415],
      yandexMap: 'https://yandex.uz/maps/org/129747385260/',
      googleMap:
        'https://www.google.com/maps/place/Gas+Office/@39.6659809,66.9232306,18.23z/data=!4m6!3m5!1s0x3f4d195b7a549fc5:0xd45f939adfb5384d!8m2!3d39.666!4d66.9244412!16s%2Fg%2F11rf6nhqzx',
      telegram: 'https://t.me/uztransgazaj_info',
      web: 'https://utg.uz/ru/',
      instagram: 'https://www.instagram.com/uztransgazaj/',
      facebook: 'https://www.facebook.com/uztransgaz.uz',
      youtube: 'https://www.youtube.com/channel/UCNFs0WsXQUpPLdm2SmnKCvw',
      phones: [
        '1104',
        '+998 (66) 612-53-04',
        '+998 (66) 239-78-11',
        '+998 (66) 239-78-27',
      ],
    },
  ],
} satisfies MapCategory;
