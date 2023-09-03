import type { MapCategory } from '@site/map/lib/types';

export default {
  id: 'transport',
  items: [
    {
      label: 'Аэропорт',
      location: [39.695772, 66.99094],
      icon: 'islands#blueAirportIcon',
      yandexMap: 'https://yandex.uz/maps/-/CCUvfKbt2A',
      googleMap: 'https://goo.gl/maps/DrPf9xQ9JwPTECVx8',
      web: 'https://www.uzbairports.uz/',
      facebook: 'https://www.facebook.com/airSkd/',
      telegram: 'https://t.me/uzbairportsuz',
      instagram: 'https://instagram.com/uzbekistanairports',
    },
    {
      label: 'Железнодорожный вокзал',
      location: [39.685366, 66.928879],
      icon: 'islands#blueRailwayIcon',
      yandexMap: 'https://yandex.uz/maps/-/CCUvfKqKlC',
      googleMap: 'https://goo.gl/maps/Bs5J2x1K4rbnwrdK9',
      telegram: 'https://t.me/uzrailways_uz',
      facebook: 'https://facebook.com/uzrailway',
      instagram: 'https://www.instagram.com/uzrailways_uz/',
      youtube: 'https://www.youtube.com/channel/UCeY51gW0ALT_9xR_fyB7xlg',
    },
    {
      label: 'Ташкентский пятак возле обсерватории Улугбека',
      id: 'tashkent-pyatok',
      location: [39.675929, 67.006052],
      icon: 'islands#blueAutoIcon',
      yandexMap: 'https://yandex.uz/maps/10334/samarkand/stops/1829361501/',
      description:
        'Стоянка такси до Ташкента. 400,000-500,000 сумов машина,' +
        '100,000-130,000 c человека. Также, отсюда могут отвезти в Бухару.' +
        'У обсерватории таксисты стоят в 2х местах. Внизу — не рекомендую. ' +
        'Наверху на парковке — основная масса. Если ехать не рано, то им ' +
        'надо дополнять машину и торгуются лучше.',
      tags: ['pyatok'],
    },
    {
      label: 'Шахрисабский пятак',
      location: [39.65315, 66.976097],
      icon: 'islands#blueAutoIcon',
      yandexMap: 'https://yandex.uz/maps/-/CCUoRWGpPD',
      description:
        'Стоянка такси до Шахрисабза. Прямо через дорогу от Регистана.',
      tags: ['pyatok'],
    },
    {
      label: 'Автостанция Кафтархона',
      location: [39.644007, 66.999194],
      icon: 'islands#blueMassTransitIcon',
      yandexMap: 'https://yandex.uz/maps/org/224734011015/',
      description:
        'Стоянка пригородных автобусов, Дамасов и таксистов. Отсюда можно ' +
        'доехать до Ургута, Джартепа (поселок возле пограничного пункта с ' +
        'Таджикистаном).',
      tags: ['pyatok'],
    },
  ],
  icon: 'islands#blueMassTransitIcon',
  label: 'Транспорт',
  type: 'category',
} satisfies MapCategory;
