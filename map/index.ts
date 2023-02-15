import { PropSidebarItem } from '@docusaurus/plugin-content-docs';
import city from '@site/map/city';
import {
  findItemById,
  getChildPlaces,
  isPlace,
  mapItemToPlacemarkItems,
  mapItemToSidebarItem,
} from '@site/map/lib/helpers';
import {
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

export function getPlacesById(id: string): MapPlace[] {
  const item = getItemById(id);

  if (isPlace(item)) {
    return [item as MapPlace];
  }

  return (item as MapCategory).items.filter(
    (child: MapCategory) => child.type !== 'category',
  );
}

export function getSidebarItems(currentUrl = 'none'): PropSidebarItem[] {
  return rootItem.items.map((child) =>
    mapItemToSidebarItem(child, '#', currentUrl),
  );
}

export function getPlacemarkItems(): PlacemarkItem[] {
  return mapItemToPlacemarkItems(rootItem);
}
