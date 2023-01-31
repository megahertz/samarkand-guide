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
  ],
} as MapCategory;
