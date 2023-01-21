import { MapCategory } from '@site/map/lib/types';

export default {
  id: 'transport',
  items: [
    {
      label: 'Аэропорт',
      location: [39.695772, 66.99094],
      icon: 'islands#blueAirportIcon',
      yandexMap: 'https://yandex.uz/maps/-/CCUvfKbt2A',
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
      telegram: 'https://t.me/uzrailways_uz',
      facebook: 'https://facebook.com/uzrailway',
      instagram: 'https://www.instagram.com/uzrailways_uz/',
      youtube: 'https://www.youtube.com/channel/UCeY51gW0ALT_9xR_fyB7xlg',
    },
    {
      label: 'Такси до Ташкента',
      location: [39.675929, 67.006052],
      icon: 'islands#blueAutoIcon',
      yandexMap: 'https://yandex.uz/maps/10334/samarkand/stops/1829361501/',
      description:
        'Стоянка Такси до Ташкента. От 400,000 сумов машина, от 100,000 с человека',
    },
  ],
  icon: 'islands#blueMassTransitIcon',
  label: 'Транспорт',
  type: 'category',
} as MapCategory;
