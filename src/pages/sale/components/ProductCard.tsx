import React, { useState } from 'react';
import CartIcon from './CartIcon';
import { useCart } from '../other/CartContext';
import { formatUzsPrice } from '../other/utils';
import { Product } from '../other/types';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false);
  const cart = useCart();

  const isInCart = cart.items.includes(product.id);
  const imageSrc = imageUrl(product.image);
  const discountPercentage = product.newPrice
    ? Math.round(((product.price - product.newPrice) / product.price) * 100)
    : 0;

  function onToggleCart() {
    if (cart.items.includes(product.id)) {
      cart.remove(product.id);
    } else {
      cart.add(product.id);
    }
  }

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.imageContainer}>
        {imageSrc && (
          <img
            src={imageSrc}
            alt={product.name}
            className={`${styles.image} zoom-img ${isHovered ? styles.imageHovered : ''}`}
          />
        )}

        {product.newPrice && (
          <div className={styles.discount}>-{discountPercentage}%</div>
        )}

        <div className={styles.priceContainer}>
          {product.newPrice && (
            <p className={styles.oldPrice}>{formatUzsPrice(product.price)}</p>
          )}
          <p className={styles.price}>{formatUzsPrice(product.price)}</p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{product.name}</h3>
        </div>

        <p className={styles.description}>{product.description}</p>

        <div className={styles.footer}>
          <button
            aria-label={isInCart ? 'Убрать из корзины' : 'Добавить в корзину'}
            className={`${styles.cartButton} ${isInCart ? styles.cartButtonRemove : ''}`}
            onClick={onToggleCart}
            title={isInCart ? 'Убрать из корзины' : 'Добавить в корзину'}
            type="button"
          >
            <CartIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

function imageUrl(image: unknown): string {
  if (!image) {
    return '';
  }

  if (typeof image === 'string') {
    return image;
  }

  if (typeof image === 'object' && 'default' in image) {
    return (image as { default: string }).default;
  }

  return '';
}
