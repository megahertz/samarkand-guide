import { MapCategory } from '@site/map/lib/types';

export default {
  id: 'transport',
  items: [
    {
      label: 'Аэропорт',
      location: [39.695772, 66.99094],
      icon: 'islands#blueAirportIcon',
      yandexMap: 'https://yandex.uz/maps/-/CCUvfKbt2A',
      googleMap:
        'https://www.google.com/maps/place/Samarkand+International+Airport+SKD/@39.6992192,66.9826964,17z/data=!3m1!4b1!4m5!3m4!1s0x3f4d186f52c226fd:0x116671ede6eaae78!8m2!3d39.6992192!4d66.9848851',
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
      googleMap:
        'https://www.google.com/maps/place/Zheleznodorozhnyy+Vokzal+Samarkand/@39.6812908,66.9261501,17z/data=!3m1!4b1!4m5!3m4!1s0x3f4d194010d17669:0x9bc25f008c4f5159!8m2!3d39.6812908!4d66.9283388',
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
