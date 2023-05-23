import type { MapCategory } from '@site/map/lib/types';

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
      tags: ['kindergarten'],
      yandexMap: 'https://yandex.uz/maps/org/190271767898/',
      googleMap:
        'https://www.google.com/maps/place/Redbridge+Schools/@39.6547785,66.9538489,15z/data=!4m2!3m1!1s0x0:0x80f99e934e570d29?sa=X&ved=2ahUKEwj03MuKxdn8AhX8_rsIHbmhCbQQ_BJ6BAhlEAg',
      price: [2_550_000],
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
      tags: ['kindergarten'],
      yandexMap: 'https://yandex.uz/maps/org/239135647020/',
      googleMap:
        "https://www.google.com/maps/place/%22Istiqbolli+ta'lim%22+private+school/@39.6426137,66.9414677,15z/data=!4m2!3m1!1s0x0:0x5027229ceb5b48fc?sa=X&ved=2ahUKEwjlor660Nn8AhWAhP0HHQasALQQ_BJ6BAhyEAg",
      price: [2_700_000, 2_900_000],
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
      price: [2_400_000],
      phones: ['+998 (97) 391-52-53', '+998 (90) 270-98-37'],
    },
    {
      label: 'Cambridge International College',
      location: [39.663125, 66.948048],
      yandexMap: 'https://yandex.uz/maps/org/cic_school/149404516890/',
      price: [3_000_000, 3_400_000],
      googleMap:
        'https://www.google.com/maps/place/CIC+International+School/@39.6609088,66.9469788,21z/data=!4m12!1m6!3m5!1s0x3f4d197160c13865:0x3a91e3868487896!2sCIC+International+School!8m2!3d39.6609741!4d66.9470968!3m4!1s0x3f4d197160c13865:0x3a91e3868487896!8m2!3d39.6609741!4d66.9470968',
      web: 'https://college.cambridge.uz/',
      instagram: 'https://www.instagram.com/cic_school/',
      facebook: 'https://www.facebook.com/cicschooluz/',
      youtube: 'https://www.youtube.com/channel/UCHjVlTiU76jxoj4pZTjsAew',
      phones: ['+998 (99) 207-01-17'],
      description: 'С 5 по 11 класс.',
    },
    {
      label: 'Oxford International School',
      location: [39.647376, 66.934152],
      yandexMap:
        'https://yandex.com/maps/org/oxford_international_school/107766877240/',
      googleMap:
        'https://www.google.com/maps/place/Oxford+International+School/@39.6469708,66.9334618,15z/data=!4m2!3m1!1s0x0:0x6822a0faef8e9dc6?sa=X&ved=2ahUKEwjs_KOK39r8AhVNgf0HHYakAbQQ_BJ6BAhSEAg',
      web: 'http://www.oischool.uz/',
      telegram: 'https://t.me/oischooluz',
      instagram: 'https://www.instagram.com/oischool.uz/',
      facebook: 'https://www.facebook.com/oischool.uz',
      price: [3_000_000],
      phones: ['+998 95 411 00 22'],
      description: 'С 9 по 11 класс.',
    },
    {
      label: 'GLC',
      location: [39.670234, 66.92951],
      tags: ['kindergarten'],
      price: [1_800_000],
      description:
        'С 1 по 4 класс. Также учебный центр и садик. Основной ' +
        'офис на Рудаки, дополнительный на Беруни',
      phones: ['+998 (91) 229-09-92'],
      yandexMap: 'https://yandex.uz/maps/-/CCU7mHhOxC',
      googleMap:
        'https://www.google.com/maps/place/Global+language+center/@39.6792315,66.9388802,19.19z/data=!4m5!3m4!1s0x0:0xc662b216a098b3d5!8m2!3d39.6793642!4d66.9391772',
      telegram: 'https://t.me/+yT1d51nK0PU5ZDAy',
      instagram: 'https://www.instagram.com/glc.company/',
      facebook: 'https://www.facebook.com/groups/891478632049789',
      youtube: 'https://www.youtube.com/@glc147/about',
    },
    {
      id: 'tymur-fayz',
      label: 'Tymur Fayz',
      location: [39.650247, 66.940067],
      tags: ['kindergarten'],
      price: [2_600_000],
      yandexMap: 'https://yandex.uz/maps/org/4375381747/',
      googleMap:
        "https://www.google.com/maps/place/%22Timur+Fayz%22+nodavlat+maktabgacha+va+umumta'lim+muassasasi/@39.6502183,66.9398805,15z/data=!4m2!3m1!1s0x0:0xb26a8e95294b497c?sa=X&ved=2ahUKEwiA9bq7xuz8AhXRt6QKHbuOAEgQ_BJ6BAhGEAg",
      telegram: 'https://t.me/timurfayzscholl',
      instagram: 'https://www.instagram.com/timurfayz.uz/',
      phones: ['+998 (93) 035-41-50'],
      description:
        'Школа и детский сад. Хвалят за то что нагрузка не такая тяжелая как ' +
        'в других частных школах.',
    },
    {
      id: 'al-xorazmiy-school',
      label: 'Al-Xorazmiy school',
      location: [39.657778, 66.939625],
      tags: ['kindergarten'],
      price: [1_900_000, 2_400_000],
      yandexMap: 'https://yandex.uz/maps/org/224650435166/',
      googleMap:
        'https://www.google.com/maps/place/School+of+Al+Xorazmiy/@39.6585211,66.899195,13z/data=!4m10!1m2!2m1!1sSchool+of+Al+Xorazmiy!3m6!1s0x3f4d196091c205eb:0xa218b52f151e3b15!8m2!3d39.6585211!4d66.9387548!15sChVTY2hvb2wgb2YgQWwgWG9yYXptaXmSAQ5wcml2YXRlX3NjaG9vbOABAA!16s%2Fg%2F11rn0r9q2k',
      telegram: 'https://t.me/AlXorazmiy_school',
      facebook: 'https://www.facebook.com/alxorazmiy.uz',
      instagram: 'https://www.instagram.com/alxorazmiy.uz/',
      phones: ['+998 (94) 531-99-99', '+998 (94) 530-99-99'],
      description: 'Школа с физико-математическим уклоном. С 1 по 4 класс.',
    },
    {
      id: 'steam-school',
      label: 'Steam School',
      location: [39.657758, 66.937379],
      tags: ['kindergarten'],
      yandexMap:
        'https://yandex.uz/maps/10334/samarkand/house/Yk8YfwRnSkIOQF1jfXp0dntmbA==/',
      instagram: 'https://www.instagram.com/steam_school_for_kids/',
      phones: ['+998 (97) 924-21-25'],
      description:
        'Школа (пока 1 класс) и садик (включая ясли). Так-же подготовка к школе ' +
        'и продленка для 1-9 класса. Хвалят подготовку к школе. ' +
        'Видеонаблюдение только без удаленного доступа. Перерасчет ' +
        'по болезни делают неохотно',
    },
  ],
} satisfies MapCategory;
