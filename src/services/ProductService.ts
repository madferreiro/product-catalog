// src/services/product.service.ts
import products from '../data/products.json';

export const getAllProducts = async () => {
    return products;
};

export const getProductById = async (productId: number) => {
    return products.find((product) => product.id === productId);
};

export const filterProducts = async (searchTerm: string) => {
    return products.filter(
        (product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
};