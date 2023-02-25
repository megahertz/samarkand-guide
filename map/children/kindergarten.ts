import { MapCategory } from '@site/map/lib/types';

export default {
  id: 'kindergarten',
  label: 'Частные детские сады',
  type: 'category',
  items: [
    {
      label: 'Golden Kids Sattepo',
      location: [39.642423, 66.915968],
      price: [2000000],
      phones: ['+998915510505', '+998979142444'],
      description:
        'Основной филиал переполнен, поэтому новых детей берут во ' +
        'второй в Саттепо. С охраной, внутренним закрытым двором и бассейном ' +
        'на летнее время. Пятиразовое питание, 10 кружков: гимнастика ' +
        '(карате для мальчиков), ментальная математика, английский, ' +
        'шахматы/шашки, логопед, дефектолог, химическая лаборатория. Есть ' +
        'автобус который развозит детей за 500,000UZS в месяц.',
      yandexMap: 'https://yandex.uz/maps/org/golden_kids_sattepo/66955368051/',
      instagram: 'https://www.instagram.com/golden_kids_sattepo/',
    },
    {
      label: 'Wunderkind',
      price: [1800000],
      description: 'Большая территория, хорошее питание, логопед.',
      instagram: 'https://www.instagram.com/wunderkind_samarkand/',
    },
    {
      label: 'GLC',
      location: [39.670303, 66.929526],
      price: [1500000],
      description:
        'Трехразовое питание, кормят, с памперсом помогают, ' +
        'переодевают и вообще очень нежное отношение к детям, полностью ' +
        'русскоговорящий персонал, видеонаблюдение. Так-же подготовка к ' +
        'школе и начальная школа с 1 по 4 класс.',
      phones: ['+998 (91) 229-09-92'],
      yandexMap: 'https://yandex.uz/maps/org/76320782472/',
      telegram: 'https://t.me/+yT1d51nK0PU5ZDAy',
      instagram: 'https://www.instagram.com/glc.company/',
      facebook: 'https://www.facebook.com/groups/891478632049789',
      youtube: 'https://www.youtube.com/@glc147/about',
    },
    {
      label: 'Golden Kids',
      location: [39.657199, 66.933438],
      description:
        'Садик полностью заполнен, поэтому попасть в него сложно. Набирают ' +
        'только в филиал в Саттепо.',
      yandexMap: 'https://yandex.uz/maps/org/sam_golden_kids/155836620224/',
      googleMap:
        'https://www.google.com/maps/place/Golden+kids/@39.6572441,66.9335268,15z/data=!4m5!3m4!1s0x0:0xdb8a435d17ebeda9!8m2!3d39.6572441!4d66.9335268',
      instagram: 'https://www.instagram.com/golden_kids_samarkand/',
    },
    {
      label: "Ko'zmunchoq",
      location: [39.656376, 66.960152],
      yandexMap: 'https://yandex.uz/maps/org/198802123147/',
      instagram: 'https://www.instagram.com/kuzmunchoq07770/',
      phones: ['+998 (66) 231-07-77'],
      description: 'Отзываются хорошо, но мест мало',
    },
    {
      label: 'Kinder city',
      location: [39.658889, 66.930242],
      yandexMap: 'https://yandex.uz/maps/org/155755092380/',
      instagram: 'https://www.instagram.com/kinder_city_uz/',
      phones: ['+998 (97) 288-60-60', '+998 (93) 236-51-15'],
      description:
        'Сам садик неплохой, но к приходящим преподавателям, которые ' +
        'ведут занятия есть вопросы.',
    },
    {
      label: 'Лунтик',
      price: [1000000],
      description:
        'Новый садик на Узбекистанской. Обещают группы до 18 человек. ' +
        'Видеонаблюдение, за дополнительную плату можно оставить ребенка в ' +
        'садике на ночь.',
    },
    {
      label: 'Baby Angels',
      price: [1000000],
      description:
        'Маленький садик, с детьми гуляют, занятиями не нагружают, ' +
        'помещение проветривают. ул. Фирдоуси, 4/6.',
    },
  ],
} as MapCategory;
