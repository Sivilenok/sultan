import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "../components";
import {
  BasketPage,
  CatalogPage,
  MainPage,
  MakeOrderPage,
  ProductDetailsPage,
} from "../pages";
import { ROUTE } from "./routes";
import { setAllProducts } from "../store";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={ROUTE.HOME} element={<Layout />}>
        <Route path={ROUTE.CATALOG} element={<CatalogPage />} />
        <Route
          path={`${ROUTE.CATALOG}/${ROUTE.PRODUCT_CARD}`}
          element={<ProductDetailsPage />}
        />
        <Route path={ROUTE.PRODUCT_CARD} element={<ProductDetailsPage />} />
        <Route
          path={`/${ROUTE.BASKET}/${ROUTE.PRODUCT_CARD}`}
          element={<ProductDetailsPage />}
        />
        <Route index element={<MainPage/>} />
        <Route path={ROUTE.BASKET} element={<BasketPage />} />
        <Route
          path={`/${ROUTE.BASKET}/${ROUTE.MAKE_ORDER}`}
          element={<MakeOrderPage />}
        />
        <Route
          path={`/${ROUTE.BASKET}/${ROUTE.MAKE_ORDER}/${ROUTE.PRODUCT_CARD}`} 
          element={<ProductDetailsPage />}
        />
      </Route>
    </>
  )
);
