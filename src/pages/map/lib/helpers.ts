import { PropSidebarItem } from '@docusaurus/plugin-content-docs';
import {
  MapCategory,
  MapIcon,
  MapItem,
  MapObject,
  PlacemarkItem,
} from '@site/src/pages/map/lib/types';

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

  const object = item as MapObject;
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

  const object = item as MapObject;
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

  const [lastPath] = url.split('/');
  if (placemark.tags.includes(lastPath)) {
    return true;
  }

  return false;
}
