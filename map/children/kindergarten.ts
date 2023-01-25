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
        'русскоговорящий персонал, видеонаблюдение.',
      phones: ['+998 (90) 466-66-63'],
      yandexMap: 'https://yandex.uz/maps/org/17687080372/',
    },
    {
      label: 'Golden Kids',
      location: [39.657199, 66.933438],
      description:
        'Садик полностью заполнен, поэтому попасть в него сложно. Набирают только в филиал в Саттепо.',
      yandexMap: 'https://yandex.uz/maps/org/sam_golden_kids/155836620224/',
      googleMap:
        'https://www.google.com/maps/place/Golden+kids/@39.6572441,66.9335268,15z/data=!4m5!3m4!1s0x0:0xdb8a435d17ebeda9!8m2!3d39.6572441!4d66.9335268',
      instagram: 'https://www.instagram.com/golden_kids_samarkand/',
    },
  ],
} as MapCategory;
