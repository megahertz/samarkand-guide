import type { MapCategory } from '../lib/types';
import bar from './bar';
import desserts from './desserts';
import euro from './euro';
import fastfood from './fastfood';
import hookah from './hookah';
import uzbek from './uzbek';

export default {
  id: 'cafe',
  items: [uzbek, euro, fastfood, desserts, bar, hookah],
  icon: 'islands#orangeFoodIcon',
  label: 'Кафе и рестораны',
  type: 'category',
} satisfies MapCategory;
