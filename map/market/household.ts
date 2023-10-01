import type { MapCategory } from '@site/map/lib/types';

export default {
  id: 'household',
  label: 'Товары для дома',
  type: 'category',
  items: [
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
      label: 'Red tag',
      location: [39.658292, 66.944207],
      yandexMap: 'https://yandex.uz/maps/org/red_tag/32444389977/',
      googleMap: 'https://maps.app.goo.gl/HEcxKi9FfT5foBTX8',
      instagram: 'https://www.instagram.com/redtaguzbekistan/',
      phones: ['+998 (78) 140-14-14'],
      description:
        'Это больше магазин одежды, но так-же там есть неплохие ' +
        'товары для дома вроде посуды, декора и постельного белья хорошего ' +
        'качества.',
    },
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
      label: 'Хозмаг на Железнодорожном рынке',
      location: [39.683327, 66.930033],
      yandexMap: 'https://yandex.uz/maps/-/CDUDb-ZV',
      description:
        'Один из лучших хозмагов. Большой ассортимент, приятные ' +
        'цены. В подвале находится строительный магазин. Выкладка там ' +
        'достаточно плотная, многие вещи не найти без помощи продавца.',
    },
  ],
} satisfies MapCategory;
