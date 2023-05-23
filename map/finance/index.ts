import type { MapCategory } from '@site/map/lib/types';

export default {
  id: 'finance',
  items: [
    {
      id: 'kapitalbank',
      label: 'Капиталбанк',
      location: [39.661755, 66.931671],
      yandexMap: 'https://yandex.uz/maps/org/44437340908',
      googleMap:
        'https://www.google.com/maps/place/Kapitalbank/@39.6616321,66.9292972,16.81z/data=!4m5!3m4!1s0x3f4d191474642f3f:0x5154c6ac495c16f0!8m2!3d39.6617394!4d66.9315682',
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
      googleMap:
        'https://www.google.com/maps/place/Aloqabank/@39.6560029,66.9571565,17z/data=!3m1!4b1!4m5!3m4!1s0x3f4d18db1e2c338f:0x75c74d13c30c1635!8m2!3d39.656003!4d66.9613837',
      web: 'https://aloqabank.uz/',
      phones: ['+998 66 231 10 00', '+998 66 231 59 00'],
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
      phones: ['+998 55 503 00 00'],
    },
    {
      label: 'InfinBANK',
      location: [39.64763, 66.954136],
      yandexMap: 'https://yandex.uz/maps/org/11009302757',
      web: 'https://www.infinbank.uz/',
      phones: ['+998 71 202 50 60', '+998 66 233 94 00'],
    },
    {
      label: 'Ипак Йули',
      location: [39.669628, 66.970113],
      yandexMap: 'https://yandex.uz/maps/org/115325291618/',
      web: 'https://ru.ipakyulibank.uz/physical/',
      facebook: 'https://www.facebook.com/ipakyulibankuz/',
      phones: ['+998 66 210 06 50', '+998 66 232 41 99'],
    },
    {
      label: 'Хамкорбанк (Золотая корона)',
      location: [39.646404, 66.929079],
      yandexMap: 'https://yandex.uz/maps/org/160218650277/',
      googleMap:
        'https://www.google.com/maps/place/Hamkorbank/@39.6464858,66.924767,17z/data=!3m1!4b1!4m5!3m4!1s0x3f4d19378c98573b:0x27c7669adb4e596e!8m2!3d39.6464859!4d66.9289942',
      web: 'https://hamkorbank.uz/',
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
