import type { MapCategory } from '../lib/types';

export default {
  id: 'european-food',
  label: 'Европейская кухня',
  type: 'category',
  items: [
    {
      id: 'coffee-desserts',
      label: 'Кофе и десерты',
      type: 'category',
      items: [
        {
          label: 'Chocolate',
          location: [39.680329, 66.928444],
          yandexMap: 'https://yandex.uz/maps/org/154795109887/',
          googleMap: 'https://goo.gl/maps/9qapcRghkpoVqSRj8',
          instagram: 'https://instagram.com/chocolate_sweethome',
          phones: ['+998 (78) 210-00-80'],
          description:
            'Среднее качество блюд, хорошее обслуживание, можно поработать ' +
            'с ноутбуком',
          tags: ['coworking'],
        },
        {
          label: 'Coffee and more',
          location: [39.660272, 66.940277],
          address: 'Мирзо Улугбека 74',
          yandexMap: 'https://yandex.uz/maps/org/coffee_and_more/139647771656/',
          twoGis: 'https://2gis.uz/samarkand/firm/70000001077520475',
          googleMap: 'https://maps.app.goo.gl/vE5xprWfoToT6oBm6',
          openHours: [{ time: '09:00 – 03:00' }],
          description:
            'Самый вкусный кофе в городе и очень вкусные десерты. Отличное ' +
            'обслуживание и интерьер.',
        },
      ],
    },
    {
      label: 'Bellagio',
      location: [39.655202, 66.952212],
      yandexMap: 'https://yandex.uz/maps/org/182745931928/',
      twoGis: 'https://2gis.uz/samarkand/firm/70000001076977085',
      googleMap: 'https://maps.app.goo.gl/kJfjRYNRThxtyKH77',
      instagram: 'https://www.instagram.com/bellagio.restobar',
      web: 'https://taplink.cc/bellagio.restobar',
      phones: ['+998 (55) 702‒22‒20'],
      openHours: [{ time: '07:00 - 23:00' }],
      tags: ['bar'],
      description:
        'Место с уютной верандой. Хорошее обслуживание и неплохая ' +
        'кухня. Вечером здесь тихо по местным меркам. Очень удобно ' +
        'собираться компанией, когда заранее неизвестно количество участников.',
    },
    {
      label: 'Coffee House El-Merosi',
      location: [39.65687, 66.956305],
      yandexMap: 'https://yandex.uz/maps/org/223276756275/',
      twoGis: 'https://2gis.uz/samarkand/firm/70000001079840037',
      googleMap: 'https://maps.app.goo.gl/SdKxrX35B9AQpz1y8',
      instagram: 'https://www.instagram.com/coffeehouse_elmerosi',
      facebook: 'https://www.facebook.com/ElMerosiCoffeeHouse',
      address: 'Алишера Навои 29а',
      phones: ['+998 (66) 233‒81‒25', '+998 (91) 525‒00‒15'],
      openHours: [{ time: '07:00 - 23:00' }],
      tags: ['coffee', 'coworking'],
      description:
        'Театр, кафе, ресторан с террасой. В основном зале простовато ' +
        'но терраса очень уютная. Обслуживание на уровне. Очень вкусно. ' +
        'Здесь самый вкусный чизкейк в городе.',
    },
    {
      label: 'La Esmeralda',
      location: [39.644626, 66.955554],
      yandexMap: 'https://yandex.uz/maps/org/115557029636',
      twoGis: 'https://2gis.uz/samarkand/firm/70000001079915423/',
      googleMap: 'https://goo.gl/maps/UAvF8jaXA3mFQyJe7',
      instagram: 'https://www.instagram.com/laesmeralda.uz/',
      phones: ['+998 (33) 235-00-20'],
    },
    {
      label: 'Manresa',
      location: [39.657919, 66.928805],
      tags: ['asian-food'],
      yandexMap: 'https://yandex.uz/maps/org/manresa/197056860158/',
      twoGis: 'https://2gis.uz/samarkand/firm/70000001078508527',
      googleMap: 'https://maps.app.goo.gl/vLsfrffkWJv6Vc7C9',
      facebook: 'https://www.facebook.com/manresarest/',
      phones: ['+998 (66) 221-00-90'],
      description:
        'Один из лучших ресторанов в городе. Отличное обслуживание, ' +
        'необычный интерьер, разнообразная винная карта. Отлично готовят ' +
        'как японскую, так и европейскую кухню. Но вечером может быть ' +
        'достаточно шумно.',
    },
    {
      label: 'Roni Pizza Napoletana',
      location: [39.643509, 66.956753],
      tags: ['bar'],
      yandexMap:
        'https://yandex.uz/maps/org/roni_pizza_napoletana/21954682743/',
      twoGis: 'https://2gis.uz/samarkand/firm/70000001082338455',
      googleMap: 'https://maps.app.goo.gl/go5Sk8FyATQ5te36A',
      telegram: 'https://t.me/roni_uz_bot',
      web: 'https://ronipizza.uz/',
      instagram: 'https://www.instagram.com/ronipizzauz',
      facebook: 'https://www.facebook.com/ronipizzauz',
      address: 'Орзу Махмудов 20',
      openHours: [{ time: '11:00 - 23:00' }],
      phones: ['+998 (91) 136‒11‒88'],
      description:
        'Уютная сетевая пиццерия с отличным сервисом и, возможно, ' +
        'лучшими коктейлями в Самарканде.',
    },
    {
      label: 'Sogdiana',
      location: [39.647939, 66.960265],
      yandexMap: 'https://yandex.uz/maps/org/29376900650/',
      twoGis: 'https://2gis.uz/samarkand/firm/70000001076582591',
      googleMap: 'https://goo.gl/maps/ZwU4HYXGFSSqtVxf7',
      telegram: 'https://t.me/cafesogdiana',
      instagram: 'https://instagram.com/sogdiana.cafe',
      facebook: 'https://www.facebook.com/sogdiana.cafe',
      openHours: [{ time: '07:30 - 23:30' }],
      phones: ['+998 (97) 926‒00‒08'],
      description:
        'Одно из лучших кафе европейской кухни в городе. Находится в парке' +
        'Навои, так что терраса здесь с шикарным видом. Приятный интерьер. ' +
        'Кухня радует, есть вкусное мороженое собственного изготовления. Но ' +
        'есть и минусы. Если днем здесь играет приятный лаундж, то по ' +
        'вечерам музыка часто чуть громче чем хотелось бы и много народу. ' +
        'Качество обслуживание плавает. С пивом дела так себе. Зачастую, в ' +
        'наличии только дорогой и невкусный импорт из России. Но это ' +
        'компенсируется отличной, по местным меркам, винной картой.',
    },
    {
      label: 'T-Bone',
      location: [39.680329, 66.928444],
      address: 'Мирзо Улугбека 76',
      yandexMap: 'https://yandex.uz/maps/org/142399652641',
      googleMap: 'https://goo.gl/maps/GuuB14tXGdcmKjVb6',
      twoGis: 'https://2gis.uz/samarkand/firm/70000001077520489',
      facebook: 'https://facebook.com/tbonesamarkand',
      openHours: [
        { daysOfWeek: '1-6', time: '08:00 – 01:00' },
        { daysOfWeek: '7', time: '13:00 – 01:00' },
      ],
      phones: ['+998 (90) 451-05-67'],
      tags: ['asian-food'],
      description:
        'Приятная обстановка, вкусная еда, хорошее обслуживание. В основном, ' +
        'европейская кухня, но есть так-же грузинская и японская.' +
        'Разнообразная винная карта.',
    },
  ],
} satisfies MapCategory;
