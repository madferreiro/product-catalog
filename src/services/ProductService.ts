// src/services/product.service.ts
import products from '../data/products.json';
import { Product } from '../Types/ProductTypes';


export function getAllProducts(): Promise<Product[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 50);
    });
}

export function getProductById(productId: number): Promise<Product | undefined> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((product) => product.id === productId));
        }, 50);
    });
}

export function filterProducts(searchTerm: string): Promise<Product[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                products.filter(
                    (product) =>
                        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        product.category.toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        }, 50);
    });
}