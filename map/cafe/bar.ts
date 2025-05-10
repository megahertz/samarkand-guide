import type { MapCategory } from '../lib/types';

export default {
  id: 'bar',
  label: 'Бары',
  type: 'category',
  items: [
    {
      label: 'The Beerman',
      location: [39.673425, 66.926319],
      yandexMap: 'https://yandex.uz/maps/org/11500858138/',
      twoGis: 'https://2gis.uz/samarkand/firm/70000001077239459',
      googleMap: 'https://maps.app.goo.gl/NMNk4dn1sxeMM8zY8',
      phones: ['+998 (91) 701‒00‒86', '+998 (66) 239‒66‒44'],
      openHours: [{ time: '11:00-23:00' }],
      address: 'Беруни 144а',
      description:
        'Этот бар попроще чем остальные заведения в списке. Тем не ' +
        'менее, он самый бюджетный из списка, но все еще достаточно хорош. ' +
        'По крайней мере, ничего лучше в районе Вокзала вы точно не найдете. ' +
        'Здесь достаточно большой выбор всегда свежего пива и отличная кухня.',
    },
    {
      label: 'Blues Bar',
      location: [39.650955, 66.949074],
      yandexMap: 'https://yandex.uz/maps/org/211359353896/',
      twoGis: 'https://2gis.uz/samarkand/firm/70000001078572957',
      googleMap: 'https://goo.gl/maps/Wfosg8ERnXwuVcCw6',
      instagram: 'https://www.instagram.com/cafe_blues_bar/',
      facebook: 'https://www.facebook.com/CafeBluesBar/',
      phones: ['+998 (91) 187-92-45', '+998 (91) 550-91-12'],
      openHours: [{ time: '12:00-03:00' }],
      address: 'Амира Тимура 66',
      description:
        'Наверное, самый стильный бар в Самарканде. Отличная кухня и ' +
        'алкогольная карта, обслуживание на уровне, живая музыка.',
    },
    {
      label: 'Green bear',
      location: [39.659432, 66.947486],
      yandexMap: 'https://yandex.uz/maps/org/198635066677/',
      twoGis: 'https://2gis.uz/samarkand/firm/70000001076995681',
      googleMap: 'https://maps.app.goo.gl/5LVsXz6XtfabQKnc7',
      instagram: 'https://www.instagram.com/greenbear.uz',
      facebook: 'https://www.facebook.com/greenbear.uz',
      phones: ['+998 (90) 212‒61‒03', '+998 (66) 233‒19‒96'],
      openHours: [{ time: '12:00-24:00' }],
      address: 'Pub street',
      description:
        'Популярный бар на Pub street. Отличная кухня с хорошим ' +
        'обслуживанием. На вечер лучше бронировать столики заранее.',
    },
    {
      label: 'Gusto Beer Garden',
      location: [39.660269, 66.947889],
      yandexMap: 'https://yandex.uz/maps/org/229572487620/',
      twoGis: 'https://2gis.uz/samarkand/firm/70000001090106741',
      googleMap: 'https://maps.app.goo.gl/9Vaq7NyrbQtxJ5vr6',
      instagram: 'https://www.instagram.com/gusto_restaurant_samarqand',
      phones: ['+998 (97) 936‒15‒51', '+998 (88) 753‒09‒09'],
      openHours: [{ time: '11:00-02:00' }],
      address: 'Pub street',
      description:
        'Очень уютное место с большим зелёным двориком на Pub street. Здесь ' +
        'часто бывают иностранцы, атмосфера дружелюбная и расслабленная. ' +
        'Особенно радует крафтовое пиво ХмельновЪ по самой низкой цене в ' +
        'городе. Отличное место для отдыха с друзьям.',
    },
    {
      label: 'Sam Craft',
      location: [39.653029, 66.971264],
      yandexMap: 'https://yandex.uz/maps/org/sam_craft/55968829047/',
      twoGis: 'https://2gis.uz/samarkand/firm/70000001080829151',
      googleMap: 'https://goo.gl/maps/cULduP5VKeofMvnv8',
      instagram: 'https://www.instagram.com/samcraft_beer/',
      phones: ['+998 (95) 837-83-76', '+998 (99) 444-96-62'],
      openHours: [{ time: '12:00-22:00' }],
      address: 'Регистанская 38а',
      description: 'Первый в городе релокантский крафтовый бар/магазин.',
    },
    {
      label: 'Sam Craft Pub',
      location: [39.653651, 66.972004],
      yandexMap: 'https://yandex.uz/maps/-/CDqHQBO9',
      twoGis: 'https://2gis.uz/samarkand/firm/70000001082515242',
      googleMap: 'https://maps.app.goo.gl/wE7Cwgc7hXAAfaFg7',
      instagram: 'https://www.instagram.com/samcraft_beer/',
      phones: ['+998 (95) 837-83-76', '+998 (99) 444-96-62'],
      openHours: [{ time: '15:00-02:00' }],
      address: 'Регистанская 2',
      description:
        'Второй (побольше) релокантский крафтовый бар, переехавший в новое' +
        'место. В плане атмосферы, напитков и уровня обслуживания, сложно ' +
        'найти что-то лучше в городе. Очень разнообразная и интересная ' +
        'музыкальная подборка.',
    },
    {
      label: 'Пивной ресторан ХмельновЪ',
      location: [39.660551, 67.056546],
      yandexMap: 'https://yandex.uz/maps/-/CDQgjMYV',
      twoGis: 'https://2gis.uz/samarkand/firm/70000001080063566',
      openHours: [{ time: '12:00-24:00' }],
      phones: ['+998 (55) 705‒55‒55'],
      description:
        'Ресторан при отеле Savitsky Plaza. Варят собственный крафт ' +
        'прямо в отеле. Пожалуй, это самое вкусное пиво в городе, а может и ' +
        'в Узбекистане. Для знакомства со здешним пивом надо первым делом ' +
        'брать дегустационный пивной сет. С террасы отличный вид на гребной ' +
        'канал и на закат. Меню не сильно разнообразно, но почти все готовят ' +
        'вкусно. Особенно рекомендую попробовать картошку фри с беконом или ' +
        'другим фирменным соусом — никогда не думал, что такое банальное ' +
        'блюдо можно сделать авторским. Бургер тоже хорош. Правда, уровень ' +
        'обслуживания очень посредственный, не смотря на высокий ценник. ' +
        'Тем не менее, это одно из лучших мест в городе в моем личном ' +
        'рейтинге, хотя бы за возможность посмотреть закат в красивом месте ' +
        'с бокалом вкусного пива.',
    },
  ],
} satisfies MapCategory;
