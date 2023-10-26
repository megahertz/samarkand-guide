import type { MapCategory } from '../lib/types';

export default {
  id: 'grocery',
  label: 'Продукты',
  type: 'category',
  icon: 'islands#darkOrangeShoppingIcon',
  items: [
    {
      id: 'korzinka',
      label: 'Korzinka',
      type: 'category',
      telegram: 'https://t.me/korzinkauz',
      instagram: 'https://www.instagram.com/korzinkauz/',
      facebook: 'https://www.facebook.com/korzinkauz',
      web: 'https://korzinka.uz/',
      youtube: 'https://www.youtube.com/@korzinkauzb',
      items: [
        {
          label: 'Корзинка — Мотрид',
          location: [39.717617, 66.932119],
          yandexMap: 'https://yandex.uz/maps/org/123704214724/',
          twoGis:
            'https://2gis.uz/samarkand/branches/70000001076990024/firm/70000001079872840',
          openHours: [{ time: '8:00 - 00:00' }],
        },
        {
          label: 'Корзинка DISKONT, Вокзал',
          address: 'ул. Рудаки 54.',
          location: [39.682519, 66.930601],
          yandexMap: 'https://yandex.uz/maps/org/191146181348/',
          twoGis:
            'https://2gis.uz/samarkand/branches/70000001076990024/firm/70000001077171866',
          openHours: [{ time: '8:00 - 21:00' }],
        },
        {
          label: 'Корзинка — Anjir, Старый Билайн',
          address: 'ул. Беруни 56б',
          location: [39.674405, 66.926164],
          yandexMap: 'https://yandex.uz/maps/org/124060217179/',
          twoGis:
            'https://2gis.uz/samarkand/branches/70000001076990024/firm/70000001076990025',
          openHours: [{ time: '8:00 - 00:00' }],
        },
        {
          label: 'Корзинка — Гагарина, Бывший Makro',
          address: 'ул. Гагарина 86',
          location: [39.658417, 66.935889],
          yandexMap: 'https://yandex.uz/maps/org/149128938819/',
          twoGis:
            'https://2gis.uz/samarkand/branches/70000001076990024/firm/70000001077389578',
          openHours: [{ time: '8:00 - 00:00' }],
        },
        {
          label: 'Корзинка — Динамо, M.Baraka',
          address: 'ул. Мир Саид Барака 2',
          location: [39.658292, 66.944207],
          yandexMap: 'https://yandex.uz/maps/org/114874771350/',
          twoGis:
            'https://2gis.uz/samarkand/branches/70000001076990024/firm/70000001077743521',
          openHours: [{ time: '8:00 - 00:00' }],
        },
        {
          label: 'Корзинка — Атлас',
          address: 'ул. Буюк Ипак Йули 131б',
          location: [39.646176, 66.924256],
          yandexMap: 'https://yandex.uz/maps/org/92457012251/',
          twoGis:
            'https://2gis.uz/samarkand/branches/70000001076990024/firm/70000001077855273',
          openHours: [{ time: '8:00 - 23:00' }],
        },
      ],
    },
    {
      id: 'optovikuz',
      label: 'Optovik.uz',
      type: 'category',
      telegram: 'https://t.me/optovikuzsamarkand/',
      instagram: 'https://www.instagram.com/optovikuz/',
      facebook: 'https://www.facebook.com/optovikuzsamarkand/',
      web: 'http://optovikuz.com/ru/',
      items: [
        {
          label: 'Optovik.uz — Узбекистанская',
          address: 'Узбекистанская, 67а',
          location: [39.642316, 66.94649],
          yandexMap: 'https://yandex.uz/maps/org/optovik/6884964601/',
          twoGis: 'https://2gis.uz/samarkand/firm/70000001080099538',
          openHours: [{ time: '8:00 - 23:00' }],
        },
        {
          label: 'Optovik.uz — Динамо',
          address: 'ул. Мирзо Улугбека 39',
          location: [39.657809, 66.947213],
          yandexMap: 'https://yandex.uz/maps/org/226594219136/',
          twoGis: 'https://2gis.uz/samarkand/firm/70000001078517037',
          openHours: [{ time: '8:00 - 23:00' }],
        },
        {
          label: 'Optovik.uz — Окмачит, 21 школа',
          location: [39.621999, 66.994227],
          yandexMap: 'https://yandex.uz/maps/-/CDaAF-LY',
          openHours: [{ time: '8:00 - 23:00' }],
        },
      ],
    },
    {
      id: 'farvonuz',
      label: 'Farovon.uz',
      type: 'category',
      instagram: 'https://www.instagram.com/farovon_sam/',
      facebook: 'https://www.facebook.com/farovonsam/',
      items: [
        {
          label: 'Farvon.uz — Амира Темура',
          address: 'ул. Амира Темура 41',
          location: [39.651241, 66.951359],
          yandexMap: 'https://yandex.uz/maps/org/219656602876/',
          twoGis: 'https://2gis.uz/samarkand/firm/70000001079802788',
          openHours: [{ time: '7:00 - 23:00' }],
          phones: ['+998 (78) 210-00-01'],
        },
        {
          label: 'Farovon.uz — Germes',
          address: 'ул. Гагарина 101а',
          location: [39.655579, 66.936317],
          yandexMap: 'https://yandex.uz/maps/org/81001564551/',
          openHours: [{ time: '7:00 - 23:00' }],
          phones: ['+998 (66) 234-04-29'],
        },
      ],
    },
    {
      id: 'single-supermarkets',
      label: 'Одиночные супермаркеты',
      type: 'category',
      items: [
        {
          label: 'Asr Market',
          location: [39.651715, 66.923086],
          yandexMap: 'https://yandex.com/maps/-/CDawqJjP',
          twoGis: 'https://2gis.uz/samarkand/firm/70000001077391907/',
          googleMap: 'https://maps.app.goo.gl/m9mETgNVYrzrVHeq8',
          openHours: [{ time: '9:00 - 22:00' }],
          description: 'Лучший супермаркет в Мархабо',
        },
        {
          label: 'Vokzal Market',
          address: 'ул. Беруни 12',
          location: [39.682098, 66.928105],
          yandexMap:
            'https://yandex.uz/maps/org/bulochnaya_pekarnya/134973943789/',
          twoGis: 'https://2gis.uz/samarkand/firm/70000001080236311',
          openHours: [{ time: '7:00 - 22:00' }],
          description:
            'Удобный и недорогой супермаркет возле Вокзала. Специально ехать ' +
            'в него смысла нет, но стоит зайти если находитесь рядом.',
        },
        {
          label: 'Yuksalish',
          address: 'ул. Ибн Сино 4б',
          location: [39.690932, 66.988549],
          yandexMap: 'https://yandex.uz/maps/-/CDaANEII',
          twoGis: 'https://2gis.uz/samarkand/firm/70000001080161782',
          instagram: 'https://www.instagram.com/yuksalish_supermarket/',
          telegram: 'https://t.me/yuksalish_supermarket',
          openHours: [{ time: 'круглосуточно' }],
          description:
            'Круглосуточный супермаркет возле аэропорта с очень интересным ' +
            'ассортиментом, многие товары есть только здесь. Есть доставка ' +
            'с 9 до 21.',
        },
      ],
    },
    {
      id: 'mini-supermarkets',
      label: 'Мини-супермаркеты',
      icon: 'islands#yellowShoppingIcon',
      type: 'category',
      items: [
        {
          label: 'Kiwi',
          address: 'ул. Беруни 67',
          location: [39.676073, 66.927333],
          yandexMap: 'https://yandex.uz/maps/org/kiwi/106130061823/',
          telegram: 'https://t.me/kiwi_samarkand',
          instagram: 'https://www.instagram.com/kiwisamarkand/',
          facebook: 'https://www.facebook.com/kiwi.samarqand',
          openHours: [{ time: 'круглосуточно' }],
          phones: ['+998 (90) 250-20-02'],
          description:
            'Магазин неподалеку от Железнодорожного парка. Один из немногих ' +
            'супермаркетов, где продают алкоголь. Причем, много зарубежного ' +
            'алкоголя по очень приятным ценам. Так-же возят много всякой ' +
            'экзотики, например клешни камчатского краба (правда, дико ' +
            'перемороженные, судя по виду). Отвечают в социальных сетях, ' +
            'можно попросить что-нибудь привести. С 12:00 до 00:00 работает ' +
            'доставка, бесплатно от 150,000UZS.',
        },
        {
          label: 'Buyuk',
          address: 'ул. Гагарина 29',
          location: [39.678904, 66.940533],
          yandexMap: 'https://yandex.uz/maps/org/172805631788/',
          instagram: 'https://www.instagram.com/buyuksupermarket/',
          openHours: [{ time: '7:00 - 00:00' }],
          phones: ['+998 (78) 210-01-10'],
          description:
            'Eще один интересный магазин на пересечениии Рудаки / ' +
            'Гагарина.',
        },
        {
          label: 'Samyak',
          address: 'ул. Амира Тимура 17а',
          location: [39.65292, 66.957819],
          yandexMap: 'https://yandex.uz/maps/org/14048181921/',
          instagram: 'https://www.instagram.com/samyak.uz/',
          openHours: [{ time: 'круглосуточно' }],
          phones: ['+998 (95) 224-55-22'],
          description:
            'Маленький магазинчик, позиционирует себя как магазин ' +
            'премиальных продуктов. Возят всякую экзотику со всего мира. ' +
            'К примеру, японский Kitkat, корейскую лапшу, американские БАДы ' +
            'и прочее. Дорого, но если скучаете по чему-нибудь редкому, надо ' +
            'смотреть здесь. Заявлена круглосуточная доставка.',
        },
      ],
    },
  ],
} satisfies MapCategory;
