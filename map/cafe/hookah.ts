import type { MapCategory } from '../lib/types';

export default {
  id: 'hookah',
  label: 'Кальянные',
  type: 'category',
  items: [
    {
      label: 'Lion Wise',
      location: [39.660167, 66.939616],
      yandexMap: 'https://yandex.uz/maps/org/lionwise/43826216715',
      googleMap: 'https://goo.gl/maps/sovUDy5Hoa4QJiy9A',
      instagram: 'https://www.instagram.com/barlionwise/',
      phones: ['+998 (90) 213-22-00'],
      description:
        'Табаки от местных дистрибьюторов (MastHave, Burn, Darkside...), ' +
        'хороший сервис, playstation, можно со своим алкоголем и едой, ' +
        'можно поработать с ноутбуком.',
      tags: ['work'],
    },
  ],
} satisfies MapCategory;
