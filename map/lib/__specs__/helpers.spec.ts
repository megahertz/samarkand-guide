import { describe, expect, it } from 'vitest';
import { rootItem } from './fixture';
import {
  filterItems,
  findItemById,
  getChildPlaces,
  isPlace,
  mapItemToPlacemarkItems,
  mapItemToSidebarItem,
  placemarkMatchesUrl,
} from '../helpers';
import type { MapCategory, MapItem } from '../types';

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
      const osh = findItemById(rootItem, 'osh') as MapItem;
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
      const osh = findItemById(rootItem, 'osh') as MapItem;
      const placemarks = mapItemToPlacemarkItems(osh);
      expect(placemarks).toMatchObject([
        { label: 'Axmadjon Lux Osh' },
        { label: 'Mahallaosh' },
      ]);
    });
  });

  describe('placemarkMatchesUrl', () => {
    const item = findItemById(rootItem, 'osh') as MapItem;
    const [axmadjon] = mapItemToPlacemarkItems(item);

    it('returns true when id matches url', () => {
      expect(placemarkMatchesUrl(axmadjon, 'osh/axmadjon')).toBe(true);
    });

    it('returns true when tag matches url', () => {
      expect(placemarkMatchesUrl(axmadjon, 'test/osh')).toBe(true);
    });
  });
});
