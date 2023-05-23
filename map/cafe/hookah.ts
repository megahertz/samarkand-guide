import type { MapCategory } from '@site/map/lib/types';

export default {
  id: 'hookah',
  label: 'Кальянные',
  type: 'category',
  items: [
    {
      label: 'Lion Wise',
      location: [39.660167, 66.939616],
      yandexMap: 'https://yandex.uz/maps/org/lionwise/43826216715',
      googleMap:
        'https://www.google.com/maps/place/Lionwise+Hookah+%26+Bar/@39.6602008,66.9368344,17z/data=!3m1!4b1!4m6!3m5!1s0x3f4d19185307c667:0xe15921f7fe027d07!8m2!3d39.6602008!4d66.9394093!16s%2Fg%2F11pkbln1rq',
      instagram: 'https://www.instagram.com/barlionwise/',
      phones: ['+998 90 213 22 00'],
      description:
        'Табаки от местных дистрибьюторов (MastHave, Burn, Darkside...), ' +
        'хороший сервис, playstation, можно со своим алкоголем и едой, ' +
        'можно поработать с ноутбуком.',
      tags: ['work'],
    },
  ],
} satisfies MapCategory;
