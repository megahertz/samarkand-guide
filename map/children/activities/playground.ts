import type { MapCategory } from '../../lib/types';

export default {
  id: 'playground',
  icon: 'islands#darkBlueCircusIcon',
  label: 'Игровые площадки',
  type: 'category',
  items: [
    {
      label: 'Happy Land',
      location: [39.677479, 66.931349],
      yandexMap: 'https://yandex.uz/maps/-/CCU7mXQ~lD',
      twoGis: 'https://2gis.uz/samarkand/inside/70030076612187897/',
      instagram: 'https://www.instagram.com/happyland_samarkand/',
      facebook: 'https://www.facebook.com/happylandsamarkand/',
      phones: ['+998 (91) 700-33-23'],
      images: [
        require('./img/happy-land1.jpg'),
        require('./img/happy-land2.jpg'),
        require('./img/happy-land3.jpg'),
        require('./img/happy-land4.jpg'),
      ],
      description:
        'Игровая площадка № 1 в Самарканде. Садишься на диванчик. ' +
        'Заказываешь чай и спокойно занимаешься своими ' +
        'делами в комфорте. Или разговорами. Если ребёнок захотел поесть, то' +
        'там и пицца, и картошка фри, и бургеры, и даже более серьёзные, ' +
        'блюда вроде шашлыка, салатов и т.д. С точки зрения родителей — ' +
        'самая удобная игровая. Где не просто хоть как то просиживаешь ' +
        'время, дожидаясь пока ребёнок наиграется, а делаешь это с ' +
        'комфортом. Сама игровая очень хороша. Достаточно большая, и воздуха ' +
        'много. Правда, детей в будни не много, поэтому лучше с кем-то, хотя ' +
        'бы парой приходить, чтобы не скучно было. Также, там дешевые ' +
        'игровые автоматы по 3 тысячи жетон. Правда, выбор не большой. ' +
        'Провести здесь 5 часов — не проблема.',
    },
    {
      label: 'Crazy Park «SHAXONYA»',
      location: [39.654555, 66.956592],
      yandexMap: 'https://yandex.uz/maps/org/shaxonya/17957482993/',
      twoGis: 'https://2gis.uz/samarkand/firm/70000001079191244',
      googleMap: 'https://goo.gl/maps/3VwWSwNk8oEpu2u48',
      instagram: 'https://www.instagram.com/crazy_park_shaxonya/',
      facebook: 'https://www.facebook.com/profile.php?id=100063889126329',
      description:
        'Самая большая и разнообразная игровая в городе. Работает ' +
        'с 10 до 22. Зимой может быть прохладно.',
    },
    {
      label: 'Xan Zade Happy Baby',
      location: [39.680524, 66.932195],
      yandexMap: 'https://yandex.uz/maps/-/CCUWVMQD2B',
      twoGis: 'https://2gis.uz/samarkand/firm/70000001077122297',
      images: [
        require('./img/xanzade1.jpg'),
        require('./img/xanzade2.jpg'),
        require('./img/xanzade3.jpg'),
        require('./img/xanzade4.jpg'),
        require('./img/xanzade5.jpg'),
      ],
      instagram: 'https://www.instagram.com/happy_baby_xanzade/',
      description:
        'Небольшая игровая площадка, особенно подойдет для малышей. ' +
        'Есть стульчики для родителей, но еды нет.',
    },
    {
      label: 'Игровая площадка Pixel в Atlas',
      location: [39.658147, 66.944444],
      yandexMap: 'https://yandex.uz/maps/org/174623004020/',
      twoGis:
        'https://2gis.uz/samarkand/inside/70030076618736549/firm/70000001080105335',
      phones: ['+998 (97) 892‒00‒98'],
      description:
        'Хорошая детская площадка с возможностью присмотреть за ребенком ' +
        'сидя в неплохом, но достаточно дорогом по местным меркам ресторане.',
    },
    {
      label: 'Игровая площадка в M.Baraka',
      location: [39.658147, 66.944444],
      yandexMap: 'https://yandex.uz/maps/org/101179618695/',
      twoGis:
        'https://2gis.uz/samarkand/inside/70030076615377126/firm/70000001078338303',
      description:
        'Закрытая игровая площадка номер 2 в городе. Тоже есть удобные ' +
        'диванчики, как в Happy Land. Правда, стол между диванами, а не как ' +
        'в кафе. То есть, не так удобно общаться. Внизу Корзинка, можно ' +
        'купить воды, фруктов и ещё что-то на перекус. Если дети могут играть ' +
        'одни, то можно даже в боулинг сходить. Там же есть отличная пиццерия ' +
        'Bellissimo. Вкуснее, наверное, только в Mozzarella. Игровая чуть ' +
        'лучше чем в Happy Land. Поразнообразнее что ли. Автоматов нет, ' +
        'но есть мини аттракционы типа карусельки, рыбалки и т.д. Жирный ' +
        'минус — туалеты в виде дырки. Далеко не все дети к таким приучены, ' +
        'приходится держать. Да и не все взрослые на самом деле.',
    },
    {
      label: 'Игровая площадка в Makon Mall',
      location: [39.65523, 66.956999],
      yandexMap: 'https://yandex.uz/maps/org/50823680342/',
      twoGis: 'https://2gis.uz/samarkand/firm/70000001077785438/',
      description:
        'Небольшая игровая площадка. Ждать ребенка негде, только если дойти до ' +
        'фудкорта.',
    },
    {
      label: 'Игровая площадка Play arena в Family Park',
      location: [39.663462, 66.907895],
      yandexMap: 'https://yandex.uz/maps/org/104778732221/',
      twoGis:
        'https://2gis.uz/samarkand/inside/70030076616867075/firm/70000001076990610',
      description:
        'Площадка побольше чем в Makon Mall. Неплохой выбор ' +
        'игровых автоматов. В выходные душно и народу прессом. Ждать ребенка ' +
        'негде, только если дойти до фудкорта.',
    },
    {
      label: 'Игровая площадка в Pepperonis',
      location: [39.647643, 66.950059],
      yandexMap: 'https://yandex.uz/maps/org/pepperonis/71750904111/',
      twoGis: 'https://2gis.uz/samarkand/firm/70000001079583285',
      instagram: 'https://www.instagram.com/pepperonis_uz/',
      phones: ['+998 97 393 33 33'],
      description:
        'Это скорее кафе с небольшой игровой площадкой. Одному ребенку там ' +
        'будет скучно, но если собрать компанию, то вполне неплохое место для' +
        'игр. Меню разнообразное: суши, пицца, азиатская и европейская ' +
        'кухня, кофе. Но вкус, на мой субъективный взгляд, посредственный. ' +
        'Тем не менее, многим нравится.',
    },
    {
      label: 'Детская площадка возле SAG',
      location: [39.679291, 66.90837],
      yandexMap: 'https://yandex.uz/maps/-/CCU7mLQTTA',
      twoGis: 'https://2gis.uz/samarkand/geo/70030076619874168/',
      description:
        'Лучшая открыта детская площадка в Самарканде. Много ' +
        'разных горок, даже в холода там не бывает пусто. Правда, вокруг ' +
        'больше нет ничего, скорее всего придется туда ехать специально.',
    },
  ],
} satisfies MapCategory;
