import toponyms from '@site/map/city/toponyms';
import { MapCategory } from '@site/map/lib/types';

export default {
  id: 'city',
  items: [toponyms],
  icon: 'islands#orangeFoodIcon',
  label: 'Город',
  type: 'category',
} as MapCategory;
