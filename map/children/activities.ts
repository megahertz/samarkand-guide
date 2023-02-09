import { MapCategory } from '@site/map/lib/types';

export default {
  id: 'activities',
  icon: 'islands#darkBlueCircusIcon',
  label: 'Детские активности',
  type: 'category',
  items: [
    {
      label: 'Театр Чехова',
      location: [39.652138, 66.924288],
      icon: 'islands#darkBlueTheaterIcon',
      yandexMap: 'https://yandex.uz/maps/org/145511444183/',
      googleMap:
        'https://www.google.com/maps/place/Teatr+Imeni+Chekhova/@39.6551473,66.9206603,17z/data=!3m1!4b1!4m5!3m4!1s0x3f4d1941e0788809:0x814eb0448e259c7a!8m2!3d39.6551473!4d66.922849',
      web: 'https://samrusteatr.uz/',
      instagram: 'https://www.instagram.com/samrusteatrdrami/',
      facebook: 'https://www.facebook.com/samrusteatrdrami',
      youtube: 'https://www.youtube.com/c/samrusteatr',
      description:
        'Выступления проходят по воскресениям: в 11 детские, в 17 ' +
        'взрослые. Афиша и цены в группе на facebook.',
    },
    {
      label: 'Happy Land',
      icon: 'islands#darkBlueFoodIcon',
      location: [39.677479, 66.931349],
      yandexMap: 'https://yandex.uz/maps/-/CCU7mXQ~lD',
      instagram: 'https://www.instagram.com/happyland_samarkand/',
      facebook: 'https://www.facebook.com/happylandsamarkand/',
      phones: ['+998 (91) 700-33-23'],
      description:
        'Огромный комплекс лазилок. Очень вкусная пицца и ' +
        'цезарь. Могут дополнительно сделать фруктовую тарелку. Режим работы:' +
        'С 10 до 22 без выходных.',
    },
    {
      label: 'Детская площадка возле SAG',
      location: [39.679291, 66.90837],
      yandexMap: 'https://yandex.uz/maps/-/CCU7mLQTTA',
      description: 'Лучшая детская площадка в Самарканде',
    },
    {
      label: 'Железнодорожный парк (Ёшлик)',
      location: [39.676462, 66.930528],
      yandexMap: 'https://yandex.uz/maps/org/78568957866/',
      googleMap:
        'https://www.google.com/maps/place/Amusement+Park/@39.676627,66.9283677,401m/data=!3m1!1e3!4m5!3m4!1s0x3f4d19a0701cc943:0x48b044c9ead07561!8m2!3d39.6766271!4d66.9299253',
      description:
        'Парк получился перегружен аттракционами, зелени мало, в разгар ' +
        'выходного дня здесь достаточно шумно. Тем не менее, стоит сходить ' +
        'на колесо обозрения. С утра здесь относительно тихо и немноголюдно.',
    },
    {
      label: 'Центр развития ребенка Станция юных техников',
      location: [39.656288, 66.923384],
      yandexMap:
        'https://yandex.uz/maps/org/tsentr_razvitiya_rebyonka/52375842411/',
      description:
        'Множество различных детских секций собранных в одном ' +
        'месте. Очень демократичные цены.',
    },
    {
      label: 'Бассейн Дельфин',
      location: [39.655831, 66.923915],
      yandexMap: 'https://yandex.uz/maps/org/243700447513/',
      googleMap:
        'https://www.google.com/maps/place/DELFIN/@39.6561153,66.9234573,18.42z/data=!4m6!3m5!1s0x3f4d196a7dc2b8b1:0xeb1376151e343507!8m2!3d39.6559469!4d66.924248!16s%2Fg%2F1hdzmstp8',
      description:
        'Бассейн для взрослых и детей. Можно брать занятия у тренера. ' +
        'Правда, не очень хорошо отзываются о чистоте воды.',
    },
    {
      label: 'Детская футбольная секция',
      location: [39.682856, 66.925868],
      telegram: 'https://t.me/samarkand_football_school',
      yandexMap: 'https://yandex.uz/maps/-/CCUC4SwkwD',
      description:
        'Тренер: Харейдинов Азат Алиевич. Идёт набор в возрастные ' +
        'группы: 4-6 лет, 7-9 лет, ️10-13 лет, 14 лет и старше',
    },
    {
      label: 'Familyschool учебный центр',
      location: [39.649494, 66.934873],
      yandexMap: 'https://yandex.uz/maps/-/CCUC4Ss6pB',
      telegram: 'https://t.me/familyschoolsamarkand',
      phones: ['+998930393000', '+998930393999'],
      description: 'Мастер-классы, уроки рисования и т.п.',
    },
    {
      label: 'Интересная суббота',
      location: [39.656027, 66.957766],
      yandexMap: 'https://yandex.uz/maps/-/CCUC4WGM-B',
      telegram: 'https://t.me/interesnayasubbota',
      phones: ['+998901960880'],
      description:
        'Для всех, кто любит творить, предлагает мастер классы ' +
        'в различных направлениях: декупаж, свечи, уф смола, живопись ' +
        'и многое другое.',
    },
    {
      label: 'Детская библиотека',
      location: [39.65098, 66.95217],
      yandexMap: 'https://yandex.uz/maps/org/111109499805/',
      googleMap:
        'https://www.google.com/maps/place/Samarqand+viloyat+bolalar+kutubxonasi/@39.6515348,66.9518127,18.16z/data=!4m6!3m5!1s0x3f4d19d9d026f2d7:0x8c9069e20207e401!8m2!3d39.6510074!4d66.9522772!16s%2Fg%2F11ptvdm6ss',
      phones: ['+998 66 233 17 81'],
      description:
        'Книг на русском немного, но есть из чего выбрать. ' +
        'Регистрация делается быстро, нужен только загран паспорт. Книги ' +
        'выдают на 10 дней, можно продлевать по телефону.',
    },
  ],
} as MapCategory;
