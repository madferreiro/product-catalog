import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selectProduct } from '../actions/ProductActions';
import { Link } from 'react-router-dom';
import { filterProducts } from '../services/ProductService';
import { Grid } from '@mui/material';
import ProductItem from './ProductItem';

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
      <Grid container spacing={2}>
        {productList.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductItem product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductFilter;
