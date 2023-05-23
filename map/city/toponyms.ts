import type { MapCategory, MapIcon } from '@site/map/lib/types';

const DISTRICT_ICON: MapIcon = 'islands#pinkCircleDotIcon';
const PLACE_ICON: MapIcon = 'islands#darkBlueCircleDotIcon';

export default {
  id: 'toponyms',
  label: 'Топонимы',
  type: 'category',
  items: [
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
      label: 'Арак завод',
      location: [39.651619, 66.969682],
      icon: PLACE_ICON,
      yandexMap: 'https://yandex.uz/maps/-/CCU7IAgI9B',
      description: 'Раньше здесь был спиртзавод, сейчас сквер возле Гур-Эмира.',
    },
    {
      label: 'Аэропорт',
      location: [39.691658, 66.989574],
      icon: DISTRICT_ICON,
      yandexMap: 'https://yandex.uz/maps/-/CCUCUWQG3A',
      description: 'Район вокруг улицы Ибн Сины, которая упирается в аэропорт.',
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
      label: 'Вокзал',
      location: [39.682079, 66.928764],
      icon: DISTRICT_ICON,
      yandexMap: 'https://yandex.uz/maps/-/CCU7ALfHkB',
      description:
        'Все пространство вокруг железнодорожного вокзала, исключая ' +
        'территорию за железнодорожной линией.',
    },
    {
      label: 'Геофизика',
      location: [39.683421, 66.986033],
      icon: PLACE_ICON,
      yandexMap: 'https://yandex.uz/maps/-/CCUK4MA8kB',
      description:
        'Ранее поселок Геофизиков, поселок Геологоразведка. Центральное ' +
        'предприятие поселка Самаркандгеология сохранилось до наших дней.',
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
      label: 'Зоологический',
      location: [39.653229, 66.973237],
      icon: PLACE_ICON,
      yandexMap: 'https://yandex.uz/maps/10334/samarkand/stops/4229125179/',
      description:
        'От названия автобусной остановки у зоомагазина, старейшего в городе. От Регистана до поворота на Дагбитскую.',
    },
    {
      label: 'Каримбек / Истыклол / Фрунзе',
      location: [39.647621, 66.936833],
      icon: PLACE_ICON,
      yandexMap: 'https://yandex.uz/maps/-/CCUKy-GADD',
      description:
        'Перекресток Амира Тимура / Гагарина. Первые два названия относятся ' +
        'к ресторанам на перекрестке. Фрунзе может подразумевать и саму улицу' +
        '(переименованную в Амира Тимура) и конкретно этот перекресток.',
    },
    {
      label: 'Кирпичка',
      location: [39.672364, 66.956686],
      icon: PLACE_ICON,
      yandexMap: 'https://yandex.uz/maps/-/CCUKy2Di0B',
      description:
        'По названию ранее существовавшего завода. От перекрестка' +
        'Рудаки/Ибн Сины (Академический лицей) до перекрестка' +
        'Рудаки/Курчатова (газовая заправка).',
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
      label: 'Лимонадка / Лимонадный базарчик',
      location: [39.644825, 66.969493],
      icon: PLACE_ICON,
      yandexMap: 'https://yandex.uz/maps/-/CCUK5Ug6kD',
      description:
        'Раньше здесь был лимонадный цех. Сейчас множество интересных кафе.',
    },
    {
      label: 'Макаронка',
      location: [39.664666, 66.952549],
      icon: PLACE_ICON,
      yandexMap: 'https://yandex.uz/maps/-/CCUCU8rAcB',
      description: 'Топоним назван в честь макаронной фабрики.',
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
      label: 'Микрорайон',
      location: [39.661406, 66.92145],
      icon: DISTRICT_ICON,
      yandexMap: 'https://yandex.uz/maps/-/CCU7ALrDGC',
      description: 'Район советских пятиэтажек вокруг улицы Буюк Ипак Йули.',
    },
    {
      label: 'Мотрид / Карасу',
      location: [39.726768, 66.914152],
      icon: DISTRICT_ICON,
      yandexMap: 'https://yandex.uz/maps/-/CCU7AXFOKC',
      description: 'Массив новостроек к северу от вокзала.',
    },
    {
      label: 'Музыкальный мост',
      location: [39.663217, 66.92301],
      icon: PLACE_ICON,
      yandexMap: 'https://yandex.uz/maps/-/CCUK5YWekD',
      description:
        'Когда-то здесь был железный мост. Когда по нему проезжала араба, ' +
        'получался красивый музыкальный звук. Моста уже давно нет, но ' +
        'название осталось.',
    },
    {
      label: 'Новый Билайн',
      location: [39.66354, 66.937571],
      icon: PLACE_ICON,
      yandexMap: 'https://yandex.uz/maps/-/CCUKyTcFoA',
      description:
        'Один офис Билайна закрылся, второй открылся. Так получился' +
        'Старый Билайн и Новый Билайн',
    },
    {
      label: 'Оби Рахмат',
      location: [39.674159, 67.000102],
      icon: PLACE_ICON,
      yandexMap: 'https://yandex.uz/maps/-/CCUCUWbSxA',
      description: 'Ориентир по названию ресторана.',
    },
    {
      label: 'Панджаб',
      location: [39.643447, 66.929132],
      icon: DISTRICT_ICON,
      yandexMap: 'https://yandex.uz/maps/org/68385142160/',
      description: 'Иранский квартал вокруг иранского медресе.',
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
      label: 'Сам-Коч',
      location: [39.650266, 66.916218],
      icon: PLACE_ICON,
      yandexMap: 'https://yandex.uz/maps/-/CCUC4GH3xB',
      description:
        'Назван в честь расположенного рядом завод по производству ' +
        'автотранспорта SamKochAvto',
    },
    {
      label: 'Саодат',
      location: [39.680959, 66.932529],
      icon: PLACE_ICON,
      yandexMap: 'https://yandex.uz/maps/-/CCU7IAE6GD',
      description: 'По названию ресторана.',
    },
    {
      label: 'Саттепо',
      location: [39.638453, 66.920034],
      icon: DISTRICT_ICON,
      yandexMap: 'https://yandex.uz/maps/-/CCU7ATbdPC',
      description: 'Жилой массив к югу от Микрорайона.',
    },
    {
      label: 'Сибирские пельмени',
      location: [39.645836, 66.9538],
      icon: PLACE_ICON,
      yandexMap: 'https://yandex.uz/maps/-/CCUK5Ex-KD',
      description:
        'В 90е здесь было несколько кафе в которых готовили пельмени.',
    },
    {
      label: 'Согдиана',
      location: [39.659879, 66.910328],
      icon: DISTRICT_ICON,
      yandexMap: 'https://yandex.uz/maps/-/CCU7ATq5TA',
      description: 'Жилой массив к западу от Микрорайона.',
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
      label: 'Ургутский базарчик',
      location: [39.64013, 66.942942],
      icon: PLACE_ICON,
      yandexMap: 'https://yandex.uz/maps/-/CCUK5EcetA',
      description: 'Когда-то здесь был базар.',
    },
    {
      label: 'Холодильник / Бывший холодильник',
      location: [39.639308, 66.93885],
      icon: PLACE_ICON,
      yandexMap: 'https://yandex.uz/maps/-/CCUSV0hBdA',
      description:
        'Раньше недалеко от пересечения Гагарина/Узбекистанской ' +
        'располагался завод холодильников.',
    },
    {
      label: 'Чайная фабрика',
      location: [39.669858, 66.926989],
      icon: PLACE_ICON,
      yandexMap: 'https://yandex.uz/maps/org/52791769061/',
      description:
        'Самаркандская чаеразвесочная фабрика была одной из крупнейших' +
        'в Средней Азии. В 2022 году снесена, сейчас на ее месте ' +
        'достраивается ЖК Bagishamal City. От фабрики остался фирменный ' +
        'магазин через дорогу.',
    },
  ],
} satisfies MapCategory;
