import { RootState } from "../store";

export const selectAllProducts = (state: RootState) => state.products.all;
export const selectPopularProducts = (state: RootState) => state.products.popular;
