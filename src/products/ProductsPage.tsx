import React from 'react';
import { MOCK_PRODUCTS } from './MockProducts'

function ProductsPage() {
  return (
    <>
      <h1>Products</h1>
      <pre>{JSON.stringify(MOCK_PRODUCTS, null, ' ')}</pre>
    </>
  );
}

export default ProductsPage;
