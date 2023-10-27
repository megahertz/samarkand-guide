import type { MapCategory } from '../lib/types';

export default {
  id: 'asian-food',
  label: 'Азиатская кухня',
  type: 'category',
  items: [
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
