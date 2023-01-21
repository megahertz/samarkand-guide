import { describe, expect, it } from 'vitest';
import {
  filterItems,
  findItemById,
  getChildPlaces,
  isPlace,
  mapItemToPlacemarkItems,
  mapItemToSidebarItem,
  placemarkMatchesUrl,
} from '../helpers';
import { MapCategory } from '../types';

describe('map helpers', () => {
  describe('filterItems', () => {
    it('should return only items according to the predicate', () => {
      const found = filterItems(rootItem, ({ id }) => id === 'osh');
      expect(found).toMatchObject([{ label: 'Плов' }]);
    });
  });

  describe('findItemById', () => {
    it('should return a single item with the id', () => {
      const item = findItemById(rootItem, 'osh');
      expect(item).toMatchObject({ label: 'Плов' });
    });
  });

  describe('getChildPlaces', () => {
    it('should return all items including deep', () => {
      const osh = findItemById(rootItem, 'osh');
      const items = getChildPlaces(osh as MapCategory);
      expect(items).toMatchObject([
        { label: 'Axmadjon Lux Osh' },
        { label: 'Mahallaosh' },
      ]);
    });
  });

  describe('isPlace', () => {
    it('should return true for place', () => {
      expect(isPlace({ label: '' })).toBe(true);
    });

    it('should return false for category', () => {
      expect(isPlace({ label: '', type: 'category' })).toBe(false);
    });
  });

  describe('mapItemToSidebarItem', () => {
    it('should return hierarchy', () => {
      const osh = findItemById(rootItem, 'osh');
      const sidebar = mapItemToSidebarItem(osh);
      expect(sidebar).toMatchObject({
        type: 'category',
        label: 'Плов',
        items: [{ label: 'Axmadjon Lux Osh' }, { label: 'Mahallaosh' }],
      });
    });
  });

  describe('mapItemToPlacemarkItems', () => {
    it('should return hierarchy', () => {
      const osh = findItemById(rootItem, 'osh');
      const placemarks = mapItemToPlacemarkItems(osh);
      expect(placemarks).toMatchObject([
        { label: 'Axmadjon Lux Osh' },
        { label: 'Mahallaosh' },
      ]);
    });
  });

  describe('placemarkMatchesUrl', () => {
    const item = findItemById(rootItem, 'osh');
    const [axmadjon] = mapItemToPlacemarkItems(item);

    it('returns true when id matches url', () => {
      expect(placemarkMatchesUrl(axmadjon, 'osh/axmadjon')).toBe(true);
    });

    it('returns true when tag matches url', () => {
      expect(placemarkMatchesUrl(axmadjon, 'test/osh')).toBe(true);
    });
  });
});

const rootItem: MapCategory = {
  id: '',
  label: 'Карта Самарканда',
  type: 'category',
  items: [
    {
      id: 'cafe',
      items: [
        {
          id: 'uzbek',
          label: 'Узбекская кухня',
          type: 'category',
          items: [
            {
              id: 'osh',
              label: 'Плов',
              type: 'category',
              items: [
                {
                  id: 'axmadjon',
                  label: 'Axmadjon Lux Osh',
                  location: [39.643081, 66.928084],
                  phones: ['+998 91 536 99 39'],
                  yandexMap:
                    'https://yandex.uz/maps/org/axmadjon_lux_osh/191720320054/',
                  description:
                    'Наверное, лучший плов в Самарканде. Люкс-плов с фирменной подачей',
                },
                {
                  label: 'Mahallaosh',
                  location: [39.666694, 66.945986],
                  yandexMap:
                    'https://yandex.uz/maps/org/mahallaosh/69305080656',
                  description:
                    'Одно из немногих мест где плов можно поесть вечером. Готовят 2 раза в день - в 11:30 и 18:00',
                },
              ],
            },
            {
              label: 'Ismail Sofrasi',
              location: [39.682183, 66.924769],
              yandexMap: 'https://yandex.uz/maps/org/26116258263',
              description:
                'Лучшее сочетание цены/качества вокруг, все по домашнему. Всегда отличный плов. Самса трех видов.',
              tags: ['osh'],
            },
          ],
        },
      ],
      icon: 'islands#orangeFoodIcon',
      label: 'Кафе и рестораны',
      type: 'category',
    },
    {
      id: 'children',
      items: [
        {
          label: 'Golden Kids Sattepo',
          location: [39.642423, 66.915968],
          price: [2000000],
          phones: ['+998915510505', '+998979142444'],
          description:
            'Основной филиал переполнен, поэтому новых детей берут во ' +
            'второй в Саттепо. С охраной, внутренним закрытым двором и бассейном ' +
            'на летнее время. Пятиразовое питание, 10 кружков: гимнастика ' +
            '(карате для мальчиков), ментальная математика, английский, ' +
            'шахматы/шашки, логопед, дефектолог, химическая лаборатория.',
          yandexMap: 'https://yandex.uz/maps/org/golden_kids_sattepo/',
          instagram: 'https://www.instagram.com/golden_kids_sattepo/',
        },
        {
          label: 'Wunderkind',
          price: [1800800],
          description: 'Большая территория, хорошее питание, логопед.',
          instagram: 'https://www.instagram.com/wunderkind_samarkand/',
        },
      ],
      icon: 'islands#darkBlueFamilyIcon',
      label: 'Дети',
      type: 'category',
    },
  ],
};
