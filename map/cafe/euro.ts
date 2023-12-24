import type { MapCategory } from '../lib/types';

export default {
  id: 'european-food',
  label: 'Европейская кухня',
  type: 'category',
  items: [
    {
      label: 'Bellagio',
      location: [39.655202, 66.952212],
      yandexMap: 'https://yandex.uz/maps/org/182745931928/',
      twoGis: 'https://2gis.uz/samarkand/firm/70000001076977085',
      googleMap: 'https://maps.app.goo.gl/kJfjRYNRThxtyKH77',
      instagram: 'https://www.instagram.com/bellagio.restobar',
      web: 'https://taplink.cc/bellagio.restobar',
      phones: ['+998 (55) 702‒22‒20'],
      description:
        'Место с уютной верандой. Хорошее обслуживание и неплохая ' +
        'кухня. Вечером здесь тихо по местным меркам. Очень удобно ' +
        'собираться компанией, когда заранее неизвестно количество участников.',
      tags: ['bar'],
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
      yandexMap: 'https://yandex.uz/maps/org/142399652641',
      googleMap: 'https://goo.gl/maps/GuuB14tXGdcmKjVb6',
      twoGis: 'https://2gis.uz/samarkand/firm/70000001077520489',
      facebook: 'https://facebook.com/tbonesamarkand',
      phones: ['+998 (90) 451-05-67'],
    },
  ],
} satisfies MapCategory;
