import type { MapCategory } from '../lib/types';

export default {
  id: 'asian-food',
  label: 'Азиатская кухня',
  type: 'category',
  items: [
    {
      label: '新疆风味 (Вкус Синьцзяна)',
      location: [39.648446, 66.923733],
      twoGis: 'https://2gis.uz/samarkand/firm/70000001095197163',
      phones: ['+998 (90) 061‒80‒13', '+998 (95) 858‒11‒33'],
      openHours: [{ time: '09:00-22:00' }],
      description:
        'Аутентичная китайская и уйгурская кухня. Хотя уйгурский лагман ' +
        'делают в каждом втором узбекском заведении, только здесь он будет ' +
        'настоящим, не в виде супа. Но качество может плавать, иногда блюда ' +
        'как будто более адаптированные.',
    },
    {
      label: '卢家小院儿 (Семья Лу)',
      location: [39.643143, 66.957345],
      yandexMap: 'https://yandex.uz/maps/org/125627761426/',
      twoGis: 'https://2gis.uz/samarkand/firm/70000001081856342',
      instagram: 'https://www.instagram.com/lu_family_01',
      address: 'Орзу Махмудова 22',
      phones: ['+998 (94) 486‒65‒22'],
      openHours: [{ time: '10:00-22:00' }],
      description:
        'Неплохой аутентичный китайский ресторан. Есть маленький магазин ' +
        'китайских продуктов.',
    },
    {
      label: 'Катана',
      location: [39.674159, 66.926908],
      yandexMap: 'https://yandex.uz/maps/org/katana/23079337511/',
      twoGis: 'https://2gis.uz/samarkand/firm/70000001076467249',
      googleMap: 'https://maps.app.goo.gl/Bm14DzFc1mYwoSAdA',
      telegram: 'https://t.me/katana_samarkand',
      facebook: 'https://www.facebook.com/katana.samarkand',
      instagram: 'https://www.instagram.com/katana_samarkand',
      phones: ['+998 (93) 722‒33‒44'],
      description:
        'Одни из лучших роллов в городе. Еще здесь очень годно делают кукси и ' +
        'пигоди. Из минусов - душно даже когда мало народу',
    },
  ],
} satisfies MapCategory;
