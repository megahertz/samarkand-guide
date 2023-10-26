import type { MapCategory } from '../lib/types';

export default {
  id: 'bazar',
  label: 'Рынки',
  type: 'category',
  items: [
    {
      label: 'Сиабский базар',
      location: [39.662401, 66.980703],
      yandexMap: 'https://yandex.uz/maps/org/229237297205/',
      googleMap: 'https://goo.gl/maps/8WWsPwoKN7QnkqQ67',
      description: 'Крупнейший рынок. Не работает по понедельникам.',
    },
    {
      label: 'Железнодорожный рынок',
      location: [39.682124, 66.930143],
      yandexMap: 'https://yandex.uz/maps/org/235666538486/',
      googleMap: 'https://goo.gl/maps/W57fkE9kMsMnjZEa8',
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
        'Рано утром фермеры привозят сюда свою продукцию и продают недорого. ' +
        'Также рынок примечателен большим количеством цветов и саженцев.',
    },
    {
      label:
        'Базар на Дальнем Лагере (Hazora/Muso Xonkeldiyev nomli buyum bozori)',
      location: [39.687412, 66.896273],
      yandexMap: 'https://yandex.uz/maps/org/104467559050/',
      googleMap: 'https://goo.gl/maps/pFj2E472B89JYCX96',
      video: 'lpsDaI6a1M0',
      description:
        'Работает по средам и выходным. Крупная барахолка, попадается ' +
        'антиквар. В глубине находится рынок подержаной мебели.',
    },
    {
      label: 'Янги Базар',
      location: [39.662713, 66.996225],
      yandexMap: 'https://yandex.com/web-maps/-/CDQgjL4B',
      googleMap: 'https://goo.gl/maps/TSZpsFb7UFxhTJzX6',
      description: 'Крупнейший вещевой рынок.',
    },
    {
      label: 'Первая остановка микрорайона',
      location: [39.661484, 66.921376],
      yandexMap: 'https://yandex.uz/maps/-/CCUzNUdvDD',
      description:
        'Небольшой продуктово-вещевой рынок. Специально ехать нет смысла, ' +
        'только если живете поблизости. Хотя, кто-то сюда специально за ' +
        'чемоданом приезжает.',
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
