import type { MapCategory, MapIcon } from '../lib/types';

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
      label: 'БАМ',
      location: [39.665321, 66.859099],
      icon: DISTRICT_ICON,
      yandexMap:
        'https://yandex.uz/maps/105810/samarqand-province/geo/1533238500/',
      description:
        'Крупный жилой массив поселка Супер. Назван так из-за ' +
        'высоких темпов строительства. Официально называется 29-й квартал.',
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
      label: 'Буюк / Олтын самарканд',
      location: [39.678263, 66.940249],
      icon: PLACE_ICON,
      yandexMap: 'https://yandex.uz/maps/org/155899067585/',
      description:
        'Перекресток Рудаки — Гагарина. На одной стороне находится' +
        'супермаркет Buyuk, на другой ресторан Oltin Samarqand.',
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
      label: 'Гор. ГАИ',
      location: [39.661428, 66.95357],
      icon: PLACE_ICON,
      yandexMap: 'https://yandex.uz/maps/org/36766274484/',
      description:
        'Госавтоинспекция города Самарканд. Не путать с Обл. ГАИ. ' +
        'Варианты: Городское ГАИ, Горгаи.',
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
        'От названия автобусной остановки у зоомагазина, старейшего в ' +
        'городе. От Регистана до поворота на Дагбитскую.',
    },
    {
      label: 'Икар',
      location: [39.67858, 66.95016],
      icon: PLACE_ICON,
      yandexMap: 'https://yandex.uz/maps/-/CDQcNAMM',
      description: 'По названию заправки, но это не точно.',
    },
    {
      label: 'Иняз',
      location: [39.65134, 66.964561],
      icon: PLACE_ICON,
      yandexMap: 'https://yandex.uz/maps/org/11436389847/',
      twoGis: 'https://2gis.uz/samarkand/firm/70000001077408924',
      description:
        'Самаркандский государственный институт иностранных языков (СамГИИЯ).',
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
      label: 'Красные дома',
      location: [39.680364, 66.939489],
      icon: PLACE_ICON,
      address: 'Ислохат 17',
      yandexMap: 'https://yandex.uz/maps/-/CDGtU4Jw',
      twoGis: 'https://2gis.uz/samarkand/geo/70030076619180328',
      description: 'Новостройки из красного кирпича за Узгазоил.',
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
      location: [39.718722, 66.933323],
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
      label: 'МЧС',
      location: [39.666915, 66.93773],
      icon: PLACE_ICON,
      yandexMap: 'https://yandex.uz/maps/org/87009485276/',
      twoGis: 'https://2gis.uz/samarkand/firm/70000001077390160',
      description: 'Управление по чрезвычайным ситуациям Самаркандской области',
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
      label: 'Областная больница',
      location: [39.660719, 66.942912],
      icon: PLACE_ICON,
      yandexMap: 'https://yandex.uz/maps/org/143613160289/',
      twoGis:
        'https://2gis.uz/samarkand/inside/70030076610836257/firm/70000001077377532',
    },
    {
      label: 'Обл. ГАИ',
      location: [39.676519, 66.912516],
      icon: PLACE_ICON,
      yandexMap: 'https://yandex.uz/maps/org/213939596730/',
      description:
        'Управление безопасности дорожного движения Самаркандской области, в ' +
        'прошлом Областная государственная автоинспекция Самаркандской области. ' +
        'Не путать с Гор ГАИ. Варианты: Облгаи, Областное ГАИ.',
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
      label: 'СамГАСИ / SamDAQI',
      location: [39.627126, 66.943078],
      icon: PLACE_ICON,
      yandexMap: 'https://yandex.uz/maps/org/46031549259/',
      description:
        'Самаркандский Государственный Архитектурно-Строительный университет ' +
        '(институт).',
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
      label: 'Сельский',
      location: [39.616012, 66.955702],
      icon: PLACE_ICON,
      yandexMap: 'https://yandex.uz/maps/-/CDbb5CPh',
      description:
        'Он же Сельский круг, Сельский рынок, Центральная больница ' +
        'Самаркандского района, Кожвендиспансер. ' +
        'От старого названия Сельского района',
    },
    {
      label: 'Сельхоз институт',
      location: [39.659935, 66.93234],
      icon: PLACE_ICON,
      yandexMap: 'https://yandex.uz/maps/org/95428374466/',
      description:
        'Иногда просто Сельхоз. Самаркандский государственный университет ' +
        'ветеринарной медицины, животноводства и биотехнологий. Раньше ' +
        'назывался Самаркандский сельскохозяйственный институт (СамСХИ).',
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
      label: 'Супер',
      location: [39.664808, 66.844392],
      icon: DISTRICT_ICON,
      yandexMap: 'https://yandex.uz/maps/geo/1508547754/',
      twoGis: 'https://2gis.uz/samarkand/geo/70030076614907419',
      description:
        'Поселок на западе, входящий в состав Самарканда. Раньше ' +
        'назывался Суперфосфатный по градообразующему заводу. Сейчас ' +
        'называется Kimyogarlar (узб. Химики). Район девятиэтажек называется ' +
        'БАМ и часто используется как отдельный ориентир.',
    },
    {
      label: 'Узгазоил / Узбекнефтгаз',
      location: [39.680189, 66.938295],
      icon: PLACE_ICON,
      yandexMap: 'https://yandex.uz/maps/org/159142842034/',
      description:
        'Заправка. До 2017 называлась UzGazOil, позже компания ' +
        'переименовалась в Uzbekneftegaz. Но ориентир сохранил старое название.',
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
