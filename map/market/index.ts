import bazar from '@site/map/market/bazar';
import household from '@site/map/market/household';
import type { MapCategory } from '@site/map/lib/types';
import malls from './mall';

export default {
  id: 'market',
  items: [malls, household, bazar],
  icon: 'islands#blueShoppingIcon',
  label: 'Торговля',
  type: 'category',
} satisfies MapCategory;
