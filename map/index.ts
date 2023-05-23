import type { PropSidebarItem } from '@docusaurus/plugin-content-docs';
import city from '@site/map/city';
import {
  filterItems,
  findItemById,
  getItemIcon,
  isPlace,
  mapItemToPlacemarkItems,
  mapItemToSidebarItem,
} from '@site/map/lib/helpers';
import type {
  MapCategory,
  MapItem,
  MapPlace,
  PlacemarkItem,
} from '@site/map/lib/types';
import cafe from './cafe';
import children from './children';
import finance from './finance';
import market from './market';
import transport from './transport';

const rootItem: MapCategory = {
  id: '',
  label: 'Карта Самарканда',
  type: 'category',
  items: [cafe, market, finance, transport, children, city],
};

export function getItemById(id: string): MapItem | null {
  return findItemById(rootItem, id);
}

export function getItemsByTag(tag: string): MapItem[] {
  return filterItems(rootItem, (item: MapPlace) => item.tags?.includes(tag));
}

export function getPlacesById(id: string): MapPlace[] {
  const item = getItemById(id);

  if (item) {
    if (isPlace(item)) {
      return [item as MapPlace];
    }

    return (item as MapCategory).items.filter(
      (child: MapCategory) => child.type !== 'category',
    );
  }

  const taggedItems = getItemsByTag(id);
  if (taggedItems.length > 0) {
    return taggedItems;
  }

  throw new Error(`Can't find place #${id}`);
}

export function getPlacemarksByIdOrTag(idOrTag): PlacemarkItem[] {
  const parentIcon = getItemIcon(rootItem, idOrTag);

  const placemarks = [];
  const places = [...getPlacesById(idOrTag), ...getItemsByTag(idOrTag)];
  for (const place of places) {
    placemarks.push(...mapItemToPlacemarkItems(place, { parentIcon }));
  }

  return placemarks;
}

export function getSidebarItems(currentUrl = 'none'): PropSidebarItem[] {
  return rootItem.items.map((child) =>
    mapItemToSidebarItem(child, '#', currentUrl),
  );
}

export function getPlacemarkItems(): PlacemarkItem[] {
  return mapItemToPlacemarkItems(rootItem);
}
