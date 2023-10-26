import type { MapCategory } from '../../lib/types';
import playground from './playground';

export default {
  id: 'activities',
  icon: 'islands#darkBlueCircusIcon',
  label: 'Детские активности',
  type: 'category',
  items: [
    playground,
    {
      label: 'Театр Чехова',
      location: [39.652138, 66.924288],
      icon: 'islands#darkBlueTheaterIcon',
      yandexMap: 'https://yandex.uz/maps/org/145511444183/',
      twoGis: 'https://2gis.uz/samarkand/firm/70000001077798324',
      googleMap: 'https://goo.gl/maps/t9YHpwYajgyHGsTG9',
      web: 'https://samrusteatr.uz/',
      instagram: 'https://www.instagram.com/samrusteatrdrami/',
      facebook: 'https://www.facebook.com/samrusteatrdrami',
      youtube: 'https://www.youtube.com/c/samrusteatr',
      phones: ['998 (90) 600-17-26'],
      description:
        'Выступления проходят по воскресениям: в 11 детские, в 17 ' +
        'взрослые. Афиша и цены в группе на facebook.',
    },
    {
      label: 'Железнодорожный парк (Ёшлик)',
      location: [39.676462, 66.930528],
      yandexMap: 'https://yandex.uz/maps/org/78568957866/',
      twoGis: 'https://2gis.uz/samarkand/geo/70030076621371189/',
      googleMap: 'https://goo.gl/maps/23Xg3tBoo2X2haGr9',
      description:
        'Парк получился перегружен аттракционами, зелени мало, в разгар ' +
        'выходного дня здесь достаточно шумно. Тем не менее, стоит сходить ' +
        'на колесо обозрения. С утра здесь относительно тихо и немноголюдно.',
    },
    {
      label: 'Центр развития ребенка Баркамол Авлод',
      location: [39.656288, 66.923384],
      yandexMap:
        'https://yandex.uz/maps/org/tsentr_razvitiya_rebyonka/52375842411/',
      twoGis: 'https://2gis.uz/samarkand/firm/70000001078606709',
      description:
        'Множество различных детских секций собранных в одном месте. ' +
        'Очень демократичные цены. Старое название Станция юных техников.',
    },
    {
      label: 'Бассейн Дельфин',
      location: [39.655831, 66.923915],
      yandexMap: 'https://yandex.uz/maps/org/243700447513/',
      twoGis: 'https://2gis.uz/samarkand/firm/70000001078606728',
      googleMap: 'https://goo.gl/maps/vi8s5Bp3dc82zw3t9',
      description:
        'Бассейн для взрослых и детей. Можно брать занятия у тренера. ' +
        'Правда, не очень хорошо отзываются о чистоте воды.',
    },
    {
      label: 'Детская футбольная секция',
      location: [39.682856, 66.925868],
      telegram: 'https://t.me/samarkand_football_school',
      yandexMap: 'https://yandex.uz/maps/-/CCUC4SwkwD',
      description: 'Берут детей с 8 лет.',
    },
    {
      label: 'Familyschool учебный центр',
      location: [39.649645, 66.935353],
      yandexMap: 'https://yandex.uz/maps/-/CDaw6Ol0',
      twoGis: 'https://2gis.uz/samarkand/firm/70000001080620243',
      telegram: 'https://t.me/familyschoolsamarkand',
      phones: ['+998 (93) 039-30-00', '+998 (93) 039-39-99'],
      description: 'Мастер-классы, уроки рисования и т.п.',
    },
    {
      label: 'Интересная суббота',
      location: [39.656027, 66.957766],
      yandexMap: 'https://yandex.uz/maps/-/CCUC4WGM-B',
      telegram: 'https://t.me/interesnayasubbota',
      phones: ['+998 (90) 196-08-80'],
      description:
        'Для всех, кто любит творить, предлагает мастер классы ' +
        'в различных направлениях: декупаж, свечи, уф смола, живопись ' +
        'и многое другое.',
    },
    {
      label: 'Детская библиотека',
      location: [39.65098, 66.95217],
      yandexMap: 'https://yandex.uz/maps/org/111109499805/',
      twoGis: 'https://2gis.uz/samarkand/firm/70000001079836779',
      googleMap: 'https://goo.gl/maps/4FKuvWLmzBNk7BhC7',
      phones: ['+998 (66) 233-17-81'],
      description:
        'Книг на русском немного, но есть из чего выбрать. ' +
        'Регистрация делается быстро, нужен только загран паспорт. Книги ' +
        'выдают на 10 дней, можно продлевать по телефону.',
    },
    {
      label: 'Бумажная фабрика Мерос (Конигиль)',
      location: [39.666554, 67.033959],
      yandexMap: 'https://yandex.uz/maps/org/bumazhnaya_fabrika/127209835722/',
      googleMap: 'https://goo.gl/maps/cYvpByNWEFuXLHZ47',
      video: 'RHRw4qLXsRE',
      description:
        'На фабрике возрождена древняя традиция изготовления бумаги по ' +
        'старинным самаркандским технологиям. Место живописное: тенистые ' +
        'деревья, речка Сиаб, небольшая чайхана у входа, водяное колесо, ' +
        'украшенное старинными сосудами из которых льется вода. Здесь просто ' +
        'приятно прогуляться, таких мест у воды с бурной растительностью в ' +
        'городе не хватает. Также здесь налажено производство керамических ' +
        'изделий и изготовление растительного масла по старинным ' +
        'технологиям. Проводятся всевозможные мастер-классы.',
    },
  ],
} satisfies MapCategory;
