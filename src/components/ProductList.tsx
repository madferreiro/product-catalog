import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products.json';

const ProductList: React.FC = () => {
  return (
    <div>
      <h2>Lista de Produtos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/produto/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
