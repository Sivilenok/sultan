import { useState } from "react";
import {
  Banner,
  BestGoods,
  Contacts,
  ProductCategories,
  ProductList,
  Sale,
} from "../../components";
import Wrapper from "../../components/Wrapper/Wrapper";
import { Product } from "../../services/products";
import { useAppSelector } from "../../store";
import styles from "./styles.module.scss";

interface IProps {
  products: {
    all: Product[];
  };
}

export const MainPage = () => {
  const { all: products } = useAppSelector((state) => state.products);
  
  return (
    <main className={styles.main}>
      <Banner isBreadcrumbHidden={true} />
      <Wrapper>
        <h1 className={styles.title}>
          <span style={{ color: "#FFC85E", fontWeight: "bold" }}>
            Акционные
          </span>
          &nbsp;
          <span style={{ color: "#111111" }}>товары</span>
        </h1>
        <ProductList products={products} className={styles.list} />
        <ProductCategories />
        <Sale />
        <BestGoods />
        <Contacts />
      </Wrapper>
    </main>
  );
};
