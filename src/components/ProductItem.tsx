// src/components/ProductItem.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { selectProduct } from '../actions/ProductActions';
import { Product } from '../Types/ProductTypes';

interface ProductItemProps {
    product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
    const dispatch = useDispatch();

    const handleProductClick = (productId: number) => {
        dispatch(selectProduct(productId));
    };

    return (
        <Card onClick={() => handleProductClick(product.id)} style={{ cursor: 'pointer' }}>
            <CardMedia component="img" height="140" image={product.thumbnail} alt={product.name} />
            <CardContent>
                <Link to={`/produto/${product.id}`}>
                    <Typography variant="h5" component="div">
                        {product.name}
                    </Typography>
                </Link>
                <Typography variant="body2" color="text.secondary">
                    Price: ${product.price.toFixed(2)}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProductItem;
