import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products.json';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === parseInt(id || "0"));

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div>
      <h2>Detalhes do Produto</h2>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
