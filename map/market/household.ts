import type { MapCategory } from '../lib/types';

export default {
  id: 'household',
  label: 'Товары для дома',
  type: 'category',
  items: [
    {
      id: 'ikea',
      label: 'IKEA',
      type: 'category',
      hidden: true,
      items: [
        {
          label: 'Eco Home',
          address: 'г.Ташкент, Афросиёб 39 (м.Ойбек)',
          yandexMap: 'https://yandex.uz/maps/org/eco_home_ikea/128210546821/',
          twoGis: 'https://2gis.uz/tashkent/firm/70000001041136034',
          telegram: 'https://t.me/IkeaEcoHome',
          telegram2: 'https://t.me/Ikea_Oybek',
          instagram: 'https://www.instagram.com/ikea_ecohome/',
          phones: ['+998 (99) 047-74-47'],
          description: 'Возят на заказ за чуть меньшую цену чем у конкурентов',
        },
        {
          label: 'Scandi home',
          web: 'https://scandihome.uz/',
          address: 'Ташкент, Тимура Малика 3 (ТЦ Чимган)',
          yandexMap: 'https://yandex.com/maps/org/scandi_home/118039474363/',
          twoGis: 'https://2gis.uz/tashkent/firm/70000001037217286',
          telegram: 'https://t.me/Scandi_help',
          instagram: 'https://www.instagram.com/Scandihome.uz',
          phones: ['+998 (99) 187-88-88', '+998 (99) 993-94-95'],
          description: 'Возят на заказ',
        },
        {
          label: 'HOME+',
          web: 'https://homeplus.uz/',
          address: 'Ташкент, Ислама Каримова 17 (Цум, 2 этаж)',
          yandexMap: 'https://yandex.uz/maps/org/home_/137241527638/',
          twoGis: 'https://2gis.uz/tashkent/firm/70000001041687410',
          telegram: 'https://t.me/homeplus_consultant',
          instagram: 'https://www.instagram.com/homeplus_uzbekistan/',
          facebook: 'https://www.facebook.com/homeplusuzbekistan/',
          phones: ['+998 (90) 023-30-53'],
          description: 'Не возят на заказ',
        },
      ],
    },
    {
      label: 'Home market',
      location: [39.655114, 66.95694],
      yandexMap: 'https://yandex.uz/maps/org/home_market/82877578829/',
      twoGis: 'https://2gis.uz/samarkand/firm/70000001078513814',
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
      twoGis: 'https://2gis.uz/samarkand/firm/70000001078502416',
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
      twoGis: 'https://2gis.uz/samarkand/firm/70000001080321233',
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
      yandexMap:
        'https://yandex.com/web-maps/org/tovary_dlya_doma_i_remonta/23380603270/',
      twoGis: 'https://2gis.uz/samarkand/firm/70000001077171790/',
      description:
        'Один из лучших хозмагов. Большой ассортимент, приятные ' +
        'цены. В подвале находится строительный магазин. Выкладка там ' +
        'достаточно плотная, многие вещи не найти без помощи продавца.',
    },
  ],
} satisfies MapCategory;
