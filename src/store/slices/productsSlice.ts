import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../services/products";

interface ProductsState {
  all: Product[];
  popular: Product[];
  cart: Product[];
  sortBy: "name" | "price";
}

interface FilterPayload {
  minPrice: number;
  maxPrice: number;
}

const initialState: ProductsState = {
  all: [],
  popular: [],
  cart: [],
  sortBy: "name",
};

export const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    setAllProducts: (state, action) => {
      state.all = action.payload;
    },
    setPopularProducts: (state, action) => {
      state.popular = action.payload;
    },
    addCartProduct: (state, action) => {
      const findItem = state.cart.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem?.count && findItem.count++;
      } else {
        state.all.push({
          ...action.payload,
          count: 1,
        });
      }
    },
    removeCartProduct: (state, action) => {},
    sortProducts: (state, action) => {
      state.sortBy = action.payload;
      state.all.sort((a, b) => {
        if (state.sortBy === "name") {
          return a.name.localeCompare(b.name);
        } else {
          return a.price - b.price;
        }
      });
    },
    filterProductsByPrice: (state, action: PayloadAction<FilterPayload>) => {
      const { minPrice, maxPrice } = action.payload;
      state.all = state.all.filter((product) => {
        return product.price >= minPrice && product.price <= maxPrice;
      });
    },
  },
});

export const {
  setAllProducts,
  setPopularProducts,
  addCartProduct,
  filterProductsByPrice,
} = productsSlice.actions;
export default productsSlice.reducer;
