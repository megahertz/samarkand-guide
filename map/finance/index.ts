import type { MapCategory } from '../lib/types';

export default {
  id: 'finance',
  items: [
    {
      id: 'kapitalbank',
      label: 'Капиталбанк',
      location: [39.661755, 66.931671],
      yandexMap: 'https://yandex.uz/maps/org/44437340908',
      googleMap: 'https://goo.gl/maps/gYYnYvffT1xtoFfcA',
      web: 'https://kapitalbank.uz/ru/',
      facebook: 'https://facebook.com/kapitalbank.uz',
      youtube: 'https://www.youtube.com/channel/UCKC7eEVm_l8NPQcELlJjq4w/',
      phones: [
        '+998 (71) 200-150-15',
        '+998 (78) 210-00-60',
        '+998 (78) 210-00-62',
      ],
      description: 'Самый популярный у релокантов. Есть банкомат - обменник.',
    },
    {
      label: 'Алокабанк',
      location: [39.655918, 66.961566],
      yandexMap: 'https://yandex.uz/maps/org/32297819945/',
      googleMap: 'https://goo.gl/maps/YH5LLr9ZiASFSJgi7',
      web: 'https://aloqabank.uz/',
      phones: ['+998 (66) 231-10-00', '+998 (66) 231-59-00'],
      telegram: 'https://t.me/aloqabank',
      instagram: 'https://instagram.com/aloqabank.uz',
      facebook: 'https://www.facebook.com/aloqabank/',
      vkontakte: 'https://vk.com/aloqabank',
    },
    {
      label: 'Anorbank',
      location: [39.646877, 66.922152],
      yandexMap: 'https://yandex.uz/maps/org/anorbank/186260071927',
      web: 'https://anorbank.uz/',
      phones: ['+998 (55) 503-00-00'],
    },
    {
      label: 'Asia Alliance',
      location: [39.650611, 66.959582],
      yandexMap: 'https://yandex.uz/maps/org/218150937091/',
      googleMap: 'https://goo.gl/maps/mhdVdzzLFG2t2RBH6',
      web: 'https://aab.uz/ru',
      phones: [
        '+998 (66) 231-18-30',
        '+998 (71) 231-60-00',
        '+998 (66) 231-18-55',
      ],
      description:
        'Стали открывать карты нерезидентам, но делают это долго ' +
        'и неохотно. Проще и быстрее сделать в Ташкенте. Тем не менее, ' +
        'этот банк очень хвалят те кто получает зарубежные валютные платежи ' +
        'как самозанятый.',
    },
    {
      label: 'InfinBANK',
      location: [39.64763, 66.954136],
      yandexMap: 'https://yandex.uz/maps/org/11009302757',
      web: 'https://www.infinbank.uz/',
      phones: ['+998 (71) 202-50-60', '+998 (66) 233-94-00'],
    },
    {
      label: 'Ипак Йули',
      location: [39.669628, 66.970113],
      yandexMap: 'https://yandex.uz/maps/org/115325291618/',
      web: 'https://ru.ipakyulibank.uz/physical/',
      facebook: 'https://www.facebook.com/ipakyulibankuz/',
      phones: ['+998 (66) 210-06-50', '+998 (66) 232-41-99'],
    },
    {
      label: 'Хамкорбанк (Золотая корона)',
      location: [39.646404, 66.929079],
      yandexMap: 'https://yandex.uz/maps/org/160218650277/',
      googleMap: 'https://goo.gl/maps/mJzYJepW3xSKHetN9',
      web: 'https://hamkorbank.uz/',
      phones: ['+998 (78) 150-91-25'],
      description: 'С собой паспорт, оригинал регистрации и ПИНФЛ',
    },
    {
      label: 'Валютчики',
      location: [39.6816, 66.930643],
      yandexMap: 'https://yandex.uz/maps/-/CCUvfScnHA',
    },
  ],
  icon: 'islands#violetMoneyIcon',
  label: 'Финансы',
  type: 'category',
} satisfies MapCategory;
