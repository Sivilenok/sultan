import { Global } from "@emotion/react";
import { globalStyles } from "./ui/globalStyles";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import storeProducts from "./services/products.json"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAllProducts, setPopularProducts } from "./store";


export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAllProducts(storeProducts.products))
    dispatch(setPopularProducts(storeProducts.products.filter(item => item.popular)))
  }, [])

  return (
    <>
      <Global styles={globalStyles} />
      <RouterProvider router={router} />
    </>
  );
};
