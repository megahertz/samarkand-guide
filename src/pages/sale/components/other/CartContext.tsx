import React, {
  createContext,
  type ReactNode,
  useContext,
  useState,
} from 'react';
import { getProductById } from '../products';
import type { Cart } from './types';

const defaultCart = { items: [] as number[] } as Cart;

const CartContext = createContext(defaultCart);

export default CartContext;

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<Cart>({
    items: loadItems(),
    add,
    remove,
  });

  function add(id: number) {
    setState((prevState) => {
      // eslint-disable-next-line unicorn/prefer-spread
      const items = Array.from(new Set([...prevState.items, id]));
      saveItems(items);
      return { add, items, remove };
    });
  }

  function remove(id: number) {
    setState((prevState) => {
      const items = prevState.items.filter((item) => item !== id);
      saveItems(items);
      return { add, items, remove };
    });
  }

  return <CartContext.Provider value={state}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
}

function saveItems(items: number[]) {
  if (typeof window === 'object') {
    window.localStorage.setItem('cart', JSON.stringify(items));
  }
}

function loadItems(): number[] {
  if (typeof window === 'object') {
    const data = window.localStorage.getItem('cart') || '[]';
    try {
      const items = JSON.parse(data);
      if (Array.isArray(items)) {
        return items.filter((item) => getProductById(item));
      }
    } catch {
      return [];
    }
  }
  return [];
}
