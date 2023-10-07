import type { MapCategory } from '../lib/types';
import bazar from './bazar';
import grocery from './grocery';
import household from './household';
import malls from './mall';

export default {
  id: 'market',
  items: [grocery, malls, household, bazar],
  icon: 'islands#blueShoppingIcon',
  label: 'Торговля',
  type: 'category',
} satisfies MapCategory;
