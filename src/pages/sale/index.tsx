import React from 'react';
import ProductGrid from './components/ProductGrid';
import ShoppingCart from './components/ShoppingCart';
import SaleLayout from './components/SaleLayout';
import { products } from './components/products';

export default function SalePage() {
  return (
    <SaleLayout>
      <ShoppingCart />
      <ProductGrid products={products} />
    </SaleLayout>
  );
}
