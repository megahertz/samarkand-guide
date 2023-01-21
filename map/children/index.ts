import kindergarten from '@site/map/children/kindergarten';
import school from '@site/map/children/school';
import { MapCategory } from '@site/map/lib/types';

export default {
  id: 'children',
  items: [kindergarten, school],
  icon: 'islands#darkBlueFamilyIcon',
  label: 'Дети',
  type: 'category',
} as MapCategory;
