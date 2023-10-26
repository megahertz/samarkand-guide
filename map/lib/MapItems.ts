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

  copyParentProperties(parent: MapCategory, child: MapPlace): MapPlace {
    return {
      ...child,
      facebook: child.facebook || parent.facebook,
      instagram: child.instagram || parent.instagram,
      telegram: child.telegram || parent.telegram,
      web: child.web || parent.web,
      youtube: child.youtube || parent.youtube,
    };
  }

  getItemById(id: string): MapItem | null {
    return findItemById(this.rootItem, id);
  }

  getItemsByTag(tag: string): MapItem[] {
    return filterItems(this.rootItem, (item: MapPlace) =>
      Boolean(item.tags?.includes(tag)),
    );
  }

  getPlacesById(
    id: string,
    { nested = true }: { nested?: boolean } = {},
  ): MapPlace[] {
    const item = this.getItemById(id);

    if (item) {
      if (isPlace(item)) {
        return [item as MapPlace];
      }

      if (!nested) {
        return (item as MapCategory).items
          .filter(
            (child: MapItem) => (child as MapCategory).type !== 'category',
          )
          .map((child: MapItem) => this.copyParentProperties(item, child));
      }

      return filterItems(item, (child: MapItem) => isPlace(child)).map(
        (child: MapItem) => this.copyParentProperties(item, child),
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
