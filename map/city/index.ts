import type { MapCategory } from '@site/map/lib/types';
import communication from './communication';
import toponyms from './toponyms';
import utilities from './utilities';

export default {
  id: 'city',
  items: [toponyms, communication, utilities],
  icon: 'islands#orangeFoodIcon',
  label: 'Город',
  type: 'category',
} satisfies MapCategory;
