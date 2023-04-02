import { Global } from "@emotion/react";
import { globalStyles } from "./ui/globalStyles";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { selectAllProducts, setAllProducts, useAppDispatch, useAppSelector } from "./store";
import { useEffect } from "react";

export const App = () => {
  const products = useAppSelector(selectAllProducts);
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
