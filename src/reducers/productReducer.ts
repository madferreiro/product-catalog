// src/reducers/productReducer.ts
interface ProductState {
  selectedProductId: number | null;
}

const initialState: ProductState = {
  selectedProductId: null,
};

const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SELECT_PRODUCT':
      return {
        ...state,
        selectedProductId: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
