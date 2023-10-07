import cafe from '@site/map/cafe';
import children from '@site/map/children';
import city from '@site/map/city';
import finance from '@site/map/finance';
import { MapCategory } from '@site/map/lib/types';
import market from '@site/map/market';
import transport from '@site/map/transport';

export default {
  id: '',
  label: 'Карта Самарканда',
  type: 'category',
  items: [cafe, market, finance, transport, children, city],
} satisfies MapCategory;
