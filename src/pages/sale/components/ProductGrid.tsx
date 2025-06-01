import mediumZoom from 'medium-zoom';
import React, { useEffect } from 'react';
import { Product } from '@site/src/pages/sale/components/other/types';
import ProductCard from './ProductCard';
import styles from './ProductGrid.module.css';

export default function ProductGrid({ products }: { products: Product[] }) {
  useEffect(() => {
    mediumZoom('.zoom-img');
  }, []);

  return (
    <div className={styles.grid}>
      {products
        .filter((p) => !p.isSold)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
}
