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
      googleMap: 'https://goo.gl/maps/GyHcGrtygG1sB3h17',
      phones: ['+998 (95) 500-72-72'],
      web: 'https://www.lelit.uz/ru',
      telegram: 'https://t.me/sagexpress_samarqand',
      facebook: 'https://facebook.com/saggilamlari',
      instagram: 'https://www.instagram.com/lelittextile/',
      youtube: 'https://www.youtube.com/saggilamlari',
      description:
        'Не только ковры, но и очень качественное постельное белье LELIT ' +
        'местного производства.',
    },
    {
      label: 'Home market',
      location: [39.655114, 66.95694],
      yandexMap: 'https://yandex.uz/maps/org/home_market/82877578829/',
      googleMap: 'https://goo.gl/maps/MoDkh443peRx2cfS9',
      web: 'https://hm.uz/',
      telegram: 'https://t.me/hm_uz',
      instagram: 'https://www.instagram.com/homemarketuz/',
      facebook: 'https://www.facebook.com/homemarketuz/',
      phones: ['+998 (90) 285-55-55'],
      description:
        'Очень пытается быть похожим на IKEA, и это даже иногда получается. ' +
        'Большое разнообразие, от мебели до хозтоваров и одежды. Дороговато, ' +
        'но заглянуть точно стоит.',
    },
    {
      label: 'Carrefour',
      location: [39.662836, 66.908392],
      yandexMap: 'https://yandex.uz/maps/org/63594959414/',
      googleMap: 'https://goo.gl/maps/RPtpmhjowQLY8D858',
      web: 'https://www.carrefouruzbekistan.com/ru',
      instagram: 'https://www.instagram.com/carrefouruzbekistan/',
      description:
        'Дороговато, но можно разом купить много мелочевки в одном месте.',
    },
  ],
} satisfies MapCategory;
