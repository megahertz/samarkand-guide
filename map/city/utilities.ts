import { MapCategory } from '@site/map/lib/types';

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
      phones: [
        '+998 (66) 233-12-12',
        '+998 (66) 233-12-15',
        '+998 (66) 233-41-79',
        '+998 (66) 233-12-15',
      ],
    },
  ],
} as MapCategory;
