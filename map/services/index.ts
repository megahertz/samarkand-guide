import type { MapCategory } from '../lib/types';
import coworking from './coworking';
import finance from './finance';
import medicine from './medicine';
import transport from './transport';

export default {
  id: 'services',
  label: 'Услуги',
  type: 'category',
  items: [medicine, finance, transport, coworking],
} satisfies MapCategory;
