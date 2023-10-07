import type { MapCategory } from '../lib/types';

export default {
  id: 'bar',
  label: 'Бары',
  type: 'category',
  items: [
    {
      label: 'Blues Bar',
      location: [39.650955, 66.949074],
      yandexMap: 'https://yandex.uz/maps/org/211359353896/',
      googleMap: 'https://goo.gl/maps/Wfosg8ERnXwuVcCw6',
      instagram: 'https://www.instagram.com/cafe_blues_bar/',
      facebook: 'https://www.facebook.com/CafeBluesBar/',
      phones: ['+998 (91) 187-92-45', '+998 (91) 550-91-12'],
      description:
        'Наверное, самый стильный бар в Самарканде. Отличная кухня и ' +
        'алкогольная карта, обслуживание на уровне, живая музыка.',
    },
    {
      label: 'Sam Craft',
      location: [39.653029, 66.971264],
      yandexMap: 'https://yandex.uz/maps/org/sam_craft/55968829047/',
      googleMap: 'https://goo.gl/maps/cULduP5VKeofMvnv8',
      instagram: 'https://www.instagram.com/samcraft_beer/',
      phones: ['+998 (95) 837-83-76', '+998 (99) 444-96-62'],
      description: 'Первый в городе релокантский крафтовый бар/магазин.',
    },
    {
      label: 'Sam Craft Pub',
      location: [39.643103, 66.935845],
      yandexMap: 'https://yandex.uz/maps/org/sam_craft_pub/225953215819/',
      instagram: 'https://www.instagram.com/samcraft_beer/',
      phones: ['+998 (95) 837-83-76', '+998 (99) 444-96-62'],
      description:
        'Второй (побольше) релокантский крафтовый бар. В плане' +
        'атмосферы, напитков и уровня обслуживания, сложно найти что-то ' +
        'лучше в городе. Очень разнообразная и интересная музыкальная ' +
        'подборка. Не хватает, разве что, полноценной кухни, здесь только ' +
        'закуски.',
    },
    {
      label: 'Пивной ресторан Хмельновъ',
      location: [39.660551, 67.056546],
      yandexMap: 'https://yandex.uz/maps/-/CDQgjMYV',
      description:
        'Ресторан при отеле Savitsky Plaza. Варят собственный крафт ' +
        'прямо в отеле. Пожалуй, это самое вкусное пиво в городе. Для ' +
        'знакомтсва со здешним пивом надо первым делом брать пивной сет. С ' +
        'террасы отличный вид на гребной канал и на закат. Меню не сильно ' +
        'разнообразно, но почти все готовят вкусно. Особенно рекомендую ' +
        'попробовать картошку фри с беконом или другим фирменным соусом — ' +
        'никогда не думал, что такое банальное блюдо можно сделать авторским.' +
        'Бургер тоже хорош. Правда, уровень обслуживания сильно плавает. Тем ' +
        'не менее, это одно из лучших мест в городе в моем личном рейтинге.',
    },
  ],
} satisfies MapCategory;
