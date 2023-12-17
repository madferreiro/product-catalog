// src/actions/productActions.ts
export const selectProduct = (productId: number) => {
    return {
      type: 'SELECT_PRODUCT',
      payload: productId,
    };
  };
  