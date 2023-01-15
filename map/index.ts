import { PropSidebarItem } from '@docusaurus/plugin-content-docs';
import {
  mapItemToPlacemarkItems,
  mapItemToSidebarItem,
} from '@site/src/pages/map/lib/helpers';
import { MapCategory, PlacemarkItem } from '@site/src/pages/map/lib/types';
import cafe from './cafe';
import children from './children';
import communication from './communication';
import finance from './finance';
import market from './market';
import transport from './transport';

const rootItem: MapCategory = {
  id: '',
  label: 'Карта Самарканда',
  type: 'category',
  items: [cafe, market, finance, communication, transport, children],
};

export function getSidebarItems(currentUrl = 'none'): PropSidebarItem[] {
  return rootItem.items.map((child) =>
    mapItemToSidebarItem(child, '#', currentUrl),
  );
}

export function getPlacemarkItems(): PlacemarkItem[] {
  return mapItemToPlacemarkItems(rootItem);
}
