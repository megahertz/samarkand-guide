import { MapCategory } from '@site/map/lib/types';

export default {
  id: 'school',
  label: 'Частные школы',
  type: 'category',
  icon: 'islands#darkBlueEducationIcon',
  items: [
    {
      id: 'redbridge',
      label: 'RedBridge',
      location: [39.64435, 66.940187],
      yandexMap: 'https://yandex.uz/maps/org/190271767898/',
      googleMap:
        'https://www.google.com/maps/place/Redbridge+Schools/@39.6547785,66.9538489,15z/data=!4m2!3m1!1s0x0:0x80f99e934e570d29?sa=X&ved=2ahUKEwj03MuKxdn8AhX8_rsIHbmhCbQQ_BJ6BAhlEAg',
      price: [2200000],
      web: 'https://redbridge.uz/',
      instagram: 'https://instagram.com/redbridgeschools',
      facebook: 'https://facebook.com/redbridgeschools.sam',
      phones: ['+998 97 288 19 19', '+998 91 525 34 65'],
      description:
        'Самая популярная школа у экспатов. Прежде всего примечательна' +
        'серьезным упором на английский. Много зарубежных (из-за' +
        'пределов постсоветских стран) преподавателей.',
    },
    {
      id: 'istiqbolli-talim',
      label: "Istiqbolli Ta'lim",
      location: [39.64273, 66.941251],
      yandexMap: 'https://yandex.uz/maps/org/239135647020/',
      googleMap:
        "https://www.google.com/maps/place/%22Istiqbolli+ta'lim%22+private+school/@39.6426137,66.9414677,15z/data=!4m2!3m1!1s0x0:0x5027229ceb5b48fc?sa=X&ved=2ahUKEwjlor660Nn8AhWAhP0HHQasALQQ_BJ6BAhyEAg",
      price: [2100000],
      web: 'https://istiqbollitalim.uz/',
      telegram: 'https://t.me/istiqbolli_talim',
      instagram: 'https://www.instagram.com/istiqbolli_talim/',
      facebook: 'https://www.facebook.com/Istiqbolli/',
      youtube: 'https://www.youtube.com/channel/UCLPIpy9ZBsJW1YnD9byx3Ow',
      phones: ['+998 (90) 461-20-20', '+998 (95) 411-20-20'],
    },
    {
      label: 'Samarkand Intellekt',
      location: [39.661093, 66.946501],
      yandexMap: 'https://yandex.uz/maps/org/207111845669/',
      telegram: 'https://t.me/intellekt_sam',
      instagram: 'https://www.instagram.com/samarkandintellekt/',
      facebook: 'https://www.facebook.com/samarkandintellekt',
      price: [2000000],
      phones: ['+998 (97) 391-52-53', '+998 (90) 270-98-37'],
    },
    {
      label: 'Cambridge International College',
      location: [39.663125, 66.948048],
      yandexMap: 'https://yandex.uz/maps/org/cic_school/149404516890/',
      googleMap:
        'https://www.google.com/maps/place/CIC+International+School/@39.6609088,66.9469788,21z/data=!4m12!1m6!3m5!1s0x3f4d197160c13865:0x3a91e3868487896!2sCIC+International+School!8m2!3d39.6609741!4d66.9470968!3m4!1s0x3f4d197160c13865:0x3a91e3868487896!8m2!3d39.6609741!4d66.9470968',
      web: 'https://college.cambridge.uz/',
      instagram: 'https://www.instagram.com/cic_school/',
      facebook: 'https://www.facebook.com/cicschooluz/',
      youtube: 'https://www.youtube.com/channel/UCHjVlTiU76jxoj4pZTjsAew',
      phones: ['+998 (99) 207-01-17'],
      description: 'С 5 по 11 класс.',
    },
  ],
} as MapCategory;
