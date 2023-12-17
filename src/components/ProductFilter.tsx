import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectProduct } from '../actions/productActions';
import { Link } from 'react-router-dom';
import products from '../data/products.json';

const ProductFilter: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const dispatch = useDispatch();

  const handleProductClick = (productId: number) => {
    dispatch(selectProduct(productId));
  };
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

          <li>
            <Link to={`/produto/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductFilter;
