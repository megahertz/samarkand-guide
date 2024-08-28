export interface MapPlace {
  address?: string;
  description?: string;
  facebook?: string;
  googleMap?: string;
  hidden?: boolean;
  icon?: MapIcon;
  id?: string;
  instagram?: string;
  images?: Array<{ default: string }>;
  label: string;
  location?: [number, number];
  openHours?: Array<{ daysOfWeek?: string; time: string }>;
  phones?: string[];
  price?: number[];
  priceDate?: Date;
  showLabel?: boolean;
  tags?: string[];
  telegram?: string;
  telegram2?: string;
  twoGis?: string;
  video?: string;
  vkontakte?: string;
  web?: string;
  yandexMap?: string;
  youtube?: string;
}

export interface MapCategory {
  facebook?: string;
  hidden?: boolean;
  icon?: MapIcon;
  id: string;
  instagram?: string;
  items: Array<MapCategory | MapPlace>;
  label: string;
  telegram?: string;
  type: 'category';
  web?: string;
  youtube?: string;
}

export interface PlacemarkItem {
  body: string;
  id: string;
  icon: MapIcon;
  label: string;
  location: [number, number];
  showLabel: boolean;
  tags: string[];
}

export type MapItem = MapCategory | MapPlace;

export type MapIcon = `islands#${IconColor}${IconBadge}Icon`;

// https://yandex.ru/dev/maps/jsapi/doc/2.1/ref/reference/option.presetStorage.html?lang=ru
type IconColor =
  | 'black'
  | 'blue'
  | 'brown'
  | 'darkBlue'
  | 'darkGreen'
  | 'darkOrange'
  | 'gray'
  | 'green'
  | 'lightBlue'
  | 'night'
  | 'olive'
  | 'orange'
  | 'pink'
  | 'red'
  | 'violet'
  | 'yellow';

type IconBadge =
  | 'Airport'
  | 'Attention'
  | 'Auto'
  | 'Bar'
  | 'Barber'
  | 'Beach'
  | 'Bicycle'
  | 'Bicycle2'
  | 'Book'
  | 'CarWash'
  | 'Christian'
  | 'Cinema'
  | 'Circus'
  | 'Court'
  | 'Delivery'
  | 'Discount'
  | 'Dog'
  | 'Education'
  | 'EntertainmentCenter'
  | 'Factory'
  | 'Family'
  | 'Fashion'
  | 'Food'
  | 'FuelStation'
  | 'Garden'
  | 'Government'
  | 'Heart'
  | 'Home'
  | 'Hotel'
  | 'Hydro'
  | 'Info'
  | 'Laundry'
  | 'Leisure'
  | 'MassTransit'
  | 'Medical'
  | 'Money'
  | 'Mountain'
  | 'NightClub'
  | 'Observation'
  | 'Park'
  | 'Parking'
  | 'Person'
  | 'Pocket'
  | 'Pool'
  | 'Post'
  | 'Railway'
  | 'RapidTransit'
  | 'RepairShop'
  | 'Run'
  | 'Science'
  | 'Shopping'
  | 'Souvenirs'
  | 'Sport'
  | 'Star'
  | 'Theater'
  | 'Toilet'
  | 'Underpass'
  | 'Vegetation'
  | 'Video'
  | 'Waste'
  | 'WaterPark'
  | 'Waterway'
  | 'Worship'
  | 'Zoo'

  // Other
  | 'CircleDot'
  | 'Dot';
