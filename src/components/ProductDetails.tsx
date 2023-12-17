import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getProductById } from '../services/product.service';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const selectedProductId = useSelector((state: any) => state.selectedProductId);
  const [product, setProduct] = useState<any>(undefined);
  useEffect(() => {
    getProductById(parseInt(id || "")).then((productFound) => {
      setProduct(productFound);
    });
  }, [id]);

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div>
      <h2>Detalhes do Produto</h2>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      {selectedProductId && selectedProductId === product.id && <p>Selected!</p>}
    </div>
  );
};

export default ProductDetails;
