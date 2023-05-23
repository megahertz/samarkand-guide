import type { PropSidebarItem } from '@docusaurus/plugin-content-docs';
import type {
  MapCategory,
  MapIcon,
  MapItem,
  MapPlace,
  PlacemarkItem,
} from '@site/map/lib/types';
import { renderPlace } from '@site/src/components/PlaceInfo/PlaceBody';

export function filterItems(
  rootItem: MapItem,
  predicate: (item: MapItem, url: string, ids: string[]) => boolean,
): MapItem[] {
  const found: MapItem[] = [];

  traverse(rootItem, (item, { url, ids }) => {
    if (predicate(item, url, ids)) {
      found.push(item);
    }
  });

  return found;
}

export function findItemById(rootItem: MapItem, id: string): MapItem | null {
  if (!id) {
    throw new Error('findItemById requires a non empty id to be set');
  }

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

export function getItemIcon(rootItem: MapCategory, itemId: string): MapIcon {
  let selectedIcon: MapIcon = null;
  traverse(rootItem, (item, { icon }) => {
    if (item.id === itemId) {
      selectedIcon = icon;
    }
  });

  return selectedIcon;
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

    const children: PlacemarkItem[] = [];
    for (const child of category.items) {
      children.push(
        ...mapItemToPlacemarkItems(child, { parentIcon: icon, parentIds: ids }),
      );
    }

    return children.filter((c) => c.location);
  }

  const place = item as MapPlace;
  return [
    {
      body: renderPlace(place),
      icon,
      id: ids.join('/'),
      label: place.label,
      location: place.location,
      showLabel: Boolean(place.showLabel),
      tags: [...ids, ...(place.tags || [])],
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
  callback: (
    item: MapItem,
    props: { icon: MapIcon; ids: string[]; url: string },
  ) => boolean | void,
  {
    parentIds = [],
    icon = null,
  }: { parentIds?: string[]; icon?: MapIcon } = {},
) {
  const ids = [...parentIds, item.id ?? encodeURIComponent(item.label)];
  const url = ids.join('/');
  const currentIcon = item.icon || icon;

  if (callback(item, { icon: currentIcon, ids, url }) === false) {
    return;
  }

  for (const child of (item as MapCategory).items || []) {
    traverse(child, callback, { parentIds: ids, icon: currentIcon });
  }
}
