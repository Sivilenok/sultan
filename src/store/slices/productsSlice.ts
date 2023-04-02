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
        console.log('action.payload:', action.payload);
      state.all = action.payload;
    },
    setPopularProducts(state, action) {
        state.popular = action.payload.filter((product: Product) => product.isPopular === true);
      },      
  },
});

export const { setAllProducts, setPopularProducts } = productsSlice.actions;

export default productsSlice.reducer;
