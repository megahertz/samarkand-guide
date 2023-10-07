import activities from './activities';
import kindergarten from './kindergarten';
import school from './school';
import type { MapCategory } from '../lib/types';

export default {
  id: 'children',
  items: [kindergarten, school, activities],
  icon: 'islands#darkBlueFamilyIcon',
  label: 'Дети',
  type: 'category',
} satisfies MapCategory;
