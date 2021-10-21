import React from 'react';
import Showcase from '../showcase/showcase';
import ShowcaseImage from '../showcase/showcase-image';
import ShowcaseDetail from '../showcase/showcase-detail';
import ShowcaseBadges from '../showcase/showcase-badge';
import ProductPrice from '../showcase/showcase-product-price';
import ProductCargo from '../showcase/showcase-product-cargo';
import ProductName from '../showcase/showcase-product-name';

export default function ProductCard({ product }) {
  return (
    <Showcase key={product.productId}>
      <ShowcaseBadges product={product} />
      <ShowcaseImage image={product.image} />
      <ShowcaseDetail>
        <ProductName name={product.name} />
        <ProductPrice price={product.price} />
        <ProductCargo cargo={product.cargo} />
      </ShowcaseDetail>
    </Showcase>
  );
}
