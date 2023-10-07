import { PropSidebarItem } from '@docusaurus/plugin-content-docs';
import {
  filterItems,
  findItemById,
  getItemIcon,
  isPlace,
  mapItemToPlacemarkItems,
  mapItemToSidebarItem,
} from './helpers';
import { MapCategory, MapItem, MapPlace, PlacemarkItem } from './types';

export default class MapItems {
  constructor(private rootItem: MapCategory) {}

  getItemById(id: string): MapItem | null {
    return findItemById(this.rootItem, id);
  }

  getItemsByTag(tag: string): MapItem[] {
    return filterItems(this.rootItem, (item: MapPlace) =>
      Boolean(item.tags?.includes(tag)),
    );
  }

  getPlacesById(id: string): MapPlace[] {
    const item = this.getItemById(id);

    if (item) {
      if (isPlace(item)) {
        return [item as MapPlace];
      }

      return (
        filterItems(item, (child: MapItem) => isPlace(child))
          // Some properties could be copied from the parent
          .map((child: MapPlace) => {
            return {
              facebook: item.facebook,
              instagram: item.instagram,
              telegram: item.telegram,
              web: item.web,
              youtube: item.youtube,
              ...child,
            };
          })
      );
    }

    const taggedItems = this.getItemsByTag(id);
    if (taggedItems.length > 0) {
      return taggedItems;
    }

    throw new Error(`Can't find place #${id}`);
  }

  getPlacemarksByIdOrTag(idOrTag: string): PlacemarkItem[] {
    const parentIcon = getItemIcon(this.rootItem, idOrTag);

    const placemarks = [];
    const places = [
      ...this.getPlacesById(idOrTag),
      ...this.getItemsByTag(idOrTag),
    ];
    for (const place of places) {
      placemarks.push(...mapItemToPlacemarkItems(place, { parentIcon }));
    }

    return placemarks;
  }

  getSidebarItems(currentUrl = 'none'): PropSidebarItem[] {
    return this.rootItem.items.map((child) =>
      mapItemToSidebarItem(child, '#', currentUrl),
    );
  }

  getPlacemarkItems(): PlacemarkItem[] {
    return mapItemToPlacemarkItems(this.rootItem);
  }
}
