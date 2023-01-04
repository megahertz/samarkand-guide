import kindergartens from '@site/map/children/kindergartens';
import { MapCategory } from '@site/src/pages/map/lib/types';

export default {
  id: 'children',
  items: [kindergartens],
  icon: 'islands#darkBlueFamilyIcon',
  label: 'Дети',
  type: 'category',
} as MapCategory;
