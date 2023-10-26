import MapItems from '@site/map/lib/MapItems';
import { describe, expect, it } from 'vitest';
import { rootItem } from './fixture';

describe(MapItems.name, () => {
  describe(MapItems.prototype.getItemById.name, () => {
    it('should find nested item', () => {
      const map = new MapItems(rootItem);
      const placemarks = map.getItemById('grocery');
      expect(placemarks).toMatchObject({ id: 'grocery' });
    });

    it('should find deep nested item', () => {
      const map = new MapItems(rootItem);
      const placemarks = map.getItemById('korzinka-motrid');
      expect(placemarks).toMatchObject({ id: 'korzinka-motrid' });
    });
  });

  describe(MapItems.prototype.getPlacesById.name, () => {
    it('should find nested item', () => {
      const map = new MapItems(rootItem);
      const placemarks = map.getPlacesById('grocery');
      expect(placemarks).toMatchObject([{ id: 'korzinka-motrid' }]);
    });

    it('should find direct item', () => {
      const map = new MapItems(rootItem);
      const placemarks = map.getPlacesById('uzbek', { nested: false });
      expect(placemarks).toMatchObject([{ id: 'ismail' }]);
    });
  });

  describe(MapItems.prototype.getPlacemarksByIdOrTag.name, () => {
    it('should find nested item', () => {
      const map = new MapItems(rootItem);
      const placemarks = map.getPlacemarksByIdOrTag('grocery');
      expect(placemarks).toMatchObject([{ id: 'korzinka-motrid' }]);
    });
  });
});
