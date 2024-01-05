import type { MapCategory } from '../lib/types';
import asian from './asian';
import bar from './bar';
import euro from './euro';
import fastfood from './fastfood';
import hookah from './hookah';
import uzbek from './uzbek';

export default {
  id: 'cafe',
  items: [uzbek, euro, asian, fastfood, bar, hookah],
  icon: 'islands#orangeFoodIcon',
  label: 'Кафе и рестораны',
  type: 'category',
} satisfies MapCategory;
