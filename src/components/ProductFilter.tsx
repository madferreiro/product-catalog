import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selectProduct } from '../actions/ProductActions';
import { Link } from 'react-router-dom';
import { filterProducts } from '../services/ProductService';

const ProductFilter: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [productList, setProductList] = useState<any[]>([]);

  const dispatch = useDispatch();

  const handleProductClick = (productId: number) => {
    dispatch(selectProduct(productId));
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    filterProducts(searchTerm).then((products) => {
      setProductList(products);
    });
  }, [searchTerm]);

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
        {productList.map((product) => (

          <li onClick={() => handleProductClick(product.id)} key={product.id}>
            <Link to={`/produto/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductFilter;
