import other from '@site/map/other';
import city from './city';
import finance from './finance';
import type { MapCategory } from './lib/types';
import market from './market';
import transport from './transport';
import children from './children';
import cafe from './cafe';

export default {
  id: '',
  label: 'Карта Самарканда',
  type: 'category',
  items: [cafe, market, finance, transport, children, city, other],
} satisfies MapCategory;
