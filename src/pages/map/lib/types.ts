export interface MapObject {
  description?: string;
  icon?: MapIcon;
  id?: string;
  label: string;
  location: [number, number];
  tags?: string[];
}

export interface MapCategory {
  icon?: MapIcon;
  id: string;
  items: Array<MapCategory | MapObject>;
  label: string;
  type: 'category';
}

export interface PlacemarkItem {
  id: string;
  icon: MapIcon;
  label: string;
  location: [number, number];
  tags: string[];
  description: string;
}

export type MapItem = MapCategory | MapObject;

export type MapIcon = `islands#${IconColor}${IconBadge}Icon`;

// https://yandex.ru/dev/maps/jsapi/doc/2.1/ref/reference/option.presetStorage.html?lang=ru
type IconColor = 'orange' | 'darkBlue';

type IconBadge = 'Food' | 'Family';
