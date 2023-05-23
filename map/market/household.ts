import type { MapCategory } from '@site/map/lib/types';

export default {
  id: 'household',
  label: 'Товары для дома',
  type: 'category',
  items: [
    {
      id: 'sag-lelit',
      label: 'SAG Express & LELIT',
      location: [39.680088, 66.908295],
      yandexMap: 'https://yandex.uz/maps/org/sag_express/29564550145/',
      googleMap:
        'https://www.google.com/maps/place/SAG+Express/@39.6799814,66.9063167,17.59z/data=!4m5!3m4!1s0x3f4d194519aff38b:0x9fc04bf5d8b70ab5!8m2!3d39.6799937!4d66.9075316',
      phones: ['+998 95 500 72 72'],
      web: 'https://www.lelit.uz/ru',
      telegram: 'https://t.me/sagexpress_samarqand',
      facebook: 'https://facebook.com/saggilamlari',
      instagram: 'https://www.instagram.com/lelittextile/',
      youtube: 'https://www.youtube.com/saggilamlari',
      description:
        'Не только ковры, но и очень качественное постельное белье LELIT местного производства',
    },
    {
      label: 'Home market',
      location: [39.655114, 66.95694],
      yandexMap: 'https://yandex.uz/maps/org/home_market/82877578829/',
      googleMap:
        'https://www.google.com/maps/place/Home+market/@39.6551357,66.9527081,17z/data=!3m1!4b1!4m5!3m4!1s0x3f4d19e05e479891:0x9aba2e67e39fd673!8m2!3d39.6551358!4d66.9569353',
      web: 'https://hm.uz/',
      telegram: 'https://t.me/hm_uz',
      instagram: 'https://www.instagram.com/homemarketuz/',
      facebook: 'https://www.facebook.com/homemarketuz/',
      phones: ['+998 90 285 55 55'],
      description:
        'Очень пытается быть похожим на IKEA, и это даже иногда получается. Большое разнообразие, от мебели до хозтоваров и одежды. Дороговато, но заглянуть точно стоит.',
    },
    {
      label: 'Carrefour',
      location: [39.662836, 66.908392],
      yandexMap: 'https://yandex.uz/maps/org/63594959414/',
      googleMap:
        'https://www.google.com/maps/place/Carrefour+Family+Park/@39.6633329,66.9064228,17z/data=!3m1!4b1!4m5!3m4!1s0x3f4d19160a152743:0xf748150a7f45778c!8m2!3d39.6633329!4d66.9086115',
      web: 'https://www.carrefouruzbekistan.com/ru',
      instagram: 'https://www.instagram.com/carrefouruzbekistan/',
      description:
        'Дороговато, но можно разом купить много мелочевки в одном месте',
    },
  ],
} satisfies MapCategory;
