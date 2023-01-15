import household from '@site/map/market/household';
import { MapCategory } from '@site/src/pages/map/lib/types';
import malls from './malls';

export default {
  id: 'market',
  items: [malls, household],
  icon: 'islands#blueShoppingIcon',
  label: 'Торговля',
  type: 'category',
} as MapCategory;
