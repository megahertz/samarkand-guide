import cafe from './cafe';
import children from './children';
import market from './market';
import type { MapCategory } from './lib/types';
import city from './samarkand';
import services from './services';

export default {
  id: '',
  label: 'Карта Самарканда',
  type: 'category',
  items: [city, cafe, services, market, children],
} satisfies MapCategory;
