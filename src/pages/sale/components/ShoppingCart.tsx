import { formatUzsPrice } from '@site/src/pages/sale/components/other/utils';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useCart } from '@site/src/pages/sale/components/other/CartContext';
import type { Product } from '@site/src/pages/sale/components/other/types';
import { getProductById } from './products';
import CartIcon from './CartIcon';
import styles from './ShoppingCart.module.css';

export default function ShoppingCart() {
  const [el, setEl] = React.useState<HTMLDivElement | null>(null);
  const cart = useCart();

  function onClick() {
    const selectedProducts = cart.items
      .map((id) => getProductById(id))
      .filter(Boolean) as Product[];

    if (selectedProducts.length === 0) {
      // eslint-disable-next-line no-alert
      window.alert('Ничего не выбрано');
      return;
    }

    const names = selectedProducts
      .map((product) => {
        const price = formatUzsPrice(
          product.newPrice ?? product.price,
          ' сумов',
        );
        return `${product.name} за ${price}`;
      })
      .join('\n• ');
    const firstLane = 'Здравствуйте. Хочу у вас купить';
    const text =
      selectedProducts.length === 1
        ? `${firstLane} ${names}`
        : `${firstLane}:\n• ${names}`;

    const url = `https://t.me/prolko?text=${encodeURIComponent(text)}`;

    window.open(url, '_blank');
  }

  useEffect(() => {
    const root = getRootContainer();

    if (root && el !== root) {
      setEl(root);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!el) {
    return null;
  }

  return createPortal(
    <button className={styles.cartButton} onClick={onClick} type="button">
      <CartIcon />
      <span className={styles.cartCount}>{cart.items.length}</span>
      <style>
        {`
          .navbar__items {
            justify-content: space-between;
            margin-right: 20px;
          }
        `}
      </style>
    </button>,
    el,
  );
}

function getRootContainer() {
  const brand = document.getElementsByClassName('navbar__brand')[0];
  if (!brand || !brand.parentNode) {
    return undefined;
  }

  const container = brand.parentNode;
  const div = document.createElement('div');
  container.append(div);

  return div;
}
