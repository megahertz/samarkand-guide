import type { MapCategory } from '@site/map/lib/types';

export default {
  id: 'euro',
  label: 'Европейская кухня',
  type: 'category',
  items: [
    {
      label: 'La Esmeralda',
      location: [39.644626, 66.955554],
      yandexMap: 'https://yandex.uz/maps/org/115557029636',
      googleMap: 'https://goo.gl/maps/UAvF8jaXA3mFQyJe7',
      instagram: 'https://www.instagram.com/laesmeralda.uz/',
      phones: ['+998 (33) 235-00-20'],
    },
    {
      label: 'Sogdiana',
      location: [39.647939, 66.960265],
      yandexMap: 'https://yandex.uz/maps/org/29376900650/',
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
      facebook: 'https://facebook.com/tbonesamarkand',
      phones: ['+998 (90) 451-05-67'],
    },
  ],
} satisfies MapCategory;
