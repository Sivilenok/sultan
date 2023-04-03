import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../services/products';

interface ProductsState {
  all: Product[];
  popular: Product[];
}

const initialState: ProductsState = {
  all: [],
  popular: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setAllProducts(state, action) {
      state.all = action.payload;
    },
    setPopularProducts(state, action) {
        state.popular = action.payload.filter((product: Product) => product.popular === true);
      },      
  },
});

export const { setAllProducts, setPopularProducts } = productsSlice.actions;

export default productsSlice.reducer;
