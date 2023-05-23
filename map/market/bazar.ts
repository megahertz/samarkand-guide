import type { MapCategory } from '@site/map/lib/types';

export default {
  id: 'bazar',
  label: 'Рынки',
  type: 'category',
  items: [
    {
      label: 'Сиабский базар',
      location: [39.662401, 66.980703],
      yandexMap: 'https://yandex.uz/maps/org/229237297205/',
      googleMap:
        'https://www.google.com/maps/place/Siab+Bazar/@39.6619811,66.9798131,15z/data=!4m2!3m1!1s0x0:0x8663a8356a71c854?sa=X&ved=2ahUKEwiTyqLBvd78AhUWgv0HHYwhCm0Q_BJ6BQiRARAI',
      description: 'Крупнейший рынок. Не работает по понедельникам.',
    },
    {
      label: 'Железнодорожный рынок',
      location: [39.682124, 66.930143],
      yandexMap: 'https://yandex.uz/maps/org/235666538486/',
      googleMap:
        'https://www.google.com/maps/place/Railway+District+Market,+54+Rudakiy+St,+Samarkand+140100,+Uzbekistan/@39.682728,66.9280726,17z/data=!4m5!3m4!1s0x3f4d19a235860f75:0x83f538aab227c67f!8m2!3d39.6825491!4d66.9297392',
      description:
        'Второй по величине рынок. Много хозмагов. Самые интересные цены у ' +
        'продавцов в ближайшем к Беруни ряду, а так-же у тех кто за ' +
        'пределами рынка, на самой улице Беруни.',
    },
    {
      label: 'ДСК Базар (Damariq)',
      location: [39.664215, 66.910525],
      yandexMap: 'https://yandex.uz/maps/org/216933972161/',
      description:
        'Рано утром фермеры привозят сюда свою продукцию и продают недорого. Также рынок примечателен большим количеством цветов и саженцев.',
    },
    {
      label:
        'Базар на Дальнем Лагере (Hazora/Muso Xonkeldiyev nomli buyum bozori)',
      location: [39.687412, 66.896273],
      yandexMap: 'https://yandex.uz/maps/org/104467559050/',
      googleMap:
        'https://www.google.com/maps/place/Hazora+bozori/@39.6867725,66.8937467,17z/data=!4m12!1m6!3m5!1s0x0:0x3ef7e47ec83bb299!2sDamariq+Masjidi!8m2!3d39.6651442!4d66.9176099!3m4!1s0x3f4d1a223707053d:0xb24a04de7a05dd2c!8m2!3d39.687504!4d66.896274',
      description:
        'Работает по средам и выходным. Крупная барахолка, попадается антиквар. В глубине находится рынок подержаной мебели.',
    },
    {
      label: 'Янги Базар',
      location: [39.662713, 66.996225],
      yandexMap:
        'https://yandex.com/web-maps/10334/samarkand/?ll=66.996111%2C39.662310&mode=poi&poi%5Bpoint%5D=66.996225%2C39.662713&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D29763532774&z=17.24',
      googleMap:
        'https://www.google.com/maps/place/Yangi+bozor/@39.6632446,66.9955844,269m/data=!3m1!1e3!4m5!3m4!1s0x3f4d18a7080f0803:0xddc1269f95d57edd!8m2!3d39.6635338!4d66.9963326',
      description: 'Крупнейший вещевой рынок.',
    },
    {
      label: 'Первая остановка микрорайона',
      location: [39.661484, 66.921376],
      yandexMap: 'https://yandex.uz/maps/-/CCUzNUdvDD',
      description:
        'Небольшой продуктово-вещевой рынок. Специально ехать нет смысла, только если живете поблизости. Хотя, кто-то сюда специально за чемоданом приезжает.',
    },
    {
      label: 'Вещевой рынок около вокзала',
      location: [39.68542, 66.926635],
      yandexMap: 'https://yandex.uz/maps/-/CCUzNUHecC',
      description:
        'Не путать с железнодорожным. Он находится слева от вокзала. Недорогая одежда, особенно детская.',
    },
    {
      label: 'Крытый рынок',
      location: [39.655012, 66.958813],
      yandexMap:
        'https://yandex.uz/maps/org/kryty_rynok_bazar_bozori_central_market/191042139990/',
      description:
        'Небольшой рынок в центре города. Цены средние. Можно поменять валюту.',
    },
  ],
} satisfies MapCategory;
