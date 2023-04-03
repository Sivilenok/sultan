import { Global } from "@emotion/react";
import { globalStyles } from "./ui/globalStyles";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { setAllProducts, useAppDispatch } from "./store";
import { useEffect } from "react";
import products from "./services/products.json";

export const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() =>{
    dispatch(setAllProducts(products));
  }, [dispatch, products]);

  return (
    <>
      <Global styles={globalStyles} />
      <RouterProvider router={router} />
    </>
  );
};
