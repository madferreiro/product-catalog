import React, { useState } from 'react';
import products from '../data/products.json';

const ProductFilter: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Filtrar Produtos</h2>
      <input
        type="text"
        placeholder="Pesquisar por nome ou categoria"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductFilter;
