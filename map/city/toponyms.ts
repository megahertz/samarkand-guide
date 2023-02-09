import { MapCategory, MapIcon } from '@site/map/lib/types';

const DISTRICT_ICON: MapIcon = 'islands#pinkCircleDotIcon';
const PLACE_ICON: MapIcon = 'islands#darkBlueCircleDotIcon';

export default {
  id: 'toponyms',
  label: 'Топонимы',
  type: 'category',
  items: [
    {
      label: 'Микрорайон',
      location: [39.661406, 66.92145],
      icon: DISTRICT_ICON,
      yandexMap: 'https://yandex.uz/maps/-/CCU7ALrDGC',
      description: 'Район советских пятиэтажек вокруг улицы Буюк Ипак Йули.',
    },
    {
      label: 'Вокзал',
      location: [39.682079, 66.928764],
      icon: DISTRICT_ICON,
      yandexMap: 'https://yandex.uz/maps/-/CCU7ALfHkB',
      description:
        'Все пространство вокруг железнодорожного вокзала, исключая ' +
        'территорию за железнодорожной линией.',
    },
    {
      label: 'Бульвар',
      location: [39.646514, 66.961418],
      icon: DISTRICT_ICON,
      yandexMap: 'https://yandex.uz/maps/-/CCU7APgFhC',
      description:
        'Прежние названия — Абрамовский Бульвар, Бульвар имени Горького. ' +
        'Университетский бульвар находится в центральной части Самарканда. ' +
        'В середине Университетского бульвара расположена аллея из высоких ' +
        'деревьев, благодаря этой аллее улица разделена на две части.',
    },
    {
      label: 'Согдиана',
      location: [39.659879, 66.910328],
      icon: DISTRICT_ICON,
      yandexMap: 'https://yandex.uz/maps/-/CCU7ATq5TA',
      description: 'Жилой массив к западу от Микрорайона.',
    },
    {
      label: 'Саттепо',
      location: [39.638453, 66.920034],
      icon: DISTRICT_ICON,
      yandexMap: 'https://yandex.uz/maps/-/CCU7ATbdPC',
      description: 'Жилой массив к югу от Микрорайона.',
    },
    {
      label: 'Мотрид/Карасу',
      location: [39.726768, 66.914152],
      icon: DISTRICT_ICON,
      yandexMap: 'https://yandex.uz/maps/-/CCU7AXFOKC',
      description: 'Массив новостроек к северу от вокзала.',
    },
    {
      label: 'Аэропорт',
      location: [39.691658, 66.989574],
      icon: DISTRICT_ICON,
      yandexMap: 'https://yandex.uz/maps/-/CCUCUWQG3A',
      description: 'Район вокруг улицы Ибн Сины, которая упирается в аэропорт.',
    },
    {
      label: 'За линией',
      location: [39.688565, 66.929397],
      icon: DISTRICT_ICON,
      yandexMap: 'https://yandex.uz/maps/-/CCUCUKHkgD',
      description:
        'Имеется ввиду пространство за железнодорожной линией к северу от ЖД ' +
        'вокзала. По большей части, здесь находятся махалли. Попасть туда ' +
        'можно не только на машине через автомобильный мост, но и через ' +
        'пешеходный мост справа от вокзала.',
    },
    {
      label: 'Джугутон / Джувутон / Еврейская махалля',
      location: [39.658467, 66.987169],
      icon: DISTRICT_ICON,
      yandexMap: 'https://yandex.uz/maps/org/223384751825/',
      description:
        'Махалля бухарских евреев. Большая часть евреев уже покинула ' +
        'Самарканд, тем не менее, синагога все еще действует. От таджикского ' +
        '«Джугут», «Джуут» — еврей, "-тон" означает место. В советское ' +
        'время — квартал "Восток".',
    },
    {
      label: 'Поворот',
      location: [39.667057, 66.926532],
      icon: PLACE_ICON,
      yandexMap: 'https://yandex.uz/maps/-/CCU7ETdZOB',
      description:
        'Перекресток 4 улиц: Буюк Ипак Йули, Спитамена, Беруни, Улугбека.',
    },
    {
      label: 'Богишамол',
      location: [39.661231, 66.937068],
      icon: PLACE_ICON,
      yandexMap: 'https://yandex.uz/maps/-/CCU7EXSdgC',
      description:
        'Перекресток Гагарина — Улугбека. В городе еще много мест с ' +
        'таким-же названием, например ЖК Богишамол, улица Богишамол, ' +
        'Богишамольский район, множество компаний с таким названием. ' +
        'Но по умолчанию подразумевается именно перекресток.',
    },
    {
      label: 'Мархабо',
      location: [39.652536, 66.923094],
      icon: PLACE_ICON,
      yandexMap: 'https://yandex.uz/maps/10334/samarkand/stops/1543142585/',
      description:
        'Назван в честь одноименного ресторана, так-же здесь находится ' +
        'одноименная остановка по улице Буюк Ипак Йули.',
    },
    {
      label: 'Панджаб',
      location: [39.643447, 66.929132],
      icon: PLACE_ICON,
      yandexMap: 'https://yandex.uz/maps/org/68385142160/',
      description: 'Иранский квартал вокруг иранского медресе.',
    },
    {
      label: 'Азиз базар / Строительная',
      location: [39.669959, 66.937447],
      icon: PLACE_ICON,
      yandexMap: 'https://yandex.uz/maps/-/CCU7E2B0xA',
      description:
        'Перекресток Гагарина — проспекта Навои Шох. Раньше здесь был ' +
        'одноименный рынок, сейчас на его месте строится торговый центр.',
    },
    {
      label: 'Кишмишка',
      location: [39.682285, 66.923761],
      icon: PLACE_ICON,
      yandexMap: 'https://yandex.uz/maps/10334/samarkand/geo/1522495290/',
      description:
        'Улица Ибн Холдуна. Топоним получил название из-за виноградного ' +
        'завода когда-то находившегося здесь.',
    },
    {
      label: 'Старый Билайн / Большой арык',
      location: [39.673955, 66.926007],
      icon: PLACE_ICON,
      yandexMap:
        'https://yandex.uz/maps/10334/samarkand/house/Yk8YfwVmSUUAQF1jfXp2cnVmYQ==/',
      description: 'Когда-то здесь был офис Билайна, теперь Корзинка Анжир.',
    },
    {
      label: 'Саодат',
      location: [39.680959, 66.932529],
      icon: PLACE_ICON,
      yandexMap: 'https://yandex.uz/maps/-/CCU7IAE6GD',
      description: 'По названию ресторана.',
    },
    {
      label: 'Арак завод',
      location: [39.651619, 66.969682],
      icon: PLACE_ICON,
      yandexMap: 'https://yandex.uz/maps/-/CCU7IAgI9B',
      description: 'Раньше здесь был спиртзавод, сейчас сквер возле Гур-Эмира.',
    },
    {
      label: 'Оби Рахмат',
      location: [39.674159, 67.000102],
      icon: PLACE_ICON,
      yandexMap: 'https://yandex.uz/maps/-/CCUCUWbSxA',
      description: 'Ориентир по названию ресторана.',
    },
    {
      label: 'Макаронка',
      location: [39.664666, 66.952549],
      icon: PLACE_ICON,
      yandexMap: 'https://yandex.uz/maps/-/CCUCU8rAcB',
      description: 'Топоним назван в честь макаронной фабрики.',
    },
    {
      label: 'Сам-Коч',
      location: [39.650266, 66.916218],
      icon: PLACE_ICON,
      yandexMap: 'https://yandex.uz/maps/-/CCUC4GH3xB',
      description:
        'Назван в честь расположенного рядом завод по производству ' +
        'автотранспорта SamKochAvto',
    },
  ],
} as MapCategory;
