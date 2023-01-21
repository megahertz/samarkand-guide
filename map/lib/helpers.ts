import { PropSidebarItem } from '@docusaurus/plugin-content-docs';
import {
  MapCategory,
  MapIcon,
  MapItem,
  MapPlace,
  PlacemarkItem,
} from '@site/map/lib/types';

export function filterItems(
  rootItem: MapItem,
  predicate: (item: MapItem, url: string, ids: string[]) => boolean,
): MapItem[] {
  const found: MapItem[] = [];

  traverse(rootItem, (item, url, ids) => {
    if (predicate(item, url, ids)) {
      found.push(item);
    }
  });

  return found;
}

export function findItemById(rootItem: MapItem, id: string): MapItem {
  const [found] = filterItems(rootItem, (i) => i.id === id || i.label === id);
  return found || null;
}

export function getChildPlaces(rootItem: MapCategory): MapPlace[] {
  const places: MapPlace[] = [];
  traverse(rootItem, (item) => {
    if (isPlace(item)) {
      places.push(item);
    }
  });

  return places;
}

export function isPlace(item: MapItem): item is MapPlace {
  return (item as MapCategory).type !== 'category';
}

export function mapItemToSidebarItem(
  item: MapItem,
  parentUrl = '#',
  currentUrl = 'none',
): PropSidebarItem {
  const href = `${parentUrl}/${item.id || encodeURIComponent(item.label)}`;

  if ((item as MapCategory).type === 'category') {
    const category = item as MapCategory;
    return {
      collapsed: !currentUrl.startsWith(href),
      collapsible: true,
      items: category.items?.map((child) =>
        mapItemToSidebarItem(child, href, currentUrl),
      ),
      label: category.label,
      type: 'category',
      href,
    };
  }

  const object = item as MapPlace;
  return {
    href,
    label: object.label,
    type: 'link',
  };
}

export function mapItemToPlacemarkItems(
  item: MapItem,
  {
    parentIcon,
    parentIds,
  }: { parentIcon?: MapIcon; parentIds?: string[] } = {},
): PlacemarkItem[] {
  const ids = [
    ...(parentIds || []),
    item.id ?? encodeURIComponent(item.label),
  ].filter(Boolean);

  const icon = item.icon || parentIcon;

  if ((item as MapCategory).type === 'category') {
    const category = item as MapCategory;

    const children = [];
    for (const child of category.items) {
      children.push(
        ...mapItemToPlacemarkItems(child, { parentIcon: icon, parentIds: ids }),
      );
    }

    return children;
  }

  const object = item as MapPlace;
  return [
    {
      description: object.description,
      icon,
      id: ids.join('/'),
      label: object.label,
      location: object.location,
      tags: [...ids, ...(object.tags || [])],
    },
  ];
}

export function placemarkMatchesUrl(
  placemark: PlacemarkItem,
  url: string,
): boolean {
  if (placemark.id.startsWith(url)) {
    return true;
  }

  const lastPath = url.split('/').pop();
  // noinspection RedundantIfStatementJS
  if (placemark.tags.includes(lastPath)) {
    return true;
  }

  return false;
}

export function traverse(
  item: MapItem,
  callback: (item: MapItem, url: string, ids: string[]) => boolean | void,
  parentIds = [],
) {
  const ids = [...parentIds, item.id ?? encodeURIComponent(item.label)];
  const url = ids.join('/');

  if (callback(item, url, ids) === false) {
    return;
  }

  for (const child of (item as MapCategory).items || []) {
    traverse(child, callback, ids);
  }
}
